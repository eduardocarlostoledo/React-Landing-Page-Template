# Checklist de Cumplimiento — OWASP · NIS2 · DORA · GDPR

> **Proyecto:** Toledo Consultora IT — Landing Page
> **Última revisión:** 2026-03-26
> **Responsable:** Eduardo Toledo
> Estado: `[ ]` pendiente · `[x]` cumplido · `[~]` parcial · `[!]` bloqueado

---

## 1. OWASP Top 10 (2021)

### A01 — Control de Acceso Quebrado (Broken Access Control)
- [ ] No se exponen rutas de administración sin autenticación
- [ ] Los roles de usuario no son modificables desde el cliente (localStorage, cookies sin firma)
- [ ] Las rutas protegidas redirigen al login si el token es inválido o ausente
- [ ] No hay referencias directas a objetos (IDs) sin validar permisos en backend
- [ ] Las operaciones CRUD validan que el usuario sea dueño del recurso

### A02 — Fallas Criptográficas (Cryptographic Failures)
- [ ] Toda comunicación va por HTTPS (TLS 1.2 mínimo, preferir TLS 1.3)
- [ ] Las contraseñas se hashean con bcrypt / argon2 (no MD5 ni SHA-1 plano)
- [ ] Los tokens JWT usan algoritmo RS256 o HS256 con secreto fuerte (>256 bits)
- [ ] No se almacenan datos sensibles en localStorage sin cifrar
- [ ] Las variables de entorno con secretos nunca se exponen al frontend

### A03 — Inyección (Injection)
- [ ] Todas las consultas SQL usan prepared statements / ORM (Sequelize)
- [ ] Las entradas de usuario se sanitizan antes de procesar (no solo en cliente)
- [ ] No se usa `eval()`, `Function()` ni `innerHTML` con datos externos
- [ ] Los inputs del formulario de contacto y cotización tienen validación server-side
- [ ] Se aplica escape de caracteres especiales en respuestas HTML

### A04 — Diseño Inseguro (Insecure Design)
- [ ] Se aplicó threat modeling en el flujo de cotización y suscripción
- [ ] El sistema de roles (si aplica) fue diseñado con principio de mínimo privilegio
- [ ] Los flujos críticos (pago, suscripción) tienen límites de intentos

### A05 — Configuración de Seguridad Incorrecta (Security Misconfiguration)
- [x] Headers de seguridad configurados en `public/_headers` (CSP, HSTS, X-Frame-Options)
- [x] `security.txt` disponible en `/.well-known/security.txt`
- [ ] Netlify no expone archivos sensibles (`.env`, `package.json`) al público
- [ ] Las dependencias de npm están auditadas (`npm audit`)
- [ ] No hay puertos o servicios innecesarios expuestos en Railway

### A06 — Componentes Vulnerables y Desactualizados
- [ ] `npm audit` sin vulnerabilidades críticas o altas
- [ ] Dependencias actualizadas en los últimos 90 días
- [ ] Se usa Dependabot o Renovate para alertas automáticas
- [ ] Las versiones de Node.js en Railway son LTS activas

### A07 — Fallas de Identificación y Autenticación
- [ ] Los tokens de sesión expiran (access token corto, refresh token largo)
- [ ] Se implementa logout que invalida el token en servidor
- [ ] No se aceptan tokens firmados con el algoritmo `none`
- [ ] Los enlaces de recuperación de contraseña expiran en 15 minutos

### A08 — Fallas en Software e Integridad de Datos
- [ ] El proceso de build en Netlify usa `npm ci` (no `npm install`)
- [ ] Los webhooks externos (EmailJS, Twilio) validan firma de origen
- [ ] No se deserializan objetos arbitrarios del cliente

### A09 — Fallas en Registro y Monitoreo
- [ ] Los errores 4xx y 5xx se registran con contexto (sin datos personales)
- [ ] Hay alertas configuradas para picos de error en Railway
- [ ] Los logs no contienen contraseñas, tokens ni datos de tarjeta

