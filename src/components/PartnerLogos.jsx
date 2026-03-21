// src/components/PartnerLogos/PartnerLogos.jsx
// TODAS las clases usan prefijo "pl__" — evita conflictos con
// successcases, gallery, asesoramiento y cualquier otro módulo CSS.

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSEO } from "../hooks/useSEO";
import { seoConfig } from "../utils/seoConfig";
import "../styles/PartnerLogos.css";

import logo1         from "../logo(1).jpg";
import logoCalyaan   from "../logocalyaan.png";
import logoRm        from "../logo-rm.jpg";
import logoalborada  from "../logoalborada.jpg";
import logocrypto    from "../logocrypto.png";
import logoappel     from "../logoappel.jpg";
import logoglobal    from "../logoglobal.jpg";
import logomodatotal from "../logomodatotal.png";
import logolua       from "../logolua.png";
import logojuly      from "../huallpa-logo.png";
import frenteamplio  from "../frenteamplio.png";
import fuerzapatria  from "../fuerzapatria.png";

const CAT_COLORS = {
  "E-commerce":        { bg:"rgba(0,85,255,0.1)",   border:"rgba(0,85,255,0.3)",   text:"#6ea8ff" },
  "SaaS / HRM":        { bg:"rgba(139,92,246,0.1)", border:"rgba(139,92,246,0.3)", text:"#c4b5fd" },
  "Ciberseguridad":    { bg:"rgba(239,68,68,0.1)",  border:"rgba(239,68,68,0.3)",  text:"#fca5a5" },
  "Web Institucional": { bg:"rgba(16,185,129,0.1)", border:"rgba(16,185,129,0.3)", text:"#6ee7b7" },
  "Google Ads / SEO":  { bg:"rgba(245,158,11,0.1)", border:"rgba(245,158,11,0.3)", text:"#fcd34d" },
  "Sistema Electoral": { bg:"rgba(99,102,241,0.1)", border:"rgba(99,102,241,0.3)", text:"#a5b4fc" },
  "Landing + ChatBot": { bg:"rgba(6,182,212,0.1)",  border:"rgba(6,182,212,0.3)",  text:"#67e8f9" },
  "Cripto / Fintech":  { bg:"rgba(20,184,166,0.1)", border:"rgba(20,184,166,0.3)", text:"#5eead4" },
};

