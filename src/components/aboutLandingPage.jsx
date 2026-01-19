import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { articleSEOConfig, generateArticleSchema, generateFAQSchema } from "../utils/articleSEOConfig";
import "../styles/about.css";

export const AboutLandingPage = () => {
  const seo = articleSEOConfig.landingPage;
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
        <link rel="canonical" href="https://toledoconsultora.com/about-landing-page" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <article id="about" className="about-section" itemScope itemType="https://schema.org/Article">
        <div className="about-container">
          <div className="about-columns">
            <div className="about-image-wrapper">
              <img src="/img/landing-page.svg" alt="Importancia de landing page" className="about-image" itemProp="image" loading="lazy" />
            </div>
            <div className="about-text">
              <meta itemProp="headline" content={seo.title} />
              <meta itemProp="author" content={seo.author} />
              <h2 itemProp="name">¿Por qué una Landing Page es esencial en publicidad digital?</h2>
              <h3>Una buena landing page no solo atrae visitas: educa, convence y convierte.</h3>
              <p>Cuando hacés campañas en Google Ads o Facebook, estás pagando por cada clic. Si esa persona llega a una página confusa, pierdes dinero sin resultados.</p>
              <div className="article-section">
                <h4>¿Qué hace una landing page?</h4>
                <ul>
                  <li>Prepara al cliente antes de una llamada.</li>
                  <li>Responde preguntas frecuentes sobre precio y beneficios.</li>
                  <li>Segmenta a quienes realmente están interesados.</li>
                  <li>Disminuye el tiempo de atención telefónica.</li>
                  <li>Mejora la tasa de conversión del presupuesto.</li>
                </ul>
              </div>
              <div className="article-section">
                <h4>¿Qué pasa si no tengo landing?</h4>
                <p>Sin una página que filtre y eduque, cada llamada es más larga, menos clara y con menor probabilidad de venta.</p>
              </div>
              <div className="article-section">
                <h4>Beneficios directos:</h4>
                <ul>
                  <li>Más ventas con el mismo presupuesto.</li>
                  <li>Clientes más informados y decididos.</li>
                  <li>Mejor experiencia para el usuario.</li>
                  <li>Datos claros para medir resultados.</li>
                </ul>
              </div>
              <div className="article-closing">
                <p>En <strong>Toledo Consultora IT</strong> creamos landing pages optimizadas para campañas de alto rendimiento.</p>
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
export default AboutLandingPage;