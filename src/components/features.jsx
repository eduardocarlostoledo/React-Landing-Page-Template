import React from "react";
import "./services.css";

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Consultora de Tecnología Web</h2>
          <h1>
          Programa una llamada, resolvemos tus dudas, te ayudamos a llevar a cabo tu idea!
          </h1>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-md-6">
                  <i className={d.icon}></i>
                  <h3 >{d.title}</h3>
                  <p >{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
