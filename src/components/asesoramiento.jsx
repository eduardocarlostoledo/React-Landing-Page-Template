// src/components/Asesoramiento/Asesoramiento.jsx
// Modal reutiliza estilos de galery.css (.gallery-modal, .modal-content, etc.)

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/asesoramiento.css";
import "../styles/galery.css";

// ── Datos enriquecidos ────────────────────────────────────────────────────────

const SERVICIOS = [
  {
    id: "nis2",
    icon: "fas fa-shield-halved",
    badge: "Normativa UE",
    badgeColor: "#3b82f6",
    title: "NIS2 — Cumplimiento",
    subtitle: "Directiva 2022/2555",
    text: "Evaluamos controles y evidencias básicas para reducir riesgo regulatorio.",
    accentColor: "#3b82f6",
    modal: {
      what: "La Directiva NIS2 es obligatoria en la UE desde octubre 2024 para entidades esenciales e importantes. Establece requisitos mínimos de ciberseguridad, gestión de incidentes y cadena de suministro.",
      how: [
        "Evaluación de madurez contra los 10 controles del Art. 21",
        "Mapeo de activos críticos y análisis de brechas (gap analysis)",
        "Elaboración del plan de remediación priorizado",
        "Documentación de políticas de gestión de riesgos",
        "Acompañamiento en notificación de incidentes ante autoridades",
      ],
      risk: "Multas de hasta €10M o el 2% de la facturación global anual. Responsabilidad personal de los directivos.",
      deliverable: "Informe de cumplimiento NIS2 + Plan de remediación + Evidencias auditables",
      time: "5–10 días hábiles",
      price: "Desde €1.490",
    },
  },
  {
    id: "owasp",
    icon: "fas fa-bug-slash",
    badge: "Seguridad Web",
    badgeColor: "#ef4444",
    title: "OWASP — Auditoría",
    subtitle: "Top 10 + ASVS",
    text: "Revisamos el estándar OWASP para garantizar la seguridad de tus aplicaciones.",
    accentColor: "#ef4444",
    modal: {
      what: "OWASP Top 10 es el estándar de referencia mundial para vulnerabilidades en aplicaciones web. Lo usamos como base para auditorías técnicas, pentesting y revisiones de código.",
      how: [
        "Análisis automático con herramientas (ZAP, Burp Suite Community)",
        "Revisión manual de los 10 vectores OWASP (A01–A10)",
        "Test de cabeceras HTTP, cookies y configuración de servidor",
        "Verificación de autenticación, autorización y manejo de sesiones",
        "Reporte CVSS con severidad y acciones concretas de remediación",
      ],
      risk: "Una sola vulnerabilidad A01 (Broken Access Control) puede exponer toda la base de datos de clientes.",
      deliverable: "Reporte técnico CVSS + Checklist OWASP Top 10 + Guía de remediación",
      time: "24–72 horas (Snapshot) / 5 días (Full Audit)",
      price: "Desde €100 (Snapshot) / €399 (Full)",
    },
  },
  {
    id: "cra",
    icon: "fas fa-certificate",
    badge: "Producto Digital",
    badgeColor: "#8b5cf6",
    title: "CRA — Producto",
    subtitle: "Cyber Resilience Act 2024",
    text: "Revisamos requisitos de producto y SBOM para comercializar software en la UE.",
    accentColor: "#8b5cf6",
    modal: {
      what: "El Cyber Resilience Act (Reglamento 2024/2847) exige que todo producto digital vendido en la UE incorpore seguridad por diseño, gestión de vulnerabilidades y divulgación responsable. Obligatorio en fases hasta 2027.",
      how: [
        "Inventario de componentes de software (SBOM — Software Bill of Materials)",
        "Análisis de dependencias con vulnerabilidades conocidas (CVE)",
        "Revisión de procesos de actualización y parcheado",
        "Implementación de security.txt y canal de divulgación responsable",
        "Preparación de documentación técnica para marcado CE digital",
      ],
      risk: "Sin certificación CRA, el software no podrá comercializarse en mercados europeos a partir de 2027.",
      deliverable: "SBOM completo + Análisis CVE + Documentación técnica CRA + security.txt",
      time: "7–14 días hábiles",
      price: "Desde €1.490",
    },
  },
  {
    id: "gdpr",
    icon: "fas fa-user-shield",
    badge: "Datos Personales",
    badgeColor: "#10b981",
    title: "GDPR — Datos",
    subtitle: "RGPD Art. 5, 7, 32",
    text: "Revisión práctica de tratamientos, cifrado y borrado automático de datos.",
    accentColor: "#10b981",
    modal: {
      what: "El RGPD (GDPR) regula el tratamiento de datos personales de ciudadanos europeos. Aplica a cualquier empresa que procese datos de personas en la UE, independientemente de dónde esté radicada.",
      how: [
        "Auditoría de cookies y scripts de terceros (Analytics, Ads, Pixels)",
        "Implementación de banner de consentimiento GDPR compliant",
        "Revisión de política de privacidad y aviso legal",
        "Registro de actividades de tratamiento (RAT)",
        "Configuración de flags de seguridad en cookies (Secure, HttpOnly, SameSite)",
        "Procedimiento de ejercicio de derechos ARCO",
      ],
      risk: "Multas de hasta €20M o el 4% de la facturación global. La AEPD en España está activa en sanciones a pymes.",
      deliverable: "Banner de consentimiento + RAT + Políticas actualizadas + Certificado de adecuación",
      time: "3–7 días hábiles",
      price: "Desde €399",
    },
  },
  {
    id: "dora",
    icon: "fas fa-life-ring",
    badge: "Sector Financiero",
    badgeColor: "#f59e0b",
    title: "DORA — Resiliencia",
    subtitle: "Reglamento 2022/2554",
    text: "Tests de resiliencia y planes de recuperación exigidos por terceros críticos.",
    accentColor: "#f59e0b",
    modal: {
      what: "DORA (Digital Operational Resilience Act) aplica a entidades financieras y sus proveedores TIC desde enero 2025. Si alguno de tus clientes está en banca, seguros o fintech europeo, te van a exigir este cumplimiento.",
      how: [
        "Evaluación de Resiliencia Operativa Digital (TLPT preparación)",
        "Documentación de planes de continuidad y recuperación ante desastres",
        "Clasificación de proveedores TIC críticos y subcontratistas",
        "Test de escenarios de disrupción y RTO/RPO",
        "Reporting framework para incidentes TIC según Art. 17–23",
      ],
      risk: "Sin cumplimiento DORA, tus contratos con entidades financieras europeas no se pueden renovar.",
      deliverable: "Plan de Resiliencia Operativa + Inventario de proveedores TIC + Procedimientos de reporte",
      time: "10–15 días hábiles",
      price: "Desde €1.990",
    },
  },
  {
    id: "seo",
    icon: "fas fa-magnifying-glass-location",
    badge: "Visibilidad",
    badgeColor: "#06b6d4",
    title: "SEO Local + IA",
    subtitle: "Google · ChatGPT · Gemini",
    text: "Mejoramos visibilidad en búsquedas locales y en respuestas de IA generativa.",
    accentColor: "#06b6d4",
    modal: {
      what: "El SEO moderno incluye dos frentes: posicionamiento en Google Maps y búsquedas locales, y AIO (AI Optimization) para aparecer en las respuestas de ChatGPT, Gemini y Perplexity cuando alguien busca un proveedor.",
      how: [
        "Auditoría técnica SEO: velocidad, Core Web Vitals, indexación",
        "Optimización de Google Business Profile (ficha, fotos, reseñas)",
        "Implementación de Schema.org JSON-LD (LocalBusiness, Service)",
        "Estrategia de contenido para AIO / GEO (Generative Engine Optimization)",
        "Monitorización de posiciones y reportes mensuales",
      ],
      risk: "El 46% de las búsquedas en Google tienen intención local. Sin optimización, esos clientes van a la competencia.",
      deliverable: "Auditoría SEO técnica + Optimización GMB + Plan de contenidos + Reporte de posiciones",
      time: "Primera mejoras visibles en 2–4 semanas",
      price: "Desde €299/mes",
    },
  },
  {
    id: "ads",
    icon: "fas fa-bullhorn",
    badge: "Performance",
    badgeColor: "#f97316",
    title: "Google Ads",
    subtitle: "Search · Display · Retargeting",
    text: "Campañas focalizadas para atraer clientes desde el primer día.",
    accentColor: "#f97316",
    modal: {
      what: "Google Ads permite capturar demanda existente — personas que ya están buscando lo que ofrecés. Lo combinamos con Meta Ads para impactar a audiencias frías y construir embudo completo.",
      how: [
        "Investigación de palabras clave y análisis de la competencia",
        "Estructura de campaña por intención (TOFU / MOFU / BOFU)",
        "Creación de anuncios con extensiones y creativos A/B",
        "Configuración de conversiones (formularios, llamadas, WhatsApp)",
        "Optimización semanal de pujas, negativos y quality score",
        "Dashboard de resultados en tiempo real",
      ],
      risk: "Sin gestión profesional, el 60% del presupuesto se desperdicia en clics irrelevantes.",
      deliverable: "Estructura de campañas + Creativos + Configuración de conversiones + Reportes semanales",
      time: "Campaña activa en 48–72 horas",
      price: "Desde €299/mes + presupuesto de pauta",
    },
  },
  {
    id: "estrategia",
    icon: "fas fa-chess",
    badge: "Consultoría",
    badgeColor: "#6366f1",
    title: "Estrategia Digital",
    subtitle: "Hoja de ruta personalizada",
    text: "Plan digital adaptado a objetivos, presupuesto y mercado objetivo.",
    accentColor: "#6366f1",
    modal: {
      what: "Muchas pymes invierten en herramientas digitales sin una estrategia coherente. En una sesión de trabajo definimos prioridades, canales, KPIs y presupuesto para los próximos 6–12 meses.",
      how: [
        "Diagnóstico de presencia digital actual (web, SEO, redes, ads)",
        "Análisis de competencia y oportunidades de mercado",
        "Definición de buyer personas y journey del cliente",
        "Priorización de acciones por impacto vs esfuerzo",
        "Hoja de ruta con sprints mensuales y métricas de éxito",
      ],
      risk: "Sin estrategia, cada inversión en marketing es un gasto aislado sin ROI medible.",
      deliverable: "Documento de estrategia digital + Roadmap 12 meses + KPI dashboard",
      time: "1 semana (incluye sesión de trabajo de 2 h)",
      price: "Desde €490 (deducible si contratan servicios)",
    },
  },
  {
    id: "socio",
    icon: "fas fa-handshake",
    badge: "Soporte Continuo",
    badgeColor: "#14b8a6",
    title: "Socio Tecnológico",
    subtitle: "CTO-as-a-Service",
    text: "Soporte técnico y estratégico continuo para crecer online con seguridad.",
    accentColor: "#14b8a6",
    modal: {
      what: "Para empresas que no tienen CTO interno, actuamos como el socio tecnológico que toma decisiones técnicas, supervisa proveedores y mantiene la infraestructura digital segura y escalable.",
      how: [
        "Revisión mensual de seguridad y actualizaciones",
        "Supervisión de proveedores de hosting, dominio y servicios cloud",
        "Soporte prioritario ante incidentes (SLA 4 h respuesta)",
        "Asesoramiento en decisiones tecnológicas (stack, herramientas, inversiones)",
        "Acceso directo vía WhatsApp y Telegram al equipo técnico",
        "Informe mensual de estado de la infraestructura",
      ],
      risk: "Un incidente de seguridad sin soporte dedicado puede costar entre 10x y 100x el costo de la prevención.",
      deliverable: "SLA documentado + Acceso directo + Informes mensuales + Auditoría trimestral incluida",
      time: "Modalidad mensual sin permanencia mínima",
      price: "Desde €299/mes",
    },
  },
];

