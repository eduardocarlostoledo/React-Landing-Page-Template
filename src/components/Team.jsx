import React from "react";
import { motion } from "framer-motion";
import { useSEO } from "../hooks/useSEO";
import { seoConfig } from "../utils/seoConfig";
import "../styles/team.css";

export const Team = ({ data }) => {
  // SEO Configuration for Team Section
  const teamSEO = seoConfig.team;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
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
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 12, delay: 0.05 },
    },
  };

  // Especialidades y tecnologías
  const specializations = [
    {
      title: "Community Managers",
      icon: "👥",
      description: "Gestión de redes sociales y comunidades digitales",
      color: "#FF6B6B",
    },
    {
      title: "Publicidad Digital",
      icon: "📢",
      description: "Especialistas en Google Ads y Meta",
      color: "#4ECDC4",
    },
    {
      title: "SEO & Google Business",
      icon: "🔍",
      description: "Expertos en SEO Local y Google Business",
      color: "#45B7D1",
    },
    {
      title: "Ecommerce & SaaS",
      icon: "🛒",
      description: "Soluciones completas de ecommerce y aplicaciones SaaS",
      color: "#96CEB4",
    },
    {
      title: "DevOps & Infraestructura",
      icon: "⚙️",
      description: "Despliegues con Railway y Netlify",
      color: "#FFEAA7",
    },
    {
      title: "Soluciones End-to-End",
      icon: "🚀",
      description: "De la idea al producto finalizado",
      color: "#DDA15E",
    },
  ];

  return (
    <>
      {useSEO(teamSEO)}
    <section id="team" className="team-section">
      <div className="container">
        {/* Header */}
        <motion.div
          className="team-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
        >
          <h2>Nuestro Equipo de Expertos</h2>
          <p className="team-subtitle">
            Un equipo multidisciplinario de profesionales comprometidos con la excelencia
          </p>
          <p className="team-description">
            Somos Diseñadores Gráficos, Analistas de Sistemas, Devs Full Stack y DevOps 
            especializados en dar soluciones concretas a problemas cotidianos. Nos gusta lo que 
            hacemos y nos gusta hacerlo bien, con énfasis en seguridad digital y protección de datos.
          </p>
        </motion.div>

        {/* Especialidades */}
        <motion.div
          className="specializations-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {specializations.map((spec, index) => (
            <motion.div
              key={index}
              className="specialization-card"
              variants={itemVariants}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0, 32, 91, 0.15)" }}
            >
              <div className="spec-icon">{spec.icon}</div>
              <h3>{spec.title}</h3>
              <p>{spec.description}</p>
              <div className="spec-accent" style={{ background: spec.color }}></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Equipo de Personas */}
        <motion.div
          className="team-members-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
        >
          <h3>Conoce a Nuestro Equipo</h3>
          <div className="header-accent"></div>
        </motion.div>

        <motion.div
          className="team-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {data ? (
            data.map((member, index) => (
              <motion.div
                key={`${member.name}-${index}`}
                className="team-card"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <div className="team-img-container">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="team-img"
                    loading="lazy"
                  />
                  <motion.div
                    className="team-overlay"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {member.social && (
                      <div className="team-socials">
                        {member.social.linkedin && (
                          <motion.a
                            href={member.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="team-social-link"
                            whileHover={{ scale: 1.15 }}
                          >
                            <i className="fab fa-linkedin-in"></i>
                          </motion.a>
                        )}
                        {member.social.twitter && (
                          <motion.a
                            href={member.social.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="team-social-link"
                            whileHover={{ scale: 1.15 }}
                          >
                            <i className="fab fa-twitter"></i>
                          </motion.a>
                        )}
                      </div>
                    )}
                  </motion.div>
                </div>
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-position">{member.job}</p>
                </div>
              </motion.div>
            ))
          ) : (
            <p>Cargando equipo...</p>
          )}
        </motion.div>
      </div>
    </section>
    </>
  );
};