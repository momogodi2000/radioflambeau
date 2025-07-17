
// scripts/deploy.js
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m'
};

const log = (message, color = 'reset') => {
  console.log(`${colors[color]}${message}${colors.reset}`);
};

const runCommand = (command, description) => {
  log(`\n🔄 ${description}...`, 'blue');
  try {
    execSync(command, { stdio: 'inherit' });
    log(`✅ ${description} terminé avec succès !`, 'green');
  } catch (error) {
    log(`❌ Erreur lors de ${description}`, 'red');
    throw error;
  }
};

const deploy = async () => {
  log('🚀 Démarrage du déploiement de Radio Flambeau-Banka', 'blue');
  
  try {
    // Vérifications préliminaires
    log('\n📋 Vérifications préliminaires', 'yellow');
    
    // Vérifier les variables d'environnement
    if (!fs.existsSync('.env')) {
      log('⚠️  Fichier .env manquant', 'yellow');
    }
    
    // Vérifier les dépendances
    runCommand('npm audit', 'Vérification de sécurité');
    
    // Linting et formatage
    runCommand('npm run lint', 'Vérification du code');
    runCommand('npm run format:check', 'Vérification du formatage');
    
    // Tests
    runCommand('npm run test', 'Tests unitaires');
    
    // Build
    runCommand('npm run build', 'Build de production');
    
    // Génération du sitemap
    runCommand('npm run sitemap', 'Génération du sitemap');
    
    // Vérification du build
    const distPath = path.join(process.cwd(), 'dist');
    if (!fs.existsSync(distPath)) {
      throw new Error('Dossier dist non trouvé');
    }
    
    log('\n📊 Statistiques du build', 'blue');
    const stats = fs.statSync(path.join(distPath, 'index.html'));
    log(`📄 Taille du fichier principal: ${(stats.size / 1024).toFixed(2)} KB`, 'green');
    
    // Audit de performance
    log('\n🔍 Audit de performance', 'yellow');
    runCommand('npm run preview &', 'Démarrage du serveur de preview');
    
    // Attendre que le serveur démarre
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    try {
      runCommand('npm run lighthouse', 'Audit Lighthouse');
    } catch (error) {
      log('⚠️  Audit Lighthouse échoué (non bloquant)', 'yellow');
    }
    
    // Déploiement
    log('\n🌐 Déploiement en cours', 'blue');
    
    const platform = process.argv[2] || 'netlify';
    
    switch (platform) {
      case 'netlify':
        runCommand('npm run deploy:netlify', 'Déploiement sur Netlify');
        break;
      case 'vercel':
        runCommand('npm run deploy:vercel', 'Déploiement sur Vercel');
        break;
      case 'github':
        runCommand('npm run deploy:github', 'Déploiement sur GitHub Pages');
        break;
      default:
        log(`❌ Plateforme inconnue: ${platform}`, 'red');
        return;
    }
    
    log('\n🎉 Déploiement terminé avec succès !', 'green');
    log('🌐 Site accessible sur: https://www.radioflambeaubanka.com', 'green');
    log('📊 Rapport Lighthouse: ./lighthouse-report.html', 'blue');
    
  } catch (error) {
    log(`\n❌ Erreur lors du déploiement: ${error.message}`, 'red');
    process.exit(1);
  }
};

deploy();