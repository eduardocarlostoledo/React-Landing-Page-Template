# Cambios requeridos en App.jsx / index.html

## 1. Remover GTM del index.html (si está hardcodeado)

Buscá en public/index.html cualquier bloque como este y ELIMINALO:
```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){...})</script>
<!-- End Google Tag Manager -->
```

GTM ahora se carga dinámicamente SOLO con consentimiento (ver CookieConsent.jsx)

## 2. Agregar CookieConsent en App.jsx

```jsx
import CookieConsent from "./components/CookieConsent/CookieConsent";

function App() {
  return (
    <div>
      {/* ... tu app ... */}
      <CookieConsent />
    </div>
  );
}
```

## 3. Instalar dependencia

```bash
npm install js-cookie
```

## 4. Crear página /politica-de-privacidad

Mínimo GDPR requiere:
- Qué datos se recopilan (analytics)
- Con qué finalidad
- Por cuánto tiempo
- Derechos del usuario (acceso, supresión, portabilidad)
- Datos de contacto del responsable del tratamiento

## CVSS scoring correcto para este sitio

Este es un sitio ESTÁTICO sin autenticación de usuarios.
Los scores CVSS deben reflejar el contexto real:

| Hallazgo | CVSS v4.0 correcto | Justificación |
|----------|-------------------|---------------|
| CSP ausente | 5.3 | Sin backend, impacto limitado a UI redressing |
| X-Frame-Options ausente | 4.6 | Clickjacking posible pero sin sesiones que secuestrar |
| GTM sin consentimiento | N/A (regulatorio, no técnico) | Es infracción GDPR, no vulnerabilidad explotable |
| security.txt ausente | 2.1 | Sin impacto técnico directo, solo divulgación responsable |
| robots.txt info disclosure | 2.7 | Bajo impacto en sitio sin rutas admin reales |

Un score 7.7 para cookies en un sitio sin autenticación es incorrecto.
VC:H (High Confidentiality) requiere que haya datos confidenciales en riesgo.
