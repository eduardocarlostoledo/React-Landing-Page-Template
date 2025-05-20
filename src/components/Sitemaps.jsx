import React from "react";
import "../styles/IndiceSitemap.css";

const mainLinks = [
  { label: "Inicio", url: "https://toledoconsultora.com/" },
  { label: "Asesoramiento Profesional", url: "https://toledoconsultora.com/asesoramiento-profesional" },
  { label: "Servicios Profesionales", url: "https://toledoconsultora.com/servicios-profesionales" },
  { label: "Contacto", url: "https://toledoconsultora.com/contacto" },
  { label: "Política de Privacidad", url: "https://toledoconsultora.com/politica-de-privacidad" },
  { label: "Términos y Condiciones", url: "https://toledoconsultora.com/terminos-y-condiciones" },
  { label: "Sitemap XML", url: "https://toledoconsultora.com/sitemap.xml" },
];

const ciudades = [
  "buenos-aires", "caba", "la-plata", "mar-del-plata", "bahia-blanca", "rosario", "santa-fe", "cordoba",
  "villa-carlos-paz", "rio-cuarto", "mendoza", "san-rafael", "san-juan", "san-luis", "neuquen", "bariloche",
  "general-roca", "trelew", "comodoro-rivadavia", "rawson", "salta", "jujuy", "tucuman", "santiago-del-estero",
  "catamarca", "la-rioja", "corrientes", "resistencia", "formosa", "posadas"
];

const servicios = [
  "landingpage", "pagina-web", "sistema-web", "sistema-web-completo", "ecommerce", "seo-avanzado", "campanasdigitales", "ecommerce-paginaweb", "asesoria-de-negocios"
];

const buildURL = (servicio, ciudad) => `https://toledoconsultora.com/servicios-consultora-toledo/contratar-${servicio}-toledoconsultora-${ciudad}`;

const Sitemap = () => {
  return (
    <div className="sitemap-wrapper">
      <h1 className="sitemap-title">Mapa del sitio - Toledo Consultora IT</h1>

      <section className="sitemap-section">
        <h2>Páginas Principales</h2>
        <ul className="sitemap-list">
          {mainLinks.map(({ label, url }) => (
            <li key={url}><a href={url} target="_blank" rel="noopener noreferrer">{label}</a></li>
          ))}
        </ul>
      </section>

      {servicios.map((servicio) => (
        <section className="sitemap-section" key={servicio}>
          <h3>Landing Pages de {servicio.replace(/-/g, ' ').toUpperCase()}</h3>
          <ul className="sitemap-grid">
            {ciudades.map((ciudad) => (
              <li key={`${servicio}-${ciudad}`}>
                <a href={buildURL(servicio, ciudad)} target="_blank" rel="noopener noreferrer">
                  {ciudad.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
                </a>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
};

export default Sitemap;
