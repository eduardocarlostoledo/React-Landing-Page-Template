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

          const renderTarget = entry.target.querySelector(`[data-elfsight-app-id="${appId}"]`);

          const tryRender = () => {
            if (window.elfWidgetPlatform && renderTarget) {
              try {
                window.elfWidgetPlatform.renderElement(renderTarget);
              } catch (err) {
                // fail silently
                console.warn('Elfsight render error', err);
              }
            }
          };

          // Si ya está cargado, renderizar inmediatamente
          if (window.elfWidgetPlatform) {
            tryRender();
          } else {
            // Si no, inyectar el script de Elfsight una sola vez y al cargar renderizar
            if (!window._elfsightScriptLoading) {
              window._elfsightScriptLoading = true;
              const s = document.createElement('script');
              s.src = 'https://static.elfsight.com/platform/platform.js';
              s.defer = true;
              s.onload = function() {
                tryRender();
              };
              s.onerror = function() {
                console.warn('Failed to load Elfsight platform script');
              };
              document.body.appendChild(s);
            } else {
              // Si ya se está cargando, esperar un pequeño intervalo para intentar renderizar
              const interval = setInterval(() => {
                if (window.elfWidgetPlatform) {
                  clearInterval(interval);
                  tryRender();
                }
              }, 300);
              // timeout por seguridad
              setTimeout(() => clearInterval(interval), 10000);
            }
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

