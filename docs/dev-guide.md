# Guide Développeur - Radio Flambeau Banka

Ce guide est destiné aux développeurs qui souhaitent contribuer au projet Radio Flambeau Banka ou comprendre sa structure technique.

## Table des matières

1. [Architecture du projet](#architecture-du-projet)
2. [Configuration de l'environnement](#configuration-de-lenvironnement)
3. [Structure des composants](#structure-des-composants)
4. [Gestion d'état](#gestion-détat)
5. [Routage](#routage)
6. [Styles et thèmes](#styles-et-thèmes)
7. [Hooks personnalisés](#hooks-personnalisés)
8. [Services et API](#services-et-api)
9. [Tests](#tests)
10. [Déploiement](#déploiement)
11. [Bonnes pratiques](#bonnes-pratiques)

## Architecture du projet

Le projet Radio Flambeau Banka est construit avec React et Vite, utilisant une architecture modulaire basée sur les composants. Voici les principales parties de l'application :

```
radio-flambeau-banka/
├── docs/                  # Documentation du projet
├── public/                # Fichiers statiques
├── src/                   # Code source
│   ├── components/        # Composants React réutilisables
│   ├── context/           # Contextes React pour la gestion d'état
│   ├── hooks/             # Hooks personnalisés
│   ├── pages/             # Pages de l'application
│   ├── services/          # Services et API
│   ├── styles/            # Styles CSS
│   └── utils/             # Utilitaires
└── scripts/               # Scripts de déploiement et build
```

## Configuration de l'environnement

### Prérequis

- Node.js (version 18 ou supérieure)
- npm (version 9 ou supérieure)

### Installation

1. Clonez le dépôt
```bash
git clone https://github.com/votre-nom/radio-flambeau-banka.git
cd radio-flambeau-banka
```

2. Installez les dépendances
```bash
npm install --legacy-peer-deps
```

3. Créez un fichier `.env.local` à la racine du projet avec les variables d'environnement nécessaires
```
VITE_API_URL=https://api.example.com
VITE_STREAM_URL=https://stream.example.com/radio
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

4. Lancez le serveur de développement
```bash
npm run dev
```

## Structure des composants

Les composants sont organisés de manière hiérarchique :

### Components/
- **AudioPlayer/** - Lecteur audio et contrôles de lecture
- **Common/** - Composants réutilisables (boutons, formulaires, etc.)
- **Footer/** - Pied de page et navigation secondaire
- **Header/** - En-tête, navigation principale et menu mobile
- **Sections/** - Sections principales des pages (Hero, About, etc.)
- **UI/** - Éléments d'interface utilisateur de base

### Pages/
Chaque page correspond à une route dans l'application :
- **Home.jsx** - Page d'accueil
- **Programs.jsx** - Grille des programmes
- **Team.jsx** - Présentation de l'équipe
- **News.jsx** - Actualités
- **About.jsx** - À propos de la radio
- **Contact.jsx** - Page de contact

## Gestion d'état

L'application utilise plusieurs mécanismes pour la gestion d'état :

### Context API

- **AppContext** (`src/context/AppContext.jsx`) - État global de l'application
- **AudioContext** (`src/context/AudioContext.jsx`) - Gestion de l'état du lecteur audio

Exemple d'utilisation :

```jsx
import { useContext } from 'react';
import { AudioContext } from '../context/AudioContext';

function MyComponent() {
  const { isPlaying, togglePlay } = useContext(AudioContext);
  
  return (
    <button onClick={togglePlay}>
      {isPlaying ? 'Pause' : 'Play'}
    </button>
  );
}
```

### Hooks d'état locaux

Pour les composants qui nécessitent un état local, utilisez les hooks `useState` et `useReducer`.

## Routage

Le routage est géré avec React Router v7. Les routes sont définies dans `App.jsx` :

```jsx
<Router>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/programs" element={<Programs />} />
    <Route path="/team" element={<Team />} />
    <Route path="/news" element={<News />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
</Router>
```

## Styles et thèmes

### Tailwind CSS

Le projet utilise Tailwind CSS pour les styles. La configuration se trouve dans `tailwind.config.js`.

### Composants stylisés

Les styles spécifiques aux composants sont définis dans `src/styles/components.css`.

### Animations

Les animations sont gérées avec Framer Motion et GSAP :

```jsx
import { motion } from 'framer-motion';

function AnimatedComponent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Contenu animé
    </motion.div>
  );
}
```

## Hooks personnalisés

L'application utilise plusieurs hooks personnalisés pour encapsuler la logique réutilisable :

- **useAudioPlayer** - Gestion du lecteur audio
- **useScrollIndicator** - Indicateur de défilement
- **useAnalytics** - Suivi des événements analytics
- **useStreamingData** - Récupération des données de streaming
- **useGoogleForms** - Intégration avec Google Forms

Exemple d'utilisation :

```jsx
import { useScrollIndicator } from '../hooks/useScrollIndicator';

function ScrollProgress() {
  const { scrollProgress } = useScrollIndicator();
  
  return (
    <div className="progress-bar" style={{ width: `${scrollProgress}%` }} />
  );
}
```

## Services et API

Les services sont définis dans le dossier `src/services/` :

- **api.js** - Fonctions de base pour les appels API
- **streamingAPI.js** - Fonctions pour interagir avec l'API de streaming
- **googleFormsAPI.js** - Intégration avec Google Forms
- **analytics.js** - Fonctions pour le suivi des événements

Exemple d'utilisation :

```jsx
import { fetchStreamInfo } from '../services/streamingAPI';

async function getStreamInfo() {
  try {
    const streamInfo = await fetchStreamInfo();
    console.log(streamInfo);
  } catch (error) {
    console.error('Erreur lors de la récupération des informations de stream:', error);
  }
}
```

## Tests

Les tests sont écrits avec Vitest et React Testing Library. Ils se trouvent dans le dossier `tests/`.

Pour exécuter les tests :

```bash
npm test
```

Exemple de test :

```jsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Header from '../src/components/Header/Header';

describe('Header', () => {
  it('renders the logo', () => {
    render(<Header />);
    const logo = screen.getByAltText('Radio Flambeau Banka');
    expect(logo).toBeInTheDocument();
  });
});
```

## Déploiement

Le projet est configuré pour être déployé sur Netlify. Le fichier `netlify.toml` contient la configuration de déploiement.

Pour déployer manuellement :

```bash
npm run build
npm run deploy
```

## Bonnes pratiques

### Structure des composants

Suivez cette structure pour les nouveaux composants :

```jsx
// Imports
import React from 'react';
import PropTypes from 'prop-types';

// Component
function MyComponent({ prop1, prop2 }) {
  // Hooks
  
  // Handlers
  
  // Render
  return (
    <div>
      {/* JSX */}
    </div>
  );
}

// PropTypes
MyComponent.propTypes = {
  prop1: PropTypes.string.isRequired,
  prop2: PropTypes.number,
};

MyComponent.defaultProps = {
  prop2: 0,
};

export default MyComponent;
```

### Conventions de nommage

- **Composants** : PascalCase (ex: `AudioPlayer.jsx`)
- **Hooks** : camelCase commençant par "use" (ex: `useScrollIndicator.js`)
- **Fonctions utilitaires** : camelCase (ex: `formatDate.js`)
- **Constantes** : SNAKE_CASE (ex: `DEFAULT_VOLUME`)

### Performance

- Utilisez `React.memo()` pour les composants qui se redessinent fréquemment
- Utilisez `useCallback` et `useMemo` pour optimiser les performances
- Évitez les re-rendus inutiles en structurant correctement vos composants

### Accessibilité

- Utilisez des balises sémantiques appropriées
- Assurez-vous que tous les éléments interactifs sont accessibles au clavier
- Ajoutez des attributs ARIA lorsque nécessaire
- Testez avec des lecteurs d'écran
