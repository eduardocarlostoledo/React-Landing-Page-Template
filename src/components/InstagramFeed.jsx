import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../styles/InstagramFeed.css";

export const InstagramFeed = () => {
  const [widgetLoaded, setWidgetLoaded] = useState(false);

  // Cargar el widget de Elfsight
  useEffect(() => {
    if (!widgetLoaded) {
      const script = document.createElement("script");
      script.src = "https://static.elfsight.com/platform/platform.js";
      script.async = true;
      script.defer = true;
      script.onload = () => setWidgetLoaded(true);
      document.body.appendChild(script);

      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, [widgetLoaded]);

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

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 12, delay: 0.05 },
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

  return (
    <section id="instagram" className="instagram-section">
      <div className="instagram-container">
        {/* Header */}
        <motion.div
          className="instagram-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
        >
          <h2>Síguenos en Instagram</h2>
          <p>Contenido exclusivo, tips y novedades del mundo digital</p>
          <div className="header-accent"></div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="instagram-stats"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className="stat-item" variants={itemVariants}>
            <div className="stat-icon">📱</div>
            <p>Contenido diario</p>
          </motion.div>
          <motion.div className="stat-item" variants={itemVariants}>
            <div className="stat-icon">💡</div>
            <p>Tips y estrategias</p>
          </motion.div>
          <motion.div className="stat-item" variants={itemVariants}>
            <div className="stat-icon">🎯</div>
            <p>Casos de éxito</p>
          </motion.div>
          <motion.div className="stat-item" variants={itemVariants}>
            <div className="stat-icon">🚀</div>
            <p>Novedades del equipo</p>
          </motion.div>
        </motion.div>

        {/* Widget - Comentado: instagram-widget-wrapper no está funcionando */}
        {/* <motion.div
          className="instagram-widget-wrapper"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
        >
          <div 
            className="elfsight-app-87fcf7c6-9d4f-4add-bfbe-22abb8f62d24"
            data-elfsight-app-lazy
          />
        </motion.div> */}

        {/* CTA */}
        <motion.div
          className="instagram-cta"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
        >
          <h3>¿Quieres estar al día?</h3>
          <motion.a
            href="https://www.instagram.com/toledoconsultora/"
            target="_blank"
            rel="noopener noreferrer"
            className="follow-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fab fa-instagram"></i>
            Sigue nuestro perfil
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
