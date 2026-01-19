// PLAN INMEDIATO: OPTIMIZACIÓN RUTAS CRÍTICAS
// Ejecutar en orden de prioridad

/**
 * PRIORIDAD 1: AboutReseñas.jsx - FIX Helmet sin usar
 * STATUS: Imports agregados pero no utilizados en JSX
 * ACCIÓN: Refactor completo usando patrón exitoso
 */

// Path: src/components/aboutReseñas.jsx
// Necesita: Reemplazar section con article, agregar schema al JSX, renderizar FAQs

/**
 * PRIORIDAD 2: TerminosYCondiciones.jsx 
 * STATUS: Sin Helmet, sin Schema
 * ACCIÓN: Agregar Helmet + TermsOfService Schema
 */

// Path: src/components/TerminosYCondiciones.jsx
// Añadir:
// - import { Helmet } from "react-helmet";
// - Wrappear en <>...</>
// - Agregar Schema TermsOfService
// - Agregar canonical link

/**
 * PRIORIDAD 3: Politica.jsx
 * STATUS: Sin Helmet, usando clase team-section (error)
 * ACCIÓN: Refactor con Helmet + PrivacyPolicy Schema
 */

// Path: src/components/Politica.jsx
// Cambiar:
// - De export const Politica a export const Politica
// - De section.team-section a section.privacy-section
// - Agregar Helmet con PrivacyPolicy schema

/**
 * PRIORIDAD 4: Contact.jsx
 * STATUS: Formulario sin SEO
 * ACCIÓN: Agregar Helmet + ContactPoint Schema
 */

// Path: src/components/Contact.jsx
// Agregar:
// - Helmet con ContactPoint schema
// - Meta description
// - Canonical link

/**
 * NEXT: About.jsx, Services.jsx, Gallery.jsx
 */

// ============================================
// TEMPLATE PARA RÁPIDA IMPLEMENTACIÓN
// ============================================

// Usar este template para cada componente:

import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

export const ComponenteName = () => {
  const seo = {
    title: "Tu Título | Toledo Consultora IT",
    description: "Descripción breve y clara con keywords",
    keywords: "keyword1, keyword2, keyword3",
    ogTitle: "Tu Título",
    ogDescription: "Descripción para redes",
    ogImage: "/img/logo.png",
    author: "Toledo Consultora IT",
    canonical: "https://toledoconsultora.com/tu-ruta",
    type: "website" // o article, product, etc
  };

  // Generar Schema según tipo de página
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article|Service|TermsOfService|PrivacyPolicy|ContactPoint",
    "name": seo.title,
    "description": seo.description,
    "image": seo.ogImage,
    "author": {
      "@type": "Organization",
      "name": seo.author,
      "url": "https://toledoconsultora.com"
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
        <meta property="og:title" content={seo.ogTitle} />
        <meta property="og:description" content={seo.ogDescription} />
        <meta property="og:image" content={seo.ogImage} />
        <meta property="og:type" content={seo.type} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href={seo.canonical} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <article className="your-section">
        {/* Contenido aquí */}
      </article>
    </>
  );
};

export default ComponenteName;
