import React from "react";
import "../styles/about.css";
import { useEffect } from "react";

export const AboutOptimizacion = () => {
        useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, []);

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-columns">
          {/* Imagen ilustrativa */}
          <div className="about-image-wrapper">
            <img
              src="/img/optimizacion.svg"
              alt="Optimización web profesional"
              className="about-image"
            />
          </div>

          {/* Contenido informativo */}
          <div className="about-text">
            <h2>Optimización Web: Más que solo velocidad</h2>
            <h3>
              Una web bien optimizada no solo carga rápido: también posiciona mejor, convierte más y es accesible para todos.
            </h3>

            <h4>¿Por qué es clave optimizar tu sitio?</h4>
            <p>
              Google evalúa muchos factores para posicionar una página. No se trata solo del contenido: también importan la estructura, el rendimiento técnico, la accesibilidad y el cumplimiento de buenas prácticas.
            </p>

            <h4>Elementos esenciales de la optimización:</h4>
            <ul>
              <li><strong>Accesibilidad:</strong> Que cualquier persona (incluso con discapacidad visual o motriz) pueda navegar y entender tu sitio.</li>
              <li><strong>Rendimiento:</strong> Carga rápida, lazy loading de imágenes, minimización de scripts y recursos bien comprimidos.</li>
              <li><strong>SEO técnico:</strong> Encabezados bien usados, uso correcto de meta tags, sitemap, robots.txt, redirecciones limpias.</li>
              <li><strong>Buenas prácticas:</strong> Semántica HTML5, ARIA roles, evitar errores de consola, evitar código innecesario o repetido.</li>
            </ul>

            <h4>¿Qué pasa si tu web no está optimizada?</h4>
            <ul>
              <li>Perdés posicionamiento en buscadores.</li>
              <li>Los usuarios abandonan por lentitud o mala experiencia.</li>
              <li>Tu marca transmite poca profesionalidad.</li>
              <li>Podés ser penalizado en Google Core Web Vitals.</li>
            </ul>

            <h4>Beneficios de una web optimizada:</h4>
            <ul>
              <li>Mejor posicionamiento (SEO).</li>
              <li>Más conversiones y ventas.</li>
              <li>Menor tasa de rebote.</li>
              <li>Accesibilidad universal (cumplimiento WCAG).</li>
              <li>Mayor confianza en tu negocio.</li>
            </ul>

            <p>
              En <strong>Toledo Consultora IT</strong> auditamos, optimizamos y elevamos la calidad técnica de tu sitio web para que cumpla con los más altos estándares y se convierta en tu mejor vendedor online.
            </p>
          </div>
        </div>
      </div><div className="social-links">
          <a
            href="https://wa.me/5493764221063"
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp"
          >    Contá tu idea la llevamos a cabo {" 👉 "}
             {"  "} <i  style={{  color: "green" }} className="fab fa-whatsapp"></i>
          </a>
          </div>

    </section>
  );
};
