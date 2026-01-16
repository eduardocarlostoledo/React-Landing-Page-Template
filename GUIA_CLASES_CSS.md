# 🎨 GUÍA DE CLASES CSS NUEVAS

## Nuevas Clases Agregadas en ConfirmaSuscripcion.css

### Contenedor Principal de PDF & Pago
```css
.pdf-payment-section {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 15px;
  padding: 3rem 2rem;
  margin: 3rem 0;
  backdrop-filter: blur(10px);
}

.pdf-payment-section h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2.5rem;
  color: var(--accent-gold);
  font-weight: 700;
}
```

**Uso:**
```jsx
<motion.div variants={itemVariants} className="pdf-payment-section">
  <h2>Tu acceso inmediato</h2>
  {/* Contenido aquí */}
</motion.div>
```

---

### Grid de Tarjetas
```css
.pdf-payment-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;  /* 2 columnas */
  gap: 2rem;
  margin-bottom: 2rem;
}
```

**Responsive:**
- Desktop (1200px+): 2 columnas
- Tablet (768px-1199px): 1 columna
- Mobile (<768px): 1 columna

---

### Tarjeta Base
```css
.access-card {
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
}

.access-card:hover {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-5px);  /* Levanta al hover */
}
```

---

### Variantes de Tarjeta
```css
/* Tarjeta PDF - Borde amarillo */
.pdf-card {
  border-left: 4px solid var(--accent-gold);
}

/* Tarjeta Pago - Borde verde */
.payment-card {
  border-left: 4px solid #25d366;
}
```

**Uso:**
```jsx
<div className="access-card pdf-card">
  {/* Contenido PDF */}
</div>

<div className="access-card payment-card">
  {/* Contenido Pago */}
</div>
```

---

### Icono de Tarjeta
```css
.card-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}
```

**HTML:**
```jsx
<div className="card-icon">📄</div>  {/* PDF */}
<div className="card-icon">💳</div>  {/* Pago */}
```

---

### Títulos de Tarjeta
```css
.access-card h3 {
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: white;
  font-weight: 700;
}
```

---

### Descripción de Tarjeta
```css
.card-description {
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 1.5rem;
}
```

---

### Beneficios (Solo en Tarjeta Pago)
```css
.payment-benefits {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-bottom: 1.5rem;
}

.benefit-badge {
  background: rgba(255, 255, 255, 0.1);
  padding: 0.6rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

**Uso:**
```jsx
<div className="payment-benefits">
  <span className="benefit-badge">✓ Contenido Semanal</span>
  <span className="benefit-badge">✓ Grupo Privado</span>
  <span className="benefit-badge">✓ Soporte 24/7</span>
</div>
```

---

### Botones de Acción
```css
.access-button {
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  margin-bottom: 1rem;
  width: 100%;
}
```

---

### Variantes de Botón
```css
/* Botón PDF - Amarillo */
.pdf-button {
  background: linear-gradient(135deg, var(--accent-gold) 0%, #ffd80f 100%);
  color: var(--primary-dark);
}

.pdf-button:hover {
  transform: scale(1.03);
  box-shadow: 0 8px 20px rgba(255, 203, 5, 0.3);
}

/* Botón Pago - Verde */
.payment-button {
  background: linear-gradient(135deg, #25d366 0%, #1fa855 100%);
  color: white;
}

.payment-button:hover {
  transform: scale(1.03);
  box-shadow: 0 8px 20px rgba(37, 211, 102, 0.3);
}
```

---

### Nota en Tarjeta
```css
.card-note {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
  font-style: italic;
}
```

**Uso:**
```jsx
<p className="card-note">Descarga inmediata - Sin clave requerida</p>
<p className="card-note">Después de pagar volverás automáticamente aquí</p>
```

---

### Información de Pago
```css
.payment-info {
  background: rgba(37, 211, 102, 0.1);
  border-left: 4px solid #25d366;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
  margin-top: 2rem;
}

.payment-guarantee {
  color: rgba(255, 255, 255, 0.9);
  line-height: 2;
  font-size: 0.95rem;
}
```

---

## 📱 Media Queries Agregadas

### Para 768px (Tablet)
```css
@media (max-width: 768px) {
  .pdf-payment-section {
    padding: 2rem 1.5rem;
    margin: 2rem 0;
  }

  .pdf-payment-section h2 {
    font-size: 1.6rem;
    margin-bottom: 2rem;
  }

  .pdf-payment-grid {
    grid-template-columns: 1fr;  /* Stack vertical */
    gap: 1.5rem;
  }

  .access-card {
    padding: 1.5rem;
  }

  .card-icon {
    font-size: 2.5rem;
  }

  .access-card h3 {
    font-size: 1.2rem;
  }
}
```

---

### Para 480px (Mobile)
```css
@media (max-width: 480px) {
  .pdf-payment-section {
    padding: 1.5rem 1rem;
  }

  .pdf-payment-section h2 {
    font-size: 1.3rem;
  }

  .card-icon {
    font-size: 2rem;
  }

  .access-card h3 {
    font-size: 1rem;
  }

  .card-description {
    font-size: 0.85rem;
  }

  .access-button {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
  }
}
```

---

## 🎨 Jerarquía Visual

### Estructura de Grid
```
┌─ pdf-payment-section ──────────────────┐
│                                        │
│  [pdf-payment-section h2]              │
│  "Tu acceso inmediato"                 │
│                                        │
│  ┌─ pdf-payment-grid ─────────────────┐│
│  │                                    ││
│  │  ┌─ access-card pdf-card ───────┐  ││
│  │  │ [card-icon]                  │  ││
│  │  │ [access-card h3]             │  ││
│  │  │ [card-description]           │  ││
│  │  │ [access-button pdf-button]   │  ││
│  │  │ [card-note]                  │  ││
│  │  └────────────────────────────┘  ││
│  │                                    ││
│  │  ┌─ access-card payment-card ──┐  ││
│  │  │ [card-icon]                  │  ││
│  │  │ [access-card h3]             │  ││
│  │  │ [card-description]           │  ││
│  │  │ [payment-benefits]           │  ││
│  │  │ [access-button payment-button]   ││
│  │  │ [card-note]                  │  ││
│  │  └────────────────────────────┘  ││
│  │                                    ││
│  └────────────────────────────────────┘│
│                                        │
│  ┌─ payment-info ─────────────────────┐│
│  │ [payment-guarantee]                │
│  └────────────────────────────────────┘│
└────────────────────────────────────────┘
```

---

## 🔄 Flujo de Clases en JSX

```jsx
<motion.div 
  variants={itemVariants}              {/* Animación Framer Motion */}
  className="pdf-payment-section"      {/* Contenedor principal */}
>
  <h2>Tu acceso inmediato</h2>         {/* Título */}
  
  <div className="pdf-payment-grid">   {/* Grid 2 cols */}
    
    {/* TARJETA PDF */}
    <div className="access-card pdf-card">
      <div className="card-icon">📄</div>
      <h3>Guía Maestra Sistema 5-5</h3>
      <p className="card-description">...</p>
      <motion.button className="access-button pdf-button">
        📥 Descargar PDF Ahora
      </motion.button>
      <p className="card-note">...</p>
    </div>
    
    {/* TARJETA PAGO */}
    <div className="access-card payment-card">
      <div className="card-icon">💳</div>
      <h3>Activar Suscripción</h3>
      <p className="card-description">...</p>
      <div className="payment-benefits">
        <span className="benefit-badge">✓ Contenido Semanal</span>
        <span className="benefit-badge">✓ Grupo Privado</span>
        <span className="benefit-badge">✓ Soporte 24/7</span>
      </div>
      <motion.a href="..." className="access-button payment-button">
        💰 Pagar Ahora ($5 USD)
      </motion.a>
      <p className="card-note">...</p>
    </div>
    
  </div>
  
  {/* INFO DE PAGO */}
  <div className="payment-info">
    <p className="payment-guarantee">
      ✓ Pago seguro a través de MercadoPago
      <br />
      ✓ 30 días de garantía de devolución
      <br />
      ✓ Se renueva automáticamente cada mes
    </p>
  </div>
  
</motion.div>
```

---

## 🎯 Combinaciones Útiles

### Para cambiar colores:
```css
.pdf-card {
  border-left: 4px solid #ffcb05;  /* Amarillo */
}

.payment-card {
  border-left: 4px solid #25d366;  /* Verde WhatsApp */
}
```

### Para cambiar espaciado:
```css
.pdf-payment-grid {
  gap: 2rem;      /* Desktop */
}

@media (max-width: 768px) {
  .pdf-payment-grid {
    gap: 1.5rem;  /* Tablet */
  }
}

@media (max-width: 480px) {
  .pdf-payment-grid {
    gap: 1rem;    /* Mobile */
  }
}
```

### Para cambiar tamaño de fuente:
```css
.pdf-payment-section h2 {
  font-size: 2rem;      /* Desktop */
}

@media (max-width: 768px) {
  .pdf-payment-section h2 {
    font-size: 1.6rem;  /* Tablet */
  }
}

@media (max-width: 480px) {
  .pdf-payment-section h2 {
    font-size: 1.3rem;  /* Mobile */
  }
}
```

---

## ✨ Variables CSS Utilizadas

```css
:root {
  --primary-dark: #00205b;        /* Azul oscuro */
  --primary-light: #1d2e7b;       /* Azul claro */
  --accent-gold: #ffcb05;         /* Amarillo */
  --accent-green: #28a745;        /* Verde (no usado en PDF & Payment) */
  --text-dark: #1a1a1a;           /* Texto oscuro */
  --text-light: #ffffff;          /* Texto blanco */
  --bg-light: #f8f9fa;            /* Fondo claro */
}
```

**Nuevos colores específicos:**
```css
#25d366   /* Verde WhatsApp */
#ffd80f   /* Amarillo oscuro (gradient) */
#1fa855   /* Verde oscuro (gradient) */
```

---

## 🔍 Referencia de Clases Nuevas

| Clase | Uso | Tipo |
|-------|-----|------|
| `.pdf-payment-section` | Contenedor principal | Div |
| `.pdf-payment-grid` | Grid 2 columnas | Div |
| `.access-card` | Base tarjeta | Div |
| `.pdf-card` | Variante PDF | Modifier |
| `.payment-card` | Variante Pago | Modifier |
| `.card-icon` | Emoji icono | Div |
| `.card-description` | Descripción | P |
| `.payment-benefits` | Contenedor benefits | Div |
| `.benefit-badge` | Badge individual | Span |
| `.access-button` | Base botón | Button/A |
| `.pdf-button` | Variante PDF | Modifier |
| `.payment-button` | Variante Pago | Modifier |
| `.card-note` | Nota pequeña | P |
| `.payment-info` | Info pago | Div |
| `.payment-guarantee` | Texto garantía | P |

---

**Última actualización:** Enero 2026
**Versión:** 1.0
