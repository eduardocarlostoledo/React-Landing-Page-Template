import React from "react";
import "./team.css";

export const Team = ({ data }) => {
  return (
    <section id="team" className="team-section">
      <div className="container">
        <div className="team-header">
          <h2>Conoce a Nuestro Equipo</h2>
          <p className="team-subtitle">
            Nuestro equipo está conformado por Diseñadores Gráficos, Analistas de Sistemas, 
            Devs Full Stack y Devs Ops
          </p>
          <p className="team-description">
            “Nuestra pasión es dar soluciones concretas a problemas cotidianos, a través de la 
            tecnología y el diseño. Nos gusta lo que hacemos y nos gusta hacerlo bien. Además, 
            ponemos énfasis en la seguridad digital y la protección de datos personales, porque 
            sabemos que es un tema importante para nuestros clientes."
          </p>
        </div>

        <div className="team-grid">
          {data ? (
            data.map((member, index) => (
              <div key={`${member.name}-${index}`} className="team-card">
                <div className="team-img-container">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="team-img"
                    loading="lazy"
                  />
                  <div className="team-overlay"></div>
                </div>
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-position">{member.job}</p>
                  {member.social && (
                    <div className="team-social">
                      {member.social.linkedin && (
                        <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      )}
                      {member.social.github && (
                        <a href={member.social.github} target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-github"></i>
                        </a>
                      )}
                      {member.social.twitter && (
                        <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-twitter"></i>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="team-loading">Cargando equipo...</div>
          )}
        </div>
      </div>
    </section>
  );
};