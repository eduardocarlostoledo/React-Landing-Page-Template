/**
 * SEO Configuration for ALL Routes
 * Centralizado para facilitar mantenimiento y consistencia
 * 
 * Uso: Importar la config correspondiente para cada página
 */

export const routesSEOConfig = {
  // ============================================
  // ARTÍCULOS OPTIMIZADOS (100% COMPLETO)
  // ============================================
  
  aboutGoogleAds: {
    title: "Google Ads: Publicidad Pagada Efectiva | Toledo Consultora IT",
    description: "Campañas Google Ads profesionales. Estrategia de publicidad pagada con ROI verificable para tu negocio.",
    keywords: "google ads, ppc, publicidad digital, campañas google, ads manager",
    ogTitle: "Google Ads: Campañas Pagadas Rentables",
    ogDescription: "Publicidad en Google Ads con resultados medibles",
    ogImage: "/img/google-ads.svg",
    type: "article",
    schemaType: "Article",
    canonical: "https://toledoconsultora.com/about-google-ads"
  },

  aboutPosicionamiento: {
    title: "Posicionamiento en Google: Guía Completa SEO | Toledo Consultora",
    description: "Estrategia de posicionamiento SEO en Google. Aparece en primeros resultados con Google Maps y Business Profile.",
    keywords: "posicionamiento google, seo local, google maps, google business profile",
    ogTitle: "Posicionamiento en Google - SEO Profesional",
    ogDescription: "Estrategia para aparecer en los primeros resultados de Google",
    ogImage: "/img/posicionamiento.svg",
    type: "article",
    schemaType: "Article",
    canonical: "https://toledoconsultora.com/about-posicionamiento"
  },

  aboutOptimizacion: {
    title: "Optimización Web: Velocidad y SEO Técnico | Toledo Consultora IT",
    description: "Optimización web integral. Mejoramos velocidad, accesibilidad y SEO técnico de tu sitio.",
    keywords: "optimización web, velocidad web, seo técnico, core web vitals",
    ogTitle: "Optimización Web - Velocidad y Rendimiento",
    ogDescription: "Optimización técnica integral para mejor SEO y velocidad",
    ogImage: "/img/optimizacion.svg",
    type: "article",
    schemaType: "Article",
    canonical: "https://toledoconsultora.com/about-optimizacion"
  },

  aboutRedesSociales: {
    title: "Redes Sociales: Estrategia Digital Completa | Toledo Consultora",
    description: "Gestión de redes sociales profesional. Instagram, Facebook, LinkedIn, TikTok con contenido de valor.",
    keywords: "redes sociales, instagram, facebook, social media, community manager",
    ogTitle: "Redes Sociales - Estrategia Digital",
    ogDescription: "Presencia profesional en redes sociales para tu negocio",
    ogImage: "/img/redes-sociales.svg",
    type: "article",
    schemaType: "Article",
    canonical: "https://toledoconsultora.com/about-redes-sociales"
  },

  aboutComprarDominio: {
    title: "Cómo Comprar Dominio .com.ar | Registrador Profesional",
    description: "Guía completa para comprar un dominio. Registradores, extensiones, privacidad WHOIS y mejores prácticas.",
    keywords: "comprar dominio, dominio .com.ar, registrador dominio, dominio gratis",
    ogTitle: "Cómo Comprar Dominio - Guía Paso a Paso",
    ogDescription: "Todo lo que necesitas saber para comprar tu dominio profesional",
    ogImage: "/img/comprar-dominio.webp",
    type: "article",
    schemaType: "Article",
    canonical: "https://toledoconsultora.com/about-comprar-dominio"
  },

  aboutLandingPage: {
    title: "Landing Pages: Conversión en Publicidad Digital | Toledo Consultora",
    description: "Landing pages optimizadas para conversión. Imprescindible para Google Ads y campañas pagadas efectivas.",
    keywords: "landing page, landing page conversion, squeeze page, cta efectiva",
    ogTitle: "Landing Pages - Conversión Garantizada",
    ogDescription: "Landing pages profesionales para tus campañas de publicidad",
    ogImage: "/img/landing-page.svg",
    type: "article",
    schemaType: "Article",
    canonical: "https://toledoconsultora.com/about-landing-page"
  },

  aboutGoogleBusiness: {
    title: "Google Business Profile: Posicionamiento Local | Toledo Consultora",
    description: "Google Business Profile y Google Maps. Estrategia de posicionamiento local para tu negocio.",
    keywords: "google business profile, google maps, posicionamiento local, my business",
    ogTitle: "Google Business - Posicionamiento Local",
    ogDescription: "Optimiza tu presencia en Google Maps y Google Business",
    ogImage: "/img/google-business.svg",
    type: "article",
    schemaType: "Article",
    canonical: "https://toledoconsultora.com/about-google-business"
  },

  // ============================================
  // PÁGINAS LEGALES/INFORMATIVAS (SIN SEO AÚN)
  // ============================================

  terminosYCondiciones: {
    title: "Términos y Condiciones | Toledo Consultora IT",
    description: "Términos y condiciones de uso de nuestros servicios y sitio web.",
    keywords: "términos y condiciones, términos de servicio, políticas",
    ogTitle: "Términos y Condiciones",
    ogDescription: "Lee nuestros términos y condiciones de servicio",
    ogImage: "/img/logo.png",
    type: "website",
    schemaType: "TermsOfService",
    canonical: "https://toledoconsultora.com/terminos-y-condiciones",
    noindex: true // No necesita aparecer en resultados
  },

  politicaPrivacidad: {
    title: "Política de Privacidad | Toledo Consultora IT",
    description: "Política de privacidad y protección de datos personales. Cómo protegemos tu información.",
    keywords: "política de privacidad, protección datos, privacidad web, gdpr",
    ogTitle: "Política de Privacidad",
    ogDescription: "Conoce cómo protegemos tu privacidad y datos personales",
    ogImage: "/img/logo.png",
    type: "website",
    schemaType: "PrivacyPolicy",
    canonical: "https://toledoconsultora.com/politica-de-privacidad",
    noindex: true
  },

  // ============================================
  // PÁGINAS PRINCIPALES (NECESITAN OPTIMIZAR)
  // ============================================

  contacto: {
    title: "Contacto | Toledo Consultora IT - Asesoramiento Digital",
    description: "¿Tenés preguntas? Contactanos por WhatsApp, mail o formulario. Respuestas rápidas y profesionales.",
    keywords: "contacto, consulta gratis, soporte, whatsapp consultoría",
    ogTitle: "Contacto - Toledo Consultora IT",
    ogDescription: "Contactá a Toledo Consultora para asesoramiento profesional",
    ogImage: "/img/logo.png",
    type: "website",
    schemaType: "ContactPoint",
    canonical: "https://toledoconsultora.com/contacto",
    organizationName: "Toledo Consultora IT",
    phone: "+54 3764 221063",
    email: "ventas@toledoconsultora.com",
    address: "Toledo, Misiones, Argentina"
  },

  acercaNosotros: {
    title: "Acerca de Nosotros | Toledo Consultora IT - Expertos Digitales",
    description: "Conocé el equipo de Toledo Consultora IT. Somos especialistas en marketing digital y desarrollo web.",
    keywords: "nosotros, quiénes somos, equipo, consultora IT, empresa digital",
    ogTitle: "Acerca de Nosotros - Toledo Consultora IT",
    ogDescription: "Conocé al equipo detrás de Toledo Consultora IT",
    ogImage: "/img/logo.png",
    type: "website",
    schemaType: "AboutPage",
    canonical: "https://toledoconsultora.com/acerca-de-nosotros"
  },

  nuestrosServicios: {
    title: "Nuestros Servicios | Toledo Consultora IT - Marketing Digital",
    description: "Servicios de marketing digital: SEO, Google Ads, Landing Pages, E-commerce, Redes Sociales y más.",
    keywords: "servicios digitales, marketing digital, diseño web, seo, publicidad",
    ogTitle: "Nuestros Servicios - Toledo Consultora IT",
    ogDescription: "Servicios profesionales de marketing digital y desarrollo web",
    ogImage: "/img/logo.png",
    type: "website",
    schemaType: "Service",
    canonical: "https://toledoconsultora.com/nuestros-servicios"
  },

  nuestrosProyectos: {
    title: "Nuestros Proyectos | Portfolio Toledo Consultora IT",
    description: "Galería de proyectos y casos de éxito. Portafolio de trabajos en web, diseño y marketing digital.",
    keywords: "proyectos, portfolio, casos de éxito, galería, diseño web",
    ogTitle: "Nuestros Proyectos - Portfolio",
    ogDescription: "Mira nuestros proyectos y casos de éxito en marketing digital",
    ogImage: "/img/logo.png",
    type: "website",
    schemaType: "ImageGallery",
    canonical: "https://toledoconsultora.com/nuestros-proyectos"
  },

  serviciosProfesionales: {
    title: "Servicios Profesionales | Toledo Consultora IT",
    description: "Servicios profesionales personalizados en marketing digital y desarrollo web para tu negocio.",
    keywords: "servicios profesionales, asesoramiento, consultoría digital",
    ogTitle: "Servicios Profesionales",
    ogDescription: "Servicios profesionales de marketing y desarrollo web",
    ogImage: "/img/logo.png",
    type: "website",
    schemaType: "LocalBusiness",
    canonical: "https://toledoconsultora.com/servicios-profesionales"
  },

  // ============================================
  // PÁGINAS DINÁMICAS / ESPECIALES
  // ============================================

  detallesCotizacion: {
    title: "Detalles del Servicio | Toledo Consultora IT",
    description: "Información detallada del servicio. Características, beneficios, precio y cómo contratarlo.",
    keywords: "servicio, características, precio, contratación",
    ogTitle: "Detalles del Servicio",
    ogDescription: "Información completa del servicio que buscas",
    ogImage: "/img/logo.png",
    type: "website",
    schemaType: "Product",
    canonical: "https://toledoconsultora.com/detalle" // Dynamic
  },

  ebook: {
    title: "E-book Gratuito | Toledo Consultora IT",
    description: "Descarga nuestro e-book gratuito con estrategias de marketing digital y SEO.",
    keywords: "ebook gratuito, guía digital, estrategias marketing, seo guide",
    ogTitle: "E-book Gratuito - Marketing Digital",
    ogDescription: "Descargá nuestro e-book gratuito de marketing digital",
    ogImage: "/img/logo.png",
    type: "website",
    schemaType: "DigitalDocument",
    canonical: "https://toledoconsultora.com/e-book-gratuito"
  },

  sistema55: {
    title: "Sistema 5.5 | Toledo Consultora IT - Automatización Digital",
    description: "Sistema 5.5: Automatización completa de tu presencia digital en 5 pasos.",
    keywords: "sistema 5.5, automatización digital, presencia online",
    ogTitle: "Sistema 5.5 - Automatización Digital",
    ogDescription: "Automatiza tu presencia digital con el Sistema 5.5",
    ogImage: "/img/logo.png",
    type: "website",
    schemaType: "HowTo",
    canonical: "https://toledoconsultora.com/sistema-5-5"
  },

  // ============================================
  // ÍNDICES Y NAVEGACIÓN
  // ============================================

  indiceSitemap: {
    title: "Índice del Sitio | Toledo Consultora IT",
    description: "Índice completo del sitio web con todas las páginas y servicios.",
    keywords: "índice sitio, mapa sitio, navegación, sitemap",
    ogTitle: "Índice del Sitio",
    ogDescription: "Navega por todas nuestras páginas y servicios",
    ogImage: "/img/logo.png",
    type: "website",
    schemaType: "SiteNavigationElement",
    canonical: "https://toledoconsultora.com/indice-sitemap",
    noindex: true
  },

  indiceSitio: {
    title: "Índice del Sitio - Mapa Completo | Toledo Consultora",
    description: "Mapa completo del sitio con todas las categorías, servicios y páginas principales.",
    keywords: "mapa del sitio, índice, navegación, estructura web",
    ogTitle: "Índice del Sitio - Mapa Web",
    ogDescription: "Mapa completo de navegación del sitio web",
    ogImage: "/img/logo.png",
    type: "website",
    schemaType: "CollectionPage",
    canonical: "https://toledoconsultora.com/indice-del-sitio",
    noindex: true
  },

  graciasCompra: {
    title: "¡Gracias por tu Compra! | Toledo Consultora IT",
    description: "Tu pedido ha sido recibido. En breve recibirás confirmación.",
    keywords: "gracias, compra confirmada, pedido",
    ogTitle: "Compra Confirmada - Gracias",
    ogDescription: "Tu pedido ha sido confirmado exitosamente",
    ogImage: "/img/logo.png",
    type: "website",
    schemaType: "Order",
    canonical: "https://toledoconsultora.com/gracias-por-su-compra",
    noindex: true
  }
};

/**
 * HELPER: Obtener configuración SEO de una ruta
 */
export const getSEOConfig = (routeName) => {
  return routesSEOConfig[routeName] || routesSEOConfig.nuestrosServicios;
};

/**
 * HELPER: Generar Schema compatible con tipo de página
 */
export const generateRouteSchema = (config) => {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": config.schemaType,
    "name": config.title,
    "description": config.description,
    "url": config.canonical,
    "author": {
      "@type": "Organization",
      "name": "Toledo Consultora IT",
      "url": "https://toledoconsultora.com",
      "logo": "https://toledoconsultora.com/img/logo.png"
    }
  };

  // Agregar campos específicos según tipo
  if (config.schemaType === "ContactPoint") {
    baseSchema.telephone = config.phone;
    baseSchema.email = config.email;
    baseSchema.areaServed = config.address;
  }

  if (config.schemaType === "Organization") {
    baseSchema.address = {
      "@type": "PostalAddress",
      "addressLocality": "Toledo",
      "addressRegion": "Misiones",
      "addressCountry": "AR"
    };
  }

  return baseSchema;
};
