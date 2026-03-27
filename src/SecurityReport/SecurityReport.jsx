// src/components/SecurityReport/SecurityReport.jsx
// Componente standalone — accesible desde Hero vía estado local
// o desde React Router: <Route path="/diagnostico" element={<SecurityReport />} />

const TELEGRAM_URL =
  "https://web.telegram.org/k/#7993602971";
const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=5493764221063&text&type=phone_number&app_absent=0";

// ─── Datos del reporte ────────────────────────────────────────────────────────

const FINDINGS = [
  {
    id: "A05",
    badge: "OWASP A05:2021",
    cvss: "6.3",
    cvssColor: "#f97316",
    severity: "ALTO",
    severityColor: "#f97316",
    title: "Cabeceras de seguridad ausentes",
    technical:
      "Ausencia de HSTS, Content-Security-Policy y X-Frame-Options. CVSS:4.0/AV:N/AC:L/AT:P/PR:N/UI:P/VC:H/VI:H/VA:N/SC:L/SI:L/SA:N",
    plain:
      "Tu sitio no le dice al navegador cómo protegerse. Es como dejar la puerta del local abierta de par en par: cualquiera puede espiar la conexión (MITM) o incrustar tu web dentro de otra página trampa para robar clics o datos (Clickjacking).",
    fix: "Agregar tres líneas de configuración en el servidor (Netlify/nginx). Ya está resuelto en el netlify.toml de este proyecto con HSTS, CSP y X-Frame-Options: DENY.",
    fixStatus: "resuelto",
    norm: ["OWASP A05:2021", "NIS2 Art.21"],
  },
  {
    id: "A01",
    badge: "OWASP A01:2021",
    cvss: "5.1",
    cvssColor: "#eab308",
    severity: "MEDIO",
    severityColor: "#eab308",
    title: "Cookies sin atributos de seguridad",
    technical:
      "Cookies emitidas sin flags HttpOnly, Secure y SameSite. Permite secuestro de sesión (session hijacking) y ataques CSRF. CVSS:4.0/AV:N/AC:L/AT:N/PR:N/UI:P/VC:H/VI:L/VA:N/SC:L/SI:N/SA:N",
    plain:
      "Las cookies de sesión viajan sin protección. Sin HttpOnly cualquier script malicioso puede leerlas. Sin Secure viajan en texto plano por HTTP. Sin SameSite un sitio externo puede usar tu cookie para hacer acciones en tu nombre (CSRF). Es como anotar tu contraseña en un post-it visible.",
    fix: "En CookieConsent.jsx ya se emiten con Secure, HttpOnly y SameSite: Strict. Para cookies de servidor, agregar los flags en el Set-Cookie del backend Node/Express.",
    fixStatus: "parcial",
    norm: ["OWASP A01:2021", "GDPR Art.32"],
  },
  {
    id: "NIS2",
    badge: "NIS2 Art.21",
    cvss: null,
    severity: "INCUMPLIMIENTO",
    severityColor: "#ef4444",
    title: "Higiene cibernética básica ausente",
    technical:
      "El activo carece de medidas básicas de higiene cibernética exigidas en el Art.21, fallando en la protección de la integridad de servicios y gestión de vulnerabilidades.",
    plain:
      "La Directiva NIS2 es ley en la UE desde octubre 2024. El Art.21 exige que cualquier empresa con presencia digital aplique medidas mínimas: actualizaciones, parches, control de accesos y monitorización. No cumplir puede costar hasta el 2% de la facturación anual o 10 millones de euros.",
    fix: "El netlify.toml con headers de seguridad, el security.txt (RFC 9116) y el proceso de auditoría OWASP documentado cubren los requisitos básicos del Art.21 para un sitio web estático/SPA.",
    fixStatus: "resuelto",
    norm: ["NIS2 Directiva 2022/2555"],
  },
  {
    id: "DORA",
    badge: "DORA Art.9",
    cvss: null,
    severity: "INCUMPLIMIENTO",
    severityColor: "#ef4444",
    title: "Sin controles de red ni hardening técnico",
    technical:
      "Incumple los principios de protección y prevención del Art.9, al no aplicar controles de seguridad de red ni políticas de hardening técnico necesarias para la resiliencia operativa digital.",
    plain:
      "DORA (Digital Operational Resilience Act) aplica principalmente a entidades financieras y sus proveedores TIC desde enero 2025. Si cualquiera de tus clientes está en el sector financiero europeo, ellos te van a exigir este cumplimiento como condición de contrato. Básicamente: si no tenés hardening, no te contratan.",
    fix: "Los headers de seguridad (CSP, HSTS, Permissions-Policy), la política de divulgación (security.txt) y el proceso de auditoría documentado cubren los requerimientos de Art.9 para proveedores TIC de nivel básico.",
    fixStatus: "resuelto",
    norm: ["DORA Reglamento 2022/2554"],
  },
  {
    id: "CRA",
    badge: "Cyber Resilience Act",
    cvss: null,
    severity: "INCUMPLIMIENTO",
    severityColor: "#ef4444",
    title: "Sin seguridad por diseño ni security.txt",
    technical:
      "Incumple requisitos de seguridad por diseño y gestión de vulnerabilidades. Ausencia de security.txt y falta de mitigación de vectores conocidos contraviene la directiva de divulgación responsable.",
    plain:
      "El CRA (en vigor desde 2024, obligatorio en fases hasta 2027) exige que los productos digitales se diseñen con seguridad desde el inicio y que exista un canal público para reportar vulnerabilidades. Sin security.txt no hay canal oficial — cualquier investigador que encuentre un fallo en tu sitio no tiene a quién avisarle.",
    fix: "El archivo /public/.well-known/security.txt ya está creado y desplegado según RFC 9116. La arquitectura DevSecOps (auditoría + headers + GDPR) cubre los requisitos de 'security by design'.",
    fixStatus: "resuelto",
    norm: ["CRA Reglamento 2024/2847"],
  },
  {
    id: "GDPR",
    badge: "GDPR",
    cvss: null,
    severity: "INCUMPLIMIENTO",
    severityColor: "#ef4444",
    title: "Cookies de tracking sin consentimiento",
    technical:
      "Riesgo elevado por falta de flags de seguridad en cookies de tracking, ausencia de banner de consentimiento detectable y falta de política de privacidad visible en el shell inicial.",
    plain:
      "Google Analytics y Google Ads estaban cargándose antes de que el usuario aceptara nada. Eso es ilegal en la UE desde el RGPD (2018). Las multas van hasta el 4% de la facturación global o 20 millones de euros. Además, sin banner de consentimiento visible el sitio no puede usar esas herramientas legalmente en ningún mercado europeo.",
    fix: "El componente CookieConsent.jsx bloquea todos los scripts de terceros (GA, Ads, EmailJS) hasta que el usuario acepta explícitamente. La cookie se guarda con Secure + SameSite:Strict y vence a los 365 días o 30 si rechaza.",
    fixStatus: "resuelto",
    norm: ["GDPR Art.5", "GDPR Art.7", "GDPR Art.32"],
  },
];

const STATUS_LABEL = {
  resuelto: { label: "Resuelto ✓",  bg: "rgba(52,211,153,0.1)",  border: "rgba(52,211,153,0.35)",  color: "#34d399" },
  parcial:  { label: "Parcial ◐",   bg: "rgba(251,191,36,0.1)",  border: "rgba(251,191,36,0.35)",  color: "#fbbf24" },
  pendiente:{ label: "Pendiente ✗", bg: "rgba(239,68,68,0.1)",   border: "rgba(239,68,68,0.35)",   color: "#ef4444" },
};

// ─── Componente ───────────────────────────────────────────────────────────────

export default function SecurityReport({ onBack }) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        .sr-root {
          --navy:    #00112e;
          --blue:    #0055ff;
          --amber:   #ffcb05;
          --red:     #ff2d55;
          --text:    #e8edf5;
          --muted:   #7a8ba8;
          --border:  rgba(255,255,255,0.08);
          font-family: 'DM Sans', sans-serif;
          background: var(--navy);
          color: var(--text);
          min-height: 100vh;
          padding: 0;
        }

        .sr-grid-bg {
          position: fixed;
          inset: 0;
          background-image:
            linear-gradient(rgba(0,85,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,85,255,0.05) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
          z-index: 0;
        }

        .sr-inner {
          position: relative;
          z-index: 1;
          max-width: 880px;
          margin: 0 auto;
          padding: 48px 24px 80px;
        }

        /* ── Back + header ── */
        .sr-back {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: none;
          border: none;
          color: var(--muted);
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          padding: 0 0 28px;
          transition: color 0.2s;
        }
        .sr-back:hover { color: #fff; }

        .sr-header {
          margin-bottom: 40px;
        }

        .sr-kicker {
          font-family: 'Space Mono', monospace;
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 12px;
        }

        .sr-title {
          font-size: clamp(24px, 3.5vw, 36px);
          font-weight: 700;
          color: #fff;
          line-height: 1.15;
          margin: 0 0 16px;
          letter-spacing: -0.3px;
        }

        .sr-subtitle {
          font-size: 15px;
          color: var(--muted);
          line-height: 1.6;
          max-width: 640px;
          margin: 0;
        }

        /* ── Score chips ── */
        .sr-scores {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin: 28px 0 40px;
          padding: 20px;
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--border);
          border-radius: 10px;
        }

        .sr-score-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          flex: 1 1 120px;
          padding: 12px 8px;
          border-radius: 8px;
          background: rgba(255,45,85,0.08);
          border: 1px solid rgba(255,45,85,0.2);
        }

        .sr-score-val {
          font-family: 'Space Mono', monospace;
          font-size: 20px;
          font-weight: 700;
          color: #ff6b86;
        }

        .sr-score-label {
          font-size: 10px;
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          text-align: center;
        }

        /* ── Finding cards ── */
        .sr-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 28px;
          margin-bottom: 20px;
          transition: border-color 0.2s;
        }
        .sr-card:hover { border-color: rgba(255,255,255,0.15); }

        .sr-card-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }

        .sr-badge {
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 4px;
          background: rgba(0,85,255,0.15);
          border: 1px solid rgba(0,85,255,0.3);
          color: #7db9ff;
          white-space: nowrap;
        }

        .sr-severity {
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1px;
          padding: 4px 10px;
          border-radius: 4px;
        }

        .sr-cvss {
          font-family: 'Space Mono', monospace;
          font-size: 13px;
          font-weight: 700;
        }

        .sr-card-title {
          font-size: 18px;
          font-weight: 700;
          color: #fff;
          margin: 0 0 6px;
          line-height: 1.3;
        }

        .sr-norms {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
          margin-bottom: 18px;
        }

        .sr-norm-tag {
          font-size: 11px;
          padding: 3px 8px;
          border-radius: 3px;
          background: rgba(255,203,5,0.08);
          border: 1px solid rgba(255,203,5,0.2);
          color: #ffd84d;
          font-weight: 600;
        }

        /* ── Sections ── */
        .sr-section {
          margin-bottom: 18px;
        }

        .sr-section-label {
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 8px;
        }

        .sr-section-body {
          font-size: 14px;
          line-height: 1.7;
          color: #b0bece;
        }

        .sr-section-body strong { color: var(--text); }

        /* ── Fix box ── */
        .sr-fix-box {
          padding: 16px 18px;
          border-radius: 8px;
          background: rgba(52,211,153,0.06);
          border: 1px solid rgba(52,211,153,0.2);
          font-size: 13.5px;
          line-height: 1.65;
          color: #9ee8c8;
        }

        .sr-fix-box strong { color: #34d399; }

        .sr-status-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 700;
          font-family: 'Space Mono', monospace;
          padding: 5px 12px;
          border-radius: 20px;
          border: 1px solid;
          margin-top: 10px;
        }

        /* ── CTA footer ── */
        .sr-cta-footer {
          margin-top: 48px;
          padding: 32px;
          background: rgba(0,85,255,0.07);
          border: 1px solid rgba(0,85,255,0.2);
          border-radius: 14px;
          text-align: center;
        }

        .sr-cta-title {
          font-size: 22px;
          font-weight: 700;
          color: #fff;
          margin: 0 0 10px;
        }

        .sr-cta-sub {
          font-size: 14px;
          color: var(--muted);
          margin: 0 0 24px;
          line-height: 1.6;
        }

        .sr-cta-buttons {
          display: flex;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-cta-tg {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 22px;
          background: #0055ff;
          color: #fff;
          border-radius: 8px;
          font-weight: 700;
          font-size: 15px;
          text-decoration: none;
          transition: background 0.2s, transform 0.15s;
          border: none;
          cursor: pointer;
        }
        .btn-cta-tg:hover { background: #0044cc; transform: translateY(-2px); color: #fff; }

        .btn-cta-wa {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 22px;
          background: #25d366;
          color: #fff;
          border-radius: 8px;
          font-weight: 700;
          font-size: 15px;
          text-decoration: none;
          transition: background 0.2s, transform 0.15s;
        }
        .btn-cta-wa:hover { background: #1fba59; transform: translateY(-2px); color: #fff; }

        @media (max-width: 600px) {
          .sr-inner { padding: 32px 16px 60px; }
          .sr-card { padding: 20px 16px; }
          .sr-scores { gap: 6px; }
          .sr-cta-footer { padding: 24px 18px; }
        }
      `}</style>

      <div className="sr-root">
        <div className="sr-grid-bg" />
        <div className="sr-inner">

          {/* Back */}
          {onBack && (
            <button onClick={onBack} className="sr-back">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M19 12H5M12 5l-7 7 7 7"/>
              </svg>
              Volver al inicio
            </button>
          )}

          {/* Header */}
          <div className="sr-header">
            <p className="sr-kicker">Reporte DevSecOps — toledoconsultora.com</p>
            <h1 className="sr-title">
              Diagnóstico de Cumplimiento<br />
              NIS2 · GDPR · OWASP · CRA · DORA
            </h1>
            <p className="sr-subtitle">
              Análisis automatizado de vulnerabilidades y cumplimiento normativo europeo.
              Cada hallazgo incluye su explicación en lenguaje llano y el estado de remediación.
            </p>
          </div>

          {/* Score strip */}
          <div className="sr-scores">
            <div className="sr-score-item">
              <span className="sr-score-val">6.3</span>
              <span className="sr-score-label">CVSS Top<br/>hallazgo</span>
            </div>
            <div className="sr-score-item">
              <span className="sr-score-val">5</span>
              <span className="sr-score-label">Normativas<br/>afectadas</span>
            </div>
            <div className="sr-score-item">
              <span className="sr-score-val">0%</span>
              <span className="sr-score-label">Score inicial<br/>headers</span>
            </div>
            <div className="sr-score-item" style={{ background: "rgba(52,211,153,0.08)", border: "1px solid rgba(52,211,153,0.2)" }}>
              <span className="sr-score-val" style={{ color: "#34d399" }}>4/6</span>
              <span className="sr-score-label">Hallazgos<br/>resueltos</span>
            </div>
          </div>

          {/* Finding cards */}
          {FINDINGS.map((f) => {
            const st = STATUS_LABEL[f.fixStatus] || STATUS_LABEL.pendiente;
            return (
              <div key={f.id} className="sr-card">
                {/* Header */}
                <div className="sr-card-header">
                  <div>
                    <span className="sr-badge">{f.badge}</span>
                  </div>
                  <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                    {f.cvss && (
                      <span className="sr-cvss" style={{ color: f.cvssColor }}>
                        CVSS {f.cvss}
                      </span>
                    )}
                    <span
                      className="sr-severity"
                      style={{
                        background: f.severityColor + "18",
                        border: `1px solid ${f.severityColor}55`,
                        color: f.severityColor,
                      }}
                    >
                      {f.severity}
                    </span>
                  </div>
                </div>

                <h2 className="sr-card-title">{f.title}</h2>

                <div className="sr-norms">
                  {f.norm.map((n) => (
                    <span key={n} className="sr-norm-tag">{n}</span>
                  ))}
                </div>

                {/* Técnico */}
                <div className="sr-section">
                  <p className="sr-section-label">Detalle técnico</p>
                  <p className="sr-section-body">{f.technical}</p>
                </div>

                {/* En criollo */}
                <div className="sr-section">
                  <p className="sr-section-label">¿Qué significa en la práctica?</p>
                  <p className="sr-section-body">{f.plain}</p>
                </div>

                {/* Fix */}
                <div className="sr-section" style={{ marginBottom: 0 }}>
                  <p className="sr-section-label">Cómo lo resolvemos</p>
                  <div className="sr-fix-box">{f.fix}</div>
                  <span
                    className="sr-status-chip"
                    style={{ background: st.bg, borderColor: st.border, color: st.color }}
                  >
                    {st.label}
                  </span>
                </div>
              </div>
            );
          })}

          {/* CTA footer */}
          <div className="sr-cta-footer">
            <h3 className="sr-cta-title">¿Tu sitio tiene los mismos problemas?</h3>
            <p className="sr-cta-sub">
              Analizamos tu infraestructura con el mismo proceso y entregás el reporte
              con remediaciones priorizadas en menos de 24 horas.
            </p>
            <div className="sr-cta-buttons">
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta-tg"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.286 13.68l-2.95-.924c-.642-.204-.657-.642.136-.953l11.498-4.434c.535-.194 1.002.13.924.852z"/>
                </svg>
                Obtener Snapshot — €100
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta-wa"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Más Info por WhatsApp
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}