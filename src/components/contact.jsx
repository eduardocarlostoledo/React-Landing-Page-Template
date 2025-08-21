import React, { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import "../styles/Contact.css";
import { form } from "framer-motion/client";

export const Contact = ({ data }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
     
      // ENVÍO AL CLIENTE
      await emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID_CLIENT, // Solicitud de informacion
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      );
      console.log("dentro de handle  sendFORM", formData);

      setSubmitStatus({ success: true, message: "Mensaje enviado con éxito!" });
      setFormData({ name: "", email: "", message: "" });

      Swal.fire({
        icon: "success",
        title: "Hemos recibido tu consulta",
        text: "Nos comunicaremos a la brevedad posible",
        confirmButtonColor: "#3085d6",
      });

      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "Error al enviar el mensaje. Intente nuevamente.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2>MANTENGAMOS EL CONTACTO</h2>
          <p>
            Déjanos un mensaje o consulta y estaremos en comunicación a la
            brevedad posible.
          </p>
        </div>

        <div className="contact-content">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Ingrese su nombre"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Correo Electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Ingrese su email"
                />
              </div>

              <div className="form-group full-width">
                <label htmlFor="message">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Dejá tu mensaje y un teléfono si deseás..."
                ></textarea>
              </div>
            </div>

            {submitStatus && (
              <div
                className={`submit-status ${
                  submitStatus.success ? "success" : "error"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner"></span> Enviando...
                </>
              ) : (
                "Enviar Mensaje"
              )}
            </button>
          </form>

          <div className="contact-info">
            <h3>Información de Contacto</h3>

            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="info-content">
                <h4>Dirección</h4>
                <p>C.52 / 22 – Posadas, Misiones, Argentina</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div className="info-content">
                <h4>Teléfono</h4>
                <p>+54 3764221063</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="info-content">
                <h4>Email</h4>
                <p>ventas@toledoconsultora.com</p>
              </div>
            </div>

            <div className="social-links">
              <a
                href="https://wa.me/5493764221063"
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
              >
                <i style={{ color: "green" }} className="fab fa-whatsapp"></i>
              </a>

              <a
                href="https://www.instagram.com/toledoconsultora/"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
              >
                <i style={{ color: "red" }} className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.facebook.com/people/Toledo-Consultora-It/61567966653297/"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
              >
                <i style={{ color: "blue" }} className="fab fa-facebook-f"></i>
              </a>

              <a
                href="https://www.linkedin.com/company/toledo-consultora-it"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <i style={{ color: "blue" }} className="fab fa-linkedin"></i>
              </a>

              <a
                href="https://vimeo.com/user185125486"
                target="_blank"
                rel="noopener noreferrer"
                title="Vimeo"
              >
                <i style={{ color: "blue" }} className="fab fa-vimeo-v"></i>
              </a>

              <a
                href="https://www.youtube.com/@eduardocarlostoledo"
                target="_blank"
                rel="noopener noreferrer"
                title="YouTube"
              >
                <i style={{ color: "red" }} className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="sitemap-footer-link">
          <Link to="/indice-del-sitio" className="sitemap-map-link">
            Ver Mapa Completo del sitio
          </Link>

          <Link to="/about-comprar-dominio" className="sitemap-map-link">
            Contratar un Dominio
          </Link>

          <Link to="/about-google-ads" className="sitemap-map-link">
            Acerca de Google Ads
          </Link>

          <Link to="/about-reseñas" className="sitemap-map-link">
            Porqué las reseñas importan
          </Link>

          <Link to="/about-posicionamiento" className="sitemap-map-link">
            Porqué Contratar Posicionamiento SEO
          </Link>

          <Link to="/about-google-business" className="sitemap-map-link">
            Ficha de Google Business
          </Link>

          <Link to="/about-optimizacion" className="sitemap-map-link">
            Ventajas de la Optimización Web
          </Link>

          <Link to="/about-redes-sociales" className="sitemap-map-link">
            Las redes sociales como Herramientas{" "}
          </Link>

          <Link to="/about-optimizacion" className="sitemap-map-link">
            Landing Page como conversora
          </Link>
        </div>

        <div className="contact-map">
          <iframe
            title="Ubicación de Toledo Consultora IT"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3543.261900230452!2d-55.9518657477621!3d-27.367535016477795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9457bdf666326c87%3A0xf2d3d831576ad4b1!2sC.%2052%2022%2C%20N3301%20Posadas%2C%20Misiones!5e0!3m2!1ses!2sar!4v1732100062688!5m2!1ses!2sar"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