### A10 — Server-Side Request Forgery (SSRF)
- [ ] Las URLs aceptadas de usuario se validan contra una lista blanca
- [ ] El backend no hace fetch a URLs arbitrarias enviadas por el cliente

---

## 2. NIS2 — Directiva de Seguridad de Redes y Sistemas (UE 2022/2555)

> Aplica a entidades que prestan servicios digitales en la UE. Vigente desde oct. 2024.

### Gestión de Riesgos
- [ ] Existe un inventario de activos digitales (repos, servicios, APIs, dominios)
- [ ] Se documentan los riesgos identificados y su nivel de criticidad
- [ ] Hay un plan de mitigación por cada riesgo alto/crítico
- [ ] La evaluación de riesgos se revisa al menos cada 12 meses

### Seguridad de la Cadena de Suministro
- [ ] Se auditaron las dependencias de terceros (npm, APIs externas)
- [ ] Los proveedores clave (Netlify, Railway, Cloudinary, EmailJS) tienen SLAs documentados
- [ ] Se evalúa la postura de seguridad de cada proveedor antes de integrarlo

### Gestión de Incidentes
- [ ] Existe un procedimiento documentado de respuesta a incidentes
- [ ] Los incidentes significativos se notifican en ≤ 24h a la autoridad competente (INCIBE en España)
- [ ] Hay un registro histórico de incidentes con causa raíz y resolución
- [ ] Se realizan simulacros de incidente al menos una vez al año

### Continuidad del Negocio
- [ ] Existe un plan de continuidad (BCP) para los servicios críticos
- [ ] Los backups de base de datos se ejecutan diariamente y se prueban mensualmente
- [ ] El RTO y RPO están definidos por servicio

### Criptografía y Control de Acceso
- [ ] Se usa MFA para acceso a Railway, Netlify, Cloudinary y repositorios
- [ ] Las credenciales de producción están en un gestor de secretos (no en `.env` del repo)
- [ ] El acceso a sistemas de producción está limitado por IP o VPN

### Formación y Concienciación
- [ ] El equipo recibió formación en phishing e ingeniería social en los últimos 12 meses
- [ ] Existe una política de uso aceptable de sistemas documentada

---

## 3. DORA — Digital Operational Resilience Act (UE 2022/2554)

> Aplica principalmente a entidades financieras y sus proveedores TIC. Vigente desde ene. 2025.
> *Si Toledo Consultora atiende clientes del sector financiero, estos requisitos aplican a los sistemas entregados.*

### Gestión de Riesgos TIC
- [ ] Existe un marco de gestión de riesgos TIC documentado
- [ ] Los sistemas críticos tienen análisis de impacto (BIA) realizado
- [ ] Los activos TIC están clasificados por criticidad

### Pruebas de Resiliencia Operativa
- [ ] Se realizan pruebas de penetración al menos una vez al año
- [ ] Las pruebas de resiliencia avanzadas (TLPT) están planificadas si aplica
- [ ] Los resultados de las pruebas generan un plan de remediación con fechas

### Gestión de Incidentes TIC
- [ ] Los incidentes TIC graves se clasifican según criterios DORA
- [ ] Existe un proceso de notificación a clientes afectados en ≤ 4h
- [ ] Se mantiene un registro de incidentes TIC por al menos 5 años

### Gestión del Riesgo de Terceros TIC
- [ ] Los contratos con proveedores cloud incluyen cláusulas de auditabilidad
- [ ] Se evalúa la concentración de riesgo por proveedor (single point of failure)
- [ ] Hay un registro de todos los proveedores TIC con nivel de criticidad

---

## 4. GDPR — Reglamento General de Protección de Datos (UE 2016/679)

### Base Legal y Consentimiento
- [x] Existe Política de Privacidad accesible desde todas las páginas (`/politica-de-privacidad`)
- [x] Existe Aviso Legal (`/aviso-legal`)
- [x] Existe Política de Cookies (`/politica-de-cookies`)
- [x] El banner de cookies permite aceptar/rechazar por categoría (CookieConsent implementado)
- [ ] Las cookies no esenciales NO se cargan antes de obtener consentimiento
- [ ] El consentimiento queda registrado con timestamp y versión del texto aceptado
- [ ] Hay una base legal documentada para cada tratamiento de datos (art. 6 RGPD)

