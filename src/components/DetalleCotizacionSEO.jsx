import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import ClipLoader from "react-spinners/ClipLoader";
import "./cotizaciones.css";
import { Testimonials } from "./testimonials";
import { PartnerLogos } from "./PartnerLogos";
import SeoLandingPages from "./SeoLandingPages";

export const DetalleCotizacionSEO = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  console.log(SeoLandingPages);
  const { id } = useParams();
  const navigate = useNavigate();
  const plan = SeoLandingPages.find((p) => p.id === id);

  const botonRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (botonRef.current) {
      botonRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, []);

  const sendEmailNotification = async (clientData) => {
    try {
      const featuresHTML = plan.features
        .map((f) => `<li style="margin-bottom: 5px;">${f.trim()}</li>`)
        .join("");
      const templateParams = {
        plan_title: plan.title,
        plan_price: plan.price.toLocaleString(),
        plan_features: featuresHTML,
        client_name: clientData.nombre,
        email: clientData.email,
        support_email: "ventas@toledoconsultora.com",
        to_email: clientData.email,
        current_year: new Date().getFullYear(),
      };

      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID_ADMIN,
        templateParams,
        process.env.REACT_APP_PUBLIC_KEY
      );

      Swal.fire({
        icon: "success",
        title: "¡Confirmación enviada!",
        html: `Hemos enviado los detalles de tu cotización a <strong>${clientData.email}</strong>. <br/>Redirigiendo a MercadoPago...`,
        confirmButtonColor: "#3085d6",
        timer: 3000,
        timerProgressBar: true,
        didClose: () => {
          window.location.href = plan.link;
        },
      });
    } catch (error) {
      console.error("Error al enviar el email:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Ocurrió un error al enviar la confirmación. Serás redirigido a MercadoPago igualmente.",
        confirmButtonColor: "#d33",
        didClose: () => {
          window.location.href = plan.link;
        },
      });
    }
  };

  const handleContratar = async () => {
    const { value: formValues } = await Swal.fire({
      title: "Dejanos tus datos para comenzar",
      html:
        `<div style="display: flex; flex-direction: column; gap: 10px;">` +
        `<input id="swal-input1" class="swal2-input" placeholder="Nombre del negocio" />` +
        `<input id="swal-input2" class="swal2-input" placeholder="Correo electrónico" type="email" />` +
        `<input id="swal-input3" class="swal2-input" placeholder="WhatsApp (opcional)" type="tel" />` +
        `</div>`,
      confirmButtonText: "Confirmar y continuar",
      confirmButtonColor: "#101629",
      focusConfirm: false,
      preConfirm: () => {
        const nombre = document.getElementById("swal-input1").value.trim();
        const email = document.getElementById("swal-input2").value.trim();
        const telefono = document.getElementById("swal-input3").value.trim();
        if (!nombre || !email) {
          Swal.showValidationMessage(
            "Nombre y correo electrónico son obligatorios"
          );
          return false;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          Swal.showValidationMessage("Por favor ingresa un email válido");
          return false;
        }
        return { nombre, email, telefono };
      },
      backdrop: true,
      showClass: {
        popup: "swal2-show animate__animated animate__fadeInDown",
      },
      customClass: {
        popup: "swal2-popup-custom",
      },
    });

    if (formValues) {
      setProcessing(true);
      localStorage.setItem(
        "clienteInfo",
        JSON.stringify({
          ...formValues,
          plan: plan.title,
          price: plan.price,
          date: new Date().toISOString(),
        })
      );
      await sendEmailNotification(formValues);
      setProcessing(false);
    }
  };

  if (!plan) {
    return (
      <>
        <Helmet>
          <title>No encontrado | Toledo Consultora</title>
          <meta name="robots" content="noindex" />
        </Helmet>

        <div className="pricing-section">
          <div className="pricing-container">
            <h2 className="section-header">No se encontró la cotización</h2>
            <button className="pricing-button" onClick={() => navigate(-1)}>
              Volver
            </button>
          </div>
        </div>
      </>
    );
  }

  if (loading || processing) {
    return (
      <div className="loading-overlay">
        <ClipLoader color="#101629" size={60} />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{plan.title} | Toledo Consultora</title>
        <meta name="description" content={plan.description} />
        <link
          rel="canonical"
          href={`https://toledoconsultora.com/servicios-globales/${plan.id}`}
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content={`${plan.title} | Toledo Consultora`}
        />
        <meta property="og:description" content={plan.description} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://toledoconsultora.com/servicios-globales/${plan.id}`}
        />
        <meta
          property="og:image"
          content="https://toledoconsultora.com/logo.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${plan.title} | Toledo Consultora`}
        />
        <meta name="twitter:description" content={plan.description} />
        <meta
          name="twitter:image"
          content="https://toledoconsultora.com/logo.png"
        />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: plan.title,
            description: plan.description,
            provider: {
              "@type": "Organization",
              name: "Toledo Consultora IT",
              url: "https://toledoconsultora.com",
            },
            offers: {
              "@type": "Offer",
              price: plan.price.replace(/[^0-9]/g, ""),
              priceCurrency: "ARS",
              url: `https://toledoconsultora.com/servicios-globales/${plan.id}`,
              availability: "https://schema.org/InStock",
            },
          })}
        </script>
      </Helmet>
