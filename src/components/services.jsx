import React from "react";
import "../styles/servicesSolutions.css";


export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container-services">
        <div className="section-title">
          <h2>Nuestras Soluciones</h2>
          <p>
             Podemos brindarte soluciones en las siguientes especialidades
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-sm-6">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
