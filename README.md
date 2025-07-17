# Radio Flambeau Banka

![Radio Flambeau Banka Logo](/public/images/logo.png)

## Description

Radio Flambeau Banka est une plateforme web moderne pour une station de radio communautaire basée à Banka, au Cameroun. Ce projet vise à offrir une expérience utilisateur immersive avec streaming audio en direct, informations sur les programmes, actualités locales et internationales, et interaction avec les auditeurs.

## Fonctionnalités

- 🎧 **Streaming audio en direct** - Écoutez la radio en temps réel
- 📱 **Design responsive** - Interface adaptée à tous les appareils
- 📰 **Actualités** - Restez informé des dernières nouvelles
- 📅 **Programmes** - Consultez la grille des programmes
- 👥 **Équipe** - Découvrez notre équipe d'animateurs
- 📞 **Contact** - Formulaire de contact et informations
- 🎵 **Lecteur audio persistant** - Continuez à écouter en naviguant sur le site
- 🌙 **Mode sombre** - Interface adaptée pour une utilisation nocturne

## Technologies utilisées

- **Frontend**: React, Tailwind CSS, Framer Motion
- **Bibliothèques**: React Router, React Player, Lucide Icons, GSAP
- **Outils de développement**: Vite, ESLint, PostCSS
- **Déploiement**: Netlify

## Prérequis

- Node.js (version 18 ou supérieure)
- npm (version 9 ou supérieure)

## Installation

1. Clonez ce dépôt
```bash
git clone https://github.com/votre-nom/radio-flambeau-banka.git
cd radio-flambeau-banka
```

2. Installez les dépendances
```bash
npm install --legacy-peer-deps
```

3. Lancez le serveur de développement
```bash
npm run dev
```

4. Ouvrez votre navigateur à l'adresse [http://localhost:3000](http://localhost:3000)

## Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Compile le projet pour la production
- `npm run preview` - Prévisualise la version de production
- `npm run lint` - Vérifie le code avec ESLint

## Structure du projet

