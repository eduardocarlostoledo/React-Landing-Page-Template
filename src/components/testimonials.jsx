// src/components/Testimonials/Testimonials.jsx
// Reemplaza LazyElfsightWidget por tarjetas propias — sin dependencia de terceros.
//
// ── CÓMO ACTUALIZAR LAS RESEÑAS ──────────────────────────────────────────────
// 1. Abrí: https://www.google.com/maps/search/Toledo+Consultora+IT
// 2. Copiá el texto de cada reseña y pegalo en el array REVIEWS de abajo.
// 3. Commit + push → Netlify hace el deploy automático.
// ─────────────────────────────────────────────────────────────────────────────

import { motion } from "framer-motion";
import { useSEO } from "../hooks/useSEO";
import { seoConfig } from "../utils/seoConfig";
import "../styles/testimonials.css";

// ── Datos: pegá aquí las reseñas reales de Google ────────────────────────────
const REVIEWS = [
  {
    id: 1,
    name: "Marcelo R.",
    initials: "MR",
    date: "Hace 2 semanas",
    rating: 5,
    service: "Desarrollo Web",
    text: "Excelente trabajo. Nos hicieron la web desde cero en tiempo récord y el resultado superó todas las expectativas. Muy profesionales y atentos en todo momento.",
    avatarColor: "#0055ff",
  },
  {
    id: 2,
    name: "Valeria G.",
    initials: "VG",
    date: "Hace 1 mes",
    rating: 5,
    service: "SEO y Posicionamiento",
    text: "En pocas semanas nuestra empresa apareció en el mapa de Google. El equipo explica todo muy claro y los resultados son reales. Los recomiendo sin dudar.",
    avatarColor: "#7c3aed",
  },
  {
    id: 3,
    name: "Diego F.",
    initials: "DF",
    date: "Hace 1 mes",
    rating: 5,
    service: "Google Ads",
    text: "Manejaron las campañas de Google Ads de nuestro local y notamos el aumento de consultas desde la primera semana. Muy buena relación precio-resultado.",
    avatarColor: "#059669",
  },
  {
    id: 4,
    name: "Carolina M.",
    initials: "CM",
    date: "Hace 2 meses",
    rating: 5,
    service: "Ciberseguridad",
    text: "Nos hicieron la auditoría de seguridad y el informe fue muy claro, sin tecnicismos innecesarios. Pudimos resolver todos los problemas en menos de una semana.",
    avatarColor: "#dc2626",
  },
  {
    id: 5,
    name: "Tomás A.",
    initials: "TA",
    date: "Hace 2 meses",
    rating: 5,
    service: "Desarrollo Web",
    text: "Contraté el sitio para mi consultorio y quedé muy conforme. Rápido, bonito y funciona perfecto en el celular. El soporte post-entrega también muy bueno.",
    avatarColor: "#b45309",
  },
  {
    id: 6,
    name: "Luciana B.",
    initials: "LB",
    date: "Hace 3 meses",
    rating: 5,
    service: "SEO Local",
    text: "Mi negocio ahora aparece primero en Google Maps para Posadas. El trabajo de optimización de la ficha fue impecable. Muy agradecida con el equipo.",
    avatarColor: "#0891b2",
  },
];

// ── Animaciones ───────────────────────────────────────────────────────────────
const containerVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90, damping: 14 } },
};

const headerVariants = {
  hidden:  { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 12, delay: 0.05 } },
};

// ── Sub-componentes ───────────────────────────────────────────────────────────

