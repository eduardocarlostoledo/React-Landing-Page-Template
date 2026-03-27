# Procedimiento de Respuesta a Incidentes de Seguridad

> **Organización:** Toledo Consultora IT
> **Responsable:** Eduardo Toledo
> **Última actualización:** 2026-03-26
> **Versión:** 1.0

Cumple con: **RGPD art. 33-34** (notificación de brechas) · **NIS2 art. 23** (notificación de incidentes) · **OWASP** (gestión de incidentes)

---

## 1. Clasificación de Incidentes

| Nivel | Descripción | Ejemplos | Tiempo de respuesta inicial |
|---|---|---|---|
| 🔴 **Crítico** | Servicio caído o brecha de datos confirmada | DB expuesta, defacement, ransomware, exfiltración de datos de clientes | **< 1 hora** |
| 🟠 **Alto** | Vulnerabilidad explotada o acceso no autorizado detectado | Intento de SQLi exitoso, credenciales comprometidas, spike de errores 5xx | **< 4 horas** |
| 🟡 **Medio** | Sospecha de incidente o anomalía sin impacto confirmado | Intentos de acceso repetidos, tráfico anómalo, dependencia vulnerable crítica | **< 24 horas** |
| 🟢 **Bajo** | Evento de seguridad menor sin impacto en producción | Escaneo de puertos, error de configuración menor, vulnerabilidad en librería sin explotación activa | **< 72 horas** |

---

## 2. Canales de Detección

- **Monitoreo Railway:** alertas de CPU/memoria/errores en dashboard
- **Netlify:** alertas de build fallido o deploy
- **npm audit:** integrado en pipeline de build
- **Reporte externo:** security.txt → ventas@toledoconsultora.com
- **Cliente afectado:** reporte directo por WhatsApp o email
- **Bot Telegram (@devsecopsconsultorabot):** canal de notificación automática

---

## 3. Flujo de Respuesta (PICERL)

### Fase 1 — PREPARACIÓN (continua)
- [ ] Backups diarios verificados y restaurables
- [ ] Credenciales de producción en gestor de secretos (no en repos)
- [ ] MFA activo en Railway, Netlify, Cloudinary, GitHub
- [ ] Lista de contactos de emergencia actualizada (ver sección 7)
- [ ] `npm audit` sin vulnerabilidades críticas en producción

### Fase 2 — IDENTIFICACIÓN
1. Detectar el evento (monitoreo, alerta, reporte)
2. Registrar: fecha/hora UTC, origen de la detección, sistemas afectados
3. Clasificar el nivel (Crítico / Alto / Medio / Bajo)
4. Asignar responsable de la respuesta
5. Abrir entrada en el **Registro de Incidentes** (sección 8)

### Fase 3 — CONTENCIÓN
**Contención inmediata (< 30 min para Crítico):**
- Revocar tokens/API keys comprometidos desde Railway o el proveedor
- Poner el servicio en modo mantenimiento si hay riesgo de escalada
- Aislar el componente afectado (desactivar ruta, deshabilitar endpoint)
- Revocar sesiones activas si hay compromiso de credenciales
- Preservar logs **antes** de cualquier acción destructiva

**Contención a corto plazo:**
- Aplicar parche temporal o WAF rule
- Incrementar logging en el componente afectado
- Notificar a clientes impactados si aplica

### Fase 4 — ERRADICACIÓN
- Identificar causa raíz (vulnerability scan, análisis de logs)
- Eliminar el vector de ataque (parchear, reconfigurar, revocar)
- Actualizar dependencias vulnerables (`npm audit fix`)
- Revisar y hardening del componente afectado
- Rotar TODAS las credenciales que pudieron haber sido expuestas

### Fase 5 — RECUPERACIÓN
- Restaurar servicio desde backup limpio si fue necesario
- Verificar integridad del sistema antes de volver a producción
- Monitoreo intensivo durante las primeras 48h post-recuperación
- Confirmar que el vector está cerrado con una segunda revisión

