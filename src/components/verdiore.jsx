import React from "react";
import "../styles/verdiore.css";

export const Verdiore = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="verdiore-container">
      {/* HEADER */}
      <header className="verdiore-header">
        <div className="header-content">
          <div className="logo-text">VERDIORE</div>
          <button
            className="cta-button header-cta"
            onClick={() => window.location.href = "https://mpago.li/1YaHj1h"}
          >
            Comprar ahora
          </button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="hero-section" id="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-headline">Recuperá tu cabello de forma natural</h1>
            <p className="hero-subheadline">
              El serum capilar 100% natural que fortalece la raíz y reduce la caída
              desde las primeras semanas.
            </p>

            <div className="trust-bullets">
              
              <div className="trust-item">
                <span className="bullet-icon">🌱</span>
                <span>Cultivamos y procesamos nuestros ingredientes desde la planta al producto</span>
              </div>
              <div className="trust-item">
                <span className="bullet-icon">🧪</span>
                <span>Sin químicos</span>
              </div>
              <div className="trust-item">
                <span className="bullet-icon">👨‍🦳</span>
                <span>Resultados reales incluso en mayores de 70 años</span>
              </div>
            </div>

            <button
              className="cta-button primary-cta"
              onClick={() => window.location.href = "https://mpago.li/1YaHj1h"}
            >
              👉 Quiero recuperar mi cabello
            </button>
          </div>

          <div className="hero-image">
            <img
              src="/img/verdiore/producto.png"
              alt="Serum Capilar Bello Oro"
              className="hero-img"
            />
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="benefits-section" id="benefits">
        <div className="section-container">
          <h2 className="section-title">¿Por qué funciona?</h2>
          <p className="section-subtitle">
            Formulado con ingredientes naturales seleccionados para máxima efectividad
          </p>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🌿</div>
              <h3>Nutre el cuero cabelludo</h3>
              <p>Ingredientes orgánicos que penetran profundamente hidratando desde la raíz.</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">💪</div>
              <h3>Fortalece la raíz del cabello</h3>
              <p>Estimula la producción natural de proteínas que mantienen el cabello firme.</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">📉</div>
              <h3>Reduce visiblemente la caída</h3>
              <p>Notarás menos cabello en la almohada en tan solo 15 días de uso.</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">✨</div>
              <h3>Estimula nuevo crecimiento</h3>
              <p>Activa los folículos dormidos para que crezca cabello nuevo y saludable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BEFORE/AFTER SECTION */}
      <section className="before-after-section" id="results">
        <div className="section-container">
          <h2 className="section-title">Resultados reales – Antes y Después</h2>
          <p className="section-subtitle">
            Comprobado con casos reales de clientes satisfechos
          </p>

          <div className="before-after-content">
            <div className="before-after-image">
              <img
                src="/img/verdiore/resultados.png"
                alt="Antes y Después - Casos Reales"
                className="comparison-img"
              />
            </div>

            <div className="before-after-text">
              <p className="before-after-description">
                Las marcas indican las zonas donde se observa nuevo crecimiento tras
                2 meses de uso continuo.
              </p>

              <div className="results-badges">
                <div className="badge">
                  <span className="badge-icon">⏱️</span>
                  <span>Resultados en 2 meses</span>
                </div>
                <div className="badge">
                  <span className="badge-icon">✅</span>
                  <span>Caso real</span>
                </div>
                <div className="badge">
                  <span className="badge-icon">📸</span>
                  <span>Sin edición</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL SECTION */}
      <section className="testimonial-section" id="testimonial">
        <div className="section-container">
          <h2 className="section-title">Testimonios reales</h2>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-photo">
                <img
                  src="/img/verdiore/testimonio.png"
                  alt="Jorge - Cliente Real"
                  className="testimonial-img"
                />
              </div>

              <div className="testimonial-content">
                <div className="stars">
                  <span>⭐⭐⭐⭐⭐</span>
                </div>

                <p className="testimonial-text">
                  "Después de los 70 pensé que no había solución. A los dos meses noté
                  menos caída y más densidad. Hoy vuelvo a verme bien frente al espejo. Sé que preparan el extracto de palta desde la planta al producto, una maravilla."
                </p>

                <div className="testimonial-author">
                  <h4>Jorge – 73 años</h4>
                  <p className="author-tag">Cliente real</p>
                  <p className="author-tag">Resultados reales</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card testimonial-card-landscape">
              <div className="testimonial-photo">
                <img
                  src="/img/verdiore/paciente1.png"
                  alt="Paciente Feliz - Nueva Cabellera"
                  className="testimonial-img"
                />
              </div>

              <div className="testimonial-content">
                <div className="stars">
                  <span>⭐⭐⭐⭐⭐</span>
                </div>

                <p className="testimonial-text">
                  "Tras 3 meses de tratamiento, estoy feliz y emocionado de ver mi nueva cabellera. 
                  La transformación ha sido increíble. No puedo creer los resultados que he logrado 
                  con VERDIORE. Definitivamente lo recomiendo a todos mis amigos."
                </p>

                <div className="testimonial-author">
                  <h4>Cliente Verificado</h4>
                  <p className="author-tag">Transformación real</p>
                  <p className="author-tag">Resultados comprobados</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT HIGHLIGHT SECTION */}
      <section className="product-highlight" id="product-highlight">
        <div className="section-container">
          <div className="product-content">
            <div className="product-image">
              <img
                src="/img/verdiore/producto1.png"
                alt="Serum Capilar en Naturaleza"
                className="product-nature-img"
              />
            </div>

            <div className="product-info">
              <h2>Serum Capilar Bello Oro</h2>
              <p className="product-category">
                Tratamiento natural para la caída del cabello
              </p>

              <div className="product-description">
                <h3>✓ Fórmula 100% natural</h3>
                <p>Sin químicos, sin parabenos, sin sulfatos.</p>

                <h3>✓ Dermatológicamente testado</h3>
                <p>Seguro para todos los tipos de cabello.</p>

                <h3>✓ Resultados comprobados</h3>
                <p>80% de reducción de caída en 60 días.</p>
              </div>

              <div className="product-price">
                <span className="price-label">Precio especial de lanzamiento:</span>
                <span className="price-amount">$200.900</span>
              </div>

              <button
                className="cta-button primary-cta large"
                onClick={() => window.location.href = "https://mpago.li/1YaHj1h"}
              >
                👉 Comprar ahora
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="final-cta-section" id="final-cta">
        <div className="cta-content">
          <h2 className="cta-headline">Empezá hoy tu transformación capilar</h2>
          <p className="cta-subtext">
            Tratamiento natural, sin químicos, con resultados reales.
          </p>
          <button
            className="cta-button primary-cta large"
            onClick={() => window.location.href = "https://mpago.li/1YaHj1h"}
          >
            👉 Comprar ahora
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="verdiore-footer">
        <div className="footer-content">
          <p>&copy; 2024 VERDIORE | Cosmética natural</p>
          <p className="footer-trust">Tratamiento dermatológico | Ingredientes 100% orgánicos</p>
        </div>
      </footer>
    </div>
  );
};
