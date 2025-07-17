
// scripts/setup.js
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const log = (message, color = 'reset') => {
  const colors = {
    green: '\x1b[32m',
    red: '\x1b[31m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    reset: '\x1b[0m'
  };
  console.log(`${colors[color]}${message}${colors.reset}`);
};

const createEnvFile = () => {
  const envTemplate = `# Configuration générale
VITE_APP_TITLE=Radio Flambeau-Banka
VITE_APP_DESCRIPTION=Radio communautaire de l'arrondissement de Banka, Cameroun
VITE_APP_URL=https://www.radioflambeaubanka.com
VITE_APP_VERSION=1.0.0

# URLs de streaming Listen2MyRadio
VITE_STREAM_URL_1=https://radioflambeaubanka.radiostream321.com/stream
VITE_STREAM_URL_2=https://radioflambeaubanka.radio12345.com/stream
VITE_STREAM_URL_3=https://radioflambeaubanka.radiostream123.com/stream

# API Listen2MyRadio
VITE_LISTEN2MYRADIO_API=https://newl2mr.listen2myradio.com/api
VITE_LISTEN2MYRADIO_CONTROL=https://newl2mr.listen2myradio.com/control-panel

# Google Forms (remplacez par vos vrais IDs)
VITE_GOOGLE_FORMS_CONTACT=https://forms.gle/YOUR_CONTACT_FORM_ID
VITE_GOOGLE_FORMS_NEWSLETTER=https://forms.gle/YOUR_NEWSLETTER_FORM_ID

# Google Analytics
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Réseaux sociaux
VITE_FACEBOOK_URL=https://facebook.com/radioflambeaubanka
VITE_TWITTER_URL=https://twitter.com/radioflambeaubanka
VITE_INSTAGRAM_URL=https://instagram.com/radioflambeaubanka
VITE_YOUTUBE_URL=https://youtube.com/radioflambeaubanka
`;

  fs.writeFileSync('.env', envTemplate);
  log('✅ Fichier .env créé avec succès !', 'green');
};

const createGitIgnore = () => {
  const gitignoreContent = `# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Build outputs
build/
dist/
.output/
.vercel/
.netlify/

# Cache
.cache/
.parcel-cache/
.next/
.nuxt/
.vuepress/dist/
.serverless/

# Coverage directory used by tools like istanbul
coverage/
*.lcov

# Dependencies
node_modules/
jspm_packages/

# Optional npm cache directory
.npm

# Optional eslint cache
.eslintcache

# Microbundle cache
.rpt2_cache/
.rts2_cache_cjs/
.rts2_cache_es/
.rts2_cache_umd/

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# dotenv environment variables file
.env
.env.test

# parcel-bundler cache (https://parceljs.org/)
.cache
.parcel-cache

# Next.js build output
.next

# Nuxt.js build / generate output
.nuxt
dist

# Gatsby files
.cache/
public

# Storybook build outputs
.out
.storybook-out

# Temporary folders
tmp/
temp/

# Logs
*.log

# Mac
.DS_Store

# Windows
Thumbs.db
ehthumbs.db
Desktop.ini

# Linux
*~

# JetBrains IDEs
.idea/
*.iml
*.ipr
*.iws

# VS Code
.vscode/

# Lighthouse reports
lighthouse-report.html
`;

  fs.writeFileSync('.gitignore', gitignoreContent);
  log('✅ Fichier .gitignore créé avec succès !', 'green');
};

const setupProject = () => {
  log('🚀 Configuration du projet Radio Flambeau-Banka', 'blue');
  
  try {
    // Créer le fichier .env si il n'existe pas
    if (!fs.existsSync('.env')) {
      createEnvFile();
    } else {
      log('⚠️  Fichier .env existe déjà', 'yellow');
    }
    
    // Créer le fichier .gitignore si il n'existe pas
    if (!fs.existsSync('.gitignore')) {
      createGitIgnore();
    } else {
      log('⚠️  Fichier .gitignore existe déjà', 'yellow');
    }
    
    // Créer les dossiers nécessaires
    const folders = [
      'public/images',
      'public/icons',
      'public/audio',
      'docs',
      'scripts',
      'src/assets',
      'src/assets/images',
      'src/assets/icons'
    ];
    
    folders.forEach(folder => {
      if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder, { recursive: true });
        log(`📁 Dossier créé: ${folder}`, 'green');
      }
    });
    
    // Installer les dépendances
    log('\n📦 Installation des dépendances...', 'blue');
    execSync('npm install', { stdio: 'inherit' });
    
    log('\n🎉 Configuration terminée avec succès !', 'green');
    log('🔧 Prochaines étapes:', 'blue');
    log('  1. Configurer les variables d\'environnement dans .env', 'yellow');
    log('  2. Créer les formulaires Google Forms', 'yellow');
    log('  3. Configurer Listen2MyRadio', 'yellow');
    log('  4. Lancer le serveur de développement: npm run dev', 'yellow');
    
  } catch (error) {
    log(`❌ Erreur lors de la configuration: ${error.message}`, 'red');
    process.exit(1);
  }
};

setupProject();

// tests/setup.js
import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

// Nettoyer après chaque test
afterEach(() => {
  cleanup();
});

// Mock des APIs externes
global.fetch = vi.fn();
global.gtag = vi.fn();
global.navigator = {
  ...global.navigator,
  clipboard: {
    writeText: vi.fn().mockResolvedValue(undefined)
  }
};

// Mock du localStorage
Object.defineProperty(window, 'localStorage', {
  value: {
    getItem: vi.fn(),
    setItem: vi.fn(),
    removeItem: vi.fn(),
    clear: vi.fn()
  }
});

// Mock du sessionStorage
Object.defineProperty(window, 'sessionStorage', {
  value: {
    getItem: vi.fn(),
    setItem: vi.fn(),
    removeItem: vi.fn(),
    clear: vi.fn()
  }
});

// Mock de l'API Audio
global.Audio = class {
  constructor() {
    this.volume = 0.5;
    this.currentTime = 0;
    this.duration = 0;
    this.paused = true;
    this.src = '';
  }
  
  play() {
    this.paused = false;
    return Promise.resolve();
  }
  
  pause() {
    this.paused = true;
  }
  
  load() {}
  
  addEventListener() {}
  removeEventListener() {}
};