const PARTNERS = [
  {
    id:"alborada", name:"Yerba Mate Alborada", logo:logoalborada,
    url:"https://yerbamatealborada.com",
    instagram:"https://www.instagram.com/yerbamatealborada",
    pais:"Argentina", industria:"Alimentación",
    categoria:"Web Institucional",
    descripcion:"Sitio de marca para productora de yerba mate. Identidad visual, SEO técnico y presencia en buscadores locales.",
    servicios:["Diseño web","SEO técnico","Google Business Profile"],
    stack:["React","Netlify"], destacado:false,
  },
  {
    id:"calyaan", name:"Calyaan", logo:logoCalyaan,
    url:"https://calyaan.netlify.app/",
    instagram:"https://www.instagram.com/calyaancol",
    pais:"Colombia", industria:"Recursos Humanos / SaaS",
    categoria:"SaaS / HRM",
    descripcion:"Plataforma SaaS de gestión de RRHH para el mercado colombiano. Integración con SIIGO y DIAN. Módulos de nómina, asistencia y reportes.",
    servicios:["Desarrollo SaaS","Integración SIIGO/DIAN","UX/UI","Backend Node.js"],
    stack:["React","Node.js","Express","PostgreSQL","Railway","Netlify"], destacado:true,
  },
  {
    id:"cryptoseed", name:"CryptoSeed.ai", logo:logocrypto,
    url:"https://www.cryptoseed.ai",
    instagram:"https://www.instagram.com/cryptoseed.ai",
    pais:"Estados Unidos", industria:"Criptomonedas / Fintech",
    categoria:"Cripto / Fintech",
    descripcion:"Rediseño completo de exchange cripto. Pasarela de pago con blockchain, dashboard de trading y gestión de wallets.",
    servicios:["Rediseño UI/UX","Integración blockchain","Pasarela cripto"],
    stack:["React","Node.js","Web3.js","AWS"], destacado:true,
  },
  {
    id:"appel", name:"Appel Neumáticos", logo:logoappel,
    url:"https://appelneumaticos.com",
    instagram:"https://www.instagram.com/appelneumaticospy",
    pais:"Paraguay", industria:"Automotriz / Retail",
    categoria:"Web Institucional",
    descripcion:"Diseño web y posicionamiento local para distribuidora de neumáticos en Paraguay.",
    servicios:["Diseño web","SEO local","Google Business Profile"],
    stack:["React","Netlify"], destacado:false,
  },
  {
    id:"globalhome", name:"Global Home Group", logo:logoglobal,
    url:"https://globalhomegroup.com.ar",
    instagram:"https://www.instagram.com/globalhomegrupok",
    pais:"Argentina", industria:"Real Estate",
    categoria:"Google Ads / SEO",
    descripcion:"Web corporativa para desarrolladora e inmobiliaria + campañas Google Ads para captación de compradores e inversores.",
    servicios:["Diseño web","Google Ads","SEO","Landings inmobiliarias"],
    stack:["React","Google Ads","Netlify"], destacado:true,
  },
  {
    id:"frenteamplio", name:"Frente Amplio Misiones", logo:frenteamplio,
    url:"https://frenteamplio.netlify.app",
    instagram:"https://www.instagram.com/frenteampliomisiones",
    pais:"Argentina", industria:"Política / Electoral",
    categoria:"Sistema Electoral",
    descripcion:"Sistema de control de votos y centro de cómputos. Panel en tiempo real con resultados por mesa y localidad.",
    servicios:["Control de votos","Panel tiempo real","Data entry electoral"],
    stack:["React","Node.js","PostgreSQL","Railway"], destacado:true,
  },
  {
    id:"fuerzapatria", name:"Fuerza Patria Misiones", logo:fuerzapatria,
    url:"https://fuerzapatriamisiones.netlify.app",
    instagram:"https://www.instagram.com/fuerzapatria.misionesok",
    pais:"Argentina", industria:"Política / Electoral",
    categoria:"Sistema Electoral",
    descripcion:"Sistema electoral con data entry multioperador y cómputo por sección. Arquitectura en tiempo real.",
    servicios:["Sistema electoral","Data entry multioperador","Tiempo real"],
    stack:["React","Node.js","WebSocket","PostgreSQL"], destacado:false,
  },
  {
    id:"rmmandados", name:"RM Mandados", logo:logoRm,
    url:"https://rmmandados.netlify.app",
    instagram:"https://www.instagram.com/rmmandados",
    pais:"Argentina", industria:"Logística / Cadetería",
    categoria:"Web Institucional",
    descripcion:"Sitio institucional para empresa de cadetería. Servicios, formulario de contacto y SEO local.",
    servicios:["Diseño web","SEO local","Formulario de contacto"],
    stack:["React","EmailJS","Netlify"], destacado:false,
  },
  {
    id:"storecomputer", name:"Store Computer",
    logo:"https://static.vecteezy.com/system/resources/thumbnails/009/096/946/small/monitor-screen-computer-with-colorful-rainbow-bubble-illustration-logo-design-vector.jpg",
    url:"https://storecomputer.netlify.app/",
    pais:"Argentina", industria:"Tecnología / Retail",
    categoria:"E-commerce",
    descripcion:"E-commerce de productos tecnológicos con catálogo, carrito y gestión de stock.",
    servicios:["E-commerce","Catálogo","Gestión de stock"],
    stack:["React","Node.js","Netlify"], destacado:false,
  },
  {
    id:"elgatonegro", name:"El Gato Negro Premium", logo:logo1,
    url:"https://elgatonegropremium.netlify.app/",
    pais:"Argentina", industria:"Venta Online / Lifestyle",
    categoria:"Landing + ChatBot",
    descripcion:"E-commerce de e-liquids con landing page de conversión y chatbot integrado para atención automática.",
    servicios:["E-commerce","Landing page","ChatBot integrado"],
    stack:["React","Netlify"], destacado:false,
  },
  {
    id:"modatotal", name:"Moda Total", logo:logomodatotal,
    url:"https://modatotal.netlify.app/",
    pais:"Argentina", industria:"Moda / Indumentaria",
    categoria:"E-commerce",
    descripcion:"E-commerce de indumentaria con catálogo, carrito y landing de temporada. ChatBot de asistencia en compras.",
    servicios:["E-commerce","Landing page","ChatBot"],
    stack:["React","Netlify"], destacado:false,
  },
  {
    id:"luacollection", name:"Lua Collection", logo:logolua,
    url:"https://luacollection.netlify.app/",
    pais:"Argentina", industria:"Moda / Accesorios",
    categoria:"Web Institucional",
    descripcion:"Sitio institucional para colección de accesorios. Galería de productos y formulario de contacto.",
    servicios:["Diseño web","Galería de productos","Contacto"],
    stack:["React","Netlify"], destacado:false,
  },
  {
    id:"julymarroquineria", name:"July Marroquinería", logo:logojuly,
    url:"https://july-marroquineria.netlify.app/",
    pais:"Argentina", industria:"Marroquinería / Artesanías",
    categoria:"Landing + ChatBot",
    descripcion:"E-commerce con landing page para marroquinería artesanal y chatbot para pedidos personalizados.",
    servicios:["E-commerce","Landing page","ChatBot"],
    stack:["React","Netlify"], destacado:false,
  },
];

