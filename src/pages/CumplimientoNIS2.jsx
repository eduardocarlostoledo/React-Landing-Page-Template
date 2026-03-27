import React from 'react';
import { Footer } from '../components/Footer';

export default function CumplimientoNIS2(){
  return (
    <main className="service-page">
      <div className="service-grid">
        <section>
          <h1>Cumplimiento NIS2 para pymes</h1>
          <p className="lead">Mapeamos controles mínimos, generamos evidencia y entregamos un plan práctico para reducir riesgos regulatorios.</p>

          <h2>Áreas clave</h2>
          <ul>
            <li>Evaluación de controles técnicos y organizativos</li>
            <li>Procesos de respuesta y notificación de incidentes</li>
            <li>Documentación y evidencias para auditorías</li>
          </ul>

          <h2>Estándares OWASP cubiertos</h2>
          <ul className="owasp-list">
            <li>A01:2021 – Control de Acceso Quebrado (Broken Access Control)</li>
            <li>A03:2021 – Inyección (Injection)</li>
            <li>A02:2021 – Fallas Criptográficas (Cryptographic Failures)</li>
            <li>A05:2021 – Configuración de Seguridad Incorrecta (Security Misconfiguration)</li>
            <li>A06:2021 – Componentes Vulnerables y Desactualizados</li>
          </ul>

          <h2>Stack técnico</h2>
          <div className="tech-badges">
            <span className="tech-badge">Node.js</span>
            <span className="tech-badge">Express</span>
            <span className="tech-badge">Postgres</span>
          </div>

          <a href="https://web.telegram.org/k/#@devsecopsconsultorabot" target="_blank" rel="noopener noreferrer" className="service-cta">Solicitar diagnóstico gratuito (15 min)</a>
          <p className="service-meta">Todas las consultas van directo a la ruta <strong>/contacto</strong>.</p>
        </section>

        <aside className="service-card">
          <h3>Documento entregable</h3>
          <ul>
            <li>Mapa de controles NIS2</li>
            <li>Evidencias y registros recomendados</li>
            <li>Plan de remediación priorizado</li>
          </ul>
        </aside>
      </div>

      <Footer />
    </main>
  )
}