// ── Animaciones ───────────────────────────────────────────────────────────────

const containerVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90, damping: 14 } },
};

const headerVariants = {
  hidden:  { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

// ── Modal ─────────────────────────────────────────────────────────────────────

function ServicioModal({ servicio, onClose }) {
  const m = servicio.modal;

  return (
    <motion.div
      className="gallery-modal"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Detalle: ${servicio.title}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <motion.div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          maxWidth: 700,
          padding: "2.5rem",
          background: "#fff",
        }}
      >
        <button className="close-btn" onClick={onClose} aria-label="Cerrar">
          &times;
        </button>

        {/* Header del modal */}
        <div style={{ paddingRight: "2rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 12 }}>
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 12,
                background: servicio.accentColor + "18",
                border: `1.5px solid ${servicio.accentColor}44`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <i
                className={servicio.icon}
                style={{ fontSize: 22, color: servicio.accentColor }}
              />
            </div>
            <div>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                  color: servicio.accentColor,
                  background: servicio.accentColor + "14",
                  padding: "3px 9px",
                  borderRadius: 4,
                  border: `1px solid ${servicio.accentColor}33`,
                }}
              >
                {servicio.badge}
              </span>
              <h3 className="modal-info" style={{ margin: "6px 0 2px", fontSize: "1.5rem", color: "#00205b", fontWeight: 800 }}>
                {servicio.title}
              </h3>
              <p style={{ margin: 0, fontSize: 13, color: "#7a8ba8" }}>{servicio.subtitle}</p>
            </div>
          </div>
        </div>

        {/* Qué es */}
        <div>
          <Label>¿Qué es?</Label>
          <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.75, color: "#475569" }}>{m.what}</p>
        </div>

        {/* Cómo lo hacemos */}
        <div>
          <Label>Cómo lo hacemos</Label>
          <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
            {m.how.map((step, i) => (
              <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <span
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: "50%",
                    background: servicio.accentColor + "18",
                    border: `1.5px solid ${servicio.accentColor}44`,
                    color: servicio.accentColor,
                    fontSize: 11,
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: 1,
                  }}
                >
                  {i + 1}
                </span>
                <span style={{ fontSize: 13.5, lineHeight: 1.65, color: "#475569" }}>{step}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Risk + Deliverable + Time + Price en grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 12,
          }}
        >
          <InfoChip label="Riesgo si no actúas" value={m.risk} color="#ef4444" icon="⚠" />
          <InfoChip label="Entregable" value={m.deliverable} color={servicio.accentColor} icon="📄" />
          <InfoChip label="Tiempo estimado" value={m.time} color="#6366f1" icon="⏱" />
          <InfoChip label="Inversión" value={m.price} color="#10b981" icon="💰" isPrice />
        </div>

        {/* CTA */}
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", paddingTop: 4 }}>
          <motion.a
            href="https://web.telegram.org/k/#7993602971"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
            style={{
              background: `linear-gradient(135deg, ${servicio.accentColor} 0%, ${servicio.accentColor}cc 100%)`,
              color: "#fff",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.286 13.68l-2.95-.924c-.642-.204-.657-.642.136-.953l11.498-4.434c.535-.194 1.002.13.924.852z"/>
            </svg>
            Consultar por Telegram
          </motion.a>
          <motion.a
            href="https://api.whatsapp.com/send/?phone=5493764221063&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
            style={{ background: "#25d366", color: "#fff", display: "flex", alignItems: "center", gap: 8 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Consultar por WhatsApp
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function Label({ children }) {
  return (
    <p
      style={{
        margin: "0 0 8px",
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: 1.5,
        textTransform: "uppercase",
        color: "#94a3b8",
      }}
    >
      {children}
    </p>
  );
}

function InfoChip({ label, value, color, icon, isPrice }) {
  return (
    <div
      style={{
        padding: "12px 14px",
        background: color + "08",
        border: `1px solid ${color}22`,
        borderRadius: 10,
      }}
    >
      <p style={{ margin: "0 0 5px", fontSize: 10, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: "#94a3b8" }}>
        {icon} {label}
      </p>
      <p
        style={{
          margin: 0,
          fontSize: isPrice ? 17 : 12.5,
          fontWeight: isPrice ? 800 : 400,
          color: isPrice ? color : "#475569",
          lineHeight: 1.5,
        }}
      >
        {value}
      </p>
    </div>
  );
}

// ── Card ──────────────────────────────────────────────────────────────────────

function ServicioCard({ data, onClick }) {
  return (
    <motion.div
      className="servicio-card"
      variants={itemVariants}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      onClick={onClick}
      style={{ cursor: "pointer", position: "relative", overflow: "hidden" }}
      role="button"
      tabIndex={0}
      aria-label={`Ver más sobre ${data.title}`}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
    >
      {/* Acento de color top */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: `linear-gradient(90deg, ${data.accentColor} 0%, ${data.accentColor}66 100%)`,
          borderRadius: "12px 12px 0 0",
        }}
      />

      {/* Badge */}
      <div style={{ marginBottom: 14 }}>
        <span
          style={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: 1,
            textTransform: "uppercase",
            color: data.accentColor,
            background: data.accentColor + "14",
            padding: "3px 9px",
            borderRadius: 4,
            border: `1px solid ${data.accentColor}33`,
          }}
        >
          {data.badge}
        </span>
      </div>

      {/* Icon */}
      <div className="icon-container" style={{ background: data.accentColor + "16", border: `1.5px solid ${data.accentColor}33` }}>
        <i className={`icon ${data.icon}`} style={{ color: data.accentColor }} />
      </div>

      {/* Content */}
      <div className="servicio-content">
        <h3 style={{ marginBottom: 4 }}>{data.title}</h3>
        <p style={{ fontSize: 12, color: "#94a3b8", margin: "0 0 8px", fontWeight: 500 }}>
          {data.subtitle}
        </p>
        <p style={{ margin: 0 }}>{data.text}</p>
      </div>

      {/* Ver más hint */}
      <div
        style={{
          marginTop: 16,
          display: "flex",
          alignItems: "center",
          gap: 5,
          fontSize: 12,
          fontWeight: 600,
          color: data.accentColor,
          opacity: 0.8,
        }}
      >
        Ver detalle
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </div>
    </motion.div>
  );
}

// ── Componente principal ──────────────────────────────────────────────────────

export const Asesoramiento = () => {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <section id="asesoramiento" className="asesoramiento-section" style={{ paddingTop: 20 }}>
        <div className="container-asesoramiento">

          {/* Header */}
          <motion.div
            className="section-header-asesoramiento"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={headerVariants}
          >
            <h2>OFERTAS TECNOLÓGICAS</h2>
            <p>Hacé click en cualquier servicio para ver alcance, metodología y precios</p>
          </motion.div>

          {/* Grid */}
          <motion.div
            className="servicios-grid-asesoramiento"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {SERVICIOS.map((s) => (
              <ServicioCard key={s.id} data={s} onClick={() => setSelected(s)} />
            ))}
          </motion.div>

        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <ServicioModal servicio={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Asesoramiento;

// import React from 'react';
// import { motion } from 'framer-motion';

// import "../styles/asesoramiento.css";
 
// export const Asesoramiento = (props) => {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 12,
//       },
//     },
//   };

//   const headerVariants = {
//     hidden: { opacity: 0, y: -20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6 },
//     },
//   };

//   return (
//     <section id="asesoramiento" style={{ paddingTop: "20px" }} className="asesoramiento-section">
//       <div className="container-asesoramiento">
//         <motion.div
//           className="section-header-asesoramiento"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           variants={headerVariants}
//         >
//           <h2>OFERTAS TECNOLÓGICAS</h2>
//           <p>A qué nos dedicamos y cómo podemos ayudarte</p>
//         </motion.div>
        
//         <motion.div
//           className="servicios-grid-asesoramiento"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//         >
//           {props.data ? (
//             props.data.map((d, i) => (
//               <motion.div
//                 key={`${d.title}-${i}`}
//                 className="servicio-card"
//                 variants={itemVariants}
//                 whileHover={{ y: -8 }}
//               >
//                 <div className="icon-container">
//                   <i className={`icon ${d.icon}`}></i>
//                 </div>
//                 <div className="servicio-content">
//                   <h3>{d.title}</h3>
//                   <p>{d.text}</p>
//                 </div>
//               </motion.div>
//             ))
//           ) : (
//             <div className="loading">Cargando servicios...</div>
//           )}
//         </motion.div>
//       </div>
//     </section>
//   );
// };