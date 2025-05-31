import React, { useState } from 'react';
import "../styles/galery.css";

export const Gallery = ({ data }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (project) => {
    setSelectedImage(project);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const openProjectLink = (link) => {
    console.log(link);
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="portfolio" className="gallery-section">
      <div className="container-portfolio">
        <div className="section-header">
          <h2>Nuestros Proyectos</h2>
          <p className="section-subtitle"
          
            style={{ color: 'black', fontSize: '2rem', marginTop: '10px' }}>
            
            Explora nuestro trabajo para clientes destacados</p>
        </div>

        <div className="gallery-grid">
          {data ? (
            data.map((project, index) => (
              <div 
                key={`${project.title}-${index}`} 
                className="gallery-item"
                onClick={() => openModal(project)}
              >
                <div className="image-wrapper">
                  <img 
                    src={project.smallImage} 
                    alt={project.title} 
                    className="project-image"
                    loading="lazy"
                  />
                  <div className="image-overlay">
                    <div className="overlay-content">
                      <h3 className="project-title">{project.title}</h3>
                      <span className="view-btn"> Ver proyecto en Partners</span>
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

      {/* Modal para imagen seleccionada */}
      {selectedImage && (
        <div className="gallery-modal" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>
              &times;
            </button>
            <img 
              src={selectedImage.largeImage} 
              alt={selectedImage.title} 
              className="modal-image"
            />
            <div className="modal-info">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description || "Descripción del proyecto"}</p>
              {selectedImage.link && (
                <button
                  onClick={() => openProjectLink(selectedImage.link)}
                  className="project-link"
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