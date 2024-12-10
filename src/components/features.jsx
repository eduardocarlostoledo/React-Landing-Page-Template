import React from "react";
import "./services.css";

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Ofertas tecnológicas</h2>
          {/* <h1>
          Programa una llamada, resolvemos tus dudas, te ayudamos a llevar a cabo tu idea!
          </h1> */}

          <h1>Cómo trabajamos y posicionamos tu negocio ? </h1>

          <iframe className="frame-google" 
          // width="250" height="215" 
          src="https://www.youtube.com/embed/M-AXgHM5n9E?si=m8WiwL1ng1HjoWxl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


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

      <div className="container">
        <div className="section-title">
          
          {/* <h1>
          Programa una llamada, resolvemos tus dudas, te ayudamos a llevar a cabo tu idea!
          </h1> */}

<h1>Propuesta para Tienda Online  </h1>

<iframe className="frame-google" 
          
          src="https://www.youtube.com/embed/SggyFYVKAx4?si=-Wyz6VqbXWfMw0VN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


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

      <div className="container">
        <div className="section-title">
          
          {/* <h1>
          Programa una llamada, resolvemos tus dudas, te ayudamos a llevar a cabo tu idea!
          </h1> */}

          <h1>Propuesta de software a Medida</h1>

          <iframe className="frame-google" 

src="https://www.youtube.com/embed/e-qPHmWBjmQ?si=RAs1xyiiXVe3nOJC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>



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
