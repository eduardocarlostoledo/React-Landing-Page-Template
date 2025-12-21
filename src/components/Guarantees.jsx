import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import "../styles/Guarantees.css";

export const Guarantees = () => {
  const guarantees = [
    {
      icon: "🛡️",
      title: "Garantía de Resultados",
      description: "30 días o devolvemos tu dinero",
      details: "Si no ves mejora en posicionamiento, te reembolsamos",
    },
    {
      icon: "📈",
      title: "Posicionamiento Garantizado",
      description: "Top 10 en 90 días o gratis el mes siguiente",
      details: "Trabajamos hasta lograrlo - sin costos adicionales",
    },
    {
      icon: "💬",
      title: "Soporte 24/7",
      description: "Atención rápida en menos de 5 minutos",
      details: "Chat, WhatsApp o llamada directa con quien ejecuta",
    },
    {
      icon: "📊",
      title: "Dashboard Transparente",
      description: "Acceso en tiempo real a todos tus datos",
      details: "Ves exactamente qué hacemos y qué resultados generas",
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
    <section className="guarantees-section">
      <div className="guarantees-container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
        >
          <h2>Nuestras Garantías</h2>
          <p>Nos comprometemos con tus resultados</p>
          <div className="header-accent"></div>
        </motion.div>

        <motion.div
          className="guarantees-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {guarantees.map((guarantee, index) => (
            <motion.div
              key={index}
              className="guarantee-card"
              variants={itemVariants}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 50px rgba(255, 203, 5, 0.25)",
                transition: { duration: 0.3 },
              }}
            >
              <div className="guarantee-icon">{guarantee.icon}</div>
              <h3>{guarantee.title}</h3>
              <p className="guarantee-description">{guarantee.description}</p>
              <p className="guarantee-details">{guarantee.details}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
