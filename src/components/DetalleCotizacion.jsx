import { Helmet } from 'react-helmet';
import React, { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';
import ClipLoader from 'react-spinners/ClipLoader';
import './cotizaciones.css';
import { Testimonials } from './testimonials';
import { PartnerLogos } from './PartnerLogos';

  const pricingPlans = [
    {
      id: "contratar-landingpage-toledoconsultora",
      title: "Landing Page",
      price: "$199.000",
      description: "Diseño de landing page",
      popular: false,
      features: [
"Diseño Adaptativo a Pc y Móvil",
        "Estrategia de Marketing",
        "Hasta 6 Productos con un link de pago",
        "Boton Reservar o Comprar",
        "Boton para capturar datos cliente con EmailJS",
        "Boton a Whatsapp de tu empresa opcional",        
        "Estrategia de No escapatoria, compre o deje datos"
      ],
      cta: "Solicitar Landing Page",
      link: "https://mpago.la/1P56hD5"
    },
    {
      id: "contratar-pagina-web-toledoconsultora",
      title: "Página Web Tipo Spa",
      price: "$249.000",
      description: "Diseño profesional adaptable",
      popular: false,
      features: [
        "Dominio.com.ar sin cargo incluido en el primer año",
        "Hosting Incluído en el primer año",
        "Incluye Desarrollo de Servicios Web, React, Css, EmailJs",
        "No aplica para Base de datos Postgresql/ORM + Node/Express web server",
        "5 emails corporativos",
        "Hosting por 1 año",
"Diseño Adaptativo a Pc y Móvil",
        "SEO básico incluido",
        "Navbar y Footer personalizados",
        "Secciones: Nosotros, Contacto",
        "Acceso a redes socales y whatsapp",
      ],
      cta: "Solicitar Web Page Institucional o Corporativa",
      link: "https://mpago.la/2SQELVR"
    },
    {
      id: "contratar-sistema-web-toledoconsultora",
      title: "Sistema Web Tipo Spa",
      price: "$349.000",
      description: "Diseño profesional adaptable",
      popular: false,
      features: [
        "Dominio.com.ar incluido por 1 año",
"Incluye Desarrollo de Servicios Web, React, Css, EmailJs",
        "Aplica para Base de datos Postgresql/ORM + Node/Express web server",
        "Desarrollo de API hasta 3 endpoints con controlador y modelos",
        "No aplica para sistemas con autenticación de usuarios",
        "No aplica para sistemas con pagos online",
        "5 emails corporativos",        
"Diseño Adaptativo a Pc y Móvil",
        "SEO básico incluido",
        "Navbar y Footer personalizados",
        "Secciones: Nosotros, Contacto",
        "Acceso a redes socales y whatsapp",
        "Incluye hosting capa gratuita de imagenes",
        "*No incluye gastos de hosting ni gastos de mantenimiento",
      ],
      cta: "Solicitar Landing Page",
      link: "https://mpago.la/2QJQTSC"
    },
    {
      id: "contratar-sistema-web-completo-toledoconsultora",
      title: "Sistema con base de datos  y autenticación Web Tipo Spa",
      price: "$549.000",
      description: "Diseño profesional adaptable",
      popular: false,
      features: [
        "Dominio.com.ar incluido por 1 año",
        "Incluye Desarrollo de Servicios Web, React, Css, EmailJs",
        "Aplica para Base de datos Postgresql/ORM + Node/Express web server",
        "Desarrollo de API con sus controladoresm rutas y modelos",
        "Aplica para sistemas con autenticación de usuarios",
        "Aplica para sistemas con pagos online con mercadopago",                
"Diseño Adaptativo a Pc y Móvil",
        "SEO básico incluido",
        "Navbar y Footer personalizados",
        "Secciones: Nosotros, Contacto",
        "Acceso a redes socales y whatsapp",
        "Incluye hosting capa gratuita de imagenes",
        "5 emails corporativos",
        "*No incluye gastos de hosting ni gastos de mantenimiento",
      ],
      cta: "Solicitar Landing Page",
      link: "https://mpago.la/2rp8wtV"
    },
    {
      id: "contratar-ecommerce-toledoconsultora",      
      title: "Ecommerce",
      price: "$249.000",
      description: "Tienda online Estándar",
      popular: true,
      features: [
        "Integración con MercadoPago",
        "Panel autogestionable de productos, no aplica para talles ni colores",
        "Sistema con control de stock",
        "Panel autogestionable de pedidos",
        "Panel autogestionable de usuarios",
        "Sin límite de productos",
        "Incluye Diseño y Despliegue de Base de datos y web Server",
"Diseño Adaptativo a Pc y Móvil",
        "Sin Comisiones por venta",
        "*No incluye dominio ni hosting ni gastos de mantenimiento",
        "Navbar y Footer personalizados",
        "Home optimizado para tu negocio, con productos fijos",
        "Secciones: Nosotros, Contacto, Historia de la empresa",
        "Incluye hosting capa gratuita de imagenes",
      ],
      cta: "Quiero mi Tienda Online",
      link: "https://mpago.la/2w6ThwW"
    },
    {
      id: "contratar-seo-avanzado-toledoconsultora",
      title: "SEO Avanzado",
      price: "$249.000",
      description: "Posicionamiento estratégico",
      popular: false,
      features: [
        "Estrategia SEO completa",
        "Posicionamos tu negocio en las Primeras 2 páginas de Google",
        "Posicionamiento en Google Maps",
        "Asesoramiento Global de Posicionamiento para tu negocio",
        "Informes de rendimiento",
        "Palabras clave estratégicas",
        "SEO On-page/Off-page",        
        "Análisis de velocidad, rendimiento y experiencia de usuario, propuestas de mejora",
        "Análisis contenido y propuestas de mejora",
      ],
      cta: "Mejorar Posicionamiento",
      link: "https://mpago.la/1SgrAx3"
    },
    {
      id: "contratar-campanasdigitales-toledoconsultora",
      title: "Campañas Digitales Google Ads",
      price: "$99.000",
      description: "Gestión profesional",
      popular: false,
      features: [      
        "Gestión Mensual"  ,
        "Gestión de Campañas digitales con Google Ads",
        "Optimización y monitorización continua de la campaña",
        "Gestión de Informes Periódicos",
        "Análisis de rendimiento y propuesta de mejora",
        "Segmentación avanzada",
        "*No incluye presupuesto publicitario, el costo de la campaña es a cargo del cliente",        
        "Realizamos campañas de tráfico, visitas a perfil, llamadas, ventas",
      ],
      cta: "Contratar Campañas Digitales",
      link: "https://mpago.la/1NbDWJ9"
    },
    {
      id: "contratar-ecommerce-paginaweb-toledoconsultora",
      title: "Paquete Completo Ecommerce + Pagina Web",
      price: "$749.000",
      description: "Paquete Bussiness",
      popular: false,
      features: [
        "Dominio.com.ar incluido por 1 año",
"Incluye Desarrollo de Servicios Web, React, Css, EmailJs",
        "5 cuentas @email corporativas",        
         "Integración con MercadoPago",
        "Panel autogestionable de productos, no aplica para talles ni colores",
        "Sistema con control de stock",
        "Panel autogestionable de pedidos",
        "Panel autogestionable de usuarios",
        "Sin límite de productos",
        "Incluye Diseño y Despliegue de Base de datos y web Server",
        "Navbar y Footer personalizados",
        "Secciones: Nosotros, Contacto",
        "Sin Comisiones por venta",        
        "Diseño Adaptativo a Pc y Móvil",
        "Estrategia SEO completa",
        "Posicionamiento en Google Business y Maps",
        "Campaña Publicitaria Estándar x 30días en Google Ads"
      ],
      cta: "Contratar Pack Bussiness",
      link: "https://mpago.la/1ppUGph"
    },
    {
      id: "contratar-asesoria-de-negocios-toledoconsultora",
      title: "Asesoría de Negocios",
      price: "$50.000",
      description: "Sesión estratégica personalizada",
      popular: false,
      features: [
        "Análisis de modelo de negocio",
        "Optimización de procesos",
        "Planificación comercial",
        "Estrategias de crecimiento",
        "Análisis de mercado",
        "Sesión de 2 horas",
        "Informe ejecutivo"
      ],
      cta: "Contratar Asesoría",
      link: "https://mpago.la/1Bgc6i5"
    }
  ];


export const DetalleCotizacion = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const plan = pricingPlans.find(p => p.id === id);

  const botonRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (botonRef.current) {
      botonRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, []);

  const sendEmailNotification = async (clientData) => {
    try {
      const featuresHTML = plan.features.map(f => `<li style="margin-bottom: 5px;">${f.trim()}</li>`).join('');

      const templateParams = {
        plan_title: plan.title,
        plan_price: plan.price.toLocaleString(),
        plan_features: featuresHTML,
        client_name: clientData.nombre,
        email: clientData.email,
        support_email: 'ventas@toledoconsultora.com',
        to_email: clientData.email,
        current_year: new Date().getFullYear()
      };

      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID_ADMIN,
        templateParams,
        process.env.REACT_APP_PUBLIC_KEY
      );

      Swal.fire({
        icon: 'success',
        title: '¡Confirmación enviada!',
        html: `Hemos enviado los detalles de tu cotización a <strong>${clientData.email}</strong>. <br/>Redirigiendo a MercadoPago...`,
        confirmButtonColor: '#3085d6',
        timer: 3000,
        timerProgressBar: true,
        didClose: () => {
          window.location.href = plan.link;
        }
      });
    } catch (error) {
      console.error('Error al enviar el email:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ocurrió un error al enviar la confirmación. Serás redirigido a MercadoPago igualmente.',
        confirmButtonColor: '#d33',
        didClose: () => {
          window.location.href = plan.link;
        }
      });
    }
  };

  const handleContratar = async () => {
    const { value: formValues } = await Swal.fire({
      title: 'Dejanos tus datos para comenzar',
      html:
        `<div style="display: flex; flex-direction: column; gap: 10px;">` +
        `<input id="swal-input1" class="swal2-input" placeholder="Nombre del negocio" />` +
        `<input id="swal-input2" class="swal2-input" placeholder="Correo electrónico" type="email" />` +
        `<input id="swal-input3" class="swal2-input" placeholder="WhatsApp (opcional)" type="tel" />` +
        `</div>`,
      confirmButtonText: 'Confirmar y continuar',
      confirmButtonColor: '#101629',
      focusConfirm: false,
      preConfirm: () => {
        const nombre = document.getElementById('swal-input1').value.trim();
        const email = document.getElementById('swal-input2').value.trim();
        const telefono = document.getElementById('swal-input3').value.trim();

        if (!nombre || !email) {
          Swal.showValidationMessage('Nombre y correo electrónico son obligatorios');
          return false;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          Swal.showValidationMessage('Por favor ingresa un email válido');
          return false;
        }

        return { nombre, email, telefono };
      },
      backdrop: true,
      showClass: {
        popup: 'swal2-show animate__animated animate__fadeInDown'
      },
      customClass: {
        popup: 'swal2-popup-custom'
      }
    });

    if (formValues) {
      setProcessing(true);
      localStorage.setItem('clienteInfo', JSON.stringify({
        ...formValues,
        plan: plan.title,
        price: plan.price,
        date: new Date().toISOString()
      }));

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
            <button className="pricing-button" onClick={() => navigate(-1)}>Volver</button>
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
  <link rel="canonical" href={`https://toledoconsultora.com/detalle/${plan.id}`} />

  {/* SEO social */}
  <meta property="og:title" content={`${plan.title} | Toledo Consultora`} />
  <meta property="og:description" content={plan.description} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={`https://toledoconsultora.com/detalle/${plan.id}`} />
  <meta property="og:image" content="https://toledoconsultora.com/logo.png" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={`${plan.title} | Toledo Consultora`} />
  <meta name="twitter:description" content={plan.description} />
  <meta name="twitter:image" content="https://toledoconsultora.com/logo.png" />
</Helmet>


    <section className="pricing-section">
      


      <div className="pricing-container">
        <div className="card-header">
          <h1>DETALLES DEL SERVICIO A CONTRATAR: </h1>
        </div>

        <div className="pricing-grid">
          <div className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
            <div className="card-header">
              <h3>{plan.title}</h3>
              <div className="price">{plan.price}<span> / único</span></div>
            </div>
            <div className="card-body">
              <ul className="feature-list">
                {plan.features.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <button ref={botonRef} className="pricing-button" onClick={handleContratar}>
                Contratar
              </button>
            </div>
          </div>
        </div>
      </div>

      <Testimonials />
      <PartnerLogos />

      <button className="pricing-button" onClick={handleContratar}>
        Contratar
      </button>
    </section>
    </>
  );
};
