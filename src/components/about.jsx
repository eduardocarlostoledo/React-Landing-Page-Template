import React from "react";
import { motion } from "framer-motion";
import { useSEO } from "../hooks/useSEO";
import { seoConfig } from "../utils/seoConfig";
import "../styles/about.css";

export const About = ({ data }) => {
  // SEO Configuration for About Section
  const aboutSEO = seoConfig.about;

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
      {useSEO(aboutSEO)}
      <section id="about" className="about-section">
      <div className="about-container">
        <motion.div
          className="about-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
        >
          <h2>¿Quiénes somos?</h2>
          <div className="header-accent"></div>
        </motion.div>

        <motion.div
          className="about-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Imagen y texto principal */}
          <motion.div className="about-main" variants={itemVariants}>
            <div className="about-image-wrapper">
              <img
                src="/img/about.jpg"
                alt="Equipo de trabajo de Toledo Consultora IT"
                className="about-image"
              />
            </div>
            <div className="about-text">
              <p>{data?.paragraph || "Cargando descripción..."}</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Valores y beneficios */}
        <motion.div
          className="about-benefits"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className="about-benefit-column" variants={itemVariants}>
            <div className="benefit-header">
              <div className="benefit-icon">✨</div>
              <h3>¿Por qué trabajar con nosotros?</h3>
            </div>
            <div className="benefit-list">
              {(data?.Why2 || []).map((item, index) => (
                <motion.div
                  className="benefit-item"
                  key={index}
                  whileHover={{ x: 8 }}
                >
                  <span className="benefit-check">✓</span>
                  <p>{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div className="about-benefit-column" variants={itemVariants}>
            <div className="benefit-header">
              <div className="benefit-icon">🎯</div>
              <h3>Nuestros Valores</h3>
            </div>
            <div className="benefit-list">
              {(data?.Why || []).map((item, index) => (
                <motion.div
                  className="benefit-item"
                  key={index}
                  whileHover={{ x: 8 }}
                >
                  <span className="benefit-check">✓</span>
                  <p>{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
    </>
  );
};
