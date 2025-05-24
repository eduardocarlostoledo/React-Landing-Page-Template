import React from "react";
import "../styles/services.css";

const VideoThumbnail = ({ title, videoId }) => (
  <a
    className="video-thumbnail"
    href={`https://www.youtube.com/watch?v=${videoId}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
      alt={title}
      loading="lazy"
    />
    <span className="video-title">{title}</span>
  </a>
);

export const Features = ({ data }) => {
  const blocks = [
    {
      videoId: "M-AXgHM5n9E",
      title: "Posicionamiento de negocios",
      filter: "seo",
    },
    {
      videoId: "SggyFYVKAx4",
      title: "Propuesta Ecommerce",
      filter: "ecommerce",
    },
    {
      videoId: "e-qPHmWBjmQ",
      title: "Propuesta Software SaaS",
      filter: "saas",
    },
  ];

  return (
    <section id="features" className="features-section">
      <div className="features-header">
        <h1>Desarrollo Web y Soluciones Digitales en toledoconsultora.com</h1>
        <h2>Servicios Profesionales: Diseño Web, SEO, Tiendas Online y Software a Medida</h2>
        <h3>Especialistas en Posicionamiento en Google, E-commerce y Plataformas SaaS</h3>
      </div>

      <div className="contenedor-features">
        {blocks.map((block, idx) => (
          <div className="container-features" key={idx}>
            <VideoThumbnail title={block.title} videoId={block.videoId} />
            <div className="features-grid">
              {data
                ?.filter((item) => item.category === block.filter)
                .map((item, i) => (
                  <div className="feature-card" key={i}>
                    <i className={item.icon}></i>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
