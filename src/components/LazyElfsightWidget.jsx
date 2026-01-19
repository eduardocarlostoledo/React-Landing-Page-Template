import React, { useEffect, useRef, useState } from 'react';

/**
 * LazyElfsightWidget Component
 * 
 * Carga widgets de Elfsight solo cuando están visibles en el viewport.
 * Esto reduce el JS bloqueante en la carga inicial.
 * 
 * OPTIMIZACIONES:
 * - Intersection Observer para detectar visibilidad
 * - Carga diferida del script solo si es necesario
 * - Limpia listeners después de montaje
 * - Soporta múltiples widgets
 */

export const LazyElfsightWidget = ({ appId, className = "", style = {} }) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isLoaded) {
          setIsVisible(true);
          setIsLoaded(true);
          
          // Si el script ya está cargado globalmente
          if (window.elfWidgetPlatform) {
            window.elfWidgetPlatform.renderElement(entry.target.querySelector(`[data-elfsight-app-id="${appId}"]`));
          }
          
          // Dejar de observar después de que se cargue
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '50px', // Comenzar a cargar 50px antes de ser visible
        threshold: 0.01
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [appId, isLoaded]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ minHeight: '100px', ...style }}
    >
      {isVisible && (
        <div
          className={`elfsight-app-${appId}`}
          data-elfsight-app-id={appId}
          data-elfsight-app-lazy
        />
      )}
      {!isVisible && (
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          minHeight: '100px',
          color: '#999',
          fontSize: '14px'
        }}>
          Cargando reseñas...
        </div>
      )}
    </div>
  );
};
