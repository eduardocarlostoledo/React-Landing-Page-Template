import React, { useState, useEffect } from "react";
import logo from "../components/images/logo.png"; // ajustá esta ruta según donde lo guardes

export const Navigation = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const navbarCollapse = document.getElementById("bs-example-navbar-collapse-1");
    if (navbarCollapse) {
      if (menuOpen) {
        navbarCollapse.classList.add("in");
      } else {
        navbarCollapse.classList.remove("in");
      }
    }
  }, [menuOpen]);

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>

          
        </div>

        <a className="navbar-brand page-scroll" href="#page-top">
            <img
              src={logo}
              alt="Toledo Consultora IT"
              style={{ height: "80px", width: "auto" }} // ajustá el tamaño si es necesario
            />
          </a>

        <div
          className={`collapse navbar-collapse ${menuOpen ? "in" : ""}`}
          id="bs-example-navbar-collapse-1"
        >
          

          <ul className="nav navbar-nav navbar-right">
          
            <li><a href="#asesoramiento" className="page-scroll" onClick={handleLinkClick}>Que hacemos?</a></li>
            <li><a href="#acerca" className="page-scroll" onClick={handleLinkClick}>Acerca De</a></li>
            <li><a href="#partners" className="page-scroll" onClick={handleLinkClick}>Confían en Nosotros</a></li>
            <li><a href="#services" className="page-scroll" onClick={handleLinkClick}>Soluciones</a></li>
            <li><a href="#portfolio" className="page-scroll" onClick={handleLinkClick}>Portfolio</a></li>
            <li><a href="#testimonials" className="page-scroll" onClick={handleLinkClick}>Testimonios</a></li>
            {/* <li><a href="#team" className="page-scroll" onClick={handleLinkClick}>Equipo</a></li> */}
            <li><a href="#pricing" className="page-scroll" onClick={handleLinkClick}>Pricing</a></li>
            <li><a href="#contact" className="page-scroll" onClick={handleLinkClick}>Contacto</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
