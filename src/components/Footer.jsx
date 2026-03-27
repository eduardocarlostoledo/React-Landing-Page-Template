import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../styles/Footer.css";

const OFFICIAL_URL = "https://www.toledoconsultora.com";

export const Footer = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Toledo Consultora IT",
    url: OFFICIAL_URL,
    logo: `${OFFICIAL_URL}/logo.png`,
    description:
      "Consultoría de IT, marketing digital, SEO y transformación digital en Posadas, Misiones.",
    sameAs: [
      "https://www.facebook.com/people/Toledo-Consultora-It/61567966653297/",
      "https://www.instagram.com/toledoconsultora/",
      "https://www.linkedin.com/company/toledo-consultora-it",
      "https://www.youtube.com/@eduardocarlostoledo",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      telephone: "+54 3764221063",
      email: "ventas@toledoconsultora.com",
      areaServed: "AR",
      availableLanguage: ["es", "en"],
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Toledo Consultora IT",
    image: `${OFFICIAL_URL}/images/consultora.jpg`,
    description: "Agencia de consultoría, SEO y marketing digital en Posadas, Misiones.",
    url: OFFICIAL_URL,
    telephone: "+54 3764221063",
    email: "ventas@toledoconsultora.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "C.52 / 22, Posadas",
      addressLocality: "Posadas",
      addressRegion: "Misiones",
      addressCountry: "AR",
      postalCode: "N3301",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: OFFICIAL_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Servicios",
        item: `${OFFICIAL_URL}/nuestros-servicios`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Contacto",
        item: `${OFFICIAL_URL}/contacto`,
      },
    ],
  };

  useEffect(() => {
    const footerElement = document.getElementById("main-footer");
    if (footerElement) {
      footerElement.setAttribute("data-ai-content", "footer");
      footerElement.setAttribute("data-bot-friendly", "true");
    }
  }, []);

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>

        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="theme-color" content="#00205b" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Toledo Consultora IT - Servicios Digitales Profesionales" />
        <meta property="og:description" content="Soluciones de IT, SEO, marketing digital y transformación digital." />
        <meta property="og:url" content={OFFICIAL_URL} />
        <meta property="og:image" content={`${OFFICIAL_URL}/og-image.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Toledo Consultora IT - Consultoría Digital" />
        <meta name="twitter:description" content="Agencia de consultoría digital especializada en SEO y transformación digital." />
        <link rel="canonical" href={OFFICIAL_URL} />
      </Helmet>

      <footer id="main-footer" className="footer-main" role="contentinfo">
        <div className="footer-container">
          <div className="footer-column footer-about">
            <h3 className="footer-title">
              <a
                href={OFFICIAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Toledo Consultora IT
              </a>
            </h3>
            <p className="footer-description">
              Transformamos negocios con soluciones digitales, SEO, seguridad y
              consultoría tecnológica.
            </p>
            <p className="footer-text-small" style={{ marginTop: "0.75rem" }}>
              Sitio oficial:
              {" "}
              <a
                href={OFFICIAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                www.toledoconsultora.com
              </a>
            </p>
          </div>

          <div className="footer-column">
            <h4 className="footer-subtitle">Servicios</h4>
            <nav className="footer-nav">
              <Link to="/nuestros-servicios" className="footer-link">Nuestros Servicios</Link>
              <Link to="/about-posicionamiento" className="footer-link">Posicionamiento SEO</Link>
              <Link to="/about-google-ads" className="footer-link">Google Ads</Link>
              <Link to="/about-redes-sociales" className="footer-link">Redes Sociales</Link>
              <Link to="/about-landing-page" className="footer-link">Landing Pages</Link>
              <Link to="/servicios-profesionales" className="footer-link">Servicios Profesionales</Link>
            </nav>
          </div>

          <div className="footer-column">
            <h4 className="footer-subtitle">Empresa</h4>
            <nav className="footer-nav">
              <Link to="/acerca-de-nosotros" className="footer-link">Acerca de Nosotros</Link>
              <Link to="/nuestros-proyectos" className="footer-link">Nuestros Proyectos</Link>
              <Link to="/e-book-gratuito" className="footer-link">E-Book Gratuito</Link>
              <Link to="/sistema-5-5" className="footer-link">Sistema 5/5</Link>
              <Link to="/contacto" className="footer-link">Contacto</Link>
              <Link to="/indice-del-sitio" className="footer-link">Mapa del Sitio</Link>
            </nav>
          </div>

          <div className="footer-column">
            <h4 className="footer-subtitle">Legal</h4>
            <nav className="footer-nav">
              <Link to="/terminos-y-condiciones" className="footer-link">Términos y Condiciones</Link>
              <Link to="/condiciones-de-aceptacion-del-servicio" className="footer-link">Condiciones de Aceptación del Servicio</Link>
              <Link to="/politica-de-seguridad" className="footer-link">Política de Seguridad</Link>
              <Link to="/politica-de-privacidad" className="footer-link">Política de Privacidad</Link>
              <Link to="/politica-de-cookies" className="footer-link">Política de Cookies</Link>
              <Link to="/aviso-legal" className="footer-link">Aviso Legal</Link>
            </nav>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div>
              <p className="footer-copyright">
                © 2026 Toledo Consultora IT. Todos los derechos reservados. Diseñado, Desplegado y Mantenido por{" "}
                <a
                  href={OFFICIAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  www.toledoconsultora.com
                </a>
              </p>
              <div className="footer-seo-links" style={{ gap: "0.75rem", flexWrap: "wrap" }}>
                <Link to="/condiciones-de-aceptacion-del-servicio" className="seo-link">Aceptación del Servicio</Link>
                <span aria-hidden="true">•</span>
                <Link to="/politica-de-seguridad" className="seo-link">Seguridad</Link>
                <span aria-hidden="true">•</span>
                <Link to="/politica-de-privacidad" className="seo-link">Política</Link>
                <span aria-hidden="true">•</span>
                <Link to="/politica-de-privacidad" className="seo-link">Privacidad</Link>
                <span aria-hidden="true">•</span>
                <Link to="/politica-de-cookies" className="seo-link">Cookies</Link>
              </div>
            </div>

            <div className="footer-seo-links">
              <a href={`${OFFICIAL_URL}/sitemap.xml`} className="seo-link" rel="nofollow">
                Sitemap XML
              </a>
              <a href={`${OFFICIAL_URL}/robots.txt`} className="seo-link" rel="nofollow">
                Robots.txt
              </a>
            </div>
          </div>
        </div>

        <div itemScope itemType="https://schema.org/Organization" style={{ display: "none" }}>
          <span itemProp="name">Toledo Consultora IT</span>
          <link itemProp="url" href={OFFICIAL_URL} />
          <span itemProp="email">ventas@toledoconsultora.com</span>
          <span itemProp="telephone">+54 3764221063</span>
          <span itemProp="address">C.52 / 22, Posadas, Misiones, Argentina</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
