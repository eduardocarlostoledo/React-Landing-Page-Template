import React from "react";
import "./asesoramiento.css";

export const Asesoramiento = (props) => {
  return (
    <section id="asesoramiento" className="asesoramiento-section">
      <div className="container">
        <div className="section-header">
          <h2>OFERTAS TECNOLÓGICAS</h2>
          <p>Cómo trabajamos y posicionamos tu negocio</p>
        </div>
        
        <div className="servicios-grid">
          {props.data ? (
            props.data.map((d, i) => (
              <div key={`${d.title}-${i}`} className="servicio-card">
                <div className="icon-container">
                  <i className={`icon ${d.icon}`}></i>
                </div>
                <div className="servicio-content">
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="loading">Cargando servicios...</div>
          )}
        </div>
      </div>
    </section>
  );
};