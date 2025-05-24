import React from "react";
import "../styles/about.css";
import { useEffect } from "react";

export const AboutRedesSociales = () => {

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
              src="/img/redes-sociales.svg"
              alt="Importancia de las redes sociales para los negocios"
              className="about-image"
            />
          </div>

          {/* Contenido informativo */}
          <div className="about-text">
            <h2>Redes Sociales: tu marca en la conversación</h2>
            <h3>
              Tener presencia en redes sociales no es opcional: es donde tus clientes pasan su tiempo y buscan referencias.
            </h3>

            <h4>¿Por qué estar en redes sociales?</h4>
            <ul>
              <li>Fortalece tu marca y la vuelve reconocible.</li>
              <li>Generás comunidad y fidelidad con tus seguidores.</li>
              <li>Podés responder dudas y recibir consultas rápidamente.</li>
              <li>Mostrás productos, servicios y casos reales de uso.</li>
              <li>Es una vía directa de captación de leads y ventas.</li>
            </ul>

            <h4>Principales redes y sus usos:</h4>
            <ul>
              <li><strong>Instagram:</strong> ideal para mostrar productos, portfolio y testimonios.</li>
              <li><strong>Facebook:</strong> buena para eventos, reseñas y atención al cliente.</li>
              <li><strong>WhatsApp Business:</strong> canal rápido de contacto y venta.</li>
              <li><strong>LinkedIn:</strong> presencia profesional y posicionamiento B2B.</li>
              <li><strong>YouTube / Reels / TikTok:</strong> videos de valor, procesos y detrás de escena.</li>
            </ul>

            <h4>Beneficios de una estrategia de redes activa:</h4>
            <ul>
              <li>Mayor alcance orgánico y viralidad.</li>
              <li>Prueba social a través de seguidores y comentarios.</li>
              <li>Tráfico a tu sitio web o tienda.</li>
              <li>Facilidad para lanzar campañas y promociones.</li>
            </ul>

            <h4>¿Qué pasa si no tenés redes o no las usás bien?</h4>
            <ul>
              <li>Tu marca puede parecer desactualizada o poco confiable.</li>
              <li>Perdés oportunidades de contacto directo con nuevos clientes.</li>
              <li>No podés mostrar la experiencia de tus usuarios ni tus casos de éxito.</li>
            </ul>

            <p>
              En <strong>Toledo Consultora IT</strong> diseñamos y ejecutamos estrategias de contenido, campañas y presencia digital para que tus redes sociales trabajen para vos todos los días.
            </p>
          </div>
        </div>
      </div>

       <div className="social-links">
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
