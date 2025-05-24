import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "../components/images/logo.png";
import "../styles/Navbar.css";

export const Navigation = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = element.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top: offset, behavior: "smooth" });
      window.history.pushState(null, null, `#${id}`);
    }
  };

  const renderLink = (label, id) => (
    <a href={`#${id}`} onClick={(e) => handleLinkClick(e, id)}>{label}</a>
  );

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
            <li>{renderLink("¿Qué hacemos?", "asesoramiento")}</li>
            <li>{renderLink("Acerca de", "about")}</li>
            <li>{renderLink("Confían en Nosotros", "partners")}</li>
            <li>{renderLink("Portfolio", "portfolio")}</li>
            <li>{renderLink("Testimonios", "testimonials")}</li>
            <li>{renderLink("Pricing", "pricing")}</li>
            <li>{renderLink("Contacto", "contact")}</li>
            <li>
              <a
            href="https://wa.me/5493764221063"
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp"
          >            
             <i  style={{ color: "green", marginBottom:"20px", width:"20px" }} className="fab fa-whatsapp"></i>
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
