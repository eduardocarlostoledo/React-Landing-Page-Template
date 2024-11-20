import React from "react";
import "./asesoramiento.css";

export const Asesoramiento = (props) => {
  return (
    <div id="asesoramiento" className="text-center-asesoramiento">
      <div className="asesoramiento-container">
        <div className="section-title-asesoramiento">
          <h2> </h2>
          <p>
          </p>
        </div>
        <div className="asesoramiento-row">
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
