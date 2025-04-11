import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './cotizaciones.css';
import { useNavigate } from 'react-router-dom';

export const Cotizaciones = ({ selectedIds = [] }) => {
  const navigate = useNavigate();
  const pricingPlans = [
    {
      id: 1,
      title: "Landing Page",
      price: "$149.000",
      description: "Diseño profesional adaptable",
      popular: false,
      features: [
        "Dominio por 1 año",
        "1 email corporativo",
        "Hosting por 1 año",
        "Diseño responsive",
        "SEO básico incluido",
        "Navbar y Footer personalizados",
        "Secciones: Nosotros, Contacto"
      ],
      cta: "Solicitar Landing Page",
      link: "https://mpago.la/2SQELVR"
    },
    {
      id: 2,
      title: "Ecommerce",
      price: "$249.000",
      description: "Tienda online completa",
      popular: true,
      features: [
        "Integración con MercadoPago",
        "Panel autogestionable",
        "Sin límite de productos",
        "Base de datos incluida",
        "Diseño responsive",
        "Dominio y hosting 1 año",
        "Frontend optimizado"
      ],
      cta: "Quiero mi Tienda Online",
      link: "https://mpago.la/2w6ThwW"
    },
    {
      id: 3,
      title: "SEO Avanzado",
      price: "$149.000",
      description: "Posicionamiento estratégico",
      popular: false,
      features: [
        "Estrategia SEO completa",
        "Posicionamiento Google Maps",
        "Optimización técnica",
        "Informes de rendimiento",
        "Palabras clave estratégicas",
        "SEO On-page/Off-page",
        "Optimización para móviles"
      ],
      cta: "Mejorar Posicionamiento",
      link: "https://mpago.la/1SgrAx3"
    },
    {
      id: 4,
      title: "Campañas Digitales",
      price: "$99.000",
      description: "Gestión profesional",
      popular: false,
      features: [
        "Gestión de Facebook Ads",
        "Gestión de Instagram Ads",
        "Gestión de Google Ads",
        "Optimización continua",
        "Informes mensuales",
        "Segmentación avanzada",
        "*No incluye presupuesto publicitario"
      ],
      cta: "Contratar Campañas Digitales",
      link: "https://mpago.la/1NbDWJ9"
    },
    {
      id: 5,
      title: "Paquete Completo Ecommerce + Landing",
      price: "$449.000",
      description: "Paquete Bussiness",
      popular: false,
      features: [
        "Dominio y Hosting FREE por 1 año",
        "Dos cuentas @email corporativas",
        "Navbar y Footer personalizados",
        "Secciones: Nosotros, Contacto",
        "Integración con MercadoPago",
        "Panel autogestionable Sin límite de productos",
        "Base de datos Postgresql/ORM + Node/Express web server",
        "Diseño Adaptativo a Pc y Móvil",
        "Estrategia SEO completa",
        "Posicionamiento en Google Business y Maps",
        "Campaña Publicitaria Estándar x 30días en Google Ads"
      ],
      cta: "Contratar Pack Bussiness",
      link: "https://mpago.la/1ppUGph"
    },
    {
      id: 6,
      title: "Asesoría de Negocios",
      price: "$50.000",
      description: "Sesión estratégica personalizada",
      popular: false,
      features: [
        "Análisis de modelo de negocio",
        "Optimización de procesos",
        "Planificación comercial",
        "Estrategias de crecimiento",
        "Análisis de mercado",
        "Sesión de 2 horas",
        "Informe ejecutivo"
      ],
      cta: "Contratar Asesoría",
      link: "https://mpago.la/1Bgc6i5"
    }
  ];
  const selectedPlans = selectedIds.length > 0
    ? pricingPlans.filter(plan => selectedIds.includes(plan.id))
    : pricingPlans;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  const handlePlanClick = (plan) => {
    navigate(`/detalle/${plan.id}`, { state: { plan } });
  };

  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Nuestros Servicios Profesionales</h2>
          <p>Soluciones digitales a medida con precios transparentes y resultados garantizados</p>
        </motion.div>

        <motion.div
          className="pricing-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {selectedPlans.map((plan) => (
            <motion.div
              key={plan.id}
              className={`pricing-card ${plan.popular ? 'popular' : ''}`}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className="card-header">
                <h3>{plan.title}</h3>
                <div className="price">
                  {plan.price} <span>{plan.title === "Campañas Digitales" ? "/mes" : "único"}</span>
                </div>
                <p>{plan.description}</p>
              </div>
              <div className="card-body">
                <ul className="feature-list">
                  {plan.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <motion.button
                  className="pricing-button"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  onClick={() => handlePlanClick(plan)}
                >
                  {plan.cta}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
