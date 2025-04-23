import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';
import ClipLoader from 'react-spinners/ClipLoader';
import './cotizaciones.css';
import { Testimonials } from './testimonials';
import { PartnerLogos } from './PartnerLogos';

export const DetalleCotizacion = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const plan = location.state?.plan;

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
      <div className="pricing-section">
        <div className="pricing-container">
          <h2 className="section-header">No se encontró la cotización</h2>
          <button className="pricing-button" onClick={() => navigate(-1)}>Volver</button>
        </div>
      </div>
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
  );
};
