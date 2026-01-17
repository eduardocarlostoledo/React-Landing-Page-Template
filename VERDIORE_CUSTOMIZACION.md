# ⚙️ GUÍA DE CUSTOMIZACIÓN VERDIORE

## 🎯 Cambios Rápidos Sin Tocar Código

### 1. Cambiar Textos Principales

**Ubicación:** `src/components/verdiore.jsx`

#### Hero Headline
Línea ~32:
```jsx
<h1 className="hero-headline">Recuperá tu cabello de forma natural</h1>
```

#### Hero Subheadline
Línea ~33-36:
```jsx
<p className="hero-subheadline">
  El serum capilar 100% natural que fortalece la raíz y reduce la caída
  desde las primeras semanas.
</p>
```

#### Precio
Línea ~189:
```jsx
<span className="price-amount">$99.90</span>
```

---

## 🎨 Cambios en Estilos y Colores

**Ubicación:** `src/styles/verdiore.css` (líneas 1-10)

### Cambiar Colores

```css
:root {
  --primary-green: #547749;      /* Color principal - verde */
  --secondary-green: #1f3d2b;    /* Verde más oscuro */
  --bg-light: #f6f5f2;            /* Fondo claro */
  --bg-white: #ffffff;            /* Blanco */
  --text-dark: #2c2c2c;           /* Texto oscuro */
  --text-light: #666666;          /* Texto gris */
  --accent-gold: #d4a574;         /* Dorado */
}
```

**Ejemplo:** Cambiar el verde primario a azul
```css
--primary-green: #2563eb;
```

---

## 🔤 Cambios de Tipografía

### Tamaños de Fuente en Desktop

**Hero Headline** - Línea ~100:
```css
.hero-headline {
  font-size: 3.5rem;  /* Cambiar aquí */
}
```

**Section Titles** - Línea ~303:
```css
.section-title {
  font-size: 2.5rem;  /* Cambiar aquí */
}
```

### Cambiar Familia de Fuente

En `src/styles/verdiore.css`, línea ~16:
```css
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, ...;
}
```

Cambiar a:
```css
body {
  font-family: "Georgia", serif;  /* O tu fuente preferida */
}
```

---

## 📦 Cambiar Estructura de Beneficios

Ubicación: `src/components/verdiore.jsx` línea ~95

Estructura actual: 4 beneficios en grid

Para **agregar un beneficio:**
```jsx
<div className="benefit-card">
  <div className="benefit-icon">🌟</div>
  <h3>Tu Beneficio Aquí</h3>
  <p>Descripción del beneficio.</p>
</div>
```

Para **cambiar el número de columnas:**
En `src/styles/verdiore.css` línea ~241:
```css
/* Desktop - actualmente 4 columnas */
@media (min-width: 768px) {
  .benefits-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

/* Cambiar a 3 columnas */
.benefits-grid {
  grid-template-columns: repeat(3, 1fr);
}
```

---

## 🔘 Personalizar CTAs

### Cambiar Texto del Botón

Busca `"Comprar ahora"` y `"Quiero recuperar mi cabello"` en el componente

### Cambiar URL de Compra

En el componente, todos los botones tienen:
```jsx
onClick={() => handleScroll("product-highlight")}
```

Para redirigir a una URL externa:
```jsx
onClick={() => window.location.href = "https://tutienda.com"}
```

---

## 🎯 Cambiar Testimonios

Ubicación: `src/components/verdiore.jsx` línea ~138

```jsx
<p className="testimonial-text">
  "Tu nuevo testimonio aquí"
</p>

<div className="testimonial-author">
  <h4>Nombre – Edad</h4>
  <p className="author-tag">Tu etiqueta</p>
  <p className="author-tag">Otra etiqueta</p>
</div>
```

---

## 📱 Ajustar Breakpoints Responsivos

Ubicación: `src/styles/verdiore.css` línea ~240

```css
/* Tablet - actualmente 768px */
@media (min-width: 768px) {
  /* Cambiar breakpoint aquí */
}

/* Desktop - actualmente 1024px */
@media (min-width: 1024px) {
  /* Cambiar breakpoint aquí */
}
```

---

