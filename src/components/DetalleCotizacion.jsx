import React, { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';
import './cotizaciones.css';
import { Testimonials } from './testimonials';
import { PartnerLogos } from './PartnerLogos';

export const DetalleCotizacion = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const plan = location.state?.plan;

  const botonRef = useRef(null);

  useEffect(() => {
    // Desplazar suavemente hasta el botón cuando el componente se monta
    if (botonRef.current) {
      botonRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center' // 'start', 'center', 'end' o 'nearest'
      });
    }
  }, []); // El array vacío asegura que solo se ejecute al montar el componente


  const sendEmailNotification = async (clientData) => {
    try {
      // Parámetros para el email
      const featuresHTML = plan.features.map(f => 
        `<li style="margin-bottom: 5px;">${f.trim()}</li>`
      ).join('');
  
      const templateParams = {
        plan_title: plan.title,
        plan_price: plan.price.toLocaleString(),
        plan_features: featuresHTML, // Envía el HTML ya formateado
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

  const handleContratar = async () => {
    const { value: formValues } = await Swal.fire({
      title: 'Completa tus datos',
      html:
        `<input id="swal-input1" class="swal2-input" placeholder="Nombre del negocio" required>` +
        `<input id="swal-input2" class="swal2-input" placeholder="Tu Email" type="email" required>` +
        `<input id="swal-input3" class="swal2-input" placeholder="Teléfono" type="tel" required>`,
      focusConfirm: false,
      preConfirm: () => {
        const nombre = document.getElementById('swal-input1').value;
        const email = document.getElementById('swal-input2').value;
        const telefono = document.getElementById('swal-input3').value;
        
        if (!nombre || !telefono || !email) {
          Swal.showValidationMessage('Todos los campos son obligatorios');
          return false;
        }
        
        // Validación básica de email
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          Swal.showValidationMessage('Por favor ingresa un email válido');
          return false;
        }
        
        return { nombre, email, telefono };
      }
    });

    if (formValues) {
      // Guardar en localStorage
      localStorage.setItem('clienteInfo', JSON.stringify({
        ...formValues,
        plan: plan.title,
        price: plan.price,
        date: new Date().toISOString()
      }));
      
      // Enviar notificación por email
      await sendEmailNotification(formValues);
    }
  };

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
              <button         ref={botonRef} className="pricing-button" onClick={handleContratar}>
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