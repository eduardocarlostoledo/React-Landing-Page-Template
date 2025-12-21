import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import "../styles/SocialProof.css";

export const SocialProof = () => {
  const stats = [
    { icon: "👥", value: "25+", label: "Clientes Activos" },
    { icon: "✅", value: "150+", label: "Proyectos Completados" },
    { icon: "⭐", value: "4.9/5", label: "Calificación Promedio" },
    { icon: "💰", value: "$3.2M", label: "ROI Generado para Clientes" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };

  return (
    <section className="social-proof-section">
      <div className="proof-container">
        <motion.div
          className="stats-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="proof-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p>Confiamos en números reales y resultados verificables</p>
        </motion.div>
      </div>
    </section>
  );
};