## 🖼️ Cambiar Imágenes

En `src/components/verdiore.jsx`:

```jsx
/* Hero */
<img src="/img/verdiore/producto.jpg" alt="Serum Capilar Bello Oro" />

/* Before/After */
<img src="/img/verdiore/relato.jpg" alt="Antes y Después - Casos Reales" />

/* Testimonial */
<img src="/img/verdiore/testimonio.jpg" alt="Jorge - Cliente Real" />

/* Product Highlight */
<img src="/img/verdiore/naturaleza.jpg" alt="Serum Capilar en Naturaleza" />
```

---

## 📊 Agregar Nueva Sección

### Paso 1: Agregar HTML en el componente
```jsx
<section className="nueva-seccion" id="nueva-seccion">
  <div className="section-container">
    <h2 className="section-title">Mi Nueva Sección</h2>
    {/* Contenido aquí */}
  </div>
</section>
```

### Paso 2: Agregar CSS en verdiore.css
```css
.nueva-seccion {
  padding: 4rem 1.5rem;
  background-color: var(--bg-light);
}

@media (min-width: 768px) {
  .nueva-seccion {
    padding: 5rem 2rem;
  }
}
```

### Paso 3: Agregar enlace de navegación
```jsx
<button onClick={() => handleScroll("nueva-seccion")}>
  Ir a Nueva Sección
</button>
```

---

## 🌐 Cambiar Idioma

Reemplaza todos los textos del componente. Búsquedas recomendadas:

- "Recuperá tu cabello" → Tu headline en otro idioma
- "100% natural" → Equivalente en otro idioma
- "Comprar ahora" → Equivalente en otro idioma

---

## 🎨 Temas Predefinidos

### Tema Oscuro
En `src/styles/verdiore.css`, cambia las variables:
```css
:root {
  --primary-green: #7ec850;
  --secondary-green: #2d5016;
  --bg-light: #1a1a1a;
  --bg-white: #2d2d2d;
  --text-dark: #f0f0f0;
  --text-light: #b0b0b0;
}
```

### Tema Azul (Tech/Moderno)
```css
:root {
  --primary-green: #0366d6;
  --secondary-green: #003d99;
  --bg-light: #f6f8fa;
  --bg-white: #ffffff;
  --text-dark: #1f2937;
  --text-light: #6b7280;
}
```

---

## 🚀 Optimizaciones de Rendimiento

### Lazy Loading de Imágenes

En `verdiore.jsx`, agrega `loading="lazy"`:
```jsx
<img 
  src="/img/verdiore/producto.jpg" 
  alt="Serum Capilar Bello Oro"
  loading="lazy"
/>
```

### Compresión de CSS

Minifica `verdiore.css` cuando esté listo para producción.

---

## 📋 Checklist de Customización

- [ ] Cambiar textos principales (headline, subheadline)
- [ ] Actualizar precio
- [ ] Personalizar colores de marca
- [ ] Cambiar testimonios
- [ ] Agregar imágenes propias
- [ ] Ajustar breakpoints si es necesario
- [ ] Pruebas en móvil, tablet y desktop
- [ ] Verificar que todos los CTAs funcionan
- [ ] Optimizar imágenes para velocidad

---

## ⚠️ Errores Comunes y Soluciones

### "Las imágenes no aparecen"
✅ Solución: Verifica que estén en `public/img/verdiore/` exactamente

### "Los estilos no se aplican"
✅ Solución: Borra el cache del navegador (Ctrl+Shift+R)

### "Los colores se ven raros"
✅ Solución: Verifica que los códigos hex sean válidos (#RRGGBB)

### "El scroll suave no funciona"
✅ Solución: Asegúrate de que los IDs de secciones existan

---

## 🆘 Necesitas Más Ayuda

1. **Revisar componente:** `src/components/verdiore.jsx`
2. **Revisar estilos:** `src/styles/verdiore.css`
3. **Revisar instrucciones:** [VERDIORE_INSTALACION.md](./VERDIORE_INSTALACION.md)
4. **Revisar imágenes:** [VERDIORE_GUIA_IMAGENES.md](./VERDIORE_GUIA_IMAGENES.md)

