import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import "../styles/LeadMagnet.css";

export const LeadMagnet = ({
  guideTitle = "Argentina ECommerce 2025: El Estado del Comercio Online",
  guideId = "argentina-ecommerce-2025",
  downloadUrl = "https://toledoconsultora.com/e-book.pdf",
}) => {
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "", // honeypot
    terms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [canDownload, setCanDownload] = useState(false);

  // Validadores
  const isValidEmail = (s) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s);
  const isLikelyName = (s) => /^[\p{L}\p{M}\s.'-]{2,80}$/u.test(s);

  // Verificar localStorage si ya descargó
  useEffect(() => {
    const key = `guideLead:${guideId}`;
    if (localStorage.getItem(key) === "ok") {
      setCanDownload(true);
    }
  }, [guideId]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot
    if (formData.company?.trim().length > 0) return;

    // Validación
    if (!isLikelyName(formData.name)) {
      Swal.fire({
        icon: "warning",
        title: "Nombre inválido",
        text: "Ingresá tu nombre real.",
      });
      return;
    }

    if (!isValidEmail(formData.email)) {
      Swal.fire({
        icon: "warning",
        title: "Email inválido",
        text: "Revisá el formato del correo.",
      });
      return;
    }

    if (!formData.terms) {
      Swal.fire({
        icon: "warning",
        title: "Falta confirmación",
        text: "Debés aceptar la política de privacidad.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Enviar email con emailjs
      await emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID_CLIENT,
        formRef.current,
        process.env.REACT_APP_PUBLIC_KEY
      );

      setSubmitStatus({
        success: true,
        message: "¡Gracias! Tu guía se está descargando.",
      });
      setCanDownload(true);
      localStorage.setItem(`guideLead:${guideId}`, "ok");

      Swal.fire({
        icon: "success",
        title: "¡Descargando!",
        text: "Enviamos la guía a tu email. Descargar ahora...",
        confirmButtonColor: "#ffcb05",
      });

      setFormData((prev) => ({ ...prev, name: "", email: "", terms: false }));
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (err) {
      setSubmitStatus({
        success: false,
        message: "Error al enviar. Probá nuevamente.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownloadClick = () => {
    // Disparar descarga
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = "50-Tecnicas-SEO-Local.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Permitir descargar nuevamente
    localStorage.removeItem(`guideLead:${guideId}`);
    setCanDownload(false);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };

  return (
    <>
      <Helmet>
        <title>{guideTitle} | Descarga Gratuita</title>
        <meta
          name="description"
          content={`Descargá el informe exclusivo "${guideTitle}". Análisis del ecommerce en Argentina 2025 con oportunidades, desafíos y estrategia probada.`}
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: guideTitle,
            description: "Informe Exclusivo - Agosto 2025",
            author: { "@type": "Organization", name: "Toledo Consultora IT" },
            publisher: {
              "@type": "Organization",
              name: "Toledo Consultora IT",
            },
          })}
        </script>
      </Helmet>

      <section className="lead-magnet-section">
        <div className="lead-magnet-container">
          <motion.div
            className="lead-magnet-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {!canDownload ? (
              <>
                <div className="lead-magnet-text">
                  <h2>� {guideTitle}</h2>
                  <p>Informe Exclusivo - Agosto 2025 | Oportunidades, Desafíos y la Hoja de Ruta para Triunfar</p>

                  <ul className="lead-magnet-benefits">
                    <li>✅ Estado actual del ecommerce en Argentina 2025</li>
                    <li>✅ Oportunidades de negocio sin explotar</li>
                    <li>✅ Desafíos principales y cómo superarlos</li>
                    <li>✅ Estrategia probada para multiplicar ventas online</li>
                    <li>✅ Casos de éxito de emprendimientos argentinos</li>
                  </ul>

                  <form ref={formRef} onSubmit={handleSubmit} className="lead-form" noValidate>
                    {/* Honeypot */}
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="hp-field"
                      tabIndex="-1"
                      autoComplete="off"
                      aria-hidden="true"
                    />

                    <div className="form-row">
                      <input
                        type="text"
                        name="name"
                        placeholder="Tu nombre"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        autoComplete="name"
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="tu@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        autoComplete="email"
                      />
                    </div>

                    <label className="terms-checkbox">
                      <input
                        type="checkbox"
                        name="terms"
                        checked={formData.terms}
                        onChange={handleChange}
                        required
                      />
                      <span>Acepto la política de privacidad</span>
                    </label>

                    <motion.button
                      type="submit"
                      className="lead-button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Enviando..." : "Descargar Gratis"}
                    </motion.button>
                  </form>

                  <p className="lead-guarantee">
                    ✓ Sin spam | ✓ Email 100% privado | ✓ Desuscripción fácil
                  </p>
                </div>

                <div className="lead-magnet-visual">
                  <motion.div
                    className="guide-preview"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <div className="guide-cover">
                      <div className="guide-badge">�</div>
                      <h3>Argentina ECommerce</h3>
                      <p>2025</p>
                      <div className="guide-pages">Informe Exclusivo</div>
                    </div>
                  </motion.div>
                </div>
              </>
            ) : (
              <div className="download-success">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 100, damping: 12 }}
                >
                  <div className="success-icon">✓</div>
                  <h3>¡Gracias!</h3>
                  <p>Enviamos la guía a tu email. También puedes descargar aquí:</p>

                  <motion.button
                    onClick={handleDownloadClick}
                    className="download-button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    📥 Descargar PDF
                  </motion.button>

                  <p className="small-text">
                    Revisa spam si no recibes el email en 2 minutos
                  </p>
                </motion.div>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
};
