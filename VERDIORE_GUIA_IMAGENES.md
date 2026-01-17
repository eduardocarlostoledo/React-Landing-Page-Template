# 📸 GUÍA DE IMÁGENES VERDIORE

## Ubicación de las Imágenes

Todas las imágenes deben estar en:
```
public/img/verdiore/
```

## 🖼️ Imágenes Requeridas

### 1. producto.jpg
**Uso:** Hero Section - Imagen principal del serum  
**Dimensiones recomendadas:** 500x600px (mín 400x480px)  
**Características:**
- Fondo neutro blanco o gris claro
- Producto bien iluminado
- Producto centrado
- Sin sombra o sombra suave
- Formato: JPG optimizado

**Dónde aparece:**
- En la sección Hero (lado derecho en desktop, abajo en móvil)
- Primer punto de contacto visual con el cliente

---

### 2. naturaleza.jpg
**Uso:** Product Highlight Section - Contexto natural del producto  
**Dimensiones recomendadas:** 600x400px (mín 500x300px)  
**Características:**
- Producto en contexto natural (montaña, naturaleza)
- Comunica: pureza, naturalidad, sostenibilidad
- Colores verdes predominantes
- Ambiente premium

**Dónde aparece:**
- En la sección "Product Highlight" (arriba en mobile, izquierda en desktop)
- Refuerza el mensaje de cosmética natural

---

### 3. relato.jpg
**Uso:** Before/After Section - Prueba de resultados  
**Dimensiones recomendadas:** 600x500px (mín 500x400px)  
**Características:**
- Comparación antes/después lado a lado
- Marcas que indiquen las zonas de nuevo crecimiento
- Cuero cabelludo visible
- Diferencia clara entre ambas fotos
- Profesional pero auténtico

**Dónde aparece:**
- En la sección "Resultados reales – Antes y Después"
- La imagen más importante para conversión

---

### 4. testimonio.jpg
**Uso:** Testimonial Section - Foto de cliente real  
**Dimensiones recomendadas:** 400x500px (mín 300x400px)  
**Características:**
- Retrato de Jorge (cliente real, 73 años)
- Foto de cabeza y hombros
- Luz natural o profesional
- Expresión confiable y sonriente
- Fondo neutral

**Dónde aparece:**
- En la tarjeta de testimonio (arriba en mobile, izquierda en desktop)
- Humaniza la marca, genera confianza

---

## 🎯 Recomendaciones de Optimización

### Compresión de imágenes
Para mejor rendimiento, comprime las imágenes usando:
- [TinyJPG](https://tinyjpg.com/) - Compresión sin pérdida visible
- ImageOptim (Mac)
- PNGCrush para PNG

### Dimensiones óptimas por dispositivo
- **Mobile:** 400-500px de ancho
- **Tablet:** 500-700px de ancho  
- **Desktop:** 600-800px de ancho

### Formato recomendado
- Usar **JPG** para fotos y comparaciones (mejor compresión)
- Usar **PNG** solo si se necesita transparencia
- Considerar **WebP** para mejor rendimiento (navegadores modernos)

---

## 📋 Estructura de carpetas esperada

```
public/
└── img/
    ├── verdiore/
    │   ├── producto.jpg
    │   ├── naturaleza.jpg
    │   ├── relato.jpg
    │   └── testimonio.jpg
    ├── portfolio/
    ├── team/
    └── testimonials/
```

---

## ✅ Verificación de Imágenes

Una vez cargues las imágenes, puedes verificar:

1. **En el navegador:**
   - Abre DevTools (F12)
   - Ve a Network > Images
   - Verifica que todas las imágenes se cargan sin errores 404

2. **Alturas y proporciones:**
   - Asegúrate de que las imágenes se vean bien en mobile y desktop
   - Las imágenes deben ser responsivas

3. **Calidad:**
   - Las imágenes deben verse nítidas sin ser demasiado pesadas
   - Apunta a máximo 200-300KB por imagen

---

## 🔄 Si necesitas cambiar las imágenes

1. Reemplaza el archivo en `public/img/verdiore/`
2. Si cambias el nombre del archivo, actualiza el `src` en `verdiore.jsx`:

```jsx
// Línea en Hero Section
<img src="/img/verdiore/producto.jpg" alt="Serum Capilar Bello Oro" />

// Línea en Before/After
<img src="/img/verdiore/relato.jpg" alt="Antes y Después - Casos Reales" />

// Línea en Testimonial
<img src="/img/verdiore/testimonio.jpg" alt="Jorge - Cliente Real" />

// Línea en Product Highlight
<img src="/img/verdiore/naturaleza.jpg" alt="Serum Capilar en Naturaleza" />
```

---

## 🚀 Próximos Pasos

1. ✅ Copiar las 4 imágenes a `public/img/verdiore/`
2. ✅ Optimizar y comprimir las imágenes
3. ✅ Acceder a `http://localhost:3000/verdiore`
4. ✅ Verificar que todas las imágenes se cargan correctamente
5. ✅ Ajustar textos y precios según sea necesario

---

**Nota:** Si las imágenes no aparecen, verifica:
- La ruta exacta: `public/img/verdiore/`
- Los nombres de archivo deben coincidir exactamente
- No debe haber espacios en blanco en los nombres
- Usa minúsculas en extensiones (.jpg, no .JPG)

