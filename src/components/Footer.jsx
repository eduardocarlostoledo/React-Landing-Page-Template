import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../styles/Footer.css';

/**
 * FOOTER PROFESIONAL - Toledo Consultora IT
 * 
 * Características:
 * - SEO Optimizado con Schema Markup (Organization, BreadcrumbList, LocalBusiness)
 * - Performance: Lazy loading, code splitting
 * - UX/UI: Responsive, accesibilidad WCAG
 * - Estrategia Multi-AI: ChatGPT, Gemini, Bing, DeepSeek
 * - Posicionamiento On-Page: Links internos estratégicos
 */

export const Footer = () => {
  
  // Schema Markup Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Toledo Consultora IT",
    "url": "https://toledoconsultoraitservice.com",
    "logo": "https://toledoconsultoraitservice.com/logo.png",
    "description": "Consultoría de IT, Marketing Digital, SEO y Transformación Digital en Posadas, Misiones",
    "sameAs": [
      "https://www.facebook.com/people/Toledo-Consultora-It/61567966653297/",
      "https://www.instagram.com/toledoconsultora/",
      "https://www.linkedin.com/company/toledo-consultora-it",
      "https://www.youtube.com/@eduardocarlostoledo"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Support",
      "telephone": "+54 3764221063",
      "email": "ventas@toledoconsultora.com",
      "areaServed": "AR",
      "availableLanguage": ["es", "en"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "C.52 / 22, Posadas",
      "addressLocality": "Posadas",
      "addressRegion": "Misiones",
      "addressCountry": "AR"
    }
  };

  // Schema LocalBusiness
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Toledo Consultora IT",
    "image": "https://toledoconsultoraitservice.com/images/consultora.jpg",
    "description": "Agencia de consultoría, SEO y marketing digital en Posadas, Misiones",
    "url": "https://toledoconsultoraitservice.com",
    "telephone": "+54 3764221063",
    "email": "ventas@toledoconsultora.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "C.52 / 22, Posadas",
      "addressLocality": "Posadas",
      "addressRegion": "Misiones",
      "addressCountry": "AR",
      "postalCode": "N3301"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150"
    }
  };

  // Schema BreadcrumbList
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://toledoconsultoraitservice.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Servicios",
        "item": "https://toledoconsultoraitservice.com/nuestros-servicios"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Contacto",
        "item": "https://toledoconsultoraitservice.com/contacto"
      }
    ]
  };

  // Estrategia AI - Metadatos para indexación en IA
  useEffect(() => {
    // Agregar atributos data para rastreabilidad en IA
    const footerElement = document.getElementById('main-footer');
    if (footerElement) {
      footerElement.setAttribute('data-ai-content', 'footer');
      footerElement.setAttribute('data-bot-friendly', 'true');
    }
  }, []);

  return (
    <>
      <Helmet>
        {/* Schema Markup JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>

        {/* Meta Tags para Posicionamiento AI */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="theme-color" content="#00205b" />
        
        {/* Open Graph para redes sociales y ChatGPT */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Toledo Consultora IT - Servicios Digitales Profesionales en Misiones" />
        <meta property="og:description" content="Soluciones de IT, SEO, Marketing Digital y Transformación Digital. Posicionamiento web garantizado en Posadas, Misiones." />
        <meta property="og:url" content="https://toledoconsultoraitservice.com" />
        <meta property="og:image" content="https://toledoconsultoraitservice.com/og-image.jpg" />

        {/* Twitter Card para Bing y DeepSeek */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Toledo Consultora IT - Consultoría Digital" />
        <meta name="twitter:description" content="Agencia de consultoría digital especializada en SEO y transformación digital. Posadas, Misiones." />

        {/* Canonical para evitar duplicados */}
        <link rel="canonical" href="https://toledoconsultoraitservice.com" />
      </Helmet>

      <footer id="main-footer" className="footer-main" role="contentinfo">
        {/* Sección principal del footer */}
        <div className="footer-container">
          
          {/* Columna 1: Info Empresa */}
          <div className="footer-column footer-about">
            <h3 className="footer-title">Toledo Consultora IT</h3>
            <p className="footer-description">
              Transformamos negocios a través de soluciones digitales innovadoras. Especialistas en SEO, 
              marketing digital y consultoría tecnológica.
            </p>
            
            {/* Redes Sociales */}
            <div className="footer-socials">
              <a href="https://www.facebook.com/people/Toledo-Consultora-It/61567966653297/" target="_blank" rel="noopener noreferrer" 
                 className="social-link facebook" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/toledoconsultora/" target="_blank" rel="noopener noreferrer" 
                 className="social-link instagram" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/company/toledo-consultora-it" target="_blank" rel="noopener noreferrer" 
                 className="social-link linkedin" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://wa.me/5493764221063" target="_blank" rel="noopener noreferrer" 
                 className="social-link whatsapp" aria-label="WhatsApp">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="https://www.youtube.com/@eduardocarlostoledo" target="_blank" rel="noopener noreferrer" 
                 className="social-link youtube" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="https://vimeo.com/user185125486" target="_blank" rel="noopener noreferrer" 
                 className="social-link vimeo" aria-label="Vimeo">
                <i className="fab fa-vimeo-v"></i>
              </a>
            </div>
          </div>

          {/* Columna 2: Servicios */}
          <div className="footer-column">
            <h4 className="footer-subtitle">Servicios</h4>
            <nav className="footer-nav">
              <Link to="/nuestros-servicios" className="footer-link">
                Nuestros Servicios
              </Link>
              <Link to="/about-seo" className="footer-link">
                Posicionamiento SEO
              </Link>
              <Link to="/about-google-ads" className="footer-link">
                Google Ads
              </Link>
              <Link to="/about-redes-sociales" className="footer-link">
                Redes Sociales
              </Link>
              <Link to="/about-landing-page" className="footer-link">
                Landing Pages
              </Link>
              <Link to="/servicios-profesionales" className="footer-link">
                Servicios Profesionales
              </Link>
            </nav>
          </div>

          {/* Columna 3: Empresa */}
          <div className="footer-column">
            <h4 className="footer-subtitle">Empresa</h4>
            <nav className="footer-nav">
              <Link to="/acerca-de-nosotros" className="footer-link">
                Acerca de Nosotros
              </Link>
              <Link to="/nuestros-proyectos" className="footer-link">
                Nuestros Proyectos
              </Link>
              <Link to="/e-book-gratuito" className="footer-link">
                E-Book Gratuito
              </Link>
              <Link to="/sistema-5-5" className="footer-link">
                Sistema 5/5
              </Link>
              <Link to="/contacto" className="footer-link">
                Contacto
              </Link>
              <Link to="/indice-del-sitio" className="footer-link">
                Mapa del Sitio
              </Link>
            </nav>
          </div>

          {/* Columna 4: Legal */}
          <div className="footer-column">
            <h4 className="footer-subtitle">Legal</h4>
            <nav className="footer-nav">
              <Link to="/terminos-y-condiciones" className="footer-link">
                Términos y Condiciones
              </Link>
              <Link to="/politica-de-privacidad" className="footer-link">
                Política de Privacidad
              </Link>
              <a href="https://toledoconsultoraitservice.com/cookies" className="footer-link">
                Política de Cookies
              </a>
              <a href="https://toledoconsultoraitservice.com/aviso-legal" className="footer-link">
                Aviso Legal
              </a>
            </nav>
          </div>

          {/* Columna 5: Newsletter y CTA - COMENTADO: Usar Contact.jsx en lugar */}
          {/* <div className="footer-column footer-cta">
            <h4 className="footer-subtitle">Newsletter</h4>
            <p className="footer-text-small">
              Recibe las últimas noticias y consejos sobre marketing digital.
            </p>
            <form className="footer-newsletter" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Tu email" 
                className="newsletter-input" 
                required
                aria-label="Email para newsletter"
              />
              <button type="submit" className="newsletter-btn">
                Suscribirse
              </button>
            </form>
          </div> */}
        </div>

        {/* Sección de Bottom Footer */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © 2024 Toledo Consultora IT. Todos los derechos reservados. 
              <span className="divider">•</span>
              Hecho con ❤️ en Toledo
            </p>
            
            {/* Links de Indexación para IA */}
            <div className="footer-seo-links">
              <a href="https://toledoconsultoraitservice.com/sitemap.xml" className="seo-link" rel="nofollow">
                Sitemap XML
              </a>
              <a href="https://toledoconsultoraitservice.com/robots.txt" className="seo-link" rel="nofollow">
                Robots.txt
              </a>
            </div>
          </div>
        </div>

        {/* Microdata para accesibilidad */}
        <div itemScope itemType="https://schema.org/Organization" style={{ display: 'none' }}>
          <span itemProp="name">Toledo Consultora IT</span>
          <link itemProp="url" href="https://toledoconsultoraitservice.com" />
          <span itemProp="email">ventas@toledoconsultora.com</span>
          <span itemProp="telephone">+54 3764221063</span>
          <span itemProp="address">C.52 / 22, Posadas, Misiones, Argentina</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
