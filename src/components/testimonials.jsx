import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useSEO } from "../hooks/useSEO";
import { seoConfig } from "../utils/seoConfig";
import "../styles/testimonials.css";

export const Testimonials = () => {
  // SEO Configuration for Testimonials Section
  const testimonialsSEO = seoConfig.testimonials;

  // El widget Elfsight se carga ahora de forma asíncrona desde index.html
  // para evitar render blocking. Este efecto solo re-renderiza si el widget
  // ya está disponible globalmente (inyectado desde HTML)
  useEffect(() => {
    if (window.elfWidgetPlatform && !window.elfWidgetInitialized) {
      window.elfWidgetInitialized = true;
      window.elfWidgetPlatform.renderWidget(document.querySelector('.elfsight-app-ee107658-e146-4bcf-9ca9-ab0cb731e261'));
    }
  }, []);

  // Animaciones
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 12, delay: 0.05 },
    },
  };

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
          <p>Reseñas y testimonios verificados de nuestros clientes satisfechos</p>
          <div className="header-accent"></div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="testimonials-stats"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className="stat-card" variants={itemVariants}>
            <div className="stat-icon">⭐</div>
            <div className="stat-number">4.8</div>
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

        {/* Widget */}
        <motion.div
          className="widget-wrapper"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
        >
          <div 
            className="elfsight-app-ee107658-e146-4bcf-9ca9-ab0cb731e261"
            data-elfsight-app-lazy
          />
        </motion.div>

        {/* CTA Section */}
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
            whileHover={{ scale: 1.05, boxShadow: "0 12px 30px rgba(255, 203, 5, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fas fa-star"></i>
            Deja tu reseña en Google
          </motion.a>
        </motion.div>
      </div>
    </section>
    </>
  );
};