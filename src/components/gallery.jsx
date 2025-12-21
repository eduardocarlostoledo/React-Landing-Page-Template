import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useSEO } from "../hooks/useSEO";
import { seoConfig } from "../utils/seoConfig";
import "../styles/galery.css";

export const Gallery = ({ data }) => {
  // SEO Configuration for Portfolio Section
  const portfolioSEO = seoConfig.portfolio;

  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (project) => setSelectedImage(project);
  const closeModal = () => setSelectedImage(null);
  const openProjectLink = (link) => window.open(link, '_blank', 'noopener,noreferrer');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <>
      {useSEO(portfolioSEO)}
      <section id="portfolio" className="gallery-section" aria-label="Galería de proyectos realizados">
      <div className="container-portfolio">
        <motion.header
          className="section-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Nuestros Proyectos</h2>
          <p className="section-subtitle">
            Explora nuestro trabajo para clientes destacados
          </p>
        </motion.header>

        <motion.div
          className="gallery-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {data && data.length > 0 ? (
            data.map((project, index) => (
              <motion.div
                key={`${project.title}-${index}`}
                className="gallery-item"
                onClick={() => openModal(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && openModal(project)}
                aria-label={`Ver detalles del proyecto ${project.title}`}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="image-wrapper">
                  <img
                    src={project.smallImage}
                    alt={`Captura del proyecto: ${project.title}`}
                    className="project-image"
                    loading={index === 0 ? "eager" : "lazy"}
                    width="600"
                    height="400"
                    fetchpriority={index === 0 ? "high" : undefined}
                  />
                  <motion.div
                    className="image-overlay"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="overlay-content">
                      <h3 className="project-title">{project.title}</h3>
                      <span className="view-btn">Ver proyecto en Partners</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="loading">Cargando proyectos...</div>
          )}
        </motion.div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <motion.div
          className="gallery-modal"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
          >
            <button className="close-btn" onClick={closeModal} aria-label="Cerrar modal">
              &times;
            </button>
            <img
              src={selectedImage.largeImage}
              alt={`Vista ampliada del proyecto: ${selectedImage.title}`}
              className="modal-image"
              width="1000"
              height="600"
            />
            <div className="modal-info">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description || "Descripción del proyecto"}</p>
              {selectedImage.link && (
                <motion.button
                  onClick={() => openProjectLink(selectedImage.link)}
                  className="project-link"
                  aria-label="Abrir sitio del proyecto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Visitar Sitio
                </motion.button>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
    </>
  );
};
