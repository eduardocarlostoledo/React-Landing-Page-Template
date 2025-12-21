import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import logo from "../components/images/logo.png";
import "../styles/Navbar.css";

export const GlobalNavbar = () => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  };

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
            <h1 className="company-name">Toledo Consultora IT</h1>
            <h1 className="company-name-sub">Transformación Digital</h1>
          </motion.div>
        </div>

        <div className="grow1">
          <motion.ul
            className={`navbar-menu ${menuOpen ? "show" : ""}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {navLinks.map((link) => (
              <motion.li key={link.to} variants={itemVariants}>
                <Link to={link.to} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </Link>
              </motion.li>
            ))}
            <motion.li variants={itemVariants}>
              <motion.a
                href="https://wa.me/5493764221063"
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
                whileHover={{ scale: 1.15, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <i
                  style={{ color: "green", marginBottom: "20px", width: "20px" }}
                  className="fab fa-whatsapp"
                ></i>
              </motion.a>
            </motion.li>
          </motion.ul>
          <motion.div
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ☰
          </motion.div>
        </div>
      </section>
    </nav>
  );
};
