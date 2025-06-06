import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "../components/images/logo.png";
import "../styles/Navbar.css";

export const GlobalNavbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Inicio", to: "/" },
    { label: "Servicios", to: "/servicios-profesionales" },
    { label: "Acerca de", to: "/asesoramiento-profesional" },
    { label: "Contacto", to: "/contacto" },
    { label: "Dominios", to: "/about-comprar-dominio" },
    { label: "Google Ads", to: "/about-google-ads" },
    { label: "Posicionamiento", to: "/about-posicionamiento" },
    { label: "Google Business", to: "/about-google-business" },
    { label: "Redes Sociales", to: "/about-redes-sociales" },
    { label: "SEO Técnico", to: "/about-optimizacion" },
    { label: "Reseñas", to: "/about-reseñas" },
  ];

  return (
    <nav className="navbar">
      <section className="layout">
        <div className="grow1">
          <Link className="logo" to="/">
            <img src={logo} alt="Toledo Consultora IT" className="logo-image-navbar" />
          </Link>
        </div>

        <div className="grow1">
          <div className="navbar-brand">
            <h1 className="company-name">Toledo Consultora IT</h1>
            <h1 className="company-name-sub">Transformación Digital</h1>
          </div>
        </div>

        <div className="grow1">
          <ul className={`navbar-menu ${menuOpen ? "show" : ""}`}>
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} onClick={() => setMenuOpen(false)}>{link.label}</Link>
              </li>
            ))}
            <li>
              <a
                href="https://wa.me/5493764221063"
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
              >
                <i
                  style={{ color: "green", marginBottom: "20px", width: "20px" }}
                  className="fab fa-whatsapp"
                ></i>
              </a>
            </li>
          </ul>
          <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </div>
        </div>
      </section>
    </nav>
  );
};
