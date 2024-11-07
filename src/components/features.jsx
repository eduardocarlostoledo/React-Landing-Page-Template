import React from "react";
import "./services.css";

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Desarrollo web para tu negocio.</h2>
          <p>
          Nos ocupamos de la tecnología para que puedas enfocarte en el crecimiento de tu empresa          </p>
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
