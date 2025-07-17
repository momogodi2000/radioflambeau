# API Reference - Radio Flambeau Banka

Ce document décrit les API et services utilisés par le site web Radio Flambeau Banka.

## Table des matières

1. [API de streaming](#api-de-streaming)
2. [API Google Forms](#api-google-forms)
3. [Services d'analytics](#services-danalytics)
4. [Utilitaires](#utilitaires)

## API de streaming

L'API de streaming est utilisée pour récupérer les informations sur le flux audio en direct et les métadonnées associées.

### Base URL

```
https://api.radioflambeaubanka.com/v1
```

### Endpoints

#### Obtenir les informations du flux en direct

```
GET /stream/info
```

Retourne les informations sur le flux audio en direct.

**Paramètres de requête**

Aucun

**Réponse**

```json
{
  "status": "online",
  "listeners": 42,
  "current_track": {
    "title": "Titre de la chanson",
    "artist": "Nom de l'artiste",
    "album": "Nom de l'album",
    "cover_url": "https://example.com/cover.jpg",
    "started_at": "2023-07-10T14:30:00Z",
    "ends_at": "2023-07-10T14:34:00Z"
  },
  "current_show": {
    "name": "Nom de l'émission",
    "host": "Nom de l'animateur",
    "started_at": "2023-07-10T14:00:00Z",
    "ends_at": "2023-07-10T16:00:00Z"
  },
  "stream_url": "https://stream.radioflambeaubanka.com/live"
}
```

#### Obtenir la programmation

```
GET /schedule
```

Retourne la programmation des émissions pour la semaine en cours.

**Paramètres de requête**

| Paramètre | Type   | Description                                    | Requis |
|-----------|--------|------------------------------------------------|--------|
| day       | string | Jour de la semaine (monday, tuesday, etc.)     | Non    |
| date      | string | Date spécifique au format YYYY-MM-DD           | Non    |

**Réponse**

```json
{
  "schedule": [
    {
      "id": "show-1",
      "name": "Matinale",
      "description": "Description de l'émission",
      "host": "Jean Dupont",
      "day": "monday",
      "start_time": "06:00",
      "end_time": "09:00",
      "image_url": "https://example.com/shows/matinale.jpg"
    },
    {
      "id": "show-2",
      "name": "Musique du monde",
      "description": "Description de l'émission",
      "host": "Marie Martin",
      "day": "monday",
      "start_time": "09:00",
      "end_time": "12:00",
      "image_url": "https://example.com/shows/musique-monde.jpg"
    }
    // ...
  ]
}
```

#### Obtenir les actualités

```
GET /news
```

Retourne les dernières actualités.

**Paramètres de requête**

| Paramètre | Type   | Description                                    | Requis |
|-----------|--------|------------------------------------------------|--------|
| category  | string | Catégorie d'actualités (local, international)  | Non    |
| limit     | number | Nombre d'articles à retourner (max 50)         | Non    |
| page      | number | Numéro de page pour la pagination              | Non    |

**Réponse**

```json
{
  "news": [
    {
      "id": "news-1",
      "title": "Titre de l'actualité",
      "excerpt": "Résumé de l'actualité",
      "content": "Contenu complet de l'actualité...",
      "author": "Nom de l'auteur",
      "category": "local",
      "published_at": "2023-07-10T10:00:00Z",
      "image_url": "https://example.com/news/image1.jpg",
      "tags": ["culture", "musique"]
    },
    // ...
  ],
  "pagination": {
    "total": 42,
    "page": 1,
    "limit": 10,
    "pages": 5
  }
}
```

## API Google Forms

L'API Google Forms est utilisée pour intégrer les formulaires Google dans le site web.

### Module d'intégration

Le hook `useGoogleForms` dans `src/hooks/useGoogleForms.js` fournit des fonctions pour interagir avec les formulaires Google.

### Fonctions disponibles

#### openForm

Ouvre un formulaire Google dans une nouvelle fenêtre ou iframe.

```javascript
const { openForm } = useGoogleForms();

// Utilisation
openForm('contact'); // Ouvre le formulaire de contact
openForm('dedicaces'); // Ouvre le formulaire de dédicaces
openForm('newsletter'); // Ouvre le formulaire d'abonnement à la newsletter
```

#### submitForm

Soumet un formulaire Google avec des données.

```javascript
const { submitForm } = useGoogleForms();

// Utilisation
submitForm('contact', {
  name: 'John Doe',
  email: 'john@example.com',
  message: 'Bonjour !'
});
```

## Services d'analytics

Les services d'analytics sont utilisés pour suivre l'utilisation du site web.

### Module d'analytics

Le hook `useAnalytics` dans `src/hooks/useAnalytics.js` fournit des fonctions pour suivre les événements.

### Fonctions disponibles

#### trackPageView

Suit une vue de page.

```javascript
const { trackPageView } = useAnalytics();

// Utilisation
trackPageView('/contact');
```

#### trackEvent

Suit un événement personnalisé.

```javascript
const { trackEvent } = useAnalytics();

// Utilisation
trackEvent('click', 'button', 'play', 1);
```

#### trackStreamPlay

Suit la lecture du flux audio.

```javascript
const { trackStreamPlay } = useAnalytics();

// Utilisation
trackStreamPlay('https://stream.radioflambeaubanka.com/live');
```

#### trackFormSubmit

Suit la soumission d'un formulaire.

```javascript
const { trackFormSubmit } = useAnalytics();

// Utilisation
trackFormSubmit('contact');
```

#### trackSocialShare

Suit le partage sur les réseaux sociaux.

```javascript
const { trackSocialShare } = useAnalytics();

// Utilisation
trackSocialShare('facebook');
```

## Utilitaires

### Configuration

Le fichier `src/utils/config.js` contient les constantes de configuration de l'application.

```javascript
// Exemple de contenu
export const API_URL = import.meta.env.VITE_API_URL || 'https://api.radioflambeaubanka.com/v1';
export const STREAM_URL = import.meta.env.VITE_STREAM_URL || 'https://stream.radioflambeaubanka.com/live';
export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
```

### Helpers

Le fichier `src/utils/helpers.js` contient des fonctions utilitaires.

#### formatDate

Formate une date selon le format spécifié.

```javascript
import { formatDate } from '../utils/helpers';

// Utilisation
const formattedDate = formatDate('2023-07-10T14:30:00Z', 'DD/MM/YYYY');
// Résultat : "10/07/2023"
```

#### truncateText

Tronque un texte à la longueur spécifiée.

```javascript
import { truncateText } from '../utils/helpers';

// Utilisation
const truncated = truncateText('Ceci est un texte très long qui doit être tronqué', 20);
// Résultat : "Ceci est un texte..."
```

#### getImageUrl

Construit l'URL d'une image.

```javascript
import { getImageUrl } from '../utils/helpers';

// Utilisation
const imageUrl = getImageUrl('shows/matinale.jpg');
// Résultat : "https://example.com/images/shows/matinale.jpg"
```

### SEO

Le fichier `src/utils/seo.js` contient des fonctions pour la gestion du SEO.

#### generateMetaTags

Génère les balises meta pour une page.

```javascript
import { generateMetaTags } from '../utils/seo';

// Utilisation
const metaTags = generateMetaTags({
  title: 'Contact - Radio Flambeau Banka',
  description: 'Contactez Radio Flambeau Banka',
  image: 'https://example.com/images/contact.jpg',
  url: 'https://radioflambeaubanka.com/contact'
});
```

#### generateStructuredData

Génère les données structurées pour une page.

```javascript
import { generateStructuredData } from '../utils/seo';

// Utilisation
const structuredData = generateStructuredData({
  type: 'Article',
  title: 'Titre de l\'article',
  description: 'Description de l\'article',
  image: 'https://example.com/images/article.jpg',
  url: 'https://radioflambeaubanka.com/news/article-1',
  author: 'Nom de l\'auteur',
  datePublished: '2023-07-10T14:30:00Z'
});
```

### Constants

Le fichier `src/utils/constants.js` contient des constantes utilisées dans l'application.

```javascript
// Exemple de contenu
export const DAYS_OF_WEEK = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
export const DAYS_OF_WEEK_FR = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
export const NEWS_CATEGORIES = ['local', 'international', 'culture', 'sport', 'economie', 'politique'];
export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/radioflambeaubanka',
  twitter: 'https://twitter.com/radioflambeaubanka',
  instagram: 'https://instagram.com/radioflambeaubanka',
  youtube: 'https://youtube.com/radioflambeaubanka'
};
```