const STATS = [
  { value:"20+", label:"Proyectos completados" },
  { value:"6",   label:"Países con clientes" },
  { value:"5+",  label:"Años de experiencia" },
  { value:"4",   label:"Verticales: web, SaaS, electoral, ciberseg." },
];

const CATEGORIAS = ["Todas", ...Array.from(new Set(PARTNERS.map(p => p.categoria)))];
const PAISES     = ["Todos", ...Array.from(new Set(PARTNERS.map(p => p.pais))).sort()];

const containerV = {
  hidden:  { opacity:0 },
  visible: { opacity:1, transition:{ staggerChildren:0.07, delayChildren:0.04 } },
};
const itemV = {
  hidden:  { opacity:0, y:22 },
  visible: { opacity:1, y:0, transition:{ type:"spring", stiffness:90, damping:14 } },
};
const headerV = {
  hidden:  { opacity:0, y:-18 },
  visible: { opacity:1, y:0,  transition:{ duration:0.5, ease:"easeOut" } },
};

// ── Card ──────────────────────────────────────────────────────────────────────

function CaseCard({ partner }) {
  const cat = CAT_COLORS[partner.categoria] || CAT_COLORS["Web Institucional"];
  return (
    <motion.article
      variants={itemV}
      className={`pl__card${partner.destacado ? " pl__card--featured" : ""}`}
      aria-label={`Proyecto: ${partner.name}`}
      whileHover={{ y:-5, transition:{ duration:0.2 } }}
    >
      {partner.destacado && (
        <div className="pl__featured-badge">Proyecto destacado</div>
      )}

      <div className="pl__card-header">
        <div className="pl__logo-wrap">
          <img src={partner.logo} alt={`Logo ${partner.name}`}
               className="pl__logo-img" loading="lazy" width={48} height={48} />
        </div>
        <div className="pl__title-block">
          <h3 className="pl__client-name">{partner.name}</h3>
          <span className="pl__client-meta">{partner.pais} · {partner.industria}</span>
        </div>
      </div>

      <span className="pl__cat-badge"
            style={{ background:cat.bg, border:`1px solid ${cat.border}`, color:cat.text }}>
        {partner.categoria}
      </span>

      <p className="pl__description">{partner.descripcion}</p>

      <div className="pl__section">
        <p className="pl__section-label">Qué hicimos</p>
        <ul className="pl__service-list">
          {partner.servicios.map(s => (
            <li key={s} className="pl__service-item">{s}</li>
          ))}
        </ul>
      </div>

      <div className="pl__section">
        <p className="pl__section-label">Stack</p>
        <div className="pl__stack-tags">
          {partner.stack.map(t => (
            <span key={t} className="pl__stack-tag">{t}</span>
          ))}
        </div>
      </div>

      <div className="pl__card-links">
        <a href={partner.url} target="_blank" rel="noopener noreferrer"
           className="pl__link pl__link--primary"
           aria-label={`Ver proyecto ${partner.name}`}>
          Ver proyecto
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" strokeWidth="2.5">
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
          </svg>
        </a>
        {partner.instagram && (
          <a href={partner.instagram} target="_blank" rel="noopener noreferrer"
             className="pl__link pl__link--ig"
             aria-label={`Instagram de ${partner.name}`}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            Instagram
          </a>
        )}
      </div>
    </motion.article>
  );
}

