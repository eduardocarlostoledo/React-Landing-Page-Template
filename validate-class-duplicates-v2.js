#!/usr/bin/env node

/**
 * VALIDACIÓN DE CLASES DUPLICADAS - V2
 * Verifica que no hay conflictos de nombres de clases EN DIFERENTES ARCHIVOS CSS
 * Status: MEJORADO - Solo detecta conflictos reales entre archivos
 */

const fs = require('fs');
const path = require('path');

const cssFiles = [
  'src/styles/critical.css',
  'src/styles/testimonials.css',
  'src/styles/team.css',
  'src/styles/Contact.css',
  'src/styles/Hero.css',
];

console.log('╔════════════════════════════════════════════════════════════════╗');
console.log('║   VALIDACIÓN DE CLASES DUPLICADAS v2 - CSS ANALYZER           ║');
console.log('║   Solo detecta conflictos EN DIFERENTES ARCHIVOS               ║');
console.log('╚════════════════════════════════════════════════════════════════╝\n');

let allClasses = {};
let conflictsAcrossFiles = [];

cssFiles.forEach((file) => {
  const filePath = path.join(__dirname, file);
  
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  ${file} no encontrado`);
    return;
  }

  const content = fs.readFileSync(filePath, 'utf8');
  
  // Regex para capturar clases CSS
  const classRegex = /\.([\w-]+)\s*\{/g;
  let match;
  const fileClasses = new Set();

  while ((match = classRegex.exec(content)) !== null) {
    const className = match[1];
    fileClasses.add(className);

    if (allClasses[className]) {
      // Verificar si es en archivo diferente
      if (!allClasses[className].includes(file)) {
        allClasses[className].push(file);
        if (!conflictsAcrossFiles.includes(className)) {
          conflictsAcrossFiles.push(className);
        }
      }
    } else {
      allClasses[className] = [file];
    }
  }

  console.log(`✓ ${file}: ${fileClasses.size} clases identificadas`);
});

console.log('\n' + '═'.repeat(64) + '\n');

// Resultados
let issueCount = 0;

if (conflictsAcrossFiles.length > 0) {
  console.log('⚠️  CONFLICTOS EN DIFERENTES ARCHIVOS:\n');
  conflictsAcrossFiles.forEach((className) => {
    const files = allClasses[className];
    console.log(`❌ "${className}" definida en ${files.length} archivos:`);
    files.forEach((file) => console.log(`   - ${file}`));
    console.log('');
    issueCount++;
  });
} else {
  console.log('✅ NO HAY CLASES DUPLICADAS EN DIFERENTES ARCHIVOS\n');
}

// Verificaciones específicas
console.log('═'.repeat(64) + '\n');
console.log('VERIFICACIONES ESPECÍFICAS:\n');

let checks = 0;

// CHECK 1: Verificar que .container-testimonials existe y es única
const testimonialsCss = fs.readFileSync(path.join(__dirname, 'src/styles/testimonials.css'), 'utf8');
const hasContainerTestimonials = /\.container-testimonials\s*\{/m.test(testimonialsCss);

checks++;
if (hasContainerTestimonials) {
  console.log('✅ CHECK 1: .container-testimonials definida en testimonials.css');
} else {
  console.log('❌ CHECK 1: .container-testimonials NO encontrada');
  issueCount++;
}

// CHECK 2: Verificar que .container-team existe y es única
const teamCss = fs.readFileSync(path.join(__dirname, 'src/styles/team.css'), 'utf8');
const hasContainerTeam = /\.container-team\s*\{/m.test(teamCss);

checks++;
if (hasContainerTeam) {
  console.log('✅ CHECK 2: .container-team definida en team.css');
} else {
  console.log('❌ CHECK 2: .container-team NO encontrada');
  issueCount++;
}

// CHECK 3: Verificar que .container-header existe en critical.css
const criticalCss = fs.readFileSync(path.join(__dirname, 'src/styles/critical.css'), 'utf8');
const hasContainerHeader = /\.container-header\s*\{[\s\S]*?display:\s*flex/m.test(criticalCss);

checks++;
if (hasContainerHeader) {
  console.log('✅ CHECK 3: .container-header definida en critical.css');
} else {
  console.log('❌ CHECK 3: .container-header NO encontrada');
  issueCount++;
}

// CHECK 4: Verificar que no hay .container genérico problemático
const genericContainer = /\.container\s*\{[\s\S]*?display:\s*flex[\s\S]*?justify-content:\s*center/m.test(criticalCss);

checks++;
if (!genericContainer) {
  console.log('✅ CHECK 4: .container genérico NO tiene conflictos en critical.css');
} else {
  console.log('❌ CHECK 4: .container genérico aún tiene conflictos');
  issueCount++;
}

// CHECK 5: Verificar que testimonialsCSS y teamCss no usan .container
const testimonialHasContainer = /\.container\s*\{/m.test(testimonialsCss);
const teamHasContainer = /\.container\s*\{/m.test(teamCss);

checks++;
if (!testimonialHasContainer && !teamHasContainer) {
  console.log('✅ CHECK 5: testimonials.css y team.css NO usan .container genérico');
} else {
  console.log('❌ CHECK 5: testimonials.css o team.css aún usan .container');
  issueCount++;
}

console.log('\n' + '═'.repeat(64) + '\n');

// Resumen final
const passedChecks = checks - issueCount;

console.log(`📊 RESULTADO: ${passedChecks}/${checks} CHECKS PASSED\n`);

if (issueCount === 0 && conflictsAcrossFiles.length === 0) {
  console.log('╔════════════════════════════════════════════════════════════════╗');
  console.log('║        ✅ VALIDACIÓN EXITOSA - SIN CONFLICTOS                  ║');
  console.log('║     PROBLEMA DE DUPLICACIÓN COMPLETAMENTE RESUELTO            ║');
  console.log('╚════════════════════════════════════════════════════════════════╝\n');
  process.exit(0);
} else {
  console.log('╔════════════════════════════════════════════════════════════════╗');
  console.log(`║        ⚠️  PROBLEMAS DETECTADOS                                ║`);
  console.log('║     Revisar y resolver duplicaciones listadas arriba           ║');
  console.log('╚════════════════════════════════════════════════════════════════╝\n');
  process.exit(1);
}
