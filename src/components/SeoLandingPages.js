const SeoLandingPages = [];
  const pricingPlans = [
    {
      id: "contratar-landingpage-toledoconsultora",
      title: "Landing Page",
      price: "$199.000",
      description: "Diseño de landing page",
      popular: false,
      features: [
"Diseño Adaptativo a Pc y Móvil",
        "Estrategia de Marketing",
        "Hasta 6 Productos con un link de pago",
        "Boton Reservar o Comprar",
        "Boton para capturar datos cliente con EmailJS",
        "Boton a Whatsapp de tu empresa opcional",        
        "Estrategia de No escapatoria, compre o deje datos"
      ],
      cta: "Solicitar Landing Page",
      link: "https://mpago.la/1P56hD5"
    },
    {
      id: "contratar-pagina-web-toledoconsultora",
      title: "Página Web Tipo Spa",
      price: "$249.000",
      description: "Diseño profesional adaptable",
      popular: false,
      features: [
        "Dominio.com.ar sin cargo incluido en el primer año",
        "Hosting Incluído en el primer año",
        "Incluye Desarrollo de Servicios Web, React, Css, EmailJs",
        "No aplica para Base de datos Postgresql/ORM + Node/Express web server",
"Incluye 5 emails corporativos con el dominio por el primer año",        
"Diseño Adaptativo a Pc y Móvil",
        "SEO básico incluido",
        "Navbar y Footer personalizados",
        "Secciones: Nosotros, Contacto",
        "Acceso a redes socales y whatsapp",
      ],
      cta: "Solicitar Web Page Institucional o Corporativa",
      link: "https://mpago.la/2SQELVR"
    },
    {
      id: "contratar-sistema-web-toledoconsultora",
      title: "Sistema Web Tipo Spa",
      price: "$349.000",
      description: "Diseño profesional adaptable",
      popular: false,
      features: [
        "Dominio.com.ar incluido por 1 año",
"Incluye Desarrollo de Servicios Web, React, Css, EmailJs",
        "Aplica para Base de datos Postgresql/ORM + Node/Express web server",
        "Desarrollo de API hasta 3 endpoints con controlador y modelos",
        "No aplica para sistemas con autenticación de usuarios",
        "No aplica para sistemas con pagos online",
        "Incluye 5 emails corporativos con el dominio por el primer año",        
"Diseño Adaptativo a Pc y Móvil",
        "SEO básico incluido",
        "Navbar y Footer personalizados",
        "Secciones: Nosotros, Contacto",
        "Acceso a redes socales y whatsapp",
        "Incluye hosting capa gratuita de imagenes",
        "*No incluye gastos de hosting ni gastos de mantenimiento",
      ],
      cta: "Solicitar Landing Page",
      link: "https://mpago.la/2QJQTSC"
    },
    {
      id: "contratar-sistema-web-completo-toledoconsultora",
      title: "Sistema con base de datos  y autenticación Web Tipo Spa",
      price: "$549.000",
      description: "Diseño profesional adaptable",
      popular: false,
      features: [
        "Dominio.com.ar incluido por 1 año",
        "Incluye Desarrollo de Servicios Web, React, Css, EmailJs",
        "Aplica para Base de datos Postgresql/ORM + Node/Express web server",
        "Desarrollo de API con sus controladoresm rutas y modelos",
        "Aplica para sistemas con autenticación de usuarios",
        "Aplica para sistemas con pagos online con mercadopago",                
"Diseño Adaptativo a Pc y Móvil",
        "SEO básico incluido",
        "Navbar y Footer personalizados",
        "Secciones: Nosotros, Contacto",
        "Acceso a redes socales y whatsapp",
        "Incluye hosting capa gratuita de imagenes",
"Incluye 5 emails corporativos con el dominio por el primer año",        
        "*No incluye gastos de hosting ni gastos de mantenimiento",
      ],
      cta: "Solicitar Landing Page",
      link: "https://mpago.la/2rp8wtV"
    },
    {
      id: "contratar-ecommerce-toledoconsultora",      
      title: "Ecommerce",
      price: "$249.000",
      description: "Tienda online Estándar",
      popular: true,
      features: [
        "Integración con MercadoPago",
        "Panel autogestionable de productos, no aplica para talles ni colores",
        "Sistema con control de stock",
        "Panel autogestionable de pedidos",
        "Panel autogestionable de usuarios",
        "Sin límite de productos",
        "Incluye Diseño y Despliegue de Base de datos y web Server",
"Diseño Adaptativo a Pc y Móvil",
        "Sin Comisiones por venta",
        "*No incluye dominio ni hosting ni gastos de mantenimiento",
        "Navbar y Footer personalizados",
        "Home optimizado para tu negocio, con productos fijos",
        "Secciones: Nosotros, Contacto, Historia de la empresa",
        "Incluye hosting capa gratuita de imagenes",
      ],
      cta: "Quiero mi Tienda Online",
      link: "https://mpago.la/2w6ThwW"
    },
    {
      id: "contratar-seo-avanzado-toledoconsultora",
      title: "SEO Avanzado",
      price: "$249.000",
      description: "Posicionamiento estratégico",
      popular: false,
      features: [
        "Estrategia SEO completa",
        "Posicionamos tu negocio en las Primeras 2 páginas de Google",
        "Posicionamiento en Google Maps",
        "Asesoramiento Global de Posicionamiento para tu negocio",
        "Informes de rendimiento",
        "Palabras clave estratégicas",
        "SEO On-page/Off-page",        
        "Análisis de velocidad, rendimiento y experiencia de usuario, propuestas de mejora",
        "Análisis contenido y propuestas de mejora",
      ],
      cta: "Mejorar Posicionamiento",
      link: "https://mpago.la/1SgrAx3"
    },
    {
      id: "contratar-campañasdigitales-toledoconsultora",
      title: "Campañas Digitales Google Ads",
      price: "$99.000",
      description: "Gestión profesional",
      popular: false,
      features: [      
        "Gestión Mensual"  ,
        "Gestión de Campañas digitales con Google Ads",
        "Optimización y monitorización continua de la campaña",
        "Gestión de Informes Periódicos",
        "Análisis de rendimiento y propuesta de mejora",
        "Segmentación avanzada",
        "*No incluye presupuesto publicitario, el costo de la campaña es a cargo del cliente",        
        "Realizamos campañas de tráfico, visitas a perfil, llamadas, ventas",
      ],
      cta: "Contratar Campañas Digitales",
      link: "https://mpago.la/1NbDWJ9"
    },
    {
      id: "contratar-ecommerce-paginaweb-toledoconsultora",
      title: "Paquete Completo Ecommerce + Pagina Web",
      price: "$749.000",
      description: "Paquete Bussiness",
      popular: false,
      features: [
        "Dominio.com.ar incluido por 1 año",
"Incluye Desarrollo de Servicios Web, React, Css, EmailJs",
"Incluye 5 emails corporativos con el dominio por el primer año",        
         "Integración con MercadoPago",
        "Panel autogestionable de productos, no aplica para talles ni colores",
        "Sistema con control de stock",
        "Panel autogestionable de pedidos",
        "Panel autogestionable de usuarios",
        "Sin límite de productos",
        "Incluye Diseño y Despliegue de Base de datos y web Server",
                "Incluye hosting capa gratuita de imagenes para tus productos",

        "Navbar y Footer personalizados",
        "Secciones: Nosotros, Contacto",
        "Sin Comisiones por venta",        
        "Diseño Adaptativo a Pc y Móvil",
        "Estrategia SEO completa",
        "Posicionamiento en Google Business y Maps",
        "Campaña Publicitaria Estándar x 30días en Google Ads",
                "*No incluye gastos de hosting de base de datos ni gastos de mantenimiento",

      ],
      cta: "Contratar Pack Bussiness",
      link: "https://mpago.la/1ppUGph"
    },
    {
      id: "contratar-asesoria-de-negocios-toledoconsultora",
      title: "Asesoría de Negocios",
      price: "$50.000",
      description: "Sesión estratégica personalizada",
      popular: false,
      features: [
        "Análisis de modelo de negocio",
        "Optimización de procesos",
        "Planificación comercial",
        "Estrategias de crecimiento",
        "Análisis de mercado",
        "Sesión de 2 horas",
        "Informe ejecutivo"
      ],
      cta: "Contratar Asesoría",
      link: "https://mpago.la/1Bgc6i5"
    }
  ];

