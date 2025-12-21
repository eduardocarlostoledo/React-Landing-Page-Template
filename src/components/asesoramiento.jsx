import React from 'react';
import { motion } from 'framer-motion';

import "../styles/asesoramiento.css";

export const Asesoramiento = (props) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="asesoramiento" style={{ paddingTop: "20px" }} className="asesoramiento-section">
      <div className="container-asesoramiento">
        <motion.div
          className="section-header-asesoramiento"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
        >
          <h2>OFERTAS TECNOLÓGICAS</h2>
          <p>Cómo trabajamos y posicionamos tu negocio</p>
        </motion.div>
        
        <motion.div
          className="servicios-grid-asesoramiento"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {props.data ? (
            props.data.map((d, i) => (
              <motion.div
                key={`${d.title}-${i}`}
                className="servicio-card"
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                <div className="icon-container">
                  <i className={`icon ${d.icon}`}></i>
                </div>
                <div className="servicio-content">
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="loading">Cargando servicios...</div>
          )}
        </motion.div>
      </div>
    </section>
  );
};