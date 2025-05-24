import React from "react";
import "../styles/about.css";
import { useEffect } from "react";
export const AboutPosicionamiento = () => {

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
              src="/img/posicionamiento-web.svg"
              alt="Importancia del posicionamiento en Google"
              className="about-image"
            />
          </div>

          {/* Contenido informativo */}
          <div className="about-text">
            <h2>Posicionamiento en Google: Ser visible o ser invisible</h2>
            <h3>
              Estar presente en los resultados de búsqueda es vital para que te encuentren. Si no estás, tu competencia lo está.
            </h3>

            <h4>¿Por qué es tan importante aparecer en Google?</h4>
            <ul>
              <li>El 93% de las experiencias online comienzan en un buscador.</li>
              <li>El usuario promedio no pasa de la primera página de resultados.</li>
              <li>Google se convirtió en el nuevo "punto de referencia" para elegir marcas.</li>
              <li>Si no aparecés, tus potenciales clientes no sabrán que existís.</li>
            </ul>

            <h4>Google Maps y Google Business Profile</h4>
            <p>
              Estas herramientas gratuitas de Google permiten que las personas te encuentren con búsquedas locales como “servicio cerca mío” o “empresa en [ciudad]”.
            </p>
            <ul>
              <li>Brindás dirección, horario, reseñas y contacto en segundos.</li>
              <li>Transmitís confianza y reputación.</li>
              <li>Facilitás que te contacten por teléfono o WhatsApp directamente.</li>
              <li>Podés destacar ofertas, eventos o novedades de tu negocio.</li>
            </ul>

            <h4>¿Qué pasa si no estás en Google?</h4>
            <ul>
              <li>Tu negocio es invisible para quienes no te conocen por nombre.</li>
              <li>Perdés ventas frente a competidores mejor posicionados.</li>
              <li>No recibís visitas físicas ni virtuales por búsquedas espontáneas.</li>
              <li>Tu marca parece menos profesional o actualizada.</li>
            </ul>

            <h4>Beneficios de trabajar tu posicionamiento:</h4>
            <ul>
              <li>Mayor tráfico sin pagar por clics (SEO).</li>
              <li>Más leads y consultas calificadas.</li>
              <li>Mejora la confianza y autoridad de tu marca.</li>
              <li>Resultados sostenibles a mediano y largo plazo.</li>
            </ul>

            <p>
              En <strong>Toledo Consultora IT</strong> optimizamos tu presencia en buscadores, registramos tu empresa en Google Business, configuramos Google Maps y creamos estrategias SEO para que tus clientes te encuentren.
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
