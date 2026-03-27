import React from "react";
import { motion } from "framer-motion";
import "../styles/Guarantees.css";

export const Guarantees = () => {
  const guarantees = [
    {
      icon: "🕐",
      title: "Soporte 24/7",
      description: "Siempre hay alguien del equipo disponible",
      details: "Chat, WhatsApp o llamada directa con quien ejecuta tu proyecto — no con un bot ni un call center.",
    },
    {
      icon: "🗝️",
      title: "Tu código es tuyo",
      description: "Repositorio, credenciales e integraciones: entregados al cierre",
      details: "Te entregamos el repo completo con todas las integraciones configuradas. Sin dependencia de nosotros para acceder a tu propio producto.",
    },
    {
      icon: "📧",
      title: "Email corporativo con tu dominio",
      description: "Correos profesionales asociados a tu marca",
      details: "Configuramos las cuentas de correo corporativas bajo tu dominio propio para que operes con identidad digital completa.",
    },
    {
      icon: "🔑",
      title: "Acceso total a tus integraciones",
      description: "Variables de entorno, APIs y claves: todas tuyas",
      details: "Documentamos y entregamos cada clave, token y variable de entorno. Soberanía digital garantizada desde el primer día.",
    },
    {
      icon: "📚",
      title: "Documentación técnica completa",
      description: "Colección Postman con todos los endpoints",
      details: "Entregamos documentación técnica estructurada y una colección Postman con los endpoints, payloads y objetos que recibe cada servicio.",
    },
    {
      icon: "🔒",
      title: "Auditoría de seguridad incluida",
      description: "Cumplimiento OWASP · NIS2 · DORA · GDPR",
      details: "Auditamos tu proyecto contra los estándares de la Unión Europea. Tu software es legalmente defendible y técnicamente resistente.",
    },
    {
      icon: "👁️",
      title: "Monitoreo continuo de riesgos",
      description: "Sabemos si tu proyecto está en riesgo antes que tú",
      details: "Supervisión activa de vulnerabilidades, disponibilidad e incidentes. Actuamos antes de que el problema llegue a tus usuarios.",
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
          <p>Compromisos reales. Sin letra chica.</p>
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
