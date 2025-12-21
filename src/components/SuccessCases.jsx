import React from "react";
import { motion } from "framer-motion";
import { useSEO } from "../hooks/useSEO";
import "../styles/SuccessCases.css";

export const SuccessCases = () => {
  const successCases = [
    {
      icon: "📈",
      title: "Lua Collection - Ecommerce",
      metric: "+300%",
      result: "Aumento en ventas online",
      description: "De 0 a 50 órdenes/mes en 3 meses con SEO y Google Ads",
      color: "#FFD700",
    },
    {
      icon: "🔍",
      title: "Local Toledo - SEO",
      metric: "150+",
      result: "Búsquedas locales/mes",
      description: "Posicionamiento #1 en Google Local para 8 palabras clave",
      color: "#FF9500",
    },
    {
      icon: "💰",
      title: "Calyaan SaaS - Google Ads",
      metric: "320%",
      result: "ROI en campaña PPC",
      description: "Inversión $2000 → Retorno $8400 en primer mes",
      color: "#00D4FF",
    },
    {
      icon: "📱",
      title: "Appel Neumáticos - Landing",
      metric: "2.5x",
      result: "Más conversiones",
      description: "Landing page optimizada: de 5% a 12.5% conversion rate",
      color: "#7C3AED",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 12, delay: 0.1 },
    },
  };

  return (
    <section className="success-cases-section">
      <div className="success-container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
        >
          <h2>Casos de Éxito Verificados</h2>
          <p>Resultados reales de nuestros clientes en Toledo y Argentina</p>
          <div className="header-accent"></div>
        </motion.div>

        <motion.div
          className="cases-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {successCases.map((caseItem, index) => (
            <motion.div
              key={index}
              className="case-card"
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              style={{ "--accent-color": caseItem.color }}
            >
              <div className="case-icon">{caseItem.icon}</div>
              <h3>{caseItem.title}</h3>
              <div className="case-metric">{caseItem.metric}</div>
              <p className="case-result">{caseItem.result}</p>
              <p className="case-description">{caseItem.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="success-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p>¿Quieres resultados similares para tu negocio?</p>
          <a href="#contact" className="cta-button">
            Solicita tu Estrategia Gratis
          </a>
        </motion.div>
      </div>
    </section>
  );
};
