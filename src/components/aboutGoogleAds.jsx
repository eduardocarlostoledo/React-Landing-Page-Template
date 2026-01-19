import React from "react";
import { Helmet } from "react-helmet";
import { articleSEOConfig, generateArticleSchema, generateFAQSchema } from "../utils/articleSEOConfig";
import "../styles/about.css";

export const AboutGoogleAds = () => {
  const seo = articleSEOConfig.googleAds;
  const articleSchema = generateArticleSchema(seo);
  const faqSchema = generateFAQSchema(seo.FAQs);

  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
        <meta name="author" content={seo.author} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph - ChatGPT & Social Media */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={seo.ogTitle} />
        <meta property="og:description" content={seo.ogDescription} />
        <meta property="og:image" content={seo.imageUrl} />
        <meta property="og:url" content="https://toledoconsultora.com/about-google-ads" />
        
        {/* Twitter Card - Bing & DeepSeek */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.ogTitle} />
        <meta name="twitter:description" content={seo.ogDescription} />
        
        {/* AI-Friendly */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="theme-color" content="#00205b" />
        
        {/* Article Metadata */}
        <meta name="article:author" content={seo.author} />
        <meta name="article:published_time" content={new Date().toISOString()} />
        <meta name="article:modified_time" content={new Date().toISOString()} />
        
        {/* Canonical */}
        <link rel="canonical" href="https://toledoconsultora.com/about-google-ads" />
        
        {/* Schema Markup */}
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <article id="about" className="about-section" itemScope itemType="https://schema.org/Article">
        <div className="about-container">
          <div className="about-columns">
            <div className="about-image-wrapper">
              <img
                src="/img/google-ads.webp"
                alt="Campañas en Google Ads con Toledo Consultora"
                className="about-image"
                itemProp="image"
                loading="lazy"
              />
            </div>

            <div className="about-text">
              <meta itemProp="headline" content={seo.title} />
              <meta itemProp="description" content={seo.description} />
              <meta itemProp="author" content={seo.author} />
              
              <h2 itemProp="name">Publicidad en Google Ads</h2>
              <h3>Guía completa para entender cómo funciona, qué tipos de campañas existen y cómo aprovecharlas.</h3>

              <div className="article-section">
                <h4>¿Qué es Google Ads?</h4>
                <p>
                  Es la plataforma de publicidad paga de Google que permite mostrar anuncios en los resultados de búsqueda, sitios asociados, YouTube y más. Ideal para atraer tráfico inmediato y segmentado.
                </p>
              </div>

              <div className="article-section">
                <h4>¿Cuáles son los costos?</h4>
                <ul>
                  <li>Funciona por subasta (no hay tarifa fija).</li>
                  <li>El anunciante establece un presupuesto diario o mensual.</li>
                  <li>Se paga por clic (CPC), visualización o conversión.</li>
                  <li>El CPC puede variar según la competencia del rubro.</li>
                </ul>
              </div>

              <div className="article-section">
                <h4>Tipos de campañas:</h4>
                <ul>
                  <li><strong>Búsqueda:</strong> Anuncios en resultados de Google.</li>
                  <li><strong>Display:</strong> Banners en sitios asociados.</li>
                  <li><strong>YouTube:</strong> Videos antes o durante la reproducción.</li>
                  <li><strong>Shopping:</strong> Para ecommerce y productos físicos.</li>
                  <li><strong>Performance Max:</strong> Automatización inteligente multiplataforma.</li>
                  <li><strong>Remarketing:</strong> Anuncios dirigidos a quienes visitaron tu web.</li>
                </ul>
              </div>

              <div className="article-section">
                <h4>Beneficios de usar Google Ads:</h4>
                <ul>
                  <li>Resultados inmediatos.</li>
                  <li>Segmentación precisa por ubicación, edad, intereses, etc.</li>
                  <li>Control total de presupuesto y duración.</li>
                  <li>Medición exacta de resultados.</li>
                  <li>Ideal para lanzamientos, promociones o captar leads.</li>
                </ul>
              </div>

              <div className="article-section">
                <h4>Métricas clave para evaluar el rendimiento:</h4>
                <ul>
                  <li><strong>Impresiones:</strong> Cuántas veces se mostró tu anuncio.</li>
                  <li><strong>CTR (Click Through Rate):</strong> Porcentaje de clics vs impresiones. Un buen CTR indica relevancia del anuncio.</li>
                  <li><strong>CPC (Costo Por Clic):</strong> Cuánto pagás por cada visita.</li>
                  <li><strong>Conversiones:</strong> Acciones clave como compras, formularios completados o llamadas.</li>
                  <li><strong>Tasa de conversión:</strong> Porcentaje de visitas que realizaron una acción esperada.</li>
                </ul>
              </div>

              <div className="article-section">
                <h4>Estrategias recomendadas:</h4>
                <ul>
                  <li>Usar palabras clave con intención comercial.</li>
                  <li>Crear anuncios con llamados a la acción claros.</li>
                  <li>Segmentar bien el público y zonas geográficas.</li>
                  <li>Probar distintas variantes de anuncios (A/B testing).</li>
                  <li>Medir resultados desde Google Ads + Google Analytics.</li>
                </ul>
              </div>

              <div className="article-closing">
                <p>
                  En <strong>Toledo Consultora IT</strong> creamos, optimizamos y escalamos tus campañas en Google Ads para que generes más tráfico, más clientes y más ventas.
                </p>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div className="article-faqs-section">
            <h3>Preguntas Frecuentes</h3>
            <div className="faqs-container">
              {seo.FAQs.map((faq, idx) => (
                <details key={idx} className="faq-item">
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="article-cta-wrapper">
            <a
              href="https://wa.me/5493764221063"
              target="_blank"
              rel="noopener noreferrer"
              className="article-cta-button"
              aria-label="Contactar por WhatsApp"
            >
              Contá tu idea la llevamos a cabo <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>

        {/* Microdata */}
        <div itemScope itemType="https://schema.org/Organization" style={{ display: 'none' }}>
          <span itemProp="name">Toledo Consultora IT</span>
          <link itemProp="url" href="https://toledoconsultora.com" />
          <span itemProp="email">ventas@toledoconsultora.com</span>
        </div>
      </article>
    </>
  );
};

export default AboutGoogleAds;;
