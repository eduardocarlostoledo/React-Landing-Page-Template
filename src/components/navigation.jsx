import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../components/images/logo.png";

export const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Función para manejar el clic en los enlaces del navbar
  const handleLinkClick = (e, sectionId) => {
    e.preventDefault(); // Evita el comportamiento por defecto del anchor
    setMenuOpen(false); // Cierra el menú móvil si está abierto

    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 220; // Altura exacta del navbar
      const elementPosition = element.getBoundingClientRect().top; // Posición del elemento
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight; // Ajuste del scroll

      // Desplazamiento suave
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Actualiza la URL sin recargar (opcional, para SPA)
      window.history.pushState(null, null, `#${sectionId}`);
    }
  };

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand page-scroll" onClick={() => setMenuOpen(false)}>
            <img src={logo} alt="Toledo Consultora IT" style={{ height: "50px", width: "auto" }} />
          </Link>
          <button
            type="button"
            className="navbar-toggle collapsed"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
        </div>

        <div className={`collapse navbar-collapse ${menuOpen ? "in" : ""}`}>
          <ul className="nav navbar-nav navbar-right">            
            <li><a href="#asesoramiento" onClick={(e) => handleLinkClick(e, "asesoramiento")}>¿Qué hacemos?</a></li>
            <li><a href="#acerca" onClick={(e) => handleLinkClick(e, "acerca")}>Acerca de</a></li>
            <li><a href="#partners" onClick={(e) => handleLinkClick(e, "partners")}>Confían en Nosotros</a></li>
            <li><a href="#services" onClick={(e) => handleLinkClick(e, "services")}>Soluciones</a></li>
            <li><a href="#portfolio" onClick={(e) => handleLinkClick(e, "portfolio")}>Portfolio</a></li>
            <li><a href="#testimonials" onClick={(e) => handleLinkClick(e, "testimonials")}>Testimonios</a></li>
            <li><a href="#pricing" onClick={(e) => handleLinkClick(e, "pricing")}>Pricing</a></li>
            <li><a href="#contact" onClick={(e) => handleLinkClick(e, "contact")}>Contacto</a></li>          </ul>
        </div>
      </div>
    </nav>
  );
};
