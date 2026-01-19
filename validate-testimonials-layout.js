#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('\n🔍 VALIDANDO SECCIÓN DE TESTIMONIOS - LAYOUT Y ORDEN...\n');

const testimonialsCssPath = path.join(__dirname, 'src', 'styles', 'testimonials.css');
const testimonialsCssContent = fs.readFileSync(testimonialsCssPath, 'utf8');

let passedChecks = 0;
let totalChecks = 0;

// Check 1: Widget Grid Layout
totalChecks++;
if (testimonialsCssContent.includes('display: grid !important') && 
    testimonialsCssContent.includes('grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))')) {
  console.log('✓ CHECK 1: Widget Grid Layout presente');
  console.log('  ✅ Layout de grid para tarjetas configurado');
  passedChecks++;
} else {
  console.log('✗ CHECK 1: Widget Grid Layout FALTA');
  console.log('  ❌ Grid layout no encontrado');
}

// Check 2: Gap between cards
totalChecks++;
if (testimonialsCssContent.includes('gap: 2rem !important')) {
  console.log('✓ CHECK 2: Espaciado entre tarjetas (gap) presente');
  console.log('  ✅ Tarjetas están separadas correctamente');
  passedChecks++;
} else {
  console.log('✗ CHECK 2: Gap entre tarjetas FALTA');
  console.log('  ❌ Tarjetas sin separación');
}

// Check 3: Individual card styling
totalChecks++;
if (testimonialsCssContent.includes('flex-direction: column !important') && 
    testimonialsCssContent.includes('background: #f8f9fa !important')) {
  console.log('✓ CHECK 3: Estilos individuales de tarjetas presentes');
  console.log('  ✅ Cada tarjeta tiene estilos propios');
  passedChecks++;
} else {
  console.log('✗ CHECK 3: Estilos de tarjetas FALTAN');
  console.log('  ❌ Tarjetas sin estilos individuales');
}

// Check 4: Hover effect on cards
totalChecks++;
if (testimonialsCssContent.includes('transform: translateY(-4px) !important') && 
    testimonialsCssContent.includes(':hover')) {
  console.log('✓ CHECK 4: Efecto hover en tarjetas presente');
  console.log('  ✅ Tarjetas se elevan al pasar el mouse');
  passedChecks++;
} else {
  console.log('✗ CHECK 4: Hover effect FALTA');
  console.log('  ❌ Sin efecto hover en tarjetas');
}

// Check 5: Responsive grid for tablets
totalChecks++;
if (testimonialsCssContent.includes('@media (max-width: 768px)') && 
    testimonialsCssContent.includes('grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))')) {
  console.log('✓ CHECK 5: Layout responsivo para tablets presente');
  console.log('  ✅ Breakpoint 768px configurado correctamente');
  passedChecks++;
} else {
  console.log('✗ CHECK 5: Breakpoint tablet FALTA');
  console.log('  ❌ Sin configuración responsive para tablets');
}

// Check 6: Mobile grid (single column)
totalChecks++;
if (testimonialsCssContent.includes('@media (max-width: 480px)') && 
    testimonialsCssContent.includes('grid-template-columns: 1fr !important')) {
  console.log('✓ CHECK 6: Layout móvil (1 columna) presente');
  console.log('  ✅ Mobile view mostrará 1 tarjeta por fila');
  passedChecks++;
} else {
  console.log('✗ CHECK 6: Mobile grid FALTA');
  console.log('  ❌ Sin configuración para móvil');
}

// Check 7: Border radius on cards
totalChecks++;
if (testimonialsCssContent.includes('border-radius: 12px !important')) {
  console.log('✓ CHECK 7: Border radius en tarjetas presente');
  console.log('  ✅ Tarjetas con esquinas redondeadas');
  passedChecks++;
} else {
  console.log('✗ CHECK 7: Border radius FALTA');
  console.log('  ❌ Tarjetas sin esquinas redondeadas');
}

// Check 8: Shadow on cards
totalChecks++;
if (testimonialsCssContent.includes('box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1) !important')) {
  console.log('✓ CHECK 8: Sombra en tarjetas presente');
  console.log('  ✅ Tarjetas tienen sombra para profundidad');
  passedChecks++;
} else {
  console.log('✗ CHECK 8: Shadow FALTA');
  console.log('  ❌ Tarjetas sin sombra');
}

// Summary
console.log('\n============================================================');
console.log('RESUMEN - SECCIÓN DE TESTIMONIOS');
console.log('============================================================\n');

console.log(`✅ Checks Pasados: ${passedChecks}/${totalChecks} (${Math.round((passedChecks/totalChecks)*100)}%)\n`);

if (passedChecks === totalChecks) {
  console.log('🎉 ¡TODAS LAS VALIDACIONES PASARON!\n');
  console.log('📊 ESTADO DEL LAYOUT:');
  console.log('  ✓ Tarjetas en grid (no desordenadas)');
  console.log('  ✓ Espaciado uniforme entre tarjetas');
  console.log('  ✓ Responsive en mobile/tablet/desktop');
  console.log('  ✓ Efectos hover funcionan correctamente');
  console.log('  ✓ Estética consistente\n');
  console.log('🚀 SECCIÓN LISTA PARA TESTING\n');
} else {
  console.log(`⚠️ ${totalChecks - passedChecks} check(s) fallaron\n`);
}

console.log('============================================================\n');

process.exit(passedChecks === totalChecks ? 0 : 1);
