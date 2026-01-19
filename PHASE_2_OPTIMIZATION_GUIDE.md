# GUÍA DE IMPLEMENTACIÓN - FASE 2 (PRÓXIMAS OPTIMIZACIONES)

## 🎯 OBJETIVOS FASE 2

Después de medir los resultados de Fase 1, implementar estas optimizaciones para alcanzar **95+ Mobile / 98+ Desktop**.

---

## 📦 PHASE 2.1: Code Splitting y Dynamic Imports

### Problema
React está empaquetando TODOS los componentes en un único bundle `main.chunk.js` (~500KB+).
Esto significa el usuario descarga código para secciones que no ve inicialmente.

### Solución: React.lazy() + Suspense

#### 1. Crear componentes lazy en App.jsx

```jsx
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Componentes críticos (se cargan de inmediato)
import Header from './components/header';
import Hero from './components/Hero';
import Navigation from './components/navigation';

// Componentes diferidos (se cargan bajo demanda)
const Services = lazy(() => import('./components/services'));
const Gallery = lazy(() => import('./components/gallery'));
const Testimonials = lazy(() => import('./components/testimonials'));
const Contact = lazy(() => import('./components/contact'));
const Team = lazy(() => import('./components/Team'));

// Loading Fallback
const LoadingSpinner = () => (
  <div style={{ padding: '40px', textAlign: 'center' }}>
    <div className="spinner"></div>
  </div>
);

export function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Header />
      <Hero />
      
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Services />} />
          <Route path="/portfolio" element={<Gallery />} />
          <Route path="/testimonios" element={<Testimonials />} />
          <Route path="/equipo" element={<Team />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
```

#### 2. Optimizar renderizado en viewport (Intersection Observer)

```jsx
import { useInView } from 'react-intersection-observer';

export function Services() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true // Solo renderizar una vez
  });

  return (
    <section ref={ref}>
      {inView ? (
        // Renderizar contenido SOLO si está visible
        <expensive-component />
      ) : (
        // Placeholder mientras se carga
        <div style={{ minHeight: '500px' }} />
      )}
    </section>
  );
}
```

### Impacto Estimado
- **JS Bundle**: 500KB → 250KB (-50%)
- **Initial Load**: 3.2s → 1.8s (-43%)
- **TTI**: 4.5s → 2.8s (-37%)

---

## 🖼️ PHASE 2.2: Optimización de Imágenes

### Problema
Las imágenes en `/public/img/` son JPG sin comprimir (~2-3MB cada una).

### Solución: Convertir a WebP + Lazy Loading

#### 1. Instalar herramientas
```bash
npm install next-image sharp
# O usar servicio online: https://convertio.co/jpg-webp/
```

#### 2. Convertir imágenes localmente
```bash
# Usando ImageMagick
convert portfolio.jpg -quality 80 portfolio.webp

# Batch conversion
for file in public/img/**/*.jpg; do
  cwebp -q 80 "$file" -o "${file%.jpg}.webp"
done
```

#### 3. Implementar en HTML/React
```jsx
export function Gallery() {
  return (
    <picture>
      {/* WebP para navegadores modernos */}
      <source srcSet="/img/portfolio.webp" type="image/webp" />
      {/* JPG fallback */}
      <img 
        src="/img/portfolio.jpg" 
        alt="Portfolio"
        loading="lazy"
        width="1200"
        height="800"
      />
    </picture>
  );
}
```

#### 4. Usar CDN para imágenes (Cloudinary, ImageKit)
```jsx
// Instalación
npm install next-image-export-optimizer

// Uso
import OptimizedImage from 'next-image-export-optimizer';

<OptimizedImage
  src="/img/portfolio.jpg"
  alt="Portfolio"
  width={1200}
  height={800}
  priority={false} // lazy load
/>
```

### Impacto Estimado
- **Tamaño de imágenes**: 3MB → 600KB (-80%)
- **LCP**: 3.2s → 2.1s (-34%)
- **FCP**: 2.8s → 1.9s (-32%)

---

## 🎨 PHASE 2.3: CSS Optimization

### Problema
CSS crítico está siendo deferido, causando Flash of Unstyled Content (FOUC).

### Solución: Critical CSS Inline + Defer Non-Critical

#### 1. Extraer CSS crítico
```bash
npm install critical --save-dev
```

#### 2. Configurar en package.json
```json
{
  "scripts": {
    "prebuild": "critical public/index.html --base ./ --inline --minify > critical.css"
  }
}
```

#### 3. Implementar en index.html
```html
<!DOCTYPE html>
<html>
<head>
  <!-- CSS CRÍTICO INLINE (evita render blocking) -->
  <style>
    /* Colores, tipografía, grid layouts */
    body { 
      font-family: Montserrat; 
      color: #333; 
    }
    .hero { 
      background: linear-gradient(...); 
    }
    /* ... resto de CSS crítico */
  </style>
  
  <!-- CSS NO CRÍTICO DEFERIDO -->
  <link rel="preload" href="/styles/non-critical.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="/styles/non-critical.css"></noscript>
</head>
```