### Derechos de los Interesados
- [ ] Existe un canal para ejercer derechos ARCO-POL (acceso, rectificación, cancelación, oposición, portabilidad, olvido, limitación)
- [ ] Los formularios de contacto informan del responsable del tratamiento y finalidad
- [ ] El tiempo de respuesta a solicitudes de derechos es ≤ 30 días

### Registro de Actividades de Tratamiento (RAT)
- [ ] Se mantiene un RAT actualizado con todos los tratamientos de datos personales
- [ ] El RAT incluye: finalidad, base legal, categorías de datos, destinatarios, plazos de conservación

### Transferencias Internacionales
- [ ] Se identificaron los proveedores que transfieren datos fuera de la UE (ej. EmailJS, Cloudinary)
- [ ] Las transferencias internacionales tienen garantías adecuadas (SCCs, adequacy decision)

### Seguridad del Tratamiento (art. 32)
- [ ] Los datos personales en tránsito van cifrados (HTTPS)
- [ ] Los datos personales en reposo están cifrados en base de datos
- [ ] El acceso a datos personales está restringido a quienes lo necesitan (need-to-know)
- [ ] Se realizan evaluaciones de impacto (DPIA) para tratamientos de alto riesgo

### Notificación de Brechas
- [ ] Las brechas de seguridad se notifican a la AEPD en ≤ 72h si hay riesgo para los interesados
- [ ] Existe un procedimiento interno de detección y escalado de brechas

### Formularios y Datos Recogidos
- [ ] El formulario de contacto tiene checkbox de aceptación de política de privacidad
- [ ] El formulario de cotización informa del uso de los datos ingresados
- [ ] Los datos del formulario no se almacenan más tiempo del necesario
- [ ] EmailJS no almacena datos sensibles más allá de lo necesario para el envío

---

## Resumen de Estado

| Marco | Ítems totales | Cumplidos | Parciales | Pendientes |
|---|---|---|---|---|
| OWASP Top 10 | 30 | — | — | — |
| NIS2 | 18 | — | — | — |
| DORA | 12 | — | — | — |
| GDPR | 24 | — | — | — |
| **Total** | **84** | — | — | — |

> Actualizar la tabla tras cada revisión de auditoría.

---

## Próximos pasos prioritarios

| # | Tarea | Estado | Notas |
|---|---|---|---|
| 1 | `npm audit fix` | ✅ Hecho | 65 → 25 vulns. 3 críticos eliminados. 12 high pendientes requieren `--force` (breaking changes — revisar manualmente) |
| 2 | Cookies no se cargan antes del consentimiento | ✅ Verificado | CookieConsent bloquea gtag y EmailJS correctamente. Sin scripts hardcodeados en index.html |
| 3 | Activar MFA en Railway, Netlify y Cloudinary | ⚠️ Acción manual | Hacerlo en cada plataforma: Settings → Security → MFA |
| 4 | Crear RAT | ✅ Hecho | Ver `RAT_REGISTRO_ACTIVIDADES_TRATAMIENTO.md` |
| 5 | Documentar procedimiento de respuesta a incidentes | ✅ Hecho | Ver `INCIDENT_RESPONSE_PROCEDURE.md` |
| 6 | Checkbox de privacidad en formulario de contacto | ✅ Ya existía | Implementado en contact.jsx líneas 183-204 |

### Pendiente de acción manual (tú)
- **MFA:** Railway → Account Settings → Security · Netlify → User Settings → Security · Cloudinary → Account → Security
- **12 vulnerabilidades high restantes:** revisar `npm audit` y evaluar cada una antes de `--force`
- **Completar campos del RAT:** CIF/DNI del responsable, datos del DPO si aplica