const ciudades = [
  "Buenos Aires", "CABA", "La Plata", "Mar del Plata", "Bahía Blanca",
  "Rosario", "Santa Fe", "Córdoba", "Villa Carlos Paz", "Río Cuarto",
  "Mendoza", "San Rafael", "San Juan", "San Luis", "Neuquén",
  "Bariloche", "General Roca", "Trelew", "Comodoro Rivadavia", "Rawson",
  "Salta", "Jujuy", "Tucumán", "Santiago del Estero", "Catamarca",
  "La Rioja", "Corrientes", "Resistencia", "Formosa", "Posadas"
];

pricingPlans.forEach(plan => {
  ciudades.forEach(ciudad => {
    const ciudadSlug = ciudad.toLowerCase().replace(/\s+/g, "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const idSeo = `${plan.id}-${ciudadSlug}`;

    SeoLandingPages.push({
      id: idSeo,
      title: `${plan.title} en ${ciudad}`,
      price: plan.price,
      description: `${plan.description} para empresas y emprendedores en ${ciudad}.`,
      ciudad,
      features: plan.features,
      link: plan.link || "https://www.toledoconsultora.com/pago",
      popular: plan.popular || false,
      canonical: `https://toledoconsultora.com/servicios-globales/${idSeo}`
    });
  });
});


module.exports= SeoLandingPages