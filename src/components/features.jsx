import React from "react";
import "./services.css";

const VideoThumbnail = ({ title, videoId }) => {
  return (
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
};

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Ofertas tecnológicas</h2>
          <h1>¿Cómo trabajamos y posicionamos tu negocio?</h1>
          <VideoThumbnail title="Posicionamiento de negocios" videoId="M-AXgHM5n9E" />
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-md-6">
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>

      <div className="container">
        <div className="section-title">
          <h1>Propuesta para Tienda Online</h1>
          <VideoThumbnail title="Propuesta Ecommerce" videoId="SggyFYVKAx4" />
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-md-6">
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>

      <div className="container">
        <div className="section-title">
          <h1>Propuesta de software a medida</h1>
          <VideoThumbnail title="Propuesta Software" videoId="e-qPHmWBjmQ" />
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-md-6">
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
