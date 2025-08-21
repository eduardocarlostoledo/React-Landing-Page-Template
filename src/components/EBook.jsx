import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import "../styles/Contact.css"; // reutiliza tu hoja base
import "../styles/ebook-lead.css"; // estilos específicos del gate

/**
 * Props sugeridas:
 * - ebookTitle: string (visible en la UI)
 * - ebookId: string (clave para localStorage y EmailJS)
 * - downloadUrl: string (ruta absoluta a tu servidor, p.ej. https://toledoconsultora.com/files/ebook.pdf)
 * - campaignSource: string (por defecto "instagram")
 */
export const EBook = ({
  ebookTitle = "Reporte de Comercio Electrónico en Argentina",
  ebookId = "reporte-ecommerce-ar",
  downloadUrl = "https://toledoconsultora.com/e-book.pdf",
  campaignSource = "instagram",
}) => {
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "", // opcional, lo mantenemos por compatibilidad con tu estilo
    terms: false,
    company: "", // honeypot (no mostrar)
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [canDownload, setCanDownload] = useState(false);

  const stripCRLF = (s = "") => s.replace(/(\r|\n)/g, " "); // evita inyección de cabeceras  
  const clamp = (s = "", max = 500) => (s.length > max ? s.slice(0, max) : s);

  const sanitizeName = (s) => clamp(stripCRLF(s).trim(), 80);
  const sanitizeEmail = (s) => clamp(stripCRLF(s).trim(), 120);
  const sanitizeMessage = (s) => clamp(stripCRLF(s), 2000);

  // Permite solo https:// y bloquea esquemas peligrosos
  const ensureHttpsUrl = (u) => {
    try {
      const url = new URL(u);
      if (url.protocol !== "https:") throw new Error("only-https");
      return url.toString();
    } catch {
      return "https://toledoconsultora.com/"; // fallback seguro
    }
  };

  // validadores simples
  const isValidEmail = (s) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s);
  const isLikelyName = (s) => /^[\p{L}\p{M}\s.'-]{2,80}$/u.test(s);

  const safeDownloadUrl = ensureHttpsUrl(downloadUrl);

  // Si ya dejó los datos antes, no le pedimos de nuevo
  useEffect(() => {
    const key = `ebookLead:${ebookId}`;
    const flag = localStorage.getItem(key);
    if (flag === "ok") setCanDownload(true);
  }, [ebookId]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();

  //     // Honeypot: si "company" tiene algo, abortar silenciosamente
  //     if (formData.company?.trim().length > 0) {
  //       return;
  //     }

  //     if (!formData.terms) {
  //       Swal.fire({
  //         icon: "warning",
  //         title: "Falta confirmación",
  //         text: "Debés aceptar la política de privacidad para continuar.",
  //         confirmButtonColor: "#3085d6",
  //       });
  //       return;
  //     }

  //     setIsSubmitting(true);
  //     setSubmitStatus(null);

  //     try {

  //       // Usamos sendForm para aprovechar tu template actual.
  //       // Asegurate de tener inputs con "name" acordes al Template de EmailJS.
  //       await emailjs.sendForm(
  //         process.env.REACT_APP_SERVICE_ID,
  //         process.env.REACT_APP_TEMPLATE_ID_CLIENT, // plantilla al cliente (auto‑reply)
  //         formRef.current,
  //         process.env.REACT_APP_PUBLIC_KEY
  //       );

  //       setSubmitStatus({ success: true, message: "¡Gracias! Ya podés descargar tu e‑book." });
  //       setCanDownload(true);
  //       localStorage.setItem(`ebookLead:${ebookId}`, "ok");

  //       Swal.fire({
  //         icon: "success",
  //         title: "Datos recibidos",
  //         text: "Habilitamos el botón de descarga del e‑book.",
  //         confirmButtonColor: "#3085d6",
  //       });

  //       // Limpiar solo campos visibles
  //       setFormData((prev) => ({ ...prev, name: "", email: "", message: "" }));
  //       setTimeout(() => setSubmitStatus(null), 5000);
  //     } catch (error) {
  //       setSubmitStatus({
  //         success: false,
  //         message: "Hubo un error al enviar el formulario. Probá nuevamente.",
  //       });
  //     } finally {
  //       setIsSubmitting(false);
  //     }
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.company?.trim().length > 0) return; // honeypot

    const clean = {
      name: sanitizeName(formData.name),
      email: sanitizeEmail(formData.email),
      message: sanitizeMessage(formData.message || ""),
    };

    if (!isLikelyName(clean.name)) {
      Swal.fire({
        icon: "warning",
        title: "Nombre inválido",
        text: "Ingresá tu nombre real.",
      });
      return;
    }
    if (!isValidEmail(clean.email)) {
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
        text: "Debés aceptar la política.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Propagá los valores saneados al form antes de sendForm
      if (formRef.current) {
        formRef.current.elements.name.value = clean.name;
        formRef.current.elements.email.value = clean.email;
        formRef.current.elements.message.value = clean.message;
      }

      await emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID_CLIENT,
        formRef.current,
        process.env.REACT_APP_PUBLIC_KEY
      );

      setSubmitStatus({
        success: true,
        message: "¡Gracias! Ya podés descargar tu e‑book.",
      });
      setCanDownload(true);
      localStorage.setItem(`ebookLead:${ebookId}`, "ok");
      Swal.fire({
        icon: "success",
        title: "Datos recibidos",
        text: "Descarga habilitada.",
      });

      setFormData((prev) => ({ ...prev, name: "", email: "", message: "" }));
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
    // Si querés que en la próxima visita vuelva a llenar los datos:
    localStorage.removeItem(`ebookLead:${ebookId}`);

    // Reseteamos el estado
    setCanDownload(false);
  };

  return (
    <section id="ebook-gate" className="contact-section ebook-section">
      <Helmet>
        <title>{ebookTitle} | Descarga con registro</title>
        <meta
          name="description"
          content={`Descargá el e‑book "${ebookTitle}" completando tus datos. Recibí tendencias, estrategias y señales del mercado directamente en tu correo.`}
        />
        <link
          rel="canonical"
          href="https://toledoconsultora.com/e-book-gratuito"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: ebookTitle,
            headline: ebookTitle,
            about: "E-commerce en Argentina",
            author: { "@type": "Organization", name: "Toledo Consultora IT" },
            publisher: {
              "@type": "Organization",
              name: "Toledo Consultora IT",
            },
            inLanguage: "es-AR",
          })}
        </script>
      </Helmet>

      <div className="contact-container">
        <div className="contact-header">
          <h2>{ebookTitle}</h2>
          <p className="lead-copy">
            Descargá el e‑book y recibí <strong>estrategias</strong>,{" "}
            <strong>tendencias</strong> y <strong>señales del mercado</strong>{" "}
            para tomar mejores decisiones. Contenido actualizado y accionable.
          </p>
        </div>

        <div className="contact-content ebook-grid">
          {/* Formulario (gate) */}
          {!canDownload && (
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="contact-form ebook-form"
              noValidate
            >
              {/* honeypot */}
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
                    placeholder="Ingresá tu nombre"
                    autoComplete="name"
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
                    placeholder="tucorreo@ejemplo.com"
                    autoComplete="email"
                  />
                </div>

                {/* mensaje opcional */}
                <div className="form-group full-width">
                  <label htmlFor="message">Mensaje (opcional)</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Consultas y Sugerencias (Opcionales)"
                  ></textarea>
                </div>

                {/* meta ocultos para EmailJS / análisis */}
                <input type="hidden" name="ebook_id" value={ebookId} />
                <input type="hidden" name="ebook_title" value={ebookTitle} />
                <input type="hidden" name="source" value={campaignSource} />
              </div>

              <div className="terms-row">
                <label className="checkbox">
                  <input
                    type="checkbox"
                    name="terms"
                    checked={formData.terms}
                    onChange={handleChange}
                    required
                  />
                  <span>
                    Acepto la{" "}
                    <Link to="/politica-de-privacidad" className="inline-link">
                      Política de Privacidad
                    </Link>{" "}
                    y el contacto comercial.
                  </span>
                </label>
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
                  "Quiero mi e‑book"
                )}
              </button>
            </form>
          )}

          {/* Tarjeta de descarga (visible tras el envío) */}
          {canDownload && (
            <div className="download-card">
              <h3>¡Listo! Tu descarga está habilitada</h3>
              <p>
                Gracias por tu interés. Al hacer clic vas a descargar el e‑book
                desde nuestro servidor.
              </p>
              {/* <a className="download-btn" href={downloadUrl} target="_blank" rel="noopener noreferrer">
                Descargar e‑book
              </a> */}

              <a
                className="download-btn"
                href={safeDownloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleDownloadClick}
              >
                Descargar e-book
              </a>
            </div>
          )}

          {/* Columna info y redes (reutiliza tu estilo) */}
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

        {/* Mapa — lo mantenemos, pero lazy */}
        <div className="contact-map">
          <iframe
            title="Ubicación de Toledo Consultora IT"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3543.261900230452!2d-55.9518657477621!3d-27.367535016477795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9457bdf666326c87%3A0xf2d3d831576ad4b1!2sC.%2052%2022%2C%20N3301%20Posadas%2C%20Misiones!5e0!3m2!1ses!2sar!4v1732100062688!5m2!1ses!2sar"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="sitemap-footer-link">
          <Link to="/indice-del-sitio" className="sitemap-map-link">
            Ver Mapa Completo del sitio
          </Link>
          <Link to="/about-google-ads" className="sitemap-map-link">
            Acerca de Google Ads
          </Link>
          <Link to="/about-posicionamiento" className="sitemap-map-link">
            Por qué Contratar SEO
          </Link>
        </div>
      </div>

      {/* Overlay de carga global */}
      {isSubmitting && (
        <div className="spinner-overlay" aria-live="assertive" aria-busy="true">
          <div className="spinner-lg"></div>
          <p>Procesando tu solicitud…</p>
        </div>
      )}
    </section>
  );
};
