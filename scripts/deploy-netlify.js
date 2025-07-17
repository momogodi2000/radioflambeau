#!/usr/bin/env node

const { execSync } = require('child_process');

console.log('🚀 Déploiement sur Netlify...');

try {
  // Build
  execSync('npm run build', { stdio: 'inherit' });
  
  // Déploiement
  execSync('netlify deploy --prod --dir=dist', { stdio: 'inherit' });
  
  console.log('✅ Déploiement terminé avec succès !');
  console.log('🌐 Site accessible sur : https://www.radioflambeaubanka.com');
  
} catch (error) {
  console.error('❌ Erreur lors du déploiement:', error.message);
  process.exit(1);
}