import React from "react";
import "../styles/about.css";
import { useEffect } from "react";
export const AboutLandingPage = () => {

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
              src="/img/landing-page.svg"
              alt="Importancia de una landing page"
              className="about-image"
            />
          </div>

          {/* Texto explicativo */}
          <div className="about-text">
            <h2>¿Por qué una Landing Page es esencial en publicidad digital?</h2>
            <h3>
              Una buena landing page no solo atrae visitas: educa, convence y convierte.
            </h3>

            <p>
              Cuando hacés campañas en Google Ads, Facebook o Instagram, estás pagando por cada clic o visita. Si esa persona llega a una página genérica o confusa, tenés más chances de perder ese dinero sin resultados concretos.
            </p>

            <h4>¿Qué hace una landing page?</h4>
            <ul>
              <li>Prepara al cliente antes de una llamada o contacto.</li>
              <li>Responde las preguntas más frecuentes (precio, beneficios, funcionamiento).</li>
              <li>Segmenta a quienes realmente están interesados.</li>
              <li>Disminuye el tiempo de atención telefónica.</li>
              <li>Mejora la tasa de conversión del presupuesto invertido.</li>
            </ul>

            <h4>¿Qué pasa si no tengo landing?</h4>
            <p>
              Sin una página que filtre y eduque, cada llamada telefónica que recibís puede ser más larga, menos clara y con menor probabilidad de venta. Esto eleva tu costo operativo y desperdicia el presupuesto en leads poco calificados.
            </p>

            <h4>Las llamadas son caras</h4>
            <ul>
              <li>Una llamada sin preparación dura más.</li>
              <li>No todos los que llaman están listos para comprar.</li>
              <li>Solo un porcentaje mínimo de leads sin landing convierte.</li>
              <li>La inversión publicitaria se diluye si no hay contenido intermedio.</li>
            </ul>

            <h4>Beneficios directos de tener una landing:</h4>
            <ul>
              <li>Más ventas con el mismo presupuesto.</li>
              <li>Clientes más informados y decididos.</li>
              <li>Mejor experiencia para el usuario.</li>
              <li>Datos claros para medir resultados (botones, formularios, clics).</li>
            </ul>

            <p>
              En <strong>Toledo Consultora IT</strong> creamos landing pages optimizadas para campañas de alto rendimiento. Si querés mejorar el ROI de tu publicidad, te diseñamos la estrategia completa.
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