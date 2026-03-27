import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main style={{
      minHeight: "80vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "2rem",
      background: "linear-gradient(135deg, #00205b 0%, #1d2e7b 100%)",
      color: "#ffffff",
    }}>
      <div style={{ fontSize: "6rem", lineHeight: 1, marginBottom: "1rem" }}>🔒</div>
      <h1 style={{ fontSize: "5rem", fontWeight: 900, color: "#ffcb05", margin: 0 }}>404</h1>
      <h2 style={{ fontSize: "1.5rem", fontWeight: 600, margin: "0.5rem 0 1rem" }}>
        Página no encontrada
      </h2>
      <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.75)", maxWidth: "420px", lineHeight: 1.6, marginBottom: "2rem" }}>
        La ruta que buscás no existe o fue movida. Si creés que es un error, reportalo en{" "}
        <a href="mailto:ventas@toledoconsultora.com" style={{ color: "#ffcb05" }}>
          ventas@toledoconsultora.com
        </a>
      </p>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
        <Link to="/" style={{
          padding: "0.75rem 1.75rem",
          background: "#ffcb05",
          color: "#00205b",
          fontWeight: 700,
          borderRadius: "8px",
          textDecoration: "none",
          fontSize: "0.95rem",
        }}>
          Volver al inicio
        </Link>
        <Link to="/contacto" style={{
          padding: "0.75rem 1.75rem",
          border: "2px solid rgba(255,255,255,0.4)",
          color: "#ffffff",
          fontWeight: 600,
          borderRadius: "8px",
          textDecoration: "none",
          fontSize: "0.95rem",
        }}>
          Contacto
        </Link>
      </div>
    </main>
  );
}
