import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { articleSEOConfig, generateArticleSchema, generateFAQSchema } from "../utils/articleSEOConfig";
import "../styles/about.css";

export const AboutOptimizacion = () => {
  const seo = articleSEOConfig.optimizacion;
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
        <link rel="canonical" href="https://toledoconsultora.com/about-optimizacion" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <article id="about" className="about-section" itemScope itemType="https://schema.org/Article">
        <div className="about-container">
          <div className="about-columns">
            <div className="about-image-wrapper">
              <img src="/img/optimizacion.svg" alt="Optimización web profesional" className="about-image" itemProp="image" loading="lazy" />
            </div>
            <div className="about-text">
              <meta itemProp="headline" content={seo.title} />
              <meta itemProp="author" content={seo.author} />
              <h2 itemProp="name">Optimización Web: Más que solo velocidad</h2>
              <h3>Una web bien optimizada no solo carga rápido: también posiciona mejor, convierte más y es accesible para todos.</h3>
              <div className="article-section">
                <h4>¿Por qué es clave optimizar tu sitio?</h4>
                <p>Google evalúa muchos factores para posicionar una página. No se trata solo del contenido: también importan la estructura, el rendimiento técnico, la accesibilidad y el cumplimiento de buenas prácticas.</p>
              </div>
              <div className="article-section">
                <h4>Elementos esenciales de la optimización:</h4>
                <ul>
                  <li><strong>Accesibilidad:</strong> Que cualquier persona pueda navegar tu sitio.</li>
                  <li><strong>Rendimiento:</strong> Carga rápida y lazy loading de imágenes.</li>
                  <li><strong>SEO técnico:</strong> Encabezados bien usados, meta tags correctos.</li>
                  <li><strong>Buenas prácticas:</strong> Semántica HTML5, evitar errores.</li>
                </ul>
              </div>
              <div className="article-section">
                <h4>¿Qué pasa si tu web no está optimizada?</h4>
                <ul>
                  <li>Perdés posicionamiento en buscadores.</li>
                  <li>Los usuarios abandonan por lentitud.</li>
                  <li>Tu marca transmite poca profesionalidad.</li>
                  <li>Podés ser penalizado en Google.</li>
                </ul>
              </div>
              <div className="article-section">
                <h4>Beneficios de una web optimizada:</h4>
                <ul>
                  <li>Mejor posicionamiento (SEO).</li>
                  <li>Más conversiones y ventas.</li>
                  <li>Menor tasa de rebote.</li>
                  <li>Mayor confianza en tu negocio.</li>
                </ul>
              </div>
              <div className="article-closing">
                <p>En <strong>Toledo Consultora IT</strong> auditamos y optimizamos tu sitio web para que cumpla con los más altos estándares.</p>
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
export default AboutOptimizacion;
