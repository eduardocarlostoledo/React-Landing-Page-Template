import React from "react";
import { Helmet } from "react-helmet";
import { articleSEOConfig, generateArticleSchema, generateFAQSchema } from "../utils/articleSEOConfig";
import { useEffect } from "react";
import "../styles/about.css";

export const AboutReseñas = () => {
  const seo = articleSEOConfig.reseñas;
  const articleSchema = generateArticleSchema(seo);
  const faqSchema = generateFAQSchema(seo.FAQs);

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
              src="/img/reseñas-clientes.svg"
              alt="Importancia de las reseñas en redes sociales"
              className="about-image"
            />
          </div>

          {/* Contenido informativo */}
          <div className="about-text">
            <h2>La importancia de las reseñas y los comentarios positivos</h2>
            <h3>
              Las opiniones de tus clientes son tu mejor carta de presentación. Refuerzan la confianza y multiplican tus oportunidades de venta.
            </h3>

            <h4>¿Por qué las reseñas son tan valiosas?</h4>
            <ul>
              <li>El 90% de los usuarios lee opiniones antes de comprar.</li>
              <li>Un perfil con reseñas positivas genera más clics y consultas.</li>
              <li>Actúan como prueba social: si otros lo recomiendan, debe ser bueno.</li>
              <li>Ayudan al posicionamiento local (SEO) en Google Maps y Business.</li>
            </ul>

            <h4>¿Dónde deberías tener reseñas?</h4>
            <ul>
              <li><strong>Google Business:</strong> clave para búsquedas locales.</li>
              <li><strong>Facebook:</strong> ideal para validar la atención y cercanía.</li>
              <li><strong>Instagram:</strong> a través de historias destacadas o comentarios.</li>
              <li><strong>WhatsApp:</strong> capturá testimonios en texto o audio para reutilizarlos.</li>
            </ul>

            <h4>Consejos para fomentar buenas reseñas:</h4>
            <ul>
              <li>Pedilas después de cada venta o servicio con un mensaje amable.</li>
              <li>Responé todos los comentarios (positivos o negativos).</li>
              <li>Mostrá las reseñas destacadas en tu sitio web.</li>
              <li>Usá testimonios reales como parte de tu estrategia de contenidos.</li>
            </ul>

            <h4>¿Qué pasa si no tenés reseñas?</h4>
            <ul>
              <li>Tu marca puede parecer nueva, poco confiable o sin trayectoria.</li>
              <li>Perdés visibilidad frente a competidores con opiniones activas.</li>
              <li>Menos clics, menos mensajes, menos ventas.</li>
            </ul>

            <p>
              En <strong>Toledo Consultora IT</strong> te ayudamos a implementar estrategias para recopilar reseñas, mejorar tu reputación digital y convertir testimonios en activos de venta.
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
