import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import "../styles/Sistema55.css";

export const Sistema55 = () => { 
  const navigate = useNavigate();
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    company: "", // honeypot
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validadores
  const isValidEmail = (s) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s);
  const isLikelyName = (s) => /^[\p{L}\p{M}\s.'-]{2,80}$/u.test(s);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
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

    setIsSubmitting(true);

    try {
      // Enviar email con emailjs
      await emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID_CLIENT,
        formRef.current,
        process.env.REACT_APP_PUBLIC_KEY
      );
      console.log("ENV", 
        "REACT_APP_SERVICE_ID", process.env.REACT_APP_SERVICE_ID,
        "REACT_APP_TEMPLATE_ID_CLIENT",process.env.REACT_APP_TEMPLATE_ID_CLIENT,        
        "REACT_APP_PUBLIC_KEY",process.env.REACT_APP_PUBLIC_KEY


      )

      // Mostrar Swal solo con botón de Pagar
      Swal.fire({
        icon: "success",
        title: "¡Perfecto!",
        html: `

        
<script src="https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js"
data-preference-id="86735920-271452b0-e61f-4175-aac3-6de1040ad62a" data-source="button">
</script>


         
        `,
        confirmButtonText: "🚀 Ir a Pagar",
        confirmButtonColor: "#ff6b6b",
        allowOutsideClick: false,
        allowEscapeKey: false,
      }).then(() => {
  window.open('https://mpago.la/2nGEsaG', '_blank', 'noopener,noreferrer');
      });

      setFormData({ name: "", email: "", whatsapp: "", company: "" });
    } catch (err) {
      console.error("Error:", err);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Ocurrió un error. Por favor, intenta nuevamente.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };

  return (
    <>
      <Helmet>
        <title>Sistema 5-5 | Guía Maestra de Negocios Digitales</title>
        <meta
          name="description"
          content="El Sistema 5-5: En 5 Meses hasta $10000 Dólares. Tu propia fábrica de impresiones. Suscripción $5 USD/mes con contenido semanal para Instagram."
        />
        <meta property="og:title" content="Sistema 5-5 | Guía Maestra de Negocios Digitales" />
        <meta
          property="og:description"
          content="En 5 Meses hasta $10000 Dólares. Tu propia fábrica de impresiones con el Sistema 5-5."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://toledoconsultora.com/sistema-5-5" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Sistema 5-5",
            description: "Guía Maestra de Negocios Digitales",
            offers: {
              "@type": "Offer",
              price: "5.00",
              priceCurrency: "USD",
              priceValidUntil: "2026-12-31",
            },
          })}
        </script>
      </Helmet>

      {/* HERO SECTION */}
      <section className="s55-hero">
        <div className="s55-container">
          <motion.div
            className="s55-hero-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <div className="s55-hero-text">
              <motion.div variants={itemVariants} className="s55-badge">
                🚀 Estrategia Probada
              </motion.div>

              <motion.h1 variants={itemVariants}>
                El Sistema 5-5
              </motion.h1>

              <motion.h2 variants={itemVariants} className="s55-subtitle">
                Guía Maestra de Negocios Digitales
              </motion.h2>

              <motion.p variants={itemVariants} className="s55-tagline">
                Ahorrá En 5 Meses, hasta $5000 Dólares en pauta.
                <br />
                Tené Tu propia fábrica de impresiones 📈
              </motion.p>

              <motion.div variants={itemVariants} className="s55-engagement-box">
                <p className="s55-engagement-title">El Problema:</p>
                <p className="s55-engagement-text">
                  ¿10k seguidores y $0 ingresos? Pocas impresiones = Estás perdiendo dinero.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="s55-engagement-box s55-solution">
                <p className="s55-engagement-title">La Solución:</p>
                <p className="s55-engagement-text">
                  Activá el Método 5-5: Un método probado que te garantiza mensualmente entre 40 mil y 50 mil impresiones via instagram.
                </p>
              </motion.div>

              <motion.p variants={itemVariants} className="s55-cta-text">
                Empezá a replicar el nuestro sistema creado estratégicamente. 
                <br />
                <strong>¡Tu máquina de impresiones arranca acá!</strong>
              </motion.p>
            </div>

            <motion.div
              className="s55-hero-visual"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="s55-visual-card">
                <div className="s55-visual-icon">💰</div>
                <h3>Hasta $10000</h3>
                <p>En 5 Meses</p>
              </div>
              <div className="s55-visual-card">
                <div className="s55-visual-icon">📊</div>
                <h3>80k Impresiones</h3>
                <p>Por apenas $5/mes</p>
              </div>
              <div className="s55-visual-card">
                <div className="s55-visual-icon">⚙️</div>
                <h3>Recibí actualizaciones semanales en el grupo de whatsapp</h3>
                <p>Impresiones Garantizadas</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <section className="s55-value">
        <div className="s55-container">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="s55-section-title"
          >
            Por Qué Vale la Pena
          </motion.h2>

          <div className="s55-value-grid">
            <motion.div
              className="s55-value-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
            >
              <div className="value-icon">💵</div>
              <h3>5 mil Impresiones cuestan 100 usd</h3>
              <p>Con la pauta más "trash" de Instagram Ads</p>
              <p className="value-highlight">
                Nosotros te ofrecemos la máquina por menos de $5 USD
              </p>
            </motion.div>

            <motion.div
              className="s55-value-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              transition={{ delay: 0.1 }}
            >
              <div className="value-icon">📱</div>
              <h3>Armá tu contendo 100% viral</h3>
              <p>Te enviamos la estrategia para armar tus copys + trends hashtags </p>
              <p className="value-highlight">
                Solo seguí estos simples pasos publicá  generá tráfico de forma orgánica.
              </p>
            </motion.div>

            <motion.div
              className="s55-value-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              transition={{ delay: 0.2 }}
            >
              <div className="value-icon">✍️</div>
              <h3>Tu propio Copywriting de Alto Impacto</h3>
              <p>Armá estratégicamente Textos persuasivos</p>
              <p className="value-highlight">
                Tu sistema listo para generar tráfico y conversiones
              </p>
            </motion.div>

            <motion.div
              className="s55-value-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              transition={{ delay: 0.3 }}
            >
              <div className="value-icon">🔥</div>
              <h3>Te enseño a conseguir Tendencias Reales</h3>
              <p>a buscar cuál son los Hashtags y tópicos del momento </p>
              <p className="value-highlight">
                Según los algoritmos vigentes
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SUBSCRIPTION FEATURES */}
      <section className="s55-subscription">
        <div className="s55-container">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="s55-section-title"
          >
            Suscripción Mensual: Tu "Acceso a la comunidad de Contents Managers" 
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
            className="s55-section-subtitle"
          >
            Si tenés una hora por día libre, podés gestionar tu cuenta como un profesional. 
            <br />
            <strong>Con ésta estrategia vas a empezar en el camino del content manager, un trabajo que nunca está de más conocer.</strong>
          </motion.p>

          <motion.div
            className="s55-features-list"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div
              className="s55-feature"
              variants={itemVariants}
            >
              <div className="feature-icon">🎬</div>
              <div className="feature-content">
                <h3>En el grupo compartimos Creativos Semanales</h3>
                <p>Recibí videos y piezas gráficas listas para usar</p>
              </div>
            </motion.div>

            <motion.div
              className="s55-feature"
              variants={itemVariants}
              transition={{ delay: 0.1 }}
            >
              <div className="feature-icon">💬</div>
              <div className="feature-content">
                <h3>Copywriting de Alto Impacto</h3>
                <p>Compartimos estrategias para crear engagement y ctas claros</p>
              </div>
            </motion.div>

            <motion.div
              className="s55-feature"
              variants={itemVariants}
              transition={{ delay: 0.2 }}
            >
              <div className="feature-icon">📈</div>
              <div className="feature-content">
                <h3>Tendencias Reales</h3>
                <p>Hashtags y tópicos actualizados cada semana según los algoritmos vigentes</p>
              </div>
            </motion.div>

            <motion.div
              className="s55-feature"
              variants={itemVariants}
              transition={{ delay: 0.3 }}
            >
              <div className="feature-icon">💻</div>
              <div className="feature-content">
                <h3>Grupo de WhatsApp Privado</h3>
                <p>Recibí contenido semanal exclusivo directo en tu teléfono</p>
              </div>
            </motion.div>

            <motion.div
              className="s55-feature"
              variants={itemVariants}
              transition={{ delay: 0.4 }}
            >
              <div className="feature-icon">🎯</div>
              <div className="feature-content">
                <h3>20k Impresiones Semanales</h3>
                <p>Contenido orgánico garantizado, sin venta de seguidores ni interacciones</p>
              </div>
            </motion.div>

            <motion.div
              className="s55-feature"
              variants={itemVariants}
              transition={{ delay: 0.5 }}
            >
              <div className="feature-icon">🚫</div>
              <div className="feature-content">
                <h3>100% Natural</h3>
                <p>No vendemos seguidores. No vendemos interacciones. Solo impresiones reales.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="s55-roadmap">
        <div className="s55-container">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="s55-section-title"
          >
            Siete pasos al Éxito!
          </motion.h2>

          <div className="s55-steps">
            <motion.div
              className="s55-step"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
            >
              <div className="step-number">1</div>
              <h3>Estás Muy Cerca</h3>
              <p>Sumáte la comunidad de emprendedores que están en tu sintonía</p>
            </motion.div>

            <motion.div
              className="s55-step"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              transition={{ delay: 0.1 }}
            >
              <div className="step-number">2</div>
              <h3>Completa el Formulario</h3>
              <p>Te enviamos la Guía Maestra en PDF</p>
            </motion.div>

            <motion.div
              className="s55-step"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              transition={{ delay: 0.2 }}
            >
              <div className="step-number">3</div>
              <h3>Activá tu Suscripción</h3>
              <p>Pago seguro a través de MercadoPago ($5 USD/mes)</p>
            </motion.div>

            <motion.div
              className="s55-step"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              transition={{ delay: 0.3 }}
            >
              <div className="step-number">4</div>
              <h3>Te unís al Grupo de WhatsApp</h3>
              <p>Recibís contenido semanal + tendencias + copywriting y estás conectado con gente que quiere progresar, como vos!</p>
            </motion.div>

            <motion.div
              className="s55-step"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              transition={{ delay: 0.4 }}
            >
              <div className="step-number">5</div>
              <h3>Satisfacción Garantizada</h3>
              <p>O te devolvemos tu plata, cero vueltas.</p>
            </motion.div>

                <motion.div
              className="s55-step"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              transition={{ delay: 0.4 }}
            >
              <div className="step-number">6</div>
              <h3>Publicá y Vendé</h3>
              <p>Tu contenido + 20k impresiones semanales garantizadas</p>
            </motion.div>

            <motion.div
              className="s55-step"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              transition={{ delay: 0.4 }}
            >
              <div className="step-number">7</div>
              <h3>Broche de Oro</h3>
              <p>Tenemos una comunidad de programadores que se especializan en embudos, landing y sistema de pagos.</p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="s55-form-section">
        <div className="s55-container">
          <motion.div
            className="s55-form-wrapper"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants}>
              Acceso a la Guía Maestra + Suscripción
            </motion.h2>

            <motion.p variants={itemVariants} className="s55-form-intro">
              Completa el formulario y recibí la Guía Maestra. Luego activa tu suscripción de $5 USD/mes.
            </motion.p>

            <form ref={formRef} onSubmit={handleSubmit} className="s55-form" noValidate>
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

              <motion.div variants={itemVariants} className="s55-form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Tu nombre completo"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                />
              </motion.div>

              <motion.div variants={itemVariants} className="s55-form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                />
              </motion.div>

              <motion.div variants={itemVariants} className="s55-form-group">
                <input
                  type="tel"
                  name="whatsapp"
                  placeholder="Tu WhatsApp (opcional)"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  autoComplete="tel"
                />
              </motion.div>

              <motion.button
                type="submit"
                className="s55-submit-button"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? "⏳ Procesando..." : "🚀 Acceder a la Guía + Pagar Suscripción"}
              </motion.button>
            </form>

            <motion.p variants={itemVariants} className="s55-form-guarantee">
              ✓ Sin spam | ✓ Datos 100% privados | ✓ Desuscripción en 1 click
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* GUARANTEE SECTION */}
      <section className="s55-guarantee">
        <div className="s55-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="s55-guarantee-content"
          >
            <motion.h2 variants={itemVariants}>
              ¿Por Qué Confiar en Nosotros?
            </motion.h2>

            <motion.div variants={itemVariants} className="s55-guarantee-grid">
              <div className="guarantee-item">
                <div className="guarantee-icon">✅</div>
                <h3>Garantía 100% Orgánico</h3>
                <p>20k impresiones semanales sin bots ni fake accounts</p>
              </div>

              <div className="guarantee-item">
                <div className="guarantee-icon">✅</div>
                <h3>Contenido Profesional</h3>
                <p>Videos, gráficas y copy creados por expertos en marketing</p>
              </div>

              <div className="guarantee-item">
                <div className="guarantee-icon">✅</div>
                <h3>Actualizado Semanalmente</h3>
                <p>Tendencias reales, hashtags vigentes, algoritmos al día</p>
              </div>

              <div className="guarantee-item">
                <div className="guarantee-icon">✅</div>
                <h3>Precio Imbatible</h3>
                <p>$5 USD/mes vs $50 USD en pauta tradicional</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="s55-final-cta">
        <div className="s55-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="s55-final-content"
          >
            <motion.h2 variants={itemVariants}>
              No Sigas Perdiendo Dinero en Contenido Que No Convierte
            </motion.h2>

            <motion.p variants={itemVariants} className="s55-final-text">
              El Sistema 5-5 es tu solución. Contenido profesional, 20k impresiones garantizadas y un embudo que convierte.
              <br />
              <strong>Todo por $5 USD/mes.</strong>
            </motion.p>

            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="s55-final-button"
              onClick={() => document.querySelector(".s55-form")?.scrollIntoView({ behavior: "smooth" })}
            >
              ⬇️ Comienza Ahora
            </motion.button>
          </motion.div>
        </div>
      </section>
    </>
  );
};
