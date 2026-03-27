# RAT — Registro de Actividades de Tratamiento de Datos Personales

> **Responsable del Tratamiento:** Eduardo Toledo — Toledo Consultora IT
> **CIF/DNI:** [completar]
> **Dirección:** C.52 / 22 – Posadas, Misiones, Argentina
> **Email de contacto:** ventas@toledoconsultora.com
> **Última actualización:** 2026-03-26
> **Versión:** 1.0

Documento exigido por el **art. 30 del RGPD (UE) 2016/679**.
Aplica también como soporte para el cumplimiento de **NIS2** (art. 21) y **DORA** (art. 9).

---

## Actividad 1 — Formulario de Contacto

| Campo | Detalle |
|---|---|
| **Finalidad** | Atender consultas comerciales y responder solicitudes de información |
| **Base legal** | Art. 6.1.b RGPD — ejecución de un contrato / medidas precontractuales |
| **Categorías de datos** | Nombre, email, teléfono (opcional), contenido del mensaje |
| **Categorías de interesados** | Potenciales clientes, visitantes del sitio web |
| **Destinatarios** | EmailJS Inc. (procesador, EEUU) — transferencia bajo SCCs |
| **Transferencia internacional** | Sí — EmailJS (EEUU). Garantía: Cláusulas Contractuales Tipo (SCCs) |
| **Plazo de conservación** | 2 años desde el último contacto, o hasta solicitud de supresión |
| **Medidas de seguridad** | HTTPS/TLS, consentimiento explícito previo (cookie consent), acceso restringido |

---

## Actividad 2 — Formulario de Cotización / Servicios Profesionales

| Campo | Detalle |
|---|---|
| **Finalidad** | Elaborar y enviar presupuestos adaptados a la solicitud del cliente |
| **Base legal** | Art. 6.1.b RGPD — medidas precontractuales a petición del interesado |
| **Categorías de datos** | Nombre, email, empresa (opcional), descripción del proyecto, presupuesto estimado |
| **Categorías de interesados** | Empresas y autónomos que solicitan servicios |
| **Destinatarios** | EmailJS Inc. (procesador) |
| **Transferencia internacional** | Sí — EmailJS (EEUU). Garantía: SCCs |
| **Plazo de conservación** | 5 años (obligación fiscal/mercantil si deriva en contrato) |
| **Medidas de seguridad** | HTTPS/TLS, checkbox de aceptación de política de privacidad obligatorio |

---

## Actividad 3 — Suscripción a Newsletter / Lead Magnet (E-Book)

| Campo | Detalle |
|---|---|
| **Finalidad** | Enviar contenido educativo, actualizaciones y comunicaciones comerciales propias |
| **Base legal** | Art. 6.1.a RGPD — consentimiento explícito del interesado |
| **Categorías de datos** | Email, nombre (opcional) |
| **Categorías de interesados** | Usuarios que descargan el e-book o se suscriben al Sistema 5-5 |
| **Destinatarios** | EmailJS Inc. (procesador) |
| **Transferencia internacional** | Sí — EmailJS (EEUU). Garantía: SCCs |
| **Plazo de conservación** | Hasta que el interesado revoque el consentimiento o solicite baja |
| **Medidas de seguridad** | Confirmación doble opt-in, enlace de baja en cada email |

---

## Actividad 4 — Analytics y Publicidad Web

| Campo | Detalle |
|---|---|
| **Finalidad** | Análisis de audiencia, medición de conversiones y optimización de campañas publicitarias |
| **Base legal** | Art. 6.1.a RGPD — consentimiento explícito (banner de cookies) |
| **Categorías de datos** | Datos de navegación, IP anonimizada, eventos de conversión |
| **Categorías de interesados** | Visitantes del sitio web que otorgaron consentimiento |
| **Destinatarios** | Google LLC (Analytics G-WENNK2M7Y0 / Ads AW-16912032526) — EEUU |
| **Transferencia internacional** | Sí — Google LLC (EEUU). Garantía: SCCs + Google Ads Data Processing Terms |
| **Plazo de conservación** | 26 meses (configuración por defecto Google Analytics 4) |
| **Medidas de seguridad** | Scripts no cargados hasta consentimiento (CookieConsent v1.2), IP anonymization activa |

---

## Actividad 5 — Datos de Clientes con Contrato Activo

| Campo | Detalle |
|---|---|
| **Finalidad** | Prestación del servicio contratado, facturación y cumplimiento de obligaciones legales |
| **Base legal** | Art. 6.1.b RGPD — ejecución del contrato; Art. 6.1.c — obligación legal |
| **Categorías de datos** | Nombre, apellido, empresa, email, teléfono, datos de facturación, datos del proyecto |
| **Categorías de interesados** | Clientes con contrato vigente o finalizado |
| **Destinatarios** | Railway (infraestructura), Cloudinary (imágenes), Siigo (ERP, Colombia — si aplica) |
| **Transferencia internacional** | Railway (EEUU/UE según región), Siigo (Colombia — país sin decisión de adecuación: SCCs) |
| **Plazo de conservación** | 10 años (obligación fiscal/contable en Argentina) / 5 años en España |
| **Medidas de seguridad** | MFA en plataformas, acceso limitado, backups diarios, cifrado en tránsito |

---

## Actividad 6 — Acceso a Sistemas de Producción (Logs)

| Campo | Detalle |
|---|---|
| **Finalidad** | Seguridad, detección de intrusiones y trazabilidad de incidentes |
| **Base legal** | Art. 6.1.f RGPD — interés legítimo (seguridad de los sistemas) |
| **Categorías de datos** | IP de acceso, timestamps, endpoints consultados, user-agent |
| **Categorías de interesados** | Usuarios del sitio web, administradores del sistema |
| **Destinatarios** | Railway (logs de backend), Netlify (logs de build/deploy) |
| **Transferencia internacional** | Railway / Netlify (EEUU). Garantía: SCCs |
| **Plazo de conservación** | 12 meses (logs de acceso), 5 años (logs de incidentes de seguridad) |
| **Medidas de seguridad** | Sin datos personales sensibles en logs, acceso restringido a administradores |

---

## Procesadores de Datos (Sub-encargados)

| Proveedor | País | Servicio | Garantía RGPD |
|---|---|---|---|
| EmailJS Inc. | EEUU | Envío de formularios | SCCs |
| Google LLC | EEUU | Analytics + Ads | SCCs + DPA |
| Netlify Inc. | EEUU | Hosting frontend | SCCs + DPA |
| Railway Corp. | EEUU | Hosting backend + DB | SCCs |
| Cloudinary Ltd. | EEUU/Israel | Almacenamiento imágenes | SCCs |
| Twilio Inc. | EEUU | SMS/WhatsApp (HRM) | SCCs + DPA |
| Siigo S.A.S. | Colombia | ERP (si aplica) | SCCs |

---

## Derechos de los Interesados

Para ejercer los derechos de **Acceso, Rectificación, Supresión, Oposición, Portabilidad o Limitación** del tratamiento:

- **Email:** ventas@toledoconsultora.com
- **Asunto:** `RGPD — Ejercicio de derechos — [tipo de derecho]`
- **Plazo de respuesta:** máximo 30 días naturales
- **Autoridad de control:** AEPD (España) — [aepd.es](https://www.aepd.es) / INCIBE para incidentes

---

## Historial de versiones

| Versión | Fecha | Cambio |
|---|---|---|
| 1.0 | 2026-03-26 | Creación inicial del RAT |
