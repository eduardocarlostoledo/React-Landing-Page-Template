#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('\n🔍 VALIDANDO SERVICIOS Y TARJETAS DE SOLUCIONES...\n');

const indexPath = path.join(__dirname, 'public', 'index.html');
const indexContent = fs.readFileSync(indexPath, 'utf8');

let passedChecks = 0;
let totalChecks = 0;

// Check 1: Services section ID exists in inline CSS
totalChecks++;
if (indexContent.includes('#services {')) {
  console.log('✓ CHECK 1: #services ID styling presente');
  console.log('  ✅ Estilos del contenedor de servicios incluidos');
  passedChecks++;
} else {
  console.log('✗ CHECK 1: #services ID styling FALTA');
  console.log('  ❌ Estilos del contenedor de servicios NO encontrados');
}

// Check 2: Container services class
totalChecks++;
if (indexContent.includes('.container-services {')) {
  console.log('✓ CHECK 2: .container-services styling presente');
  console.log('  ✅ Contenedor de servicios correctamente estilos');
  passedChecks++;
} else {
  console.log('✗ CHECK 2: .container-services styling FALTA');
  console.log('  ❌ Contenedor de servicios sin estilos');
}

// Check 3: Section title styling
totalChecks++;
if (indexContent.includes('.section-title {') && indexContent.includes('.section-title h2 {')) {
  console.log('✓ CHECK 3: .section-title styling presente');
  console.log('  ✅ Estilos del título de sección incluidos');
  passedChecks++;
} else {
  console.log('✗ CHECK 3: .section-title styling FALTA');
  console.log('  ❌ Estilos del título sin incluir');
}

// Check 4: Row grid layout
totalChecks++;
if (indexContent.includes('.row {') && indexContent.includes('grid-template-columns')) {
  console.log('✓ CHECK 4: .row grid layout presente');
  console.log('  ✅ Grid layout CSS para tarjetas incluido');
  passedChecks++;
} else {
  console.log('✗ CHECK 4: .row grid layout FALTA');
  console.log('  ❌ Grid layout sin CSS');
}

// Check 5: Card styling (.col-sm-6)
totalChecks++;
if (indexContent.includes('.col-sm-6 {')) {
  console.log('✓ CHECK 5: .col-sm-6 card styling presente');
  console.log('  ✅ Estilos de tarjetas de soluciones incluidos');
  passedChecks++;
} else {
  console.log('✗ CHECK 5: .col-sm-6 card styling FALTA');
  console.log('  ❌ Estilos de tarjetas NO encontrados');
}

// Check 6: Card hover effects
totalChecks++;
if (indexContent.includes('.col-sm-6:hover {')) {
  console.log('✓ CHECK 6: .col-sm-6:hover effects presente');
  console.log('  ✅ Efectos hover de tarjetas incluidos');
  passedChecks++;
} else {
  console.log('✗ CHECK 6: .col-sm-6:hover effects FALTA');
  console.log('  ❌ Efectos hover sin CSS');
}

// Check 7: Service description styling
totalChecks++;
if (indexContent.includes('.service-desc {') && indexContent.includes('.service-desc h3 {')) {
  console.log('✓ CHECK 7: .service-desc styling presente');
  console.log('  ✅ Estilos de descripción de servicios incluidos');
  passedChecks++;
} else {
  console.log('✗ CHECK 7: .service-desc styling FALTA');
  console.log('  ❌ Estilos de descripción sin incluir');
}

// Check 8: Icon styling
totalChecks++;
if (indexContent.includes('.col-sm-6 i {')) {
  console.log('✓ CHECK 8: .col-sm-6 i icon styling presente');
  console.log('  ✅ Estilos de iconos de tarjetas incluidos');
  passedChecks++;
} else {
  console.log('✗ CHECK 8: .col-sm-6 i icon styling FALTA');
  console.log('  ❌ Estilos de iconos sin incluir');
}

// Check 9: Animation keyframes
totalChecks++;
if (indexContent.includes('@keyframes slideInUp {')) {
  console.log('✓ CHECK 9: @keyframes slideInUp animation presente');
  console.log('  ✅ Animaciones de tarjetas incluidas');
  passedChecks++;
} else {
  console.log('✗ CHECK 9: @keyframes slideInUp animation FALTA');
  console.log('  ❌ Animaciones sin definir');
}

// Check 10: Responsive styles for services
totalChecks++;
if (indexContent.includes('#services {') && 
    indexContent.includes('@media (max-width: 768px)') &&
    indexContent.includes('.section-title h2 {') &&
    indexContent.includes('@media (max-width: 480px)')) {
  console.log('✓ CHECK 10: Responsive styles para servicios presente');
  console.log('  ✅ Breakpoints responsivos incluidos');
  passedChecks++;
} else {
  console.log('✗ CHECK 10: Responsive styles FALTA');
  console.log('  ❌ Media queries para servicios sin incluir');
}

// Check 11: Animation delays for staggered effect
totalChecks++;
const animDelays = [
  '.col-sm-6:nth-child(1) { animation-delay:',
  '.col-sm-6:nth-child(2) { animation-delay:',
  '.col-sm-6:nth-child(3) { animation-delay:',
  '.col-sm-6:nth-child(4) { animation-delay:'
];
const hasAllDelays = animDelays.every(delay => indexContent.includes(delay));
if (hasAllDelays) {
  console.log('✓ CHECK 11: Animation stagger delays presente');
  console.log('  ✅ Retrasos de animación para efecto stagger incluidos');
  passedChecks++;
} else {
  console.log('✗ CHECK 11: Animation stagger delays FALTA');
  console.log('  ❌ Delays de animación sin incluir');
}

// Check 12: CSS inline in <head> (not deferred)
totalChecks++;
const styleTagMatch = indexContent.match(/<style>([\s\S]*?)<\/style>/);
if (styleTagMatch && styleTagMatch[1].includes('#services')) {
  console.log('✓ CHECK 12: CSS de servicios está INLINE (no deferido)');
  console.log('  ✅ Estilos inline en <head> evita FOUC');
  passedChecks++;
} else {
  console.log('✗ CHECK 12: CSS de servicios NO inline en <head>');
  console.log('  ❌ Riesgo de FOUC (Flash of Unstyled Content)');
}

// Summary
console.log('\n============================================================');
console.log('RESUMEN DE VALIDACIÓN - SERVICIOS Y TARJETAS');
console.log('============================================================\n');

console.log(`✅ Checks Pasados: ${passedChecks}/${totalChecks} (${Math.round((passedChecks/totalChecks)*100)}%)\n`);

if (passedChecks === totalChecks) {
  console.log('🎉 ¡TODAS LAS VALIDACIONES PASARON!\n');
  console.log('📊 ESTADO DE LAS TARJETAS:');
  console.log('  ✓ Visibilidad: CSS inline previene FOUC');
  console.log('  ✓ Disposición: Grid layout responsive');
  console.log('  ✓ Interacción: Hover effects CSS presentes');
  console.log('  ✓ Animación: Keyframes y delays incluidos');
  console.log('  ✓ Responsive: Media queries presentes\n');
  console.log('🚀 LISTA PARA TESTING Y DEPLOY\n');
} else {
  console.log(`⚠️ ${totalChecks - passedChecks} check(s) fallaron\n`);
  console.log('🔧 ACCIONES REQUERIDAS:');
  console.log('  1. Revisar los checks fallidos arriba');
  console.log('  2. Asegurar que src/styles/critical.css está actualizado');
  console.log('  3. Ejecutar: npm run build');
  console.log('  4. Reintentar validación\n');
}

console.log('============================================================\n');

// Exit with appropriate code
process.exit(passedChecks === totalChecks ? 0 : 1);
