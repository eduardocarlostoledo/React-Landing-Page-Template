import React from 'react';
import { motion } from 'framer-motion';
import './cotizaciones.css';

export const Asesoria = () => {
  return (
    <motion.div 
      className="pricing-card consulting-card"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="card-header" style={{ background: '#e74c3c' }}>
        <h3></h3>
        <div className="price">$50.000</div>
        <p></p>
      </div>
      <div className="card-body">
        <ul className="feature-list">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <motion.button
          className="pricing-button"
          style={{ background: '#e74c3c' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Reservar Asesoría
        </motion.button>
      </div>
    </motion.div>
  );
};

