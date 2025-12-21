import React from "react";
import { motion } from "framer-motion";
import "../styles/services.css";

export const Features = ({ data }) => {
  const features = [
    {
      metric: "+250%",
      metricLabel: "Aumento de tráfico",
      service: "SEO & Posicionamiento",
      description: "Posiciona tu negocio en Google. Tus clientes te encuentran cuando buscan soluciones.",
      icon: "fas fa-search",
      benefit: "Visibilidad en búsquedas relevantes",
    },
    {
      metric: "45%",
      metricLabel: "Reducción en Ad spend",
      service: "Google & Meta Ads",
      description: "Campañas inteligentes optimizadas. Cada peso gastado en publicidad genera resultados medibles.",
      icon: "fas fa-bullseye",
      benefit: "ROI comprobado y escalable",
    },
    {
      metric: "+180%",
      metricLabel: "Crecimiento en ventas",
      service: "E-commerce & Tiendas Online",
      description: "Plataformas de venta 24/7. Convierte visitantes en clientes mientras duermes.",
      icon: "fas fa-shopping-cart",
      benefit: "Ingresos pasivos en línea",
    },
    {
      metric: "100%",
      metricLabel: "Automatización",
      service: "Software SaaS a Medida",
      description: "Sistemas diseñados para tu negocio. Automatiza procesos, reduce costos operativos.",
      icon: "fas fa-cogs",
      benefit: "Eficiencia y escalabilidad",
    },
    {
      metric: "7 días",
      metricLabel: "Lanzamiento",
      service: "Sitios Web Profesionales",
      description: "Presencia digital que vende. Sitios rápidos, modernos, optimizados para conversión.",
      icon: "fas fa-globe",
      benefit: "Primera impresión premium",
    },
    {
      metric: "AI Powered",
      metricLabel: "Branding & Contenido",
      service: "Identidad Digital Completa",
      description: "Logo, paleta, copy y visuals. Identidad coherente en todos tus canales digitales.",
      icon: "fas fa-palette",
      benefit: "Marca profesional y memorable",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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

  return (
    <section id="features" className="features-section-new">
      <div className="features-container">
        <motion.div
          className="features-header-new"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Resultados Reales que Generan Negocio</h2>
          <p>
            Nuestros clientes ven cambios medibles. Trabajamos con datos, no con promesas.
          </p>
        </motion.div>

        <motion.div
          className="features-grid-new"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card-new"
              variants={itemVariants}
              whileHover={{ y: -12 }}
            >
              <div className="feature-metric">
                <span className="metric-number">{feature.metric}</span>
                <span className="metric-label">{feature.metricLabel}</span>
              </div>

              <div className="feature-icon">
                <i className={feature.icon}></i>
              </div>

              <h3 className="feature-service">{feature.service}</h3>
              <p className="feature-description">{feature.description}</p>

              <div className="feature-benefit">
                <i className="fas fa-check-circle"></i>
                <span>{feature.benefit}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="case-study-section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="case-study-header">
            <h3>Caso de Éxito Real</h3>
            <p className="case-subtitle">Cliente: Appel - Neumáticos y Cubiertas (Encarnación, Paraguay)</p>
          </div>

          <div className="case-study-content">
            <div className="case-metrics">
              <div className="metric-box">
                <div className="metric-value">5.000</div>
                <div className="metric-desc">Impresiones Mensuales</div>
                <div className="metric-note">Búsquedas orgánicas en Google</div>
              </div>
              <div className="metric-box">
                <div className="metric-value">250</div>
                <div className="metric-desc">Clicks Mensuales</div>
                <div className="metric-note">Tráfico directo hacia el sitio</div>
              </div>
              <div className="metric-box">
                <div className="metric-value">5%</div>
                <div className="metric-desc">CTR (Click Through Rate)</div>
                <div className="metric-note">Por encima del promedio de la industria</div>
              </div>
              <div className="metric-box">
                <div className="metric-value">1ª</div>
                <div className="metric-desc">Posición en Google</div>
                <div className="metric-note">Primera página de resultados</div>
              </div>
            </div>

            <div className="case-images">
              <motion.img
                src="/img/leadcases/appelseo.png"
                alt="Analytics SEO Appel"
                className="case-image"
                whileHover={{ scale: 1.05 }}
              />
              <motion.img
                src="/img/leadcases/appelsearchseo.png"
                alt="Búsquedas SEO Appel"
                className="case-image"
                whileHover={{ scale: 1.05 }}
              />
              <motion.img
                src="/img/leadcases/ctrseo.png"
                alt="CTR SEO Appel"
                className="case-image"
                whileHover={{ scale: 1.05 }}
              />
              <motion.img
                src="/img/leadcases/ctrinteranual.png"
                alt="CTR Interanual Appel"
                className="case-image"
                whileHover={{ scale: 1.05 }}
              />
            </div>
          </div>

          <div className="case-conclusion">
            <i className="fas fa-star"></i>
            <p>Este cliente recibe <strong>5,000 impresiones mensuales</strong> desde búsquedas orgánicas con un CTR de 5%, posicionado en la <strong>primera página de Google</strong> para el rubro de neumáticos y cubiertas. <strong>Estos resultados son sostenibles y escalables</strong> con una estrategia SEO sólida.</p>
          </div>
        </motion.div>

        <motion.div
          className="features-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h3>¿Quieres estos resultados para tu negocio?</h3>
          <motion.a
            href="#contact"
            className="features-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Solicita una Consultoría Gratuita
            <i className="fas fa-arrow-right"></i>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