### Fase 6 — LECCIONES APRENDIDAS
- Reunión post-mortem dentro de los 5 días hábiles posteriores al cierre
- Documentar: cronología, causa raíz, acciones tomadas, mejoras preventivas
- Actualizar este procedimiento si corresponde
- Actualizar el checklist de cumplimiento (`SECURITY_COMPLIANCE_CHECKLIST.md`)

---

## 4. Obligaciones de Notificación RGPD (art. 33-34)

### ¿Cuándo notificar a la autoridad de control?
Cuando la brecha implique **riesgo para los derechos y libertades** de personas físicas.

| Acción | Plazo | Destinatario |
|---|---|---|
| Notificación inicial a AEPD | **≤ 72 horas** desde que se tiene conocimiento | [AEPD — sede.agpd.gob.es](https://sede.agpd.gob.es) |
| Notificación complementaria | Si la información no estaba completa en la inicial | AEPD |
| Notificación a interesados afectados | Sin dilación indebida si hay **alto riesgo** | Afectados directamente |

**Umbral "alto riesgo":** datos sensibles, datos financieros, datos de menores, volumen elevado de registros afectados.

**Exenciones de notificación al interesado** (art. 34.3):
- Los datos estaban cifrados y la clave no fue comprometida
- Se adoptaron medidas posteriores que eliminan el riesgo
- La notificación implicaría un esfuerzo desproporcionado → publicación pública

### Información mínima para la notificación a AEPD (art. 33.3):
```
- Naturaleza de la brecha (qué ocurrió)
- Categorías y número aproximado de interesados afectados
- Categorías y número aproximado de registros afectados
- Nombre y datos del DPO o punto de contacto
- Posibles consecuencias de la brecha
- Medidas adoptadas o propuestas para remediar
```

---

## 5. Obligaciones de Notificación NIS2 (art. 23)

> Aplica si Toledo Consultora presta servicios a entidades esenciales o importantes en la UE.

| Acción | Plazo | Destinatario |
|---|---|---|
| Alerta temprana | **≤ 24 horas** desde que se detecta el incidente significativo | INCIBE / CCN-CERT (España) |
| Notificación de incidente | **≤ 72 horas** | INCIBE / CCN-CERT |
| Informe final | **≤ 1 mes** desde notificación | INCIBE / CCN-CERT |

**Incidente "significativo" NIS2:** afecta disponibilidad, autenticidad, integridad o confidencialidad de datos o servicios.

**Contacto INCIBE:** incidencias@incibe-cert.es · Teléfono: 017

---

## 6. Decisión Árbol — ¿Notifico?

```
¿Hubo acceso no autorizado a datos personales?
├── NO → No es brecha RGPD. Gestionar como incidente interno.
└── SÍ
    ├── ¿Hay riesgo para derechos y libertades de personas?
    │   ├── NO → Documentar internamente (art. 33.5). No notificar a AEPD.
    │   └── SÍ → NOTIFICAR A AEPD ≤ 72h
    │       └── ¿El riesgo es ALTO?
    │           ├── NO → No notificar a afectados.
    │           └── SÍ → NOTIFICAR A AFECTADOS sin dilación indebida
```

---

## 7. Contactos de Emergencia

| Rol | Nombre | Contacto |
|---|---|---|
| Responsable principal | Eduardo Toledo | +54 3764221063 |
| Email seguridad | — | ventas@toledoconsultora.com |
| INCIBE-CERT (España) | — | incidencias@incibe-cert.es / 017 |
| AEPD (España) | — | sede.agpd.gob.es |
| Railway soporte | — | railway.app/help |
| Netlify soporte | — | netlify.com/support |

---

## 8. Registro de Incidentes

| ID | Fecha detección | Nivel | Descripción breve | Estado | Cerrado |
|---|---|---|---|---|---|
| INC-001 | — | — | — | — | — |

> Añadir una fila por cada incidente. Mantener por **5 años** mínimo (NIS2 / DORA).

---

## Historial de versiones

| Versión | Fecha | Cambio |
|---|---|---|
| 1.0 | 2026-03-26 | Creación inicial |
