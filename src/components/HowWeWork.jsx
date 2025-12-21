import React from 'react';
import { motion } from 'framer-motion';
import '../styles/HowWeWork.css';

export const HowWeWork = () => {
  const steps = [
    {
      number: 1,
      title: 'Análisis Inicial',
      description: 'Realizamos 2, 3 o 4 reuniones según tu proyecto. Analizamos tu caso real, entendemos tus objetivos y definimos estrategias claras y alcanzables.',
      icon: 'fas fa-magnifying-glass',
      features: ['Diagnóstico completo', 'Objetivos definidos', 'Estrategia personalizada']
    },
    {
      number: 2,
      title: 'Propuesta Concreta',
      description: 'Presentamos soluciones realistas y viables. Sin promesas infladas. Roadmap adaptado a tu presupuesto y metas reales.',
      icon: 'fas fa-lightbulb',
      features: ['Sin promesas vacías', 'Presupuesto transparente', 'Timeline realista']
    },
    {
      number: 3,
      title: 'Desarrollo & Ejecución',
      description: 'Desarrollo web, campañas Meta y Google Ads, identidad digital con IA. Código limpio, estrategia probada, resultados medibles.',
      icon: 'fas fa-code',
      features: ['Web profesional', 'Campañas digitales', 'Identidad con IA']
    },
    {
      number: 4,
      title: 'Entrega & Continuidad',
      description: 'Repositorio completo entregado a ti. Tus credenciales, tu propiedad, sin dependencias de terceros. Soporte y optimización continua.',
      icon: 'fas fa-handshake',
      features: ['Código + Acceso', 'Sin vendor lock-in', 'Soporte técnico']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const arrowVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 0.3 },
    },
  };

  return (
    <section className="how-we-work-section" id="how-we-work">
      <div className="how-we-work-container">
        <motion.div
          className="how-we-work-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Cómo Trabajamos</h2>
          <p>Un proceso transparente, realista y orientado a resultados</p>
        </motion.div>

        <motion.div
          className="steps-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {steps.map((step, index) => (
            <div key={step.number}>
              <motion.div
                className="step-card"
                variants={stepVariants}
                whileHover={{ y: -8, boxShadow: '0 20px 60px rgba(0, 32, 91, 0.15)' }}
              >
                <div className="step-number">
                  <span>{step.number}</span>
                </div>
                <div className="step-icon">
                  <i className={step.icon}></i>
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
                <ul className="step-features">
                  {step.features.map((feature, idx) => (
                    <li key={idx}>
                      <i className="fas fa-check"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {index < steps.length - 1 && (
                <motion.div
                  className="step-arrow"
                  variants={arrowVariants}
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <i className="fas fa-arrow-right"></i>
                </motion.div>
              )}
            </div>
          ))}
        </motion.div>

        <motion.div
          className="how-we-work-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <p>¿Listo para transformar tu presencia digital?</p>
          <motion.a
            href="#contact"
            className="how-we-work-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Iniciemos una Reunión
            <i className="fas fa-arrow-right"></i>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
