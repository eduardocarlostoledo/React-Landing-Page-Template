# Auditoría de Seguridad — AltoImpacto / GlobalHomeGroup
**Fecha de relevamiento:** 2026-03-26
**Proyecto:** spa-alto-impacto v0.0.0
**Stack:** React 19 + Vite 6, Cloudinary, EmailJS, Axios, React Router v7
**Backend:** `https://globalhomegroup-backend-production.up.railway.app` (Railway)
**Estado del proyecto:** Activo como sitio vidriera. Sin financiamiento activo.

---

## Resumen ejecutivo

El proyecto es un SPA frontend que conecta a un backend propio en Railway. Funciona como vitrina de servicios inmobiliarios, constructora y consultora. No tiene sistema de autenticación implementado. Las rutas de administración están expuestas públicamente sin protección.

---

## Stack de dependencias (estado al 2026-03-26)

```json
{
  "react": "^19.0.0",
  "react-router-dom": "^7.5.3",
  "axios": "^1.9.0",
  "@cloudinary/react": "^1.14.1",
  "@cloudinary/url-gen": "^1.21.0",
  "@emailjs/browser": "^4.4.1",
  "framer-motion": "^12.7.3",
  "gsap": "^3.12.7",
  "react-helmet": "^6.1.0",
  "sweetalert2": "^11.6.13",
  "vite": "^6.2.0"
}
```

Sin herramientas de auditoría de seguridad en devDependencies (no hay eslint-plugin-security, ni npm audit configurado en CI).

---

## Variables de entorno (.env)

| Variable | Propósito | Exposición |
|----------|-----------|------------|
| `VITE_SERVICE_ID` | EmailJS Service ID | Expuesta en bundle de producción (prefijo VITE_) |
| `VITE_PUBLIC_KEY` | EmailJS Public Key | Expuesta en bundle de producción |
| `REACT_APP_PRIVATE_KEY` | EmailJS Private Key | Presente en .env, NO expuesta en bundle (sin prefijo VITE_) |
| `VITE_TEMPLATE_ID_ADMIN` | Template email admin | Expuesta en bundle |
| `VITE_TEMPLATE_ID_CLIENT` | Template email cliente | Expuesta en bundle |
| `VITE_API_URL` | URL backend API | Actualmente apunta a `http://localhost:3001` (dev) |

**Nota:** La URL de producción `https://globalhomegroup-backend-production.up.railway.app` está comentada en el .env. El .env está en .gitignore (línea 76).

---

## Rutas de la aplicación (App.jsx)

| Ruta | Componente | Acceso | Protegida |
|------|-----------|--------|-----------|
| `/` | Home | Público | N/A |
| `/consultora` | Consultora | Público | N/A |
| `/constructora` | Constructora | Público | N/A |
| `/inmobiliaria` | Inmobiliaria | Público | N/A |
| `/contacto` | Contact | Público | N/A |
| `/landing-construi` | LandingConstrui | Público | N/A |
| `/administrar-propiedades` | Admin | **Admin** | **NO** |
| `/propiedades/:id` | DetallePropiedad | Público | N/A |
| `/administrar-planes` | AdminPlanes + AdminConstrucciones | **Admin** | **NO** |
| `/planes/:id` | DetallePlan | Público | N/A |
| `/construcciones/:id` | DetalleModeloConstruccion | Público | N/A |

---

## Hallazgos de seguridad

### CRITICO

#### C1 — Rutas de administración sin autenticación
- **Archivos:** `src/App.jsx:73`, `src/App.jsx:77`
- **Descripción:** Las rutas `/administrar-propiedades` y `/administrar-planes` son accesibles por cualquier persona que conozca la URL. Permiten operaciones CRUD completas (crear, editar, eliminar propiedades, planes y modelos de construcción).
- **OWASP:** A01 Broken Access Control, A07 Auth/Session Failures
- **Estado:** Sin remediar

#### C2 — Cero sistema de autenticación
- **Descripción:** No existe ningún mecanismo de login, JWT, sesión, o validación de permisos en todo el codebase. Las llamadas a la API admin se realizan sin headers de autorización.
- **Archivos:** `src/components/Admin.jsx:123-134`, `src/components/AdminConstrucciones.jsx:86`, `src/components/AdminPlanes.jsx:62`
- **OWASP:** A04 Insecure Design, A07
- **Estado:** Sin remediar

