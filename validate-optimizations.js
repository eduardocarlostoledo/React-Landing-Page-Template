#!/usr/bin/env node

/**
 * SCRIPT DE VALIDACIÓN DE PERFORMANCE OPTIMIZATIONS
 * 
 * Verifica que los cambios de optimización se hayan aplicado correctamente
 * Uso: node validate-optimizations.js
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 VALIDANDO OPTIMIZACIONES DE PERFORMANCE...\n');

const checks = [];

// CHECK 1: Widget Elfsight cargado asíncrónamente en index.html
console.log('✓ CHECK 1: Widget Elfsight - Carga Asíncrona');
const indexHtmlPath = path.join(__dirname, 'public', 'index.html');
const indexHtmlContent = fs.readFileSync(indexHtmlPath, 'utf-8');

if (indexHtmlContent.includes('window.addEventListener(\'load\'')) {
  console.log('  ✅ Widget se carga en window.load event');
  checks.push(true);
} else {
  console.log('  ❌ Widget NO está en window.load event');
  checks.push(false);
}

if (indexHtmlContent.includes('setTimeout(function() {')) {
  console.log('  ✅ Widget tiene retraso (setTimeout)');
  checks.push(true);
} else {
  console.log('  ❌ Widget NO tiene retraso configurado');
  checks.push(false);
}

if (!indexHtmlContent.includes('<script defer src="https://static.elfsight.com/platform/platform.js"></script>')) {
  console.log('  ✅ Script sync de Elfsight ha sido removido');
  checks.push(true);
} else {
  console.log('  ⚠️  Script sync de Elfsight TODAVÍA EXISTE');
  checks.push(false);
}

// CHECK 2: EmailJS cargado asíncrónamente
console.log('\n✓ CHECK 2: EmailJS - Carga Asíncrona');
if (indexHtmlContent.includes('window.addEventListener(\'load\', function() {') && 
    indexHtmlContent.includes('emailScript.src = \'https://cdn.jsdelivr.net/npm/@emailjs')) {
  console.log('  ✅ EmailJS se carga en window.load event');
  checks.push(true);
} else {
  console.log('  ❌ EmailJS NO está configurado asíncrónamente');
  checks.push(false);
}

// CHECK 3: No carga duplicate en testimonials.jsx
console.log('\n✓ CHECK 3: Testimonials Component - Sin Carga Duplicada');
const testimonialsPath = path.join(__dirname, 'src', 'components', 'testimonials.jsx');
const testimonialsContent = fs.readFileSync(testimonialsPath, 'utf-8');

if (!testimonialsContent.includes('script.src = "https://static.elfsight.com/platform/platform.js"')) {
  console.log('  ✅ Carga de Elfsight NO está en testimonials.jsx');
  checks.push(true);
} else {
  console.log('  ❌ Testimonials TODAVÍA carga Elfsight duplicado');
  checks.push(false);
}

if (testimonialsContent.includes('window.elfWidgetPlatform')) {
  console.log('  ✅ Testimonials usa plataforma global (window.elfWidgetPlatform)');
  checks.push(true);
} else {
  console.log('  ❌ Testimonials NO usa plataforma global');
  checks.push(false);
}

// CHECK 4: LazyElfsightWidget existe
console.log('\n✓ CHECK 4: LazyElfsightWidget Component');
const lazyWidgetPath = path.join(__dirname, 'src', 'components', 'LazyElfsightWidget.jsx');

if (fs.existsSync(lazyWidgetPath)) {
  console.log('  ✅ Componente LazyElfsightWidget existe');
  checks.push(true);
  
  const lazyContent = fs.readFileSync(lazyWidgetPath, 'utf-8');
  if (lazyContent.includes('IntersectionObserver')) {
    console.log('  ✅ LazyElfsightWidget usa IntersectionObserver');
    checks.push(true);
  } else {
    console.log('  ❌ LazyElfsightWidget NO usa IntersectionObserver');
    checks.push(false);
  }
} else {
  console.log('  ❌ Componente LazyElfsightWidget NO existe');
  checks.push(false);
}

// CHECK 5: Google Analytics consolidado
console.log('\n✓ CHECK 5: Google Analytics - Consolidación');
const analyticsScriptCount = (indexHtmlContent.match(/gtag\('config'/g) || []).length;

if (analyticsScriptCount >= 2) {
  console.log(`  ✅ Google Analytics consolidado (${analyticsScriptCount} configs)`);
  checks.push(true);
} else {
  console.log(`  ⚠️  Verificar consolidación de Google Analytics (${analyticsScriptCount} encontrados)`);
  checks.push(false);
}

// RESUMEN
console.log('\n' + '='.repeat(50));
console.log('RESUMEN DE VALIDACIÓN');
console.log('='.repeat(50));

const passedChecks = checks.filter(c => c).length;
const totalChecks = checks.length;
const percentage = Math.round((passedChecks / totalChecks) * 100);

console.log(`\n✅ Checks Pasados: ${passedChecks}/${totalChecks} (${percentage}%)`);

if (percentage === 100) {
  console.log('\n🎉 ¡TODAS LAS OPTIMIZACIONES FUERON APLICADAS CORRECTAMENTE!');
  console.log('\nPróximos pasos:');
  console.log('  1. Ejecutar: npm run build');
  console.log('  2. Probar en: https://pagespeed.web.dev/');
  console.log('  3. Comparar con scores anteriores');
} else {
  console.log(`\n⚠️  ${totalChecks - passedChecks} check(s) fallaron. Revisar arriba.`);
}

console.log('\n' + '='.repeat(50));
