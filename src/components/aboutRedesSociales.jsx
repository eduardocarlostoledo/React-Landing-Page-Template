import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { articleSEOConfig, generateArticleSchema, generateFAQSchema } from "../utils/articleSEOConfig";
import "../styles/about.css";

export const AboutRedesSociales = () => {
  const seo = articleSEOConfig.redes;
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
        <link rel="canonical" href="https://toledoconsultora.com/about-redes-sociales" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <article id="about" className="about-section" itemScope itemType="https://schema.org/Article">
        <div className="about-container">
          <div className="about-columns">
            <div className="about-image-wrapper">
              <img src="/img/redes-sociales.svg" alt="Importancia de redes sociales" className="about-image" itemProp="image" loading="lazy" />
            </div>
            <div className="about-text">
              <meta itemProp="headline" content={seo.title} />
              <meta itemProp="author" content={seo.author} />
              <h2 itemProp="name">Redes Sociales: tu marca en la conversación</h2>
              <h3>Tener presencia en redes sociales es donde tus clientes pasan su tiempo y buscan referencias.</h3>
              <div className="article-section">
                <h4>¿Por qué estar en redes sociales?</h4>
                <ul>
                  <li>Fortalece tu marca y la vuelve reconocible.</li>
                  <li>Generás comunidad y fidelidad con seguidores.</li>
                  <li>Podés responder dudas rápidamente.</li>
                  <li>Mostrás productos y casos de éxito.</li>
                  <li>Es captación directa de leads y ventas.</li>
                </ul>
              </div>
              <div className="article-section">
                <h4>Principales redes y sus usos:</h4>
                <ul>
                  <li><strong>Instagram:</strong> productos, portfolio y testimonios.</li>
                  <li><strong>Facebook:</strong> eventos, reseñas y atención.</li>
                  <li><strong>WhatsApp Business:</strong> contacto y venta rápido.</li>
                  <li><strong>LinkedIn:</strong> presencia profesional B2B.</li>
                  <li><strong>YouTube/Reels/TikTok:</strong> videos de valor.</li>
                </ul>
              </div>
              <div className="article-section">
                <h4>Beneficios de una estrategia activa:</h4>
                <ul>
                  <li>Mayor alcance orgánico y viralidad.</li>
                  <li>Prueba social a través de seguidores.</li>
                  <li>Tráfico a tu sitio web.</li>
                  <li>Facilidad para lanzar campañas.</li>
                </ul>
              </div>
              <div className="article-closing">
                <p>En <strong>Toledo Consultora IT</strong> diseñamos estrategias de contenido para que tus redes sociales trabajen para vos.</p>
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
export default AboutRedesSociales;