```
radio-flambeau-banka/
radio-flambeau-banka/
├── 📁 .github/
│   └── 📁 workflows/
│       ├── deploy.yml              # CI/CD workflow for automated deployment
│       ├── dependencies.yml        # Automated dependency updates
│       └── performance.yml         # Performance monitoring
│
├── 📁 docs/                        # Documentation
│   ├── user-guide.md              # User guide for the website
│   ├── dev-guide.md               # Developer documentation
│   ├── api-reference.md           # API documentation
│   └── deployment-guide.md        # Deployment instructions
│
├── 📁 public/                      # Static assets
│   ├── 📁 audio/                   # Audio files
│   │   ├── offline-message.mp3    # Offline fallback audio
│   │   └── notification.mp3       # Notification sounds
│   │
│   ├── 📁 icons/                   # PWA icons and favicons
│   │   ├── icon-72x72.png         # Various PWA icon sizes
│   │   ├── icon-96x96.png
│   │   ├── icon-128x128.png
│   │   ├── icon-144x144.png
│   │   ├── icon-152x152.png
│   │   ├── icon-192x192.png
│   │   ├── icon-384x384.png
│   │   ├── icon-512x512.png
│   │   ├── shortcut-play.png       # Shortcut icons
│   │   ├── shortcut-programs.png
│   │   ├── shortcut-gallery.png
│   │   ├── shortcut-contact.png
│   │   └── favicon.ico
│   │
│   ├── 📁 images/                  # Website images
│   │   ├── 📁 gallery/             # Gallery images
│   │   ├── 📁 team/                # Team member photos
│   │   ├── 📁 partners/            # Partner logos and images
│   │   ├── 📁 programs/            # Program images
│   │   ├── 📁 news/                # News article images
│   │   ├── 📁 screenshots/         # PWA screenshots
│   │   ├── logo.png                # Main logo
│   │   ├── hero-bg.jpg             # Hero background
│   │   ├── offline-image.png       # Offline fallback image
│   │   └── notification-image.jpg  # Push notification image
│   │
│   ├── manifest.json               # PWA manifest
│   ├── sw.js                       # Service worker
│   ├── offline.html                # Offline fallback page
│   ├── robots.txt                  # SEO robots file
│   └── sitemap.xml                 # SEO sitemap
│
├── 📁 scripts/                     # Build and utility scripts
│   ├── optimize-build.js           # Build optimization script
│   ├── health-check.js             # System health check
│   ├── generate-icons.js           # PWA icon generation
│   └── deploy-utils.js             # Deployment utilities
│
├── 📁 src/                         # Source code
│   ├── 📁 components/              # React components
│   │   ├── 📁 AudioPlayer/         # Audio streaming components
│   │   │   ├── AudioPlayer.jsx     # Main audio player
│   │   │   ├── AudioControls.jsx   # Playback controls
│   │   │   ├── VolumeControl.jsx   # Volume control
│   │   │   └── StreamStatus.jsx    # Stream status indicator
│   │   │
│   │   ├── 📁 Common/              # Shared components
│   │   │   ├── ErrorBoundary.jsx   # Error boundary component
│   │   │   ├── LoadingSpinner.jsx  # Loading indicators
│   │   │   ├── OfflineIndicator.jsx # Offline status indicator
│   │   │   ├── Modal.jsx           # Modal component
│   │   │   ├── Button.jsx          # Reusable button
│   │   │   ├── Card.jsx            # Card component
│   │   │   └── SEO.jsx             # SEO component
│   │   │
│   │   ├── 📁 Footer/              # Footer components
│   │   │   ├── Footer.jsx          # Main footer
│   │   │   ├── FooterNav.jsx       # Footer navigation
│   │   │   └── SocialLinks.jsx     # Social media links
│   │   │
│   │   ├── 📁 Header/              # Header components
│   │   │   ├── Header.jsx          # Main header with navigation
│   │   │   ├── Navigation.jsx      # Desktop navigation
│   │   │   ├── MobileMenu.jsx      # Mobile menu
│   │   │   └── Logo.jsx            # Logo component
│   │   │
│   │   ├── 📁 PWA/                 # PWA specific components
│   │   │   ├── PWAInstallPrompt.jsx # App install prompt
│   │   │   ├── UpdateAvailable.jsx  # Update notification
│   │   │   └── OfflineStatus.jsx    # Offline status
│   │   │
│   │   └── 📁 Sections/            # Page sections
│   │       ├── Hero.jsx            # Homepage hero section
│   │       ├── About.jsx           # About section
│   │       ├── Programs.jsx        # Programs section
│   │       ├── Team.jsx            # Team section
│   │       ├── News.jsx            # News section
│   │       └── Contact.jsx         # Contact section
│   │
│   ├── 📁 context/                 # React context providers
│   │   ├── AppContext.jsx          # Global app state
│   │   ├── AudioContext.jsx        # Audio player state
│   │   └── PWAContext.jsx          # PWA features state
│   │
│   ├── 📁 hooks/                   # Custom React hooks
│   │   ├── useAudio.js             # Audio player hook
│   │   ├── useOnline.js            # Online status hook
│   │   ├── usePWA.js               # PWA features hook
│   │   ├── useLocalStorage.js      # Local storage hook
│   │   └── useInView.js            # Intersection observer hook
│   │
│   ├── 📁 pages/                   # Page components
│   │   ├── Home.jsx                # Homepage
│   │   ├── About.jsx               # About page
│   │   ├── Programs.jsx            # Programs page
│   │   ├── Team.jsx                # Team page
│   │   ├── News.jsx                # News page
│   │   ├── Contact.jsx             # Contact page (updated)
│   │   ├── Partners.jsx            # Partners page (new)
│   │   ├── Gallery.jsx             # Gallery & Events page (new)
│   │   ├── Offline.jsx             # Offline page (enhanced)
│   │   └── NotFound.jsx            # 404 page
│   │
│   ├── 📁 services/                # API and external services
│   │   ├── audioService.js         # Audio streaming service
│   │   ├── analyticsService.js     # Analytics tracking
│   │   ├── notificationService.js  # Push notifications
│   │   └── cacheService.js         # Cache management
│   │
│   ├── 📁 styles/                  # Styling files
│   │   ├── globals.css             # Global styles
│   │   ├── components.css          # Component-specific styles
│   │   ├── utilities.css           # Utility classes
│   │   └── animations.css          # Custom animations
│   │
│   ├── 📁 utils/                   # Utility functions
│   │   ├── constants.js            # App constants
│   │   ├── helpers.js              # Helper functions
│   │   ├── formatters.js           # Data formatters
│   │   ├── validators.js           # Input validators
│   │   └── analytics.js            # Analytics utilities
│   │
│   ├── App.jsx                     # Main app component (updated)
│   └── main.jsx                    # App entry point
│
├── 📁 reports/                     # Generated reports (auto-created)
│   ├── bundle-analysis.json        # Bundle size analysis
│   ├── performance-analysis.json   # Performance metrics
│   ├── lighthouse-report.html      # Lighthouse audit
│   └── asset-manifest.json         # Asset manifest
│
├── 📄 Configuration Files
├── .env                            # Environment variables (updated)
├── .env.example                    # Environment template
├── .gitignore                      # Git ignore rules
├── eslint.config.js                # ESLint configuration (new)
├── netlify.toml                    # Netlify deployment config (optimized)
├── package.json                    # Dependencies & scripts (optimized)
├── postcss.config.js               # PostCSS configuration (new)
├── tailwind.config.js              # Tailwind CSS config (optimized)
├── vite.config.js                  # Vite configuration (optimized)
├── README.md                       # Project documentation
└── LICENSE                         # MIT license

📊 Project Statistics:
├── Total Files: ~150+
├── Components: 35+
├── Pages: 8
├── Hooks: 5+
├── Contexts: 3
├── Services: 4
├── Utilities: 15+
└── Configuration Files: 10+
```

## Documentation

Pour plus d'informations, consultez les documents dans le dossier `docs/` :

- [Guide utilisateur](docs/user-guide.md)
- [Guide développeur](docs/dev-guide.md)
- [Référence API](docs/api-reference.md)

## Déploiement

Le site est automatiquement déployé sur Netlify à chaque push sur la branche principale.

## Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus d'informations.

## Contact

Pour toute question ou suggestion, n'hésitez pas à nous contacter à contact@radioflambeaubanka.com
