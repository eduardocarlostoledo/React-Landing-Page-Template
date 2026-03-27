import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../components/images/logo.png";
import "../styles/Navbar.css";

const cyberLinks = [
  { label: "Auditoría de Seguridad Web", to: "/auditoria-de-seguridad-web" },
  { label: "Cumplimiento NIS2", to: "/cumplimiento-nis2" },
  { label: "Auditoría GDPR", to: "/auditoria-gdpr" },
  { label: "Test de Vulnerabilidades", to: "/test-de-vulnerabilidades" },
  { label: "Seguridad Ecommerce", to: "/seguridad-ecommerce" },
  { label: "Cybersecurity Spain (EN)", to: "/cybersecurity-audit-spain" },
];

const webLinks = [
  { label: "Desarrollo Web & Ecommerce", to: "/desarrollo-web" },
  { label: "Diseño Landing Page", to: "/about-landing-page" },
  { label: "SEO & Posicionamiento", to: "/about-posicionamiento" },
  { label: "Google Ads", to: "/about-google-ads" },
  { label: "Google Business", to: "/about-google-business" },
  { label: "Redes Sociales", to: "/about-redes-sociales" },
  { label: "Comprar Dominio", to: "/about-comprar-dominio" },
];

export const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    setOpenDropdown(null);
    const element = document.getElementById(id);
    if (element) {
      const offset = element.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top: offset, behavior: "smooth" });
      window.history.pushState(null, null, `#${id}`);
    }
  };

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

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
            <h2 className="company-name">Toledo Consultora IT</h2>
            <a
              href="https://www.toledoconsultora.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "0.78rem", color: "#ffcb05", textDecoration: "none", fontWeight: 600 }}
            >
              www.toledoconsultora.com
            </a>
          </div>
        </div>

        <div className="grow1">
          <ul className={`navbar-menu ${menuOpen ? "show" : ""}`}>

            {/* Dropdown Ciberseguridad */}
            <li className="nav-dropdown">
              <button
                className="nav-dropdown-trigger"
                onClick={() => toggleDropdown("cyber")}
                aria-expanded={openDropdown === "cyber"}
              >
                🔒 Ciberseguridad <span className="nav-arrow">{openDropdown === "cyber" ? "▲" : "▼"}</span>
              </button>
              {openDropdown === "cyber" && (
                <ul className="nav-dropdown-menu">
                  {cyberLinks.map((link) => (
                    <li key={link.to}>
                      <Link to={link.to} onClick={() => { setMenuOpen(false); setOpenDropdown(null); }}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Dropdown Desarrollo Web */}
            <li className="nav-dropdown">
              <button
                className="nav-dropdown-trigger"
                onClick={() => toggleDropdown("web")}
                aria-expanded={openDropdown === "web"}
              >
                🌐 Desarrollo Web <span className="nav-arrow">{openDropdown === "web" ? "▲" : "▼"}</span>
              </button>
              {openDropdown === "web" && (
                <ul className="nav-dropdown-menu">
                  {webLinks.map((link) => (
                    <li key={link.to}>
                      <Link to={link.to} onClick={() => { setMenuOpen(false); setOpenDropdown(null); }}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li><a href="#about" onClick={(e) => handleLinkClick(e, "about")}>Nosotros</a></li>
            <li><a href="#testimonials" onClick={(e) => handleLinkClick(e, "testimonials")}>Testimonios</a></li>
            <li><a href="#pricing" onClick={(e) => handleLinkClick(e, "pricing")}>Precios</a></li>
            <li><a href="#contact" onClick={(e) => handleLinkClick(e, "contact")}>Contacto</a></li>

            <li>
              <a href="https://wa.me/5493764221063" target="_blank" rel="noopener noreferrer" title="WhatsApp">
                <i style={{ color: "green", width: "20px" }} className="fab fa-whatsapp"></i>
              </a>
            </li>
          </ul>

          <button className="menu-toggle" onClick={() => { setMenuOpen(!menuOpen); setOpenDropdown(null); }}>
            ☰
          </button>
        </div>
      </section>
    </nav>
  );
};
