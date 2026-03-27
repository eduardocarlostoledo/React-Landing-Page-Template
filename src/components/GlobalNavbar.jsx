import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
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

export const GlobalNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const close = () => { setMenuOpen(false); setOpenDropdown(null); };
  const toggleDropdown = (name) => setOpenDropdown(openDropdown === name ? null : name);

  return (
    <nav className="navbar">
      <section className="layout">
        <div className="grow1">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }}>
            <Link className="logo" to="/">
              <img src={logo} alt="Toledo Consultora IT" className="logo-image-navbar" />
            </Link>
          </motion.div>
        </div>

        <div className="grow1">
          <motion.div className="navbar-brand" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <h2 className="company-name">Toledo Consultora IT</h2>
            <a
              href="https://www.toledoconsultora.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "0.78rem", color: "#ffcb05", textDecoration: "none", fontWeight: 600 }}
            >
              www.toledoconsultora.com
            </a>
          </motion.div>
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
                      <Link to={link.to} onClick={close}>{link.label}</Link>
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
                      <Link to={link.to} onClick={close}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li><Link to="/" onClick={close}>Inicio</Link></li>
            <li><Link to="/servicios-profesionales" onClick={close}>Precios</Link></li>
            <li><Link to="/contacto" onClick={close}>Contacto</Link></li>

            <li>
              <a href="https://wa.me/5493764221063" target="_blank" rel="noopener noreferrer" title="WhatsApp">
                <i style={{ color: "green", width: "20px" }} className="fab fa-whatsapp"></i>
              </a>
            </li>
          </ul>

          <motion.button
            className="menu-toggle"
            onClick={() => { setMenuOpen(!menuOpen); setOpenDropdown(null); }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ☰
          </motion.button>
        </div>
      </section>
    </nav>
  );
};