#### C3 — Credenciales EmailJS expuestas
- **Archivos:** `.env` (líneas 1-5)
- **Descripción:** `VITE_SERVICE_ID`, `VITE_PUBLIC_KEY` y `VITE_TEMPLATE_ID_*` son visibles en el bundle de producción por el prefijo `VITE_`. La `REACT_APP_PRIVATE_KEY` está en el .env pero no se inyecta en el bundle.
- **OWASP:** A02 Cryptographic Failures
- **Estado:** Sin remediar

---

### ALTO

#### A1 — Cloudinary cloud name hardcodeado + unsigned preset
- **Archivo:** `src/components/CloudinaryUploader.jsx:9,25,30`
- **Descripción:** El cloud name `djejwcfdc` está hardcodeado. Se usa `unsigned_preset` que permite uploads sin autenticación.
- **Riesgo:** Cualquiera puede hacer uploads ilimitados al bucket de Cloudinary de la cuenta.
- **OWASP:** A05 Security Misconfiguration
- **Estado:** Sin remediar

#### A2 — Sin CSRF en formularios
- **Archivos:** `src/components/contact.jsx`, todos los formularios admin
- **Descripción:** No se usan tokens CSRF en ningún formulario. No se verifica origen en las llamadas a la API.
- **OWASP:** A01
- **Estado:** Sin remediar

#### A3 — Sin validación de archivos en uploads
- **Archivos:** `src/components/Admin.jsx:86-90`, `src/components/AdminConstrucciones.jsx:48-52`, `src/components/AdminPlanes.jsx:45-49`
- **Descripción:** Solo validación client-side con `accept="image/*"`. Sin verificación de MIME type real, sin límite de tamaño, sin validación en backend visible.
- **OWASP:** A08 Software/Data Integrity
- **Estado:** Sin remediar

#### A4 — Sin rate limiting en formulario de contacto
- **Archivo:** `src/components/contact.jsx`
- **Descripción:** El formulario de contacto envía emails via EmailJS sin ningún mecanismo de throttling, CAPTCHA o protección anti-spam.
- **OWASP:** A04 Insecure Design
- **Estado:** Sin remediar

#### A5 — Sin validación de parámetros en rutas dinámicas
- **Archivos:** `src/components/DetallePropiedad.jsx:10`, `src/components/DetallePlan.jsx:10`, `src/components/DetalleModeloConstruccion.jsx:10`
- **Descripción:** El `id` de `useParams()` se pasa directamente a la URL de la API sin verificar que sea numérico o válido.
- **OWASP:** A03 Injection
- **Estado:** Sin remediar

---

### MEDIO

#### M1 — console.log de variables de entorno en producción
- **Archivo:** `src/components/contact.jsx:21,38,47`
- **Descripción:** `console.log("iniciando envio email", import.meta.env.VITE_SERVICE_ID)` — loguea el Service ID de EmailJS en la consola del navegador.
- **OWASP:** A09 Logging/Monitoring
- **Estado:** Sin remediar

#### M2 — Datos de contacto hardcodeados en múltiples componentes
- **Archivos:** `src/components/contact.jsx:84,195,207`, `src/components/DetallePropiedad.jsx:35`, `src/components/DetalleModeloConstruccion.jsx:36`, `src/components/DetallePlan.jsx:38`
- **Descripción:** Número de WhatsApp `542216146117`, email `info@globalhomegroup.com.ar` y dirección física repetidos en varios archivos. Dificulta el mantenimiento y aumenta superficie de exposición.
- **Estado:** Sin remediar

#### M3 — Sin CORS explícito en frontend
- **Descripción:** No se detectó configuración de CORS desde el cliente. Depende enteramente de la configuración del backend en Railway.
- **Estado:** No evaluado (requiere inspección del backend)

#### M4 — Dependencias sin auditoría
- **Archivo:** `package.json`
- **Descripción:** No hay `npm audit` en scripts ni en CI. No hay herramientas de análisis estático de seguridad.
- **Estado:** Sin remediar

---

### BAJO / INFORMATIVO

