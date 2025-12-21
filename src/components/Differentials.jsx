import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import "../styles/Differentials.css";

export const Differentials = () => {
  const differentials = [
    {
      icon: "👤",
      title: "Atención Personalizada",
      description: "No somos un call center. Trabajas directo con quien ejecuta tu proyecto",
    },
    {
      icon: "📊",
      title: "Transparencia Total",
      description: "Acceso completo a métricas, rankings y resultados en tiempo real",
    },
    {
      icon: "🤝",
      title: "Relaciones a Largo Plazo",
      description: "Pensamos en tu crecimiento sustentable, no en venta única",
    },
    {
      icon: "⚡",
      title: "Respuesta Rápida",
      description: "Soporte en menos de 5 minutos vía chat, WhatsApp o llamada",
    },
    {
      icon: "💡",
      title: "Soluciones Hechas a Medida",
      description: "No usamos templates genéricos. Cada estrategia es única",
    },
    {
      icon: "💰",
      title: "Precios Justos",
      description: "40% más económicos que agencias grandes sin sacrificar calidad",
    },
    {
      icon: "✅",
      title: "Garantías Concretas",
      description: "30 días o devolvemos tu dinero. Posicionamiento garantizado",
    },
    {
      icon: "🎯",
      title: "Foco en Resultados",
      description: "No medimos por actividad, sino por conversiones y ROI real",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
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
    <section className="differentials-section">
      <div className="differentials-container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
        >
          <h2>¿Por qué Elegirnos?</h2>
          <p>Lo que nos hace diferentes de otras agencias</p>
          <div className="header-accent"></div>
        </motion.div>

        <motion.div
          className="differentials-list"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {differentials.map((diff, index) => (
            <motion.div
              key={index}
              className="differential-item"
              variants={itemVariants}
              whileHover={{ x: 8, transition: { duration: 0.3 } }}
            >
              <div className="diff-icon">{diff.icon}</div>
              <div className="diff-content">
                <h3>{diff.title}</h3>
                <p>{diff.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
