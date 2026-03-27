// src/components/SuccessCases/SuccessCases.jsx
// Datos 100% reales — verificados en Google Search Console
// Período: últimos 28 días | Tipo: búsqueda orgánica
// Prefijo CSS: sc__ (sin conflicto con pl__, as__, gallery, etc.)

import { motion } from "framer-motion";
import { useSEO } from "../hooks/useSEO";
import "../styles/SuccessCases.css";

// ── Datos reales de GSC ───────────────────────────────────────────────────────

const CASES = [
  {
    id: "appel",
    client: "Appel Neumáticos",
    pais: "Paraguay",
    industria: "Automotriz / Retail",
    url: "https://appelneumaticos.com",
    servicio: "SEO Local + Web",
    color: "#f59e0b",
    icon: "🔧",
    periodo: "28 días — orgánico",
    metrics: [
      { label: "Clics",        value: "225",  sub: "visitas desde Google"   },
      { label: "Impresiones",  value: "5.000",sub: "veces en resultados"    },
      { label: "CTR",          value: "4,6%", sub: "tasa de clic"           },
      { label: "Posición",     value: "6,5",  sub: "promedio en Google"     },
    ],
    insight: "Posicionamiento orgánico puro — sin inversión en publicidad. El sitio aparece en promedio en el top 7 de Google para búsquedas de neumáticos en Paraguay.",
  },
  {
    id: "alborada",
    client: "Yerba Mate Alborada",
    pais: "Argentina",
    industria: "Alimentación / Yerba Mate",
    url: "https://yerbamatealborada.com",
    servicio: "SEO Local + Web",
    color: "#10b981",
    icon: "🌿",
    periodo: "28 días — orgánico",
    metrics: [
      { label: "Clics",        value: "15",   sub: "visitas desde Google"   },
      { label: "Impresiones",  value: "300",  sub: "veces en resultados"    },
      { label: "CTR",          value: "4,9%", sub: "tasa de clic"           },
      { label: "Posición",     value: "6,1",  sub: "promedio en Google"     },
    ],
    insight: "Sitio lanzado recientemente. CTR por encima del promedio de la industria (benchmark: 3–4%), lo que indica que el snippet y el título están bien optimizados para captar la intención de búsqueda.",
  },
  {
    id: "globalhome",
    client: "Global Home Group",
    pais: "Argentina",
    industria: "Real Estate / Inmobiliaria",
    url: "https://globalhomegroup.com.ar",
    servicio: "Web + Google Ads + SEO",
    color: "#3b82f6",
    icon: "🏠",
    periodo: "28 días — orgánico",
    metrics: [
      { label: "Clics",        value: "8",    sub: "visitas desde Google"   },
      { label: "Impresiones",  value: "250",  sub: "veces en resultados"    },
      { label: "CTR",          value: "3,2%", sub: "tasa de clic"           },
      { label: "Posición",     value: "10,7", sub: "promedio en Google"     },
    ],
    insight: "Proyecto en fase de crecimiento orgánico. Posición 10.7 indica que está en la segunda página, con margen claro de mejora con estrategia de contenidos y linkbuilding local.",
  },
];

const containerV = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const itemV = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90, damping: 14 } },
};
const headerV = {
  hidden:  { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// ── Card ──────────────────────────────────────────────────────────────────────

function CaseCard({ data }) {
  return (
    <motion.article
      variants={itemV}
      className="sc__card"
      style={{ "--sc-accent": data.color }}
      aria-label={`Caso de éxito: ${data.client}`}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      {/* Barra de acento */}
      <div className="sc__card-bar" />

      {/* Header */}
      <div className="sc__card-header">
        <span className="sc__card-icon">{data.icon}</span>
        <div>
          <h3 className="sc__card-client">{data.client}</h3>
          <span className="sc__card-meta">{data.pais} · {data.industria}</span>
        </div>
      </div>

      {/* Servicio prestado */}
      <span className="sc__card-service">{data.servicio}</span>

      {/* Métricas reales GSC */}
      <div className="sc__metrics-grid">
        {data.metrics.map((m) => (
          <div key={m.label} className="sc__metric">
            <span className="sc__metric-value">{m.value}</span>
            <span className="sc__metric-label">{m.label}</span>
            <span className="sc__metric-sub">{m.sub}</span>
          </div>
        ))}
      </div>

      {/* Período */}
      <div className="sc__period">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 6v6l4 2"/>
        </svg>
        {data.periodo}
        <span className="sc__verified-badge">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          Verificado GSC
        </span>
      </div>

      {/* Insight */}
      <p className="sc__insight">{data.insight}</p>

      {/* Link */}
      <a href={data.url} target="_blank" rel="noopener noreferrer"
         className="sc__card-link" aria-label={`Ver sitio de ${data.client}`}>
        Ver sitio
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" strokeWidth="2.5">
          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
        </svg>
      </a>
    </motion.article>
  );
}

// ── Componente principal ──────────────────────────────────────────────────────

export const SuccessCases = () => {
  useSEO({ title: "Casos de Éxito — Toledo Consultora IT" });

  return (
    <section className="sc__section" id="success-cases"
             aria-label="Casos de éxito verificados">
      <div className="sc__inner">

        {/* Header */}
        <motion.div className="sc__header"
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: "-80px" }} variants={headerV}>

          <span className="sc__kicker">Resultados reales</span>
          <h2 className="sc__title">Casos de Éxito Verificados</h2>
          <p className="sc__subtitle">
            Métricas extraídas directamente de Google Search Console.
            Sin estimaciones ni proyecciones — solo datos reales de los últimos 28 días.
          </p>

          {/* Disclaimer de transparencia */}
          <div className="sc__disclaimer">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            Todos los proyectos mostrados son exclusivamente SEO orgánico —
            sin inversión en pauta publicitaria. Los resultados de Google Ads
            se reportan por separado bajo acuerdo de confidencialidad con cada cliente.
          </div>
        </motion.div>

        {/* Cards */}
        <motion.div className="sc__grid"
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: "-80px" }} variants={containerV}>
          {CASES.map((c) => <CaseCard key={c.id} data={c} />)}
        </motion.div>

        {/* CTA */}
        <motion.div className="sc__cta"
          initial={{ opacity:0, y:20 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.5 }}>
          <p className="sc__cta-text">
            ¿Querés resultados similares para tu negocio?
          </p>
          <div className="sc__cta-buttons">
            <a href="https://web.telegram.org/k/#7993602971"
               target="_blank" rel="noopener noreferrer" className="sc__cta-btn sc__cta-btn--primary">
              Hablemos por Telegram
            </a>
            <a href="https://api.whatsapp.com/send/?phone=5493764221063&text&type=phone_number&app_absent=0"
               target="_blank" rel="noopener noreferrer" className="sc__cta-btn sc__cta-btn--wa">
              WhatsApp
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default SuccessCases;