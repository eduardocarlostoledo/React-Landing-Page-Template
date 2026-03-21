// src/components/Hero/Hero.jsx
// Requiere: react-router-dom (useNavigate) o ajustar según el router del proyecto

import { useState } from "react";
import SecurityReport from "../SecurityReport/SecurityReport.jsx";

const TELEGRAM_URL =
  "https://web.telegram.org/k/#@devsecopsconsultorabot";
const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=5493764221063&text&type=phone_number&app_absent=0";

export const Hero = () => {
  const [showReport, setShowReport] = useState(false);

  if (showReport) {
    return <SecurityReport onBack={() => setShowReport(false)} />;
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        .hero-root {
          --navy:      #00112e;
          --navy-mid:  #001a45;
          --blue:      #0055ff;
          --blue-mid:  #0044cc;
          --amber:     #ffcb05;
          --red:       #ff2d55;
          --text:      #e8edf5;
          --muted:     #7a8ba8;
          --card-bg:   rgba(255,255,255,0.04);
          --border:    rgba(255,255,255,0.08);
          font-family: 'DM Sans', sans-serif;
          background: var(--navy);
          color: var(--text);
          min-height: 100vh;
          padding: 0;
          overflow-x: hidden;
        }

        /* ── Grid de fondo ── */
        .hero-grid-bg {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(0,85,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,85,255,0.06) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }

        .hero-glow {
          position: absolute;
          top: -160px;
          right: -120px;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(0,85,255,0.18) 0%, transparent 70%);
          pointer-events: none;
        }

        /* ── Layout ── */
        .hero-inner {
          position: relative;
          max-width: 1140px;
          margin: 0 auto;
          padding: 72px 24px 80px;
          display: grid;
          grid-template-columns: 1fr 420px;
          gap: 48px;
          align-items: start;
        }

        @media (max-width: 900px) {
          .hero-inner {
            grid-template-columns: 1fr;
            padding: 48px 20px 60px;
          }
        }

        /* ── Badge ── */
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,45,85,0.15);
          border: 1px solid rgba(255,45,85,0.35);
          color: #ff6b86;
          font-family: 'Space Mono', monospace;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 6px 14px;
          border-radius: 4px;
          margin-bottom: 24px;
        }

        .hero-badge::before {
          content: '';
          width: 7px;
          height: 7px;
          background: #ff2d55;
          border-radius: 50%;
          animation: pulse-red 1.6s ease-in-out infinite;
        }

        @keyframes pulse-red {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(0.7); }
        }

        /* ── Headline ── */
        .hero-h1 {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(28px, 3.8vw, 46px);
          font-weight: 700;
          line-height: 1.13;
          color: #ffffff;
          margin: 0 0 20px;
          letter-spacing: -0.5px;
        }

        .hero-h1 em {
          font-style: normal;
          color: var(--amber);
        }

        .hero-sub {
          font-size: 17px;
          line-height: 1.65;
          color: var(--muted);
          margin: 0 0 32px;
          max-width: 560px;
        }

        .hero-sub strong {
          color: var(--text);
          font-weight: 600;
        }

        /* ── CTA buttons ── */
        .hero-ctas {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          align-items: center;
          margin-bottom: 16px;
        }

        .btn-primary-hero {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 22px;
          background: var(--blue);
          color: #fff;
          border-radius: 8px;
          font-weight: 700;
          font-size: 15px;
          text-decoration: none;
          transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
          box-shadow: 0 0 0 rgba(0,85,255,0);
        }
        .btn-primary-hero:hover {
          background: var(--blue-mid);
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(0,85,255,0.4);
          color: #fff;
        }
        .btn-primary-hero svg { flex-shrink: 0; }

        .btn-ghost-hero {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 20px;
          background: transparent;
          color: var(--text);
          border: 1px solid var(--border);
          border-radius: 8px;
          font-weight: 600;
          font-size: 14px;
          text-decoration: none;
          cursor: pointer;
          transition: border-color 0.2s, background 0.2s, color 0.2s;
        }
        .btn-ghost-hero:hover {
          border-color: rgba(255,255,255,0.3);
          background: rgba(255,255,255,0.05);
          color: #fff;
        }

        .btn-link-hero {
          background: none;
          border: none;
          padding: 0;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 600;
          color: #6ea8ff;
          cursor: pointer;
          text-decoration: none;
          transition: color 0.2s;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .btn-link-hero:hover { color: #fff; }

        .hero-fine {
          font-size: 12px;
          color: #4a6080;
          margin-top: 6px;
          font-family: 'Space Mono', monospace;
        }

        /* ── Insight block ── */
        .hero-insight {
          margin-top: 36px;
          padding: 16px 20px;
          border-left: 3px solid var(--blue);
          background: rgba(0,85,255,0.07);
          border-radius: 0 8px 8px 0;
        }
        .hero-insight p {
          margin: 0;
          font-size: 13px;
          color: #8db4e8;
          line-height: 1.6;
        }
        .hero-insight strong { color: var(--text); }

        /* ── Sidebar / Planes card ── */
        .planes-card {
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 28px;
          backdrop-filter: blur(8px);
          position: sticky;
          top: 20px;
        }

        .planes-header {
          font-family: 'Space Mono', monospace;
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 20px;
        }

        .plan-item {
          padding: 16px 0;
          border-bottom: 1px solid var(--border);
        }
        .plan-item:last-child { border-bottom: none; }

        .plan-name {
          font-weight: 700;
          font-size: 14px;
          color: #fff;
          margin-bottom: 4px;
        }

        .plan-price {
          font-family: 'Space Mono', monospace;
          font-size: 20px;
          font-weight: 700;
          color: var(--amber);
          margin-bottom: 6px;
        }

        .plan-desc {
          font-size: 12.5px;
          color: var(--muted);
          line-height: 1.55;
        }

        .plan-featured {
          background: rgba(0,85,255,0.12);
          border: 1px solid rgba(0,85,255,0.3);
          border-radius: 10px;
          padding: 16px;
          margin: -4px -4px;
        }
        .plan-featured .plan-name { color: #7db9ff; }

        .plans-cta {
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .btn-plans-wa {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          padding: 13px;
          border-radius: 8px;
          background: #25d366;
          color: #fff;
          font-weight: 700;
          font-size: 14px;
          text-decoration: none;
          transition: background 0.2s, transform 0.15s;
          border: none;
          cursor: pointer;
        }
        .btn-plans-wa:hover { background: #1fba59; transform: translateY(-1px); color: #fff; }

        .btn-plans-report {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          padding: 12px;
          border-radius: 8px;
          background: transparent;
          color: var(--muted);
          font-size: 13px;
          font-weight: 600;
          border: 1px solid var(--border);
          cursor: pointer;
          transition: border-color 0.2s, color 0.2s, background 0.2s;
          font-family: 'DM Sans', sans-serif;
        }
        .btn-plans-report:hover {
          border-color: rgba(255,255,255,0.25);
          color: #fff;
          background: rgba(255,255,255,0.04);
        }

        /* ── Scores strip ── */
        .scores-strip {
          display: flex;
          gap: 6px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }

        .score-chip {
          font-family: 'Space Mono', monospace;
          font-size: 11px;
          padding: 4px 10px;
          border-radius: 4px;
          border: 1px solid;
          font-weight: 700;
        }
        .score-chip.fail   { color: #ff6b86; border-color: rgba(255,45,85,0.4); background: rgba(255,45,85,0.08); }
        .score-chip.warn   { color: #fbbf24; border-color: rgba(251,191,36,0.4); background: rgba(251,191,36,0.08); }
        .score-chip.ok     { color: #34d399; border-color: rgba(52,211,153,0.4); background: rgba(52,211,153,0.08); }
      `}</style>

      <section className="hero-root" style={{ position: "relative" }}>
        <div className="hero-grid-bg" />
        <div className="hero-glow" />

        <div className="hero-inner">
          {/* ── LEFT COLUMN ── */}
          <div>
            <div className="hero-badge">
              Cumplimiento Obligatorio 2026
            </div>

            {/* Scores del reporte */}
            <div className="scores-strip">
              <span className="score-chip fail">OWASP A05 · CVSS 6.3</span>
              <span className="score-chip fail">OWASP A01 · CVSS 5.1</span>
              <span className="score-chip fail">NIS2 Art.21 ✗</span>
              <span className="score-chip fail">GDPR ✗</span>
              <span className="score-chip fail">CRA ✗</span>
            </div>

            <h1 className="hero-h1">
              Protege tu empresa y tu patrimonio<br />
              de las sanciones de <em>NIS2 y RGPD</em>
            </h1>

            <p className="hero-sub">
              ¿Tu infraestructura digital superaría una auditoría de inversión?
              Diagnosticamos tus fallos críticos bajo <strong>OWASP Top 10</strong> y
              generamos tu plan de remediación en tiempo récord.
              Sin burocracia — solo seguridad real.
            </p>

            <div className="hero-ctas">
              {/* CTA 1 → Telegram bot */}
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-hero"
              >
                {/* Telegram icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.286 13.68l-2.95-.924c-.642-.204-.657-.642.136-.953l11.498-4.434c.535-.194 1.002.13.924.852z"/>
                </svg>
                Obtener Snapshot de Riesgo — €100
              </a>

              {/* CTA 2 → Ver reporte detallado */}
              <button
                onClick={() => setShowReport(true)}
                className="btn-ghost-hero"
              >
                Ver diagnóstico completo
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>

            {/* Link secundario */}
            <button
              onClick={() => setShowReport(true)}
              className="btn-link-hero"
            >
              Ver planes de cumplimiento →
            </button>

            <p className="hero-fine">
              * Entrega en &lt;24 h. El coste se descuenta de cualquier plan contratado.
            </p>

            <div className="hero-insight">
              <p>
                <strong>Enfoque CTO-as-a-Service:</strong> No entregamos informes genéricos.
                Entregamos el <strong>SBOM</strong> y las acciones técnicas que tu equipo necesita
                para cerrar rondas de inversión con éxito.
              </p>
            </div>
          </div>

          {/* ── RIGHT COLUMN — Planes card ── */}
          <aside>
            <div className="planes-card">
              <p className="planes-header">Planes de Adecuación</p>

              <div className="plan-item">
                <div className="plan-name">Básico — Auditoría</div>
                <div className="plan-price">€399</div>
                <div className="plan-desc">
                  Análisis externo OWASP y checklist de acciones prioritarias.
                </div>
              </div>

              <div className="plan-item">
                <div className="plan-featured">
                  <div className="plan-name">Profesional — NIS2 / GDPR</div>
                  <div className="plan-price">€1.490</div>
                  <div className="plan-desc">
                    Mapeo normativo completo y plan de remediación técnica.{" "}
                    <strong style={{ color: "#7db9ff" }}>Ideal para startups.</strong>
                  </div>
                </div>
              </div>

              <div className="plan-item">
                <div className="plan-name">Avanzado — Resiliencia</div>
                <div className="plan-price">€2.990</div>
                <div className="plan-desc">
                  Pentesting, Certificado de Seguridad Interno y Soporte Directo.
                </div>
              </div>

              <div className="plans-cta">
                {/* Botón WhatsApp */}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-plans-wa"
                >
                  {/* WhatsApp icon */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Más Info por WhatsApp
                </a>

                {/* Ver diagnóstico */}
                <button
                  onClick={() => setShowReport(true)}
                  className="btn-plans-report"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12h6M9 16h6M17 21H7a2 2 0 01-2-2V5a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2z"/>
                  </svg>
                  Ver diagnóstico completo
                </button>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}