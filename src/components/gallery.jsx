import React, { useState } from 'react';
import "../styles/galery.css";

export const Gallery = ({ data }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (project) => setSelectedImage(project);
  const closeModal = () => setSelectedImage(null);
  const openProjectLink = (link) => window.open(link, '_blank', 'noopener,noreferrer');

  return (
    <section id="portfolio" className="gallery-section" aria-label="Galería de proyectos realizados">
      <div className="container-portfolio">
        <header className="section-header">
          <h2>Nuestros Proyectos</h2>
          <p className="section-subtitle">
            Explora nuestro trabajo para clientes destacados
          </p>
        </header>

        <div className="gallery-grid">
          {data && data.length > 0 ? (
            data.map((project, index) => (
              <div
                key={`${project.title}-${index}`}
                className="gallery-item"
                onClick={() => openModal(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && openModal(project)}
                aria-label={`Ver detalles del proyecto ${project.title}`}
              >
                <div className="image-wrapper">
                  <img
                    src={project.smallImage}
                    alt={`Captura del proyecto: ${project.title}`}
                    className="project-image"
                    loading={index === 0 ? "eager" : "lazy"} // primera imagen carga con prioridad
                    width="600"
                    height="400"
                    fetchpriority={index === 0 ? "high" : undefined} // HTML5 para LCP
                  />
                  <div className="image-overlay">
                    <div className="overlay-content">
                      <h3 className="project-title">{project.title}</h3>
                      <span className="view-btn">Ver proyecto en Partners</span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="loading">Cargando proyectos...</div>
          )}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="gallery-modal" onClick={closeModal} role="dialog" aria-modal="true">
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
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
                <button
                  onClick={() => openProjectLink(selectedImage.link)}
                  className="project-link"
                  aria-label="Abrir sitio del proyecto"
                >
                  Visitar Sitio
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
