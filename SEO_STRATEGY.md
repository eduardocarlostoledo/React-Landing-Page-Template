# Estrategia SEO Local - Toledo Consultora IT

## 📋 Resumen Ejecutivo

Se implementó una estrategia completa de **SEO Local** en la landing page de Toledo Consultora IT, enfocada en posicionar la agencia en búsquedas de Google para términos locales en Toledo, Argentina y captar clientes a través de servicios digitales.

---

## 🎯 Keywords Principales por Sección

### Home / Hero
- **Keywords**: agencia digital Toledo, servicios web Toledo, SEO local Toledo, Google Ads Toledo, diseño web Argentina, consultoría digital
- **Meta Title**: "Toledo Consultora IT - Agencia Digital en Toledo, Argentina | Servicios Web"
- **Meta Description**: "Somos una agencia digital de Toledo, Argentina especializada en SEO, Google Ads, diseño web, landing pages y soluciones digitales para tu negocio."
- **Schema**: LocalBusiness + Organization

### Servicios
- **Keywords**: servicios digitales Toledo, SEO profesional, Google Ads, landing pages, posicionamiento web local, publicidad digital
- **Target**: Negocios en Toledo que buscan servicios de marketing digital

### Posicionamiento Web (SEO)
- **Keywords**: posicionamiento web Toledo, SEO local, optimización Google, posicionamiento en buscadores, agencia SEO Argentina
- **Focus**: Aparecer en primeras posiciones para negocios locales

### Google Ads
- **Keywords**: Google Ads Toledo, publicidad en Google, campaña SEM, PPC profesional, publicidad pagada Argentina
- **Target**: Negocios que quieren campañas SEM efectivas

### Google Business
- **Keywords**: Google Business Toledo, fichas de Google, búsqueda local, optimización Google Maps, visibilidad local Toledo
- **Target**: Negocios locales que necesitan aparecer en Google Maps

### Landing Pages
- **Keywords**: landing page profesional, diseño web conversión, páginas efectivas, landing page Toledo, web design Argentina
- **Target**: Empresas que quieren convertir visitantes en clientes

### Reseñas en Google
- **Keywords**: reseñas Google, gestión de opiniones, reputación online Toledo, estrategia de reviews, opiniones clientes
- **Target**: Negocios con reputación online

### Redes Sociales
- **Keywords**: redes sociales negocios Toledo, community manager, administración Instagram, Facebook marketing, social media strategy
- **Target**: Empresas con presencia en redes

### Ecommerce
- **Keywords**: tienda online Toledo, desarrollo ecommerce, plataforma venta online, tienda virtual Argentina, carrito compras
- **Target**: Negocios que quieren vender online

### Dominio .com.ar
- **Keywords**: dominio .com.ar, compra dominio, registro dominio Argentina, hosting Toledo, nombres de dominio
- **Target**: Negocios que necesitan presencia online con dominio local

### About
- **Keywords**: sobre nosotros, agencia digital Toledo, equipo profesional, experiencia web, consultoría digital Argentina
- **Target**: Generar confianza y autoridad

### Contact
- **Keywords**: contacto Toledo, consulta gratis digital, agencia contacto, servicios web contacto, asesoramiento empresarial
- **Target**: Leads calificados

### Portfolio
- **Keywords**: portfolio proyectos, casos éxito, proyectos web Toledo, portafolio digital, nuestros trabajos
- **Target**: Demostrar experiencia

### Testimonios
- **Keywords**: testimonios clientes, opiniones Toledo Consultora, reseñas servicios, clientes satisfechos, referencias
- **Target**: Prueba social y confianza

### Equipo
- **Keywords**: equipo profesional, especialistas digitales, profesionales Toledo, equipo experiencia, consultores
- **Target**: Autoridad y credibilidad

### Cotizador
- **Keywords**: cotizador online, presupuesto servicios, cotización web, precios servicios digitales, presupuesto diseño
- **Target**: Conversiones

---

## 🔧 Implementación Técnica

### Estructura de Archivos

```
src/
├── hooks/
│   └── useSEO.jsx (Hook personalizado de Helmet)
├── utils/
│   └── seoConfig.js (Configuración SEO global)
└── components/
    ├── Hero.jsx (SEO: Home)
    ├── services.jsx (SEO: Servicios)
    ├── about.jsx (SEO: About)
    ├── contact.jsx (SEO: Contact)
    ├── testimonials.jsx (SEO: Testimonios)
    ├── Team.jsx (SEO: Equipo)
    ├── gallery.jsx (SEO: Portfolio)
    ├── Cotizaciones.jsx (SEO: Cotizador)
    └── PartnerLogos.jsx (SEO: Partners)
```

### useSEO Hook

El hook `useSEO` maneja automáticamente:

