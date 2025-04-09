import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Graciasporsucompra.css';

export const Graciasporsucompra = ({ data, orderId, customerName }) => {
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate('/');
  };

  return (
    <div className="thank-you-container">
      <div className="thank-you-card">
        <div className="checkmark-circle">
          <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
            <circle className="checkmark-circle-bg" cx="26" cy="26" r="25" />
            <path className="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
          </svg>
        </div>

        <h1 className="thank-you-title">¡Gracias por tu compra!</h1>

        <div className="order-details">
          <h3>Detalles de tu compra:</h3>
          <ul>
            <li>📧 Recibirás una llamada de confirmación</li>
            <li>⏱️ Tiempo de entrega: 2-5 días hábiles</li>
          </ul>
        </div>

        <div className="thank-you-actions">
          <button className="secondary-btn" onClick={handleContinueShopping}>
            Contratar otro servicio
          </button>
        </div>

        <div className="support-message">
          <p>¿Necesitas ayuda? <a href={data?.whatsapp || '#'} target="_blank" rel="noopener noreferrer">Contáctanos</a></p>
        </div>

        {/* Redes sociales */}
        <div className="social-links">
          {data?.whatsapp && (
            <a href={data.whatsapp} target="_blank" rel="noopener noreferrer" title="WhatsApp">
              <i className="fab fa-whatsapp"></i>
            </a>
          )}
          {data?.instagram && (
            <a href={data.instagram} target="_blank" rel="noopener noreferrer" title="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          )}
          {data?.facebook && (
            <a href={data.facebook} target="_blank" rel="noopener noreferrer" title="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
