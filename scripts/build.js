#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Démarrage du build optimisé...');

try {
  // Nettoyage
  if (fs.existsSync('dist')) {
    execSync('rm -rf dist');
  }
  
  // Build
  execSync('npm run build', { stdio: 'inherit' });
  
  // Optimisation des images
  console.log('🖼️ Optimisation des images...');
  // Vous pouvez ajouter ici des outils d'optimisation d'images
  
  // Génération du sitemap
  console.log('🗺️ Génération du sitemap...');
  // Logic pour générer le sitemap dynamiquement
  
  // Vérification des fichiers
  const distPath = path.join(__dirname, '../dist');
  if (fs.existsSync(distPath)) {
    console.log('✅ Build terminé avec succès !');
    console.log(`📦 Fichiers générés dans : ${distPath}`);
  } else {
    throw new Error('Erreur lors du build');
  }
  
} catch (error) {
  console.error('❌ Erreur lors du build:', error.message);
  process.exit(1);
}