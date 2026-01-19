import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { articleSEOConfig, generateArticleSchema, generateFAQSchema } from "../utils/articleSEOConfig";
import "../styles/about.css";

export const AboutComprarDominio = () => {
  const seo = articleSEOConfig.dominio;
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
        <link rel="canonical" href="https://toledoconsultora.com/about-comprar-dominio" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <article id="about" className="about-section" itemScope itemType="https://schema.org/Article">
        <div className="about-container">
          <div className="about-columns">
            <div className="about-image-wrapper">
              <img src="/img/comprar-dominio.webp" alt="Cómo comprar dominio" className="about-image" itemProp="image" loading="lazy" />
            </div>
            <div className="about-text">
              <meta itemProp="headline" content={seo.title} />
              <meta itemProp="author" content={seo.author} />
              <h2 itemProp="name">¿Cómo comprar tu dominio?</h2>
              <h3>Guía para Comprar un Dominio Web: Todo lo que Necesitás Saber</h3>
              <p>Comprar un dominio es el primer paso esencial para tener presencia online profesional. Te explicamos qué es un dominio, dónde comprarlo y cómo proteger tu marca.</p>
              <div className="article-section">
                <h4>¿Qué es un dominio?</h4>
                <p>Un dominio es el nombre único que identifica a un sitio web en Internet, como tumarca.com. Está vinculado a una dirección IP, pero es más fácil de recordar.</p>
              </div>
              <div className="article-section">
                <h4>¿Dónde se compra un dominio?</h4>
                <p>A través de registradores oficiales. Algunos de los más conocidos son:</p>
                <ul>
                  <li>GoDaddy</li>
                  <li>Namecheap</li>
                  <li>Bluehost</li>
                  <li>Google Domains</li>
                  <li>SiteGround</li>
                  <li>Hostinger</li>
                </ul>
              </div>
              <div className="article-section">
                <h4>¿Qué extensiones de dominio existen?</h4>
                <ul>
                  <li>.com (comercial - el más popular)</li>
                  <li>.store, .tech, .app (temáticos)</li>
                  <li>.com.ar, .mx, .cl (nacionales)</li>
                </ul>
              </div>

              <div className="article-section">
                <h4>¿Conviene comprar por 1, 3 o 5 años?</h4>
                <ul>
                  <li><strong>1 año:</strong> Ideal para probar el mercado. Riesgo: podés olvidarte de renovarlo.</li>
                  <li><strong>3 años:</strong> Buena relación costo-beneficio con descuentos a veces.</li>
                  <li><strong>5 años:</strong> Mayor profesionalidad, te olvidás de renovación.</li>
                </ul>
              </div>

              <div className="article-section">
                <h4>Recomendaciones finales:</h4>
                <ul>
                  <li>Usá un registrador confiable con soporte en tu idioma.</li>
                  <li>Activá la renovación automática.</li>
                  <li>Asegurate de tener acceso a la cuenta de correo vinculada.</li>
                </ul>
              </div>
              <div className="article-section">
                <h4>Privacidad del propietario: WHOIS Privacy</h4>
                <p>Cuando registrás un dominio, tus datos quedan visibles en bases de datos públicas. Algunos registradores ofrecen protección para ocultar tu información personal.</p>
                <ul>
                  <li>Protección de tu información personal</li>
                  <li>Reducción de spam y llamadas</li>
                  <li>Mayor seguridad contra robo de identidad</li>
                </ul>
              </div>
              <div className="article-closing">
                <p>En <strong>Toledo Consultora IT</strong> te asesoramos para elegir el dominio perfecto, migrarlo y proteger tu marca digital.</p>
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
export default AboutComprarDominio;
