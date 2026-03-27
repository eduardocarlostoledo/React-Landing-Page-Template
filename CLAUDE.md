# Toledo Consultora IT — CLAUDE.md

> Proyecto principal: Landing page consultora IT con múltiples verticales de negocio.
> Empresa: **Eduardo Toledo** — Especialista en Software Engineering + Ciberseguridad (España, mercado europeo)

---

## Stack técnico

| Capa | Tecnología |
|---|---|
| Framework | React 18 + React Router v7 |
| Animaciones | Framer Motion, GSAP |
| SEO | react-helmet, sitemap generado vía `generate-sitemap.js` |
| Email | @emailjs/browser |
| UI helpers | SweetAlert2, react-countup, react-spinners, react-intersection-observer |
| Datos | `src/data/data.json` (fuente principal de contenido) |
| Deploy | Netlify (`netlify.toml`) |
| Legal/CSP | `public/_headers`, `public/.well-known/security.txt` |

## Scripts útiles

```bash
npm start                  # dev
npm run build              # producción (pre-build: genera sitemap)
npm run validate-classes   # detecta clases CSS duplicadas
npm run build-and-test     # pipeline completo antes de deploy
```

## Estructura de componentes

- `src/components/` — componentes de sección de la landing
- `src/pages/` — páginas independientes (Ciberseguridad)
- `src/styles/` — CSS puro por componente
- `src/data/data.json` — contenido editable (servicios, textos, galería, etc.)

## Archivos basura a ignorar

Los archivos `00_*.txt`, `VERDIORE_*.md`, `OPTIMIZATION_*.md`, `RESUMEN_*.md`, etc. en la raíz son migajas de sesiones anteriores de Copilot. **No los leas salvo que yo lo pida explícitamente.** La fuente de verdad es el código.

---

## Sub-contextos por vertical de negocio

### 🌐 [WEB] Desarrollo Web & Presencia Digital

**Qué incluye:** diseño web, SEO local, Google Ads, Google Business, reseñas, redes sociales, optimización, landing pages.

**Rutas relevantes:**
```
/about-comprar-dominio       → AboutComprarDominio.jsx
/about-google-ads            → AboutGoogleAds.jsx
/about-reseñas               → AboutReseñas.jsx
/about-posicionamiento       → AboutPosicionamiento.jsx
/about-google-business       → AboutGoogleBussiness.jsx
/about-optimizacion          → AboutOptimizacion.jsx
/about-redes-sociales        → AboutRedesSociales.jsx
/about-landing-page          → AboutLandingPage.jsx
```

**Componentes landing relacionados:**
- `Hero.jsx` — propuesta de valor principal
- `Services.jsx` + `data.json → Services[]` — cards de servicios
- `Asesoramiento.jsx` + `data.json → Asesoramiento[]`
- `HowWeWork.jsx`, `Differentials.jsx`, `Guarantees.jsx`
- `Cotizaciones.jsx`, `DetalleCotizacion.jsx`, `DetalleCotizacionSEO.jsx`
- `LeadMagnet.jsx`, `EBook.jsx`

**Datos editables en:** `src/data/data.json` → keys: `Header`, `Services`, `Asesoramiento`, `Gallery`, `Features`, `Contact`

---

### 🔒 [SEC] Auditoría de Ciberseguridad

**Qué incluye:** auditorías web, NIS2, GDPR, test de vulnerabilidades, seguridad ecommerce. Mercado español y europeo.

**Rutas relevantes:**
```
/cybersecurity-audit-spain   → src/pages/CybersecuritySpain.jsx
/auditoria-de-seguridad-web  → src/pages/AuditoriaSeguridadWeb.jsx
/cumplimiento-nis2           → src/pages/CumplimientoNIS2.jsx
/auditoria-gdpr              → src/pages/AuditoriaGDPR.jsx
/test-de-vulnerabilidades    → src/pages/TestVulnerabilidades.jsx
/seguridad-ecommerce         → src/pages/SeguridadEcommerce.jsx
```

**Componentes relacionados:**
- `SecurityReport/SecurityReport.jsx` — reporte de seguridad
- `GlobalNavbar.jsx` — navbar para páginas internas (no landing)
- `public/.well-known/security.txt` — política de divulgación
- `public/_headers` — headers CSP (A+ en security headers)

**Contexto de negocio:** Normativa UE vigente: NIS2, GDPR, DORA, Cyber Resilience Act. OWASP Top 10. Secure-by-Design.

---

### 🌿 [VERDE] Consultoría Verdiore

**Qué incluye:** línea de consultoría específica Verdiore (branding, servicios y propuesta de valor diferenciados).

**Ruta:** `/verdiore` → `src/components/verdiore.jsx`

**Referencia de documentación de sesiones anteriores** (si hace falta contexto histórico):
- `VERDIORE_INDICE.md`, `VERDIORE_README.md`, `VERDIORE_REFERENCIA_TECNICA.md`

---

### ⚙️ [S55] Sistema 5-5

**Qué incluye:** metodología/producto propio de la consultora (Sistema 5-5), con suscripción, confirmación y lead magnet.

**Rutas:**
```
/sistema-5-5                 → src/components/Sistema55.jsx
/confirma-suscripcion        → src/components/ConfirmaSuscripcion.jsx
/e-book-gratuito             → src/components/EBook.jsx
```

**Flujo:** Landing → LeadMagnet → EBook → ConfirmaSuscripcion
**Email:** vía EmailJS (el service/template ID está en el componente LeadMagnet o EBook)

**Referencia histórica** (si hace falta): `GUIA_USUARIO_SISTEMA_55.md`, `SISTEMA_55_IMPLEMENTACION.md`

---

## Legal & Compliance (páginas de soporte)

```
/terminos-y-condiciones                → TerminosYCondiciones.jsx
/condiciones-de-aceptacion-del-servicio → CondicionesAceptacionServicio.jsx
/politica-de-privacidad                → Politica.jsx
/politica-de-seguridad                 → PoliticaSeguridad.jsx
/politica-de-cookies                   → PoliticaCookies.jsx
/aviso-legal                           → AvisoLegal.jsx
```

Cookie consent: `src/components/CookieConsent/CookieConsent.jsx` — conforme RGPD/LSSI-CE.

---

## Cómo trabajar conmigo

Al iniciar una sesión, dime en qué vertical trabajamos:
- **"modo web"** → foco en desarrollo web y presencia digital
- **"modo seguridad"** → foco en auditorías y páginas `/pages/`
- **"modo verdiore"** → foco en `verdiore.jsx` y su branding
- **"modo sistema 5-5"** → foco en flujo de suscripción y lead magnet

Así no necesito explorar todo el repo antes de ayudarte.