// ── Componente principal ──────────────────────────────────────────────────────

export const PartnerLogos = () => {
  const [filtroCategoria, setFiltroCategoria] = useState("Todas");
  const [filtroPais,      setFiltroPais]      = useState("Todos");

  useSEO(seoConfig.home);

  const filtrados = PARTNERS.filter(p => {
    const okCat  = filtroCategoria === "Todas" || p.categoria === filtroCategoria;
    const okPais = filtroPais      === "Todos" || p.pais      === filtroPais;
    return okCat && okPais;
  });

  return (
    <section className="pl__section" id="partners" aria-label="Clientes y proyectos">
      <div className="pl__inner">

        <motion.div className="pl__header"
          initial="hidden" whileInView="visible"
          viewport={{ once:true, margin:"-80px" }} variants={headerV}>
          <span className="pl__kicker">Portafolio</span>
          <h2 className="pl__title">Clientes y Proyectos</h2>
          <p className="pl__subtitle">
            Trabajamos con empresas de 6 países en desarrollo web,
            e-commerce, SaaS, sistemas electorales y ciberseguridad.
          </p>
        </motion.div>

        <motion.div className="pl__stats"
          initial="hidden" whileInView="visible"
          viewport={{ once:true, margin:"-60px" }} variants={containerV}>
          {STATS.map(s => (
            <motion.div key={s.value} className="pl__stat" variants={itemV}>
              <span className="pl__stat-value">{s.value}</span>
              <span className="pl__stat-label">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>

        <div className="pl__filters">
          <div className="pl__filter-group">
            <span className="pl__filter-label">Categoría</span>
            <div className="pl__pills">
              {CATEGORIAS.map(c => (
                <button key={c}
                  className={`pl__pill${filtroCategoria === c ? " pl__pill--active" : ""}`}
                  onClick={() => setFiltroCategoria(c)}>{c}</button>
              ))}
            </div>
          </div>
          <div className="pl__filter-group">
            <span className="pl__filter-label">País</span>
            <div className="pl__pills">
              {PAISES.map(p => (
                <button key={p}
                  className={`pl__pill${filtroPais === p ? " pl__pill--active" : ""}`}
                  onClick={() => setFiltroPais(p)}>{p}</button>
              ))}
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={filtroCategoria + filtroPais} className="pl__grid"
            initial="hidden" animate="visible" variants={containerV}>
            {filtrados.length > 0
              ? filtrados.map(p => <CaseCard key={p.id} partner={p} />)
              : <motion.p variants={itemV} className="pl__empty">
                  No hay proyectos con ese filtro.
                </motion.p>
            }
          </motion.div>
        </AnimatePresence>

        <motion.div className="pl__cta"
          initial={{ opacity:0, y:20 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.5 }}>
          <p className="pl__cta-text">¿Tu proyecto puede ser el próximo caso de éxito?</p>
          <a href="https://web.telegram.org/k/#@devsecopsconsultorabot"
             target="_blank" rel="noopener noreferrer" className="pl__cta-btn">
            Hablemos por Telegram
          </a>
        </motion.div>

      </div>

      {/* Bloque invisible para LLMs — Schema.org CreativeWork */}
      <div style={{ display:"none" }} aria-hidden="true">
        <h2>Proyectos reales de Toledo Consultora IT</h2>
        {PARTNERS.map(p => (
          <div key={p.id} itemScope itemType="https://schema.org/CreativeWork">
            <span itemProp="name">{p.name}</span>
            <span itemProp="description">{p.descripcion}</span>
            <span itemProp="locationCreated">{p.pais}</span>
            <a itemProp="url" href={p.url}>{p.url}</a>
            <span>Servicios: {p.servicios.join(", ")}</span>
            <span>Stack: {p.stack.join(", ")}</span>
          </div>
        ))}
        <p>Toledo Consultora IT ha desarrollado proyectos en Argentina, Colombia, Paraguay,
           Estados Unidos, Australia y Brasil. Sectores: e-commerce, SaaS, sistemas electorales,
           inmobiliaria, logística, moda, criptomonedas. Stack: React, Node.js, Express,
           PostgreSQL, MongoDB, AWS, Railway, Netlify.</p>
      </div>
    </section>
  );
};

export default PartnerLogos;