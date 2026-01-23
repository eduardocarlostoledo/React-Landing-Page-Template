import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { articleSEOConfig, generateArticleSchema, generateFAQSchema } from "../utils/articleSEOConfig";
import "../styles/about.css";

export const AboutPosicionamiento = () => {
  const seo = articleSEOConfig.posicionamiento || articleSEOConfig.optimizacion;
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
              <h2 itemProp="name">Posicionamiento Web, SEO Local y Visibilidad en Maps</h2>
              <h3>Posicionar tu negocio implica estrategia técnica, contenido y presencia local — ahora también optimizada para motores de IA.</h3>
              <div className="article-section">
                <h4>¿Por qué es clave el posicionamiento?</h4>
                <p>Los buscadores y plataformas de IA valoran señales técnicas, contextuales y locales. No solo importa el contenido: la estructura del sitio, la velocidad, los datos estructurados y la reputación local (reseñas y mapas) determinan la visibilidad.</p>
              </div>
              <div className="article-section">
                <h4>Elementos clave para posicionamiento:</h4>
                <ul>
                  <li><strong>On-Page:</strong> Contenido optimizado, títulos, meta tags y estructura semántica.</li>
                  <li><strong>SEO técnico:</strong> Rendimiento, indexabilidad, canonicales y sitemap.</li>
                  <li><strong>Datos Estructurados:</strong> JSON-LD para artículos, FAQ, LocalBusiness y productos.</li>
                  <li><strong>Local / Maps:</strong> Perfil en Google Business, NAP consistente y reseñas verificadas.</li>
                </ul>
              </div>
              <div className="article-section">
                <h4>Bots, crawlers y cómo piensan los motores</h4>
                <p>Los crawlers (bots) recorren tu sitio siguiendo enlaces y analizan señales técnicas y de contenido. Debes facilitar su trabajo: sitemap actualizado, robots.txt correcto y evitar bloqueos innecesarios.</p>
                <ul>
                  <li><strong>Sitemap XML:</strong> Mantener rutas indexables y priorizadas.</li>
                  <li><strong>Robots:</strong> Permitir recursos críticos (CSS/JS) para renderizado.</li>
                  <li><strong>Server-side rendering / Prerender:</strong> Para contenido crítico y compatibilidad con crawlers.</li>
                </ul>
              </div>
              <div className="article-section">
                <h4>IA y búsqueda semántica</h4>
                <p>Los motores basados en IA (modelos de lenguaje y buscadores semánticos) priorizan la intención y la calidad contextual. Esto implica:</p>
                <ul>
                  <li>Contenido centrado en intención de búsqueda y entidades.</li>
                  <li>Uso de schema para explicar relaciones (Organization, LocalBusiness, Service).</li>
                  <li>Resúmenes claros y preguntas frecuentes que contesten consultas en lenguaje natural.</li>
                </ul>
              </div>
              <div className="article-section">
                <h4>Boosts y tácticas para acelerar resultados</h4>
                <p>Las "boosts" son acciones tácticas para impulsar visibilidad rápido sin sacrificar calidad:</p>
                <ul>
                  <li>Campañas locales (Google Ads + geo-targeting) para ganar tracción.</li>
                  <li>Optimización de listings en Maps y directorios locales.</li>
                  <li>Microcontenidos y FAQ para captar fragmentos destacados (featured snippets).</li>
                </ul>
              </div>
              <div className="article-section">
                <h4>Riesgos de no optimizar correctamente</h4>
                <ul>
                  <li>Pérdida de visibilidad en búsquedas y asistentes AI.</li>
                  <li>Menor conversión por experiencia de usuario deficiente.</li>
                  <li>Problemas de indexación que impiden aparecer en búsquedas relevantes.</li>
                </ul>
              </div>
              <div className="article-section">
                <h4>Beneficios de una estrategia de posicionamiento moderna</h4>
                <ul>
                  <li>Mayor visibilidad en SERP y en asistentes conversacionales.</li>
                  <li>Mejor rendimiento en Google Maps y búsquedas locales.</li>
                  <li>Mayor tasa de conversión por tráfico cualificado.</li>
                  <li>Preparación para búsquedas impulsadas por IA.</li>
                </ul>
              </div>
              <div className="article-closing">
                <p>En <strong>Toledo Consultora IT</strong> auditamos y optimizamos tu presencia digital: desde el crawling y el SEO técnico hasta la estrategia para aparecer en Google Maps y en respuestas de IA.</p>
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
export default AboutPosicionamiento;
