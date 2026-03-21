// src/components/SocialProof/SocialProof.jsx
// Prefijo CSS: sp__ — sin conflicto con sc__, pl__, as__, gallery, etc.
// Datos 100% verificables. Sin métricas inventadas.

import { motion } from "framer-motion";
import "../styles/SocialProof.css";

// ── Datos reales ──────────────────────────────────────────────────────────────
// Regla: si no podés mostrar la fuente, no lo ponés.

const STATS = [
  {
    value: "15",
    label: "Proyectos en producción",
    sub: "Netlify deployments activos",
    source: "netlify.com/dashboard",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
    color: "#0055ff",
  },
  {
    value: "6",
    label: "Países con clientes",
    sub: "AR · PY · CO · US · AU · BR",
    source: "CRM interno",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/>
      </svg>
    ),
    color: "#10b981",
  },
  {
    value: "4,8",
    label: "Calificación en Google",
    sub: "Reseñas verificadas",
    source: "Google Business Profile",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    color: "#f59e0b",
  },
  {
    value: "5+",
    label: "Años de experiencia",
    sub: "Desde 2019 en desarrollo web",
    source: "Fecha fundación",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <path d="M16 2v4M8 2v4M3 10h18"/>
      </svg>
    ),
    color: "#8b5cf6",
  },
];

// Tecnologías y certificaciones reales (lo que efectivamente usamos)
const STACK = [
  "React", "Node.js", "Express", "PostgreSQL", "MongoDB",
  "AWS", "Netlify", "Railway", "N8N", "Twilio",
];

const NORMS = [
  { label: "OWASP Top 10", color: "#ef4444" },
  { label: "NIS2 Art.21",  color: "#3b82f6" },
  { label: "GDPR / RGPD",  color: "#10b981" },
  { label: "CRA 2024",     color: "#8b5cf6" },
  { label: "DORA Art.9",   color: "#f59e0b" },
];

const containerV = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const itemV = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90, damping: 14 } },
};

// ── Componente ────────────────────────────────────────────────────────────────

export const SocialProof = () => {
  return (
    <section className="sp__section" aria-label="Datos verificables sobre Toledo Consultora IT">
      <div className="sp__inner">

        {/* Stats */}
        <motion.div className="sp__stats-grid"
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerV}>

          {STATS.map((s) => (
            <motion.div key={s.label} className="sp__stat" variants={itemV}
              style={{ "--sp-accent": s.color }}>
              <div className="sp__stat-icon">{s.icon}</div>
              <span className="sp__stat-value">{s.value}</span>
              <span className="sp__stat-label">{s.label}</span>
              <span className="sp__stat-sub">{s.sub}</span>
              <span className="sp__stat-source">
                <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                {s.source}
              </span>
            </motion.div>
          ))}

        </motion.div>

        {/* Divider */}
        <div className="sp__divider" />

        {/* Stack + Normativas */}
        <motion.div className="sp__bottom"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}>

          <div className="sp__bottom-block">
            <p className="sp__bottom-label">Stack tecnológico</p>
            <div className="sp__tags">
              {STACK.map(t => (
                <span key={t} className="sp__tag sp__tag--stack">{t}</span>
              ))}
            </div>
          </div>

          <div className="sp__bottom-block">
            <p className="sp__bottom-label">Normativas cubiertas</p>
            <div className="sp__tags">
              {NORMS.map(n => (
                <span key={n.label} className="sp__tag sp__tag--norm"
                      style={{ "--sp-norm": n.color }}>
                  {n.label}
                </span>
              ))}
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default SocialProof;