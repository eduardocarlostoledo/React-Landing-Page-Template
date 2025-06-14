import React from "react";
import "../styles/about.css";

export const About = ({ data }) => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">



        <div className="about-columns">
          {/* Imagen y razones */}
          <div className="about-image-wrapper">
            <img
              src="/img/about.jpg"
              alt="Equipo de trabajo de Toledo Consultora IT"
              className="about-image"
            />
          </div>

          {/* Texto y beneficios */}
          <div className="about-text">
            <h2>¿Quiénes somos?</h2>
            <p
            style={{ color: 'white', fontSize: '1.5rem', marginTop: '10px' }}
            
            >{data?.paragraph || "Cargando descripción..."}</p>

          
          </div>

          <div className="about-columns">
          <div className="about-highlight-box">
              <h3>¿Por qué trabajar con nosotros?</h3>
              {(data?.Why2 || []).map((item, index) => (
                <div style={{ color: 'white', fontSize: '1.5rem', marginTop: '10px' }}
                className="benefit-box" key={index}>
                  <span>✔</span>
                  <p
                    style={{ color: 'white', fontSize: '1.5rem', marginTop: '10px' }}
                  >{item}</p>
                </div>
              ))}
            </div>

            <div className="about-highlight-box">
              <h4>Nuestros Valores</h4>
              {(data?.Why || []).map((item, index) => (
                <div style={{ color: 'white', fontSize: '1.5rem', marginTop: '10px' }}
                className="benefit-box" key={index}>
                  <span>✔</span>
                  <p
                    style={{ color: 'white', fontSize: '1.5rem', marginTop: '10px' }}
                  >{item}</p>
                </div>
              ))}
            </div>
</div>

        </div>
      </div>

      
    </section>

    
  );
};
