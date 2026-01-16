import React, { useEffect } from "react";
import { motion } from "framer-motion";
// Hero removed per design: use a simple top section instead
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import "../styles/ConfirmaSuscripcion.css";

export const ConfirmaSuscripcion = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Auto-scroll a top
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

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
        <title>¡Bienvenido al Sistema 5-5! | Toledo Consultora</title>
        <meta
          name="description"
          content="Confirmación de suscripción al Sistema 5-5. Acceso a grupo privado de WhatsApp con contenido semanal."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>


      {/* TOP CONFIRMATION SECTION (hero removed) */}
      <section className="confirma-top">
        <div className="confirma-container">
          <div className="confirma-content confirma-content--pro" role="region" aria-label="Confirmación de suscripción">
            <img
              src="/img/checkout.png"
              alt="Checkout Seguro - Candado de Seguridad"
              className="checkout-image-pro"
            />
            <h1 className="confirma-title-pro">
              Suscripción confirmada
              <br />con éxito
            </h1>
            <p className="confirma-subtitle-pro">
              Gracias por elegir el <strong>Sistema 5-5</strong>.
              <br />Tu acceso está asegurado y respaldado por <span className="confirma-brand-pro">Toledo Consultora IT</span>.
            </p>
            <div className="confirma-divider-pro" aria-hidden="true" />
            <div className="confirma-branding-pro">
              <span className="confirma-brand-pro">toledoconsultora.com</span>
            </div>
          </div>
        </div>
      </section>

            {/* WHATSAPP BUTTON */}
            <motion.div variants={itemVariants} className="whatsapp-section">

              <h1 className="confirma-title-pro">
              Suscripción confirmada<br />con éxito
            </h1>
            <p className="confirma-subtitle-pro">
              Gracias por elegir el <b>Sistema 5-5</b>.<br />
              Tu acceso está asegurado y respaldado por <span className="confirma-brand-pro">Toledo Consultora IT</span>.
            </p>
            <div className="confirma-divider-pro" />
            <div className="confirma-branding-pro">
              <span className="confirma-brand-pro">toledoconsultora.com</span>
            </div>
            
              <p className="whatsapp-intro">
                Únete a nuestro grupo privado de WhatsApp para recibir:
              </p>
              <ul className="whatsapp-benefits">
                <li>Videos creativos semanales</li>
                <li>Gráficas listas para publicar</li>
                <li>Copywriting de alto impacto</li>
                <li>Tendencias actualizadas</li>
              </ul>

              <motion.a
                href="https://chat.whatsapp.com/DkTJZGvDGW922K6stvUWmp"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="whatsapp-icon" aria-hidden="true" />
                Acceder al Grupo Privado
              </motion.a>

              <p className="whatsapp-note">
                Haz clic en el botón para unirte al grupo y recibir tu primer material
              </p>
            </motion.div>

            {/* NEXT STEPS */}
            <motion.div variants={itemVariants} className="next-steps">
              <h2>Tus próximos pasos:</h2>
              <div className="steps-container">
                <div className="step-item">
                  <div className="step-number">1</div>
                  <h3>Únete al WhatsApp</h3>
                  <p>Accede al grupo privado usando el botón de arriba</p>
                </div>

                <div className="step-item">
                  <div className="step-number">2</div>
                  <h3>Recibe los materiales</h3>
                  <p>Cada semana recibirás contenido listo para publicar</p>
                </div>

                <div className="step-item">
                  <div className="step-number">3</div>
                  <h3>Publica y vende</h3>
                  <p>Usa el contenido para lograr 20k impresiones semanales</p>
                </div>
              </div>
            </motion.div>

            {/* GUARANTEE SECTION */}
            <motion.div variants={itemVariants} className="guarantee-section">
              <div className="guarantee-icon" aria-hidden="true"></div>
              <h2>Política de Devolución</h2>
              <p className="guarantee-text">
                Tu satisfacción es nuestra prioridad. Si dentro de los primeros 30 días 
                <strong> no obtienes los resultados prometidos</strong> (20k impresiones semanales 
                con nuestro contenido), te devolvemos el 100% de tu dinero.
              </p>
              <p className="guarantee-subtext">
                No hay preguntas incómodas. Garantía total sobre tu inversión.
              </p>
            </motion.div>

            {/* FAQ SECTION */}
            <motion.div variants={itemVariants} className="faq-section">
              <h2>Preguntas frecuentes</h2>
              
              <div className="faq-item">
                <h3>¿Cuándo empezaré a recibir contenido?</h3>
                <p>
                  Inmediatamente después de unirte al grupo de WhatsApp. Recibirás tu primer 
                  material dentro de 24 horas.
                </p>
              </div>

              <div className="faq-item">
                <h3>¿Puedo cancelar en cualquier momento?</h3>
                <p>
                  Sí, puedes cancelar tu suscripción mensual en cualquier momento sin cargos adicionales. 
                  Solo necesitas avisar.
                </p>
              </div>

              <div className="faq-item">
                <h3>¿Qué tipo de contenido recibiré?</h3>
                <p>
                  Videos cortos listos para Instagram, gráficas editables, copys persuasivos 
                  y análisis de tendencias actuales del algoritmo.
                </p>
              </div>

              <div className="faq-item">
                <h3>¿Necesito tener conocimientos de marketing?</h3>
                <p>
                  No necesitas ningún conocimiento previo. Todo está diseñado para ser publicado 
                  directamente en tu perfil.
                </p>
              </div>

              <div className="faq-item">
                <h3>¿Dónde contacto si tengo problemas?</h3>
                <p>
                  Puedes contactarnos directamente en el grupo de WhatsApp o escribir a 
                  ventas@toledoconsultora.com
                </p>
              </div>
            </motion.div>

            {/* CONTACT SECTION */}
            <motion.div variants={itemVariants} className="contact-section">
              <h2>¿Necesitas ayuda?</h2>
              <p>Contacta con nuestro equipo:</p>
              <div className="contact-methods">
                <a href="https://chat.whatsapp.com/DkTJZGvDGW922K6stvUWmp" className="contact-link">
                  WhatsApp Grupo Privado
                </a>
                <a href="mailto:ventas@toledoconsultora.com" className="contact-link">
                  ventas@toledoconsultora.com
                </a>
                <a href="https://toledoconsultora.com" className="contact-link">
                  toledoconsultora.com
                </a>
              </div>
            </motion.div>

            {/* BACK BUTTON */}
            <motion.button
              variants={itemVariants}
              onClick={() => navigate("/")}
              className="back-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ← Volver al inicio
            </motion.button>

          

      {/* VERIFICATION SECTION */}
      <section className="verificacion-section">
        <div className="confirma-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="verificacion-content"
          >
            <h2>Verifica tu información</h2>
            <p>
              Asegúrate de que tu email sea correcto. Si no recibiste el email de confirmación:
            </p>

            <div className="verificacion-box">
              <ol className="verificacion-list">
                <li>Revisa tu carpeta de SPAM</li>
                <li>Intenta suscribirte nuevamente con tu email correcto</li>
                <li>Contacta a ventas@toledoconsultora.com si persiste el problema</li>
              </ol>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="final-cta">
        <div className="confirma-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="final-cta-content"
          >
            <h2>¡Ya eres parte del Sistema 5-5!</h2>
            <p>
              Ahora comienza tu viaje hacia $5,000 USD en 5 meses con contenido profesional 
              y 20k impresiones semanales garantizadas.
            </p>

            <motion.a
              href="https://chat.whatsapp.com/DkTJZGvDGW922K6stvUWmp"
              target="_blank"
              rel="noopener noreferrer"
              className="final-cta-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Acceder al Grupo de WhatsApp Ahora
            </motion.a>

            <p className="final-note">
              Tu suscripción se renueva automáticamente cada mes.
              <br />
              <strong>Garantía de satisfacción: 30 días o dinero de vuelta</strong>
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};
