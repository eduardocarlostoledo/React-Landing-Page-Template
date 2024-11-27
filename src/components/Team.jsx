import React from "react";
import styles from "./team.css"

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="section-title-team">
          <h2>Nuestro equipo esta conformado por Diseñadores Gráficos, Analistas de Sistemas, Devs Full Stack y Devs Ops</h2>
          <p>
          “Nuestra pasión es reinventar la industria y construir una empresa única que abrace completamente el futuro. A medida que ampliamos nuestro negocio, también debemos evolucionar y reinventarnos"
          </p>
        </div>
        <div id="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
                  <div className="thumbnail">
                    {" "}
                    <img src={d.img} alt="..." className="team-img" />
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
