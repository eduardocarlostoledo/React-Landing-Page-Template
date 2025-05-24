import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Graciasporsucompra.css";

export const Graciasporsucompra = ({ data, orderId, customerName }) => {
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate("/");
  };

  const whatsappURL = "https://wa.me/5493764221063";

  return (
    <div className="thank-you-container">
      <div className="thank-you-card">
        <div className="checkmark-circle">
          <svg
            className="checkmark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            <circle className="checkmark-circle-bg" cx="26" cy="26" r="25" />
            <path
              className="checkmark-check"
              fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
          </svg>
        </div>

        <h1 className="thank-you-title">¡Gracias por tu compra!</h1>

        <div className="order-details">
          <h3>Detalles de tu compra:</h3>
          <ul>
            <li>📧 Recibirás email con el resumen de tu compra</li>
            <li>🛒 Te contactaremos para coordinar una entrevista</li>
            <li>⏱️ Tiempo de entrega: 2-5 días hábiles</li>
          </ul>
        </div>

        <div className="thank-you-actions">
          <button className="secondary-btn" onClick={handleContinueShopping}>
            Contratar otro servicio
          </button>
        </div>

        <div className="support-message">
          <p>
            ¿Necesitas ayuda?{" "}
            <a href={whatsappURL} target="_blank" rel="noopener noreferrer">
              Contáctanos
            </a>
          </p>
        </div>

        <div className="social-links">
          <a
            href="https://wa.me/5493764221063"
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp"
          >            
             <i  style={{ color: "green" }} className="fab fa-whatsapp"></i>
          </a>

          <a
            href="https://www.instagram.com/toledoconsultora/"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
          >
            <i  style={{ color: "red" }} className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com/people/Toledo-Consultora-It/61567966653297/"
            target="_blank"
            rel="noopener noreferrer"
            title="Facebook"
          >
            <i  style={{ color: "blue" }} className="fab fa-facebook-f"></i>
          </a>

             <a
            href="https://www.linkedin.com/company/toledo-consultora-it"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >            
             <i  style={{ color: "blue" }} className="fab fa-linkedin"></i>
          </a>

           

             <a
            href="https://vimeo.com/user185125486"
            target="_blank"
            rel="noopener noreferrer"
            title="Vimeo"
          >            
             <i  style={{ color: "blue" }} className="fab fa-vimeo-v"></i>
          </a>

           

             <a
            href="https://www.youtube.com/@eduardocarlostoledo"
            target="_blank"
            rel="noopener noreferrer"
            title="YouTube"
          >            
             <i  style={{ color: "red" }} className="fab fa-youtube"></i>
                    
             
          </a>

        </div>
      </div>
    </div>
  );
};