#### B1 — API pública de geolocalización argentina sin validación de input
- **Archivo:** `src/components/GeorefLocationSelector.jsx:18,43-44,73-74`
- **Descripción:** Parámetro `selectedProvincia` enviado a `apis.datos.gob.ar` sin sanitizar. Riesgo bajo ya que es API pública sin auth.
- **Estado:** Sin remediar

#### B2 — Sin localStorage/sessionStorage con datos sensibles
- **Descripción:** No se detectó almacenamiento client-side de datos sensibles. Estado positivo.
- **Estado:** OK

---

## Mapeo de compliance

### OWASP Top 10 2021

| ID | Nombre | Estado |
|----|--------|--------|
| A01 | Broken Access Control | FALLA — rutas admin expuestas |
| A02 | Cryptographic Failures | FALLA — credenciales en .env expuestas en bundle |
| A03 | Injection | RIESGO — sin validación de params |
| A04 | Insecure Design | FALLA — sin sistema de auth, sin rate limiting |
| A05 | Security Misconfiguration | FALLA — Cloudinary unsigned, cloud name hardcodeado |
| A06 | Vulnerable Components | RIESGO — sin npm audit |
| A07 | Identification/Auth Failures | FALLA — sin autenticación |
| A08 | Software/Data Integrity | RIESGO — sin validación de uploads |
| A09 | Security Logging/Monitoring | PARCIAL — hay logging pero expone datos |
| A10 | SSRF | N/A — no aplica al frontend |

### GDPR

| Artículo | Requisito | Estado |
|---------|-----------|--------|
| Art. 6 | Base legal para procesar datos | No documentada |
| Art. 13/14 | Política de privacidad | No encontrada en el sitio |
| Art. 25 | Privacy by design | Falla — sin minimización de datos |
| Art. 32 | Seguridad del tratamiento | Falla — formulario sin CAPTCHA ni rate limiting |
| Art. 33 | Notificación de brechas | Sin mecanismo definido |
| Art. 17 | Derecho al olvido | Sin implementación |

### NIS2

| Control | Estado |
|---------|--------|
| Gestión de riesgos (Art. 21) | Sin evaluación formal |
| Seguridad cadena de suministro | Falla — sin auditoría de dependencias |
| Control de acceso | Falla crítica — admin sin auth |
| Cifrado en tránsito | Parcial — HTTPS en producción, HTTP en dev |
| Continuidad operacional | No evaluado desde frontend |

### DORA

**No aplica.** DORA es específico para entidades del sector financiero regulado (bancos, aseguradoras, fintechs). GlobalHomeGroup opera en real estate/construcción, fuera del alcance de DORA.

---

## Acciones pendientes

| Prioridad | Acción | Responsable | Estado |
|-----------|--------|-------------|--------|
| CRITICA | Proteger rutas `/administrar-*` con autenticación | Dev | Pendiente |
| CRITICA | Rotar credenciales EmailJS (service_id, public_key) | Dev/Cliente | Pendiente |
| ALTA | Agregar CAPTCHA al formulario de contacto | Dev | Pendiente |
| ALTA | Eliminar console.log de variables de entorno | Dev | Pendiente |
| ALTA | Validar IDs de ruta antes de fetch | Dev | Pendiente |
| ALTA | Validar tipo y tamaño de archivos en uploads | Dev | Pendiente |
| MEDIA | Centralizar datos de contacto en un archivo de config | Dev | Pendiente |
| MEDIA | Configurar npm audit en scripts | Dev | Pendiente |
| MEDIA | Agregar política de privacidad si recolectan datos personales | Cliente | Pendiente |
| BAJA | Revisar configuración CORS del backend | Dev | Pendiente |

---

## Notas del relevamiento

- El backend en Railway no fue auditado en este relevamiento (solo frontend).
- El proyecto usa la URL de producción del backend comentada en `.env`. En desarrollo apunta a `localhost:3001`.
- El proyecto fue relevado con el email `info@globalhomegroup.com.ar` hardcodeado, confirmando que este repo corresponde al proyecto GlobalHomeGroup.
- Contexto: proyecto desfinanciado, operando como vitrina. Las correcciones deben priorizarse por impacto/esfuerzo considerando recursos limitados.