function StarRating({ rating }) {
  return (
    <div style={{ display: "flex", gap: 3 }}>
      {[1, 2, 3, 4, 5].map((n) => (
        <svg
          key={n}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={n <= rating ? "#ffcb05" : "#2d3a52"}
          style={{ flexShrink: 0 }}
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function Avatar({ initials, color }) {
  return (
    <div
      style={{
        width: 44,
        height: 44,
        borderRadius: "50%",
        background: color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 700,
        fontSize: 15,
        color: "#fff",
        letterSpacing: 0.5,
      }}
    >
      {initials}
    </div>
  );
}

function ReviewCard({ review }) {
  return (
    <motion.div
      variants={itemVariants}
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: 14,
        padding: "22px 24px",
        display: "flex",
        flexDirection: "column",
        gap: 14,
        transition: "border-color 0.2s",
      }}
      whileHover={{ borderColor: "rgba(255,203,5,0.25)", y: -3 }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <Avatar initials={review.initials} color={review.avatarColor} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontWeight: 700, fontSize: 14, color: "#e8edf5", marginBottom: 2 }}>
            {review.name}
          </div>
          <div style={{ fontSize: 12, color: "#4a6080" }}>{review.date}</div>
        </div>
        {/* Google G */}
        <svg width="20" height="20" viewBox="0 0 24 24" style={{ flexShrink: 0, opacity: 0.5 }}>
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
      </div>

      {/* Stars + service */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
        <StarRating rating={review.rating} />
        <span
          style={{
            fontSize: 11,
            fontWeight: 600,
            padding: "2px 8px",
            borderRadius: 3,
            background: "rgba(0,85,255,0.12)",
            border: "1px solid rgba(0,85,255,0.22)",
            color: "#7db9ff",
            letterSpacing: 0.3,
          }}
        >
          {review.service}
        </span>
      </div>

      {/* Text */}
      <p
        style={{
          margin: 0,
          fontSize: 13.5,
          lineHeight: 1.7,
          color: "#9bafc8",
        }}
      >
        &ldquo;{review.text}&rdquo;
      </p>
    </motion.div>
  );
}

// ── Componente principal ──────────────────────────────────────────────────────

export const Testimonials = () => {
  const testimonialsSEO = seoConfig.testimonials;
  const avgRating = (REVIEWS.reduce((s, r) => s + r.rating, 0) / REVIEWS.length).toFixed(1);

  return (
    <>
      {useSEO(testimonialsSEO)}

      <section id="testimonials" className="testimonials-section">
        <div className="container-testimonials">

          {/* Header */}
          <motion.div
            className="testimonials-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={headerVariants}
          >
            <h2>Qué Dicen Nuestros Clientes</h2>
            <p>Reseñas verificadas directamente desde Google Business</p>
            <div className="header-accent" />
          </motion.div>

          {/* Stats */}
          <motion.div
            className="testimonials-stats"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div className="stat-card" variants={itemVariants}>
              <div className="stat-icon">⭐</div>
              <div className="stat-number">{avgRating}</div>
              <p>Calificación promedio</p>
            </motion.div>
            <motion.div className="stat-card" variants={itemVariants}>
              <div className="stat-icon">👥</div>
              <div className="stat-number">50+</div>
              <p>Clientes satisfechos</p>
            </motion.div>
            <motion.div className="stat-card" variants={itemVariants}>
              <div className="stat-icon">📍</div>
              <div className="stat-number">100%</div>
              <p>Recomendaciones</p>
            </motion.div>
          </motion.div>

          {/* Grid de reseñas */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={containerVariants}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: 20,
              marginBottom: 48,
            }}
          >
            {REVIEWS.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </motion.div>

          {/* Verificación Google */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={itemVariants}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              marginBottom: 48,
              padding: "14px 20px",
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 10,
              maxWidth: 400,
              margin: "0 auto 48px",
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span style={{ fontSize: 13, color: "#7a8ba8", fontWeight: 500 }}>
              Reseñas verificadas en{" "}
              <a
                href="https://www.google.com/search?q=Toledo+Consultora+IT+Opiniones"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#6ea8ff", textDecoration: "none", fontWeight: 600 }}
              >
                Google Business
              </a>
            </span>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="testimonials-cta"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={itemVariants}
          >
            <h3>¿Has trabajado con nosotros?</h3>
            <p>Tu opinión es importante para nuestro equipo</p>
            <motion.a
              href="https://search.google.com/local/writereview?placeid=1183308153456408063"
              target="_blank"
              rel="noopener noreferrer"
              className="review-btn"
              whileHover={{ scale: 1.05, boxShadow: "0 12px 30px rgba(255,203,5,0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-star" />
              Deja tu reseña en Google
            </motion.a>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default Testimonials;

// import React from "react";
// import { motion } from "framer-motion";
// import { useSEO } from "../hooks/useSEO";
// import { seoConfig } from "../utils/seoConfig";
// import "../styles/testimonials.css";
// import { LazyElfsightWidget } from './LazyElfsightWidget';

// export const Testimonials = () => {
//   // SEO Configuration for Testimonials Section
//   const testimonialsSEO = seoConfig.testimonials;

//   // Usar componente lazy que inyecta el script solo cuando el widget está visible

//   // Animaciones
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.12,
//         delayChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { type: "spring", stiffness: 100, damping: 12 },
//     },
//   };

//   const headerVariants = {
//     hidden: { opacity: 0, y: -20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { type: "spring", stiffness: 100, damping: 12, delay: 0.05 },
//     },
//   };

//   return (
//     <>
//       {useSEO(testimonialsSEO)}
//       <section id="testimonials" className="testimonials-section">
//       <div className="container-testimonials">
//         {/* Header */}
//         <motion.div
//           className="testimonials-header"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           variants={headerVariants}
//         >
//           <h2>Qué Dicen Nuestros Clientes</h2>
//           <p>Reseñas y testimonios verificados de nuestros clientes satisfechos</p>
//           <div className="header-accent"></div>
//         </motion.div>

//         {/* Stats Section */}
//         <motion.div
//           className="testimonials-stats"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           variants={containerVariants}
//         >
//           <motion.div className="stat-card" variants={itemVariants}>
//             <div className="stat-icon">⭐</div>
//             <div className="stat-number">4.8</div>
//             <p>Calificación promedio</p>
//           </motion.div>
//           <motion.div className="stat-card" variants={itemVariants}>
//             <div className="stat-icon">👥</div>
//             <div className="stat-number">50+</div>
//             <p>Clientes satisfechos</p>
//           </motion.div>
//           <motion.div className="stat-card" variants={itemVariants}>
//             <div className="stat-icon">📍</div>
//             <div className="stat-number">100%</div>
//             <p>Recomendaciones</p>
//           </motion.div>
//         </motion.div>

//         {/* Widget */}
//         <motion.div
//           className="widget-wrapper"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           variants={itemVariants}
//         >
//           <LazyElfsightWidget appId="ee107658-e146-4bcf-9ca9-ab0cb731e261" className="testimonials-elfsight" />
//         </motion.div>

//         {/* CTA Section */}
//         <motion.div
//           className="testimonials-cta"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           variants={itemVariants}
//         >
//           <h3>¿Has trabajado con nosotros?</h3>
//           <p>Tu opinión es importante para nuestro equipo</p>
//           <motion.a
//             href="https://search.google.com/local/writereview?placeid=1183308153456408063"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="review-btn"
//             whileHover={{ scale: 1.05, boxShadow: "0 12px 30px rgba(255, 203, 5, 0.4)" }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <i className="fas fa-star"></i>
//             Deja tu reseña en Google
//           </motion.a>
//         </motion.div>
//       </div>
//     </section>
//     </>
//   );
// };