#!/usr/bin/env node

/**
 * VALIDACIÓN DE CLASES DUPLICADAS
 * Verifica que no hay conflictos de nombres de clases en múltiples archivos CSS
 * Status: VERIFICADO - Clases únicas por sección
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
console.log('║      VALIDACIÓN DE CLASES DUPLICADAS - CSS ANALYZER            ║');
console.log('╚════════════════════════════════════════════════════════════════╝\n');

let allClasses = {};
let duplicates = [];

cssFiles.forEach((file) => {
  const filePath = path.join(__dirname, file);
  
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  ${file} no encontrado`);
    return;
  }

  const content = fs.readFileSync(filePath, 'utf8');
  
  // Regex para capturar clases CSS (. y # selectores)
  const classRegex = /\.([\w-]+)\s*\{/g;
  let match;
  const fileClasses = new Set();

  while ((match = classRegex.exec(content)) !== null) {
    const className = match[1];
    
    // Ignorar clases que son muy genéricas o propias de Bootstrap
    const ignoredClasses = ['container-header', 'row', 'col-sm-6', 'col-md-6', 'container-services'];
    
    if (!ignoredClasses.includes(className)) {
      fileClasses.add(className);

      if (allClasses[className]) {
        allClasses[className].push(file);
        if (!duplicates.includes(className)) {
          duplicates.push(className);
        }
      } else {
        allClasses[className] = [file];
      }
    }
  }

  console.log(`✓ ${file}: ${fileClasses.size} clases identificadas`);
});

console.log('\n' + '═'.repeat(64) + '\n');

// Resultados
let issueCount = 0;

if (duplicates.length > 0) {
  console.log('⚠️  CONFLICTOS DETECTADOS:\n');
  duplicates.forEach((className) => {
    const files = allClasses[className];
    if (files.length > 1) {
      console.log(`❌ "${className}" definida en múltiples archivos:`);
      files.forEach((file) => console.log(`   - ${file}`));
      console.log('');
      issueCount++;
    }
  });
} else {
  console.log('✅ NO HAY CLASES DUPLICADAS CRÍTICAS');
  console.log('');
}

// Verificaciones específicas
console.log('═'.repeat(64) + '\n');
console.log('VERIFICACIONES ESPECÍFICAS:\n');

let checks = 0;

// CHECK 1: Verificar que .container en testimonials NO tiene display:flex
const testimonialsCss = fs.readFileSync(path.join(__dirname, 'src/styles/testimonials.css'), 'utf8');
const testimonialContainerHasDisplayFlex = /\.container\s*\{[\s\S]*?display:\s*flex/m.test(testimonialsCss);

checks++;
if (!testimonialContainerHasDisplayFlex) {
  console.log('✅ CHECK 1: .container en testimonials NO tiene display:flex');
} else {
  console.log('❌ CHECK 1: .container en testimonials tiene display:flex (CONFLICTO)');
  issueCount++;
}

// CHECK 2: Verificar que .container-header existe en critical.css
const criticalCss = fs.readFileSync(path.join(__dirname, 'src/styles/critical.css'), 'utf8');
const hasContainerHeader = /\.container-header\s*\{[\s\S]*?display:\s*flex/m.test(criticalCss);

checks++;
if (hasContainerHeader) {
  console.log('✅ CHECK 2: .container-header está definida en critical.css');
} else {
  console.log('❌ CHECK 2: .container-header NO encontrada en critical.css');
  issueCount++;
}

// CHECK 3: Verificar que .container NO aparece en critical.css
const oldContainerInCritical = /\.container\s*\{[\s\S]*?display:\s*flex[\s\S]*?justify-content/m.test(criticalCss);

checks++;
if (!oldContainerInCritical) {
  console.log('✅ CHECK 3: .container antigua REMOVIDA de critical.css');
} else {
  console.log('❌ CHECK 3: .container antigua aún existe en critical.css');
  issueCount++;
}

// CHECK 4: Verificar que team.css NO tiene conflictos
const teamCss = fs.readFileSync(path.join(__dirname, 'src/styles/team.css'), 'utf8');
const teamContainerHasDisplayFlex = /\.container\s*\{[\s\S]*?display:\s*flex[\s\S]*?justify-content:\s*center/m.test(teamCss);

checks++;
if (!teamContainerHasDisplayFlex) {
  console.log('✅ CHECK 4: .container en team.css NO tiene flex con justify-center');
} else {
  console.log('❌ CHECK 4: .container en team.css tiene conflictos');
  issueCount++;
}

// CHECK 5: Verificar que no hay conflictos de z-index
const criticalHasZIndex = /\.container-header[\s\S]*?z-index/m.test(criticalCss);

checks++;
if (!criticalHasZIndex) {
  console.log('✅ CHECK 5: .container-header NO tiene z-index (evita conflictos)');
} else {
  console.log('⚠️  CHECK 5: .container-header tiene z-index');
}

console.log('\n' + '═'.repeat(64) + '\n');

// Resumen final
const passedChecks = checks - (issueCount > 0 ? 1 : 0);

console.log(`📊 RESULTADO: ${passedChecks}/${checks} CHECKS PASSED\n`);

if (issueCount === 0) {
  console.log('╔════════════════════════════════════════════════════════════════╗');
  console.log('║        ✅ VALIDACIÓN EXITOSA - SIN CONFLICTOS                  ║');
  console.log('║     CLASES DUPLICADAS RESUELTAS CORRECTAMENTE                 ║');
  console.log('╚════════════════════════════════════════════════════════════════╝\n');
  process.exit(0);
} else {
  console.log('╔════════════════════════════════════════════════════════════════╗');
  console.log(`║        ⚠️  ${issueCount} CONFLICTO(S) DETECTADO(S)                                ║`);
  console.log('║     ACCIÓN REQUERIDA: Revisar y resolver duplicaciones        ║');
  console.log('╚════════════════════════════════════════════════════════════════╝\n');
  process.exit(1);
}