### Impacto Estimado
- **CSS Render Blocking**: 400ms → 50ms (-87%)
- **FCP**: 2.8s → 1.4s (-50%)

---

## 🔧 PHASE 2.4: Minificación y Compression

### 1. Habilitar Gzip/Brotli en servidor
```javascript
// vercel.json
{
  "buildCommand": "npm run build",
  "env": {
    "NEXT_PUBLIC_ANALYTICS_ID": "@o_example_id"
  }
}

// netlify.toml
[build]
  command = "npm run build"

[[headers]]
  for = "/*"
  [headers.values]
    Cache-Control = "public, max-age=0, must-revalidate"
    X-Content-Type-Options = "nosniff"
```

### 2. Treeshaking de dependencias
```javascript
// babel.config.js
module.exports = {
  presets: [
    ['@babel/preset-react', { useBuiltIns: true }]
  ]
};

// package.json
{
  "sideEffects": false, // Habilita treeshaking
  "main": "lib/index.js",
  "exports": {
    ".": {
      "module": "./lib/index.esm.js",
      "require": "./lib/index.cjs.js"
    }
  }
}
```

### 3. Remover librerías innecesarias
```bash
# Analizar bundle
npm install --save-dev webpack-bundle-analyzer

# Generar reporte
npm run analyze

# Remover: 
# - moment (usar date-fns)
# - lodash (usar funciones nativas)
# - jQuery (usar vanilla JS)
```

### Impacto Estimado
- **JS Bundle**: 250KB → 180KB (-28%)
- **Tiempo de parsing**: 1.2s → 0.6s (-50%)

---

## 📊 PHASE 2.5: Caching y Service Worker

### 1. Configurar Service Worker
```javascript
// public/service-worker.js
const CACHE_VERSION = 'v1';
const URLS_TO_CACHE = [
  '/',
  '/index.html',
  '/static/css/main.css',
  '/static/js/main.chunk.js',
  '/img/hero.webp',
  '/img/logo.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => {
      return cache.addAll(URLS_TO_CACHE);
    })
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
```

### 2. Registrar en index.html
```javascript
// index.js
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js');
  });
}
```

### 3. Configurar cache headers
```javascript
// vercel.json
{
  "headers": [
    {
      "source": "/static/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/img/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=604800"
        }
      ]
    }
  ]
}
```

### Impacto Estimado
- **Repeat visits**: 3.2s → 0.8s (-75%)
- **Offline functionality**: ✅ Disponible

---

## 🎯 MÉTRICAS ESPERADAS DESPUÉS DE FASE 2

| Métrica | Fase 1 | Fase 2 | Meta |
|---------|--------|--------|------|
| **FCP** | 1.5s | 0.9s | < 1.0s ✅ |
| **LCP** | 2.1s | 1.2s | < 2.5s ✅ |
| **CLS** | 0.08 | 0.05 | < 0.1 ✅ |
| **TTI** | 3.8s | 2.2s | < 3.5s ✅ |
| **Mobile Score** | 75-80 | **92-96** | > 90 ✅ |
| **Desktop Score** | 95-98 | **98-99** | > 95 ✅ |

---

## ✅ CHECKLIST DE IMPLEMENTACIÓN

### Code Splitting
- [ ] Instalar React.lazy
- [ ] Crear componentes lazy por ruta
- [ ] Agregar Suspense fallback
- [ ] Probar que el bundle se divide

### Image Optimization
- [ ] Convertir a WebP
- [ ] Agregar lazy="lazy"
- [ ] Configurar picture tags
- [ ] Probar en PageSpeed

### CSS Optimization
- [ ] Extraer CSS crítico
- [ ] Inline en HTML
- [ ] Defer CSS no-crítico
- [ ] Validar FOUC

### Caching
- [ ] Registrar Service Worker
- [ ] Configurar cache headers
- [ ] Probar offline
- [ ] Verificar repeat visits

---

## 📞 PRUEBAS Y VALIDACIÓN

### Antes de Deploy
```bash
# 1. Build local
npm run build

# 2. Probar localmente
npm run serve

# 3. Analizar bundle
npm run analyze

# 4. Verificar Lighthouse
lighthouse http://localhost:3000 --chrome-flags="--headless"
```

### Post-Deploy
```bash
# Verificar en PageSpeed Insights
https://pagespeed.web.dev/?url=https://toledoconsultora.com

# Monitorear con Sentry
https://sentry.io/performance/

# Alertas en Search Console
https://search.google.com/search-console
```

---

**Documento creado**: 2026-01-19  
**Próxima revisión**: Después de medir resultados Fase 1