<div
  className="hero-banner"
  style={{ backgroundImage: "url('/img/baner.jpg')" }}
>
  <div className="banner-overlay">
    <img src="/img/logo.png" alt="Logo Toledo Consultora" className="banner-logo" />
  </div>
</div>


      <section className="pricing-section">
        <div className="pricing-container">
          <div className="card-header">
            <h1>
              {" "}
              Contratar servicio de {plan.title} por {plan.price} (pesos
              argentinos){" "}
            </h1>
            <h2>Servicio: {plan.description} Toledo Consultora </h2>
          </div>

          <div className="pricing-grid">
            <div className={`pricing-card ${plan.popular ? "popular" : ""}`}>
              <div className="card-header">
                <h3>{plan.title}</h3>
                <h4 style={{ textAlign: "justify" }}>{plan.detail} </h4>
                <div className="price">
                  {plan.price}
                  <span> / único</span>
                </div>
              </div>
              <div className="card-body">
                <ul className="feature-list">
                  {plan.features.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <button
                  ref={botonRef}
                  className="pricing-button"
                  onClick={handleContratar}
                >
                  Contratar
                </button>

      <div className="social-links-cotizaciones">
          {/* WhatsApp SVG alternativo para mejor visibilidad */}
          <a
            href={`https://wa.me/5493764221063?text=${encodeURIComponent(
              `Hola Eduardo, estoy interesado en el servicio "${plan.title}". 
              
detalle del servicio:
              "${plan.features}" precio: "${plan.price}".
              
              Vi la info acá: ${window.location.href}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              style={{
                width: "40px",
                height: "40px",
                filter: "brightness(1.1)",
              }}
            />
          </a>
        </div>
              </div>

              <div style={{ textAlign: "center" }}>
                <Link to="/terminos-y-condiciones">Términos y Condiciones</Link>
                <p> </p>
                <Link to="/politica-de-privacidad">Política de Privacidad</Link>
                <p> </p>
              </div>
            </div>
          </div>
        </div>

        <Testimonials />
        <PartnerLogos />
        <button className="pricing-button" onClick={handleContratar}>
          Contratar
        </button>

            <div className="social-links-cotizaciones">
          {/* WhatsApp SVG alternativo para mejor visibilidad */}
          <a
            href={`https://wa.me/5493764221063?text=${encodeURIComponent(
              `Hola Eduardo, estoy interesado en el servicio "${plan.title}". 
              
detalle del servicio:
              "${plan.features}" precio: "${plan.price}".
              
              Vi la info acá: ${window.location.href}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              style={{
                width: "40px",
                height: "40px",
                filter: "brightness(1.1)",
              }}
            />
          </a>
        </div>
      </section>
    </>
  );
};
