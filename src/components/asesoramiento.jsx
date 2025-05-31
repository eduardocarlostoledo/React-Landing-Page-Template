import React from 'react';

import "../styles/asesoramiento.css";

export const Asesoramiento = (props) => {

  

  return (
    <section id="asesoramiento"  style={{ paddingTop: "20px" }} className="asesoramiento-section">
      <div className="container-asesoramiento">
        <div className="section-header-asesoramiento">
          <h2 >OFERTAS TECNOLÓGICAS</h2>
          <p>Cómo trabajamos y posicionamos tu negocio</p>
        </div>
        
        <div className="servicios-grid-asesoramiento">
          {props.data ? (
            props.data.map((d, i) => (
              <div key={`${d.title}-${i}`} className="servicio-card">
                <div className="icon-container">
                  <i className={`icon ${d.icon}`}></i>
                </div>
                <div className="servicio-content"
                style={{ color: 'black'}}>
                  <h3 style={{ color: 'black' }}>{d.title}</h3>
                  <p
                  style={{ color: 'black'}}
                  >{d.text}</p>
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