import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { articleSEOConfig, generateArticleSchema, generateFAQSchema } from "../utils/articleSEOConfig";
import "../styles/about.css";

export const AboutGoogleBussiness = () => {
  const seo = articleSEOConfig.googleBusiness;
  const articleSchema = generateArticleSchema(seo);
  const faqSchema = generateFAQSchema(seo.FAQs);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
        <meta name="author" content={seo.author} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={seo.ogTitle} />
        <meta property="og:description" content={seo.ogDescription} />
        <meta property="og:image" content={seo.imageUrl} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://toledoconsultora.com/about-google-business" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <article id="about" className="about-section" itemScope itemType="https://schema.org/Article">
        <div className="about-container">
          <div className="about-columns">
            <div className="about-image-wrapper">
              <img src="/img/google-business.svg" alt="Google Business Profile" className="about-image" itemProp="image" loading="lazy" />
            </div>
            <div className="about-text">
              <meta itemProp="headline" content={seo.title} />
              <meta itemProp="author" content={seo.author} />
              <h2 itemProp="name">Google Business Profile: Tu presencia local en Google</h2>
              <h3>Aparecer en Google Maps y en la búsqueda local es clave para que tus clientes cercanos te encuentren.</h3>
              <p>Google Business Profile es la herramienta gratuita de Google que te permite gestionar tu presencia online, mostrar tu ubicación, horarios, reseñas y conectar con clientes locales.</p>
              <div className="article-section">
                <h4>¿Qué es Google Business Profile?</h4>
                <ul>
                  <li>Tu vitrina digital en Google Maps.</li>
                  <li>Aparecés en búsquedas locales como "plomero cerca mío".</li>
                  <li>Mostrás fotos, horarios, teléfono y ubicación.</li>
                  <li>Recibís y gestionás reseñas de clientes.</li>
                </ul>
              </div>
              <div className="article-section">
                <h4>Beneficios de tener Google Business actualizado:</h4>
                <ul>
                  <li>Más visibilidad en búsquedas locales.</li>
                  <li>Más llamadas y contactos de clientes.</li>
                  <li>Mejora la confianza y reputación online.</li>
                  <li>Es gratis y lo controlas vos.</li>
                </ul>
              </div>
              <div className="article-section">
                <h4>Qué incluir en tu perfil:</h4>
                <ul>
                  <li>Fotos de calidad de tu negocio y productos.</li>
                  <li>Descripción clara de tus servicios.</li>
                  <li>Horarios de atención precisos.</li>
                  <li>Teléfono y email de contacto.</li>
                  <li>Responder a las reseñas de clientes.</li>
                </ul>
              </div>
              <div className="article-closing">
                <p>En <strong>Toledo Consultora IT</strong> creamos y optimizamos tu Google Business Profile para que aparezcas primero en búsquedas locales.</p>
              </div>
            </div>
          </div>
          <div className="article-faqs-section">
            <h3>Preguntas Frecuentes</h3>
            <div className="faqs-container">
              {seo.FAQs.map((faq, idx) => (<details key={idx} className="faq-item"><summary>{faq.question}</summary><p>{faq.answer}</p></details>))}
            </div>
          </div>
          <div className="article-cta-wrapper">
            <a href="https://wa.me/5493764221063" target="_blank" rel="noopener noreferrer" className="article-cta-button">Contá tu idea la llevamos a cabo <i className="fab fa-whatsapp"></i></a>
          </div>
        </div>
        <div itemScope itemType="https://schema.org/Organization" style={{ display: 'none' }}>
          <span itemProp="name">Toledo Consultora IT</span>
          <link itemProp="url" href="https://toledoconsultora.com" />
        </div>
      </article>
    </>
  );
};
export default AboutGoogleBussiness;