✅ Meta tags HTML (description, keywords)
✅ Open Graph (Facebook, WhatsApp, redes sociales)
✅ Twitter Cards
✅ Canonical URLs
✅ Local SEO meta tags (geo.placename, geo.region, ICBM)
✅ Structured Data (JSON-LD)
✅ Robots meta tag

### seoConfig.js

Contiene configuración para:
- **seoConfig**: Metadatos por sección
- **localBusinessSchema**: Schema LocalBusiness para Toledo
- **organizationSchema**: Schema Organization
- **serviceSchema**: Schema Service (dinámico por servicio)

---

## 🌐 Structured Data (Schema.org)

Se implementaron 3 tipos de schema principales:

### 1. LocalBusiness
```json
{
  "name": "Toledo Consultora IT",
  "address": "Toledo, Argentina",
  "telephone": "+54-9-1234-5678",
  "email": "info@toledoconsultora.com",
  "geo": {
    "latitude": "-34.9011",
    "longitude": "-56.1645"
  }
}
```

### 2. Organization
```json
{
  "name": "Toledo Consultora IT",
  "url": "https://toledoconsultora.com",
  "sameAs": ["Facebook", "Instagram", "LinkedIn"]
}
```

### 3. Service
Dinámico para cada servicio (SEO, Google Ads, Landing Pages, etc.)

---

## 📱 Localización Geográfica

Se incluyen meta tags de localización:
- `geo.placename`: Toledo, Argentina
- `geo.region`: AR (Argentina)
- `ICBM`: Coordenadas de Toledo (-34.9011, -56.1645)

Esto ayuda a Google a entender que la agencia opera en Toledo.

---

## 🚀 Uso en Componentes

### Ejemplo 1: Hero (Home)
```jsx
import { useSEO } from "../hooks/useSEO";
import { seoConfig, localBusinessSchema } from "../utils/seoConfig";

export const Hero = () => {
  const heroSEO = {
    ...seoConfig.home,
    schema: localBusinessSchema,
  };
  
  return (
    <>
      {useSEO(heroSEO)}
      <section>...</section>
    </>
  );
};
```

### Ejemplo 2: Services
```jsx
export const Services = (props) => {
  const servicesSEO = seoConfig.services;
  
  return (
    <>
      {useSEO(servicesSEO)}
      <div id="services">...</div>
    </>
  );
};
```

---

## ✅ Checklist de Optimización

- [x] Meta titles únicos por sección (50-60 caracteres)
- [x] Meta descriptions únicos (150-160 caracteres)
- [x] Keywords relevantes por sección
- [x] Open Graph meta tags
- [x] Twitter Card meta tags
- [x] Canonical URLs
- [x] Local SEO meta tags (geo.placename, etc.)
- [x] Structured Data (LocalBusiness, Organization, Service)
- [x] Framer Motion para animaciones (mejora UX)
- [x] Responsive design
- [x] Componentes optimizados

---

## 🎯 Estrategia de Posicionamiento

### Corto Plazo (1-3 meses)
1. Indexar página en Google Search Console
2. Enviar sitemap XML
3. Monitorear keywords locales en GSC
4. Agregar Google Analytics 4

### Mediano Plazo (3-6 meses)
1. Contenido localizado en blog
2. Backlinks locales (directorios Toledo, Argentina)
3. Reseñas en Google Business Profile
4. Optimización de Core Web Vitals

### Largo Plazo (6-12 meses)
1. Posicionamiento en primeras 10 posiciones
2. Aumento de leads calificados
3. Mejora de autoridad de dominio
4. Expansión a otros servicios/localidades

---

## 📊 Métricas para Monitorear

1. **Rankings**: Posición de keywords principales
2. **Tráfico Orgánico**: Visitas desde Google
3. **CTR**: Click Through Rate desde búsqueda
4. **Conversiones**: Leads desde búsqueda orgánica
5. **Core Web Vitals**: LCP, FID, CLS
6. **Impresiones**: Cuántas veces se muestra en búsqueda

---

## 🔗 Próximas Acciones

1. ✅ Implementar Google Analytics 4
2. ✅ Crear Google Search Console
3. ✅ Verificar Google Business Profile
4. ✅ Agregar FAQ Schema
5. ✅ Crear contenido blog con keywords locales
6. ✅ Obtener backlinks locales
7. ✅ Optimizar imágenes (alt text, compresión)
8. ✅ Implementar breadcrumbs schema

---

## 📝 Notas Técnicas

- **Helmet Version**: v6.1.0 (react-helmet)
- **Framer Motion**: v12.6.2
- **React Router**: v7.5.0
- **Responsive Breakpoints**: 768px (tablet), 480px (mobile)
- **Idioma**: Español (es_AR)

---

**Actualizado**: Diciembre 2025
**Responsable**: Toledo Consultora IT
**Status**: ✅ Implementación Completa
