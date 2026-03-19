import React from 'react';
import { Footer } from '../components/Footer';

export default function AuditoriaGDPR(){
  return (
    <main className="service-page">
      <div className="service-grid">
        <section>
          <h1>Auditoría GDPR para pymes</h1>
          <p className="lead">Revisión práctica de tratamientos, brechas y evidencias. Enfocado en reducir el riesgo de sanciones y preparar documentación útil.</p>

          <h2>Qué entregamos</h2>
          <ul>
            <li>Mapeo de tratamientos de datos</li>
            <li>Evidencias técnicas para auditorías</li>
            <li>Checklist organizativo y recomendaciones</li>
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

          <a href="/contacto" className="service-cta">Solicitar diagnóstico gratuito (15 min)</a>
          <p className="service-meta">Todas las consultas van directo a la ruta <strong>/contacto</strong>. Por otro tipo de tecnología consultar.</p>
        </section>

        <aside className="service-card">
          <h3>Entregables</h3>
          <ul>
            <li>Informe ejecutivo para la dirección</li>
            <li>Lista de hallazgos técnicos</li>
            <li>Plan de acciones para cumplimiento</li>
          </ul>
        </aside>
      </div>

      <Footer />
    </main>
  )
}
