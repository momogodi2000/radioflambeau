
// src/utils/seo.js
import { SITE_CONFIG } from './config.js';

// Enhanced meta tag generation with better defaults
export const generateMetaTags = (page = {}) => {
  const defaultMeta = {
    title: `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    image: `${SITE_CONFIG.url}/images/og-image.jpg`,
    type: 'website',
    keywords: 'radio, flambeau, banka, cameroun, streaming, musique, actualités, communauté, afrique, radio communautaire, écouter en ligne, 91.5 MHz, haut-nkam'
  };
  
  const meta = { ...defaultMeta, ...page };
  
  return {
    // Primary Meta Tags
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    author: SITE_CONFIG.name,
    robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
    viewport: 'width=device-width, initial-scale=1.0',
    charset: 'utf-8',
    language: 'fr',
    
    // Geographic Meta Tags
    'geo.region': 'CM',
    'geo.placename': 'Banka, Haut-Nkam, Cameroun',
    'geo.position': '5.2833;10.2833',
    'ICBM': '5.2833, 10.2833',
    
    // Open Graph
    'og:title': meta.title,
    'og:description': meta.description,
    'og:url': meta.url,
    'og:image': meta.image,
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:image:alt': `${SITE_CONFIG.name} - ${meta.title}`,
    'og:type': meta.type,
    'og:site_name': SITE_CONFIG.name,
    'og:locale': 'fr_FR',
    
    // Twitter Cards
    'twitter:card': 'summary_large_image',
    'twitter:title': meta.title,
    'twitter:description': meta.description,
    'twitter:image': meta.image,
    'twitter:site': '@radioflambeaubanka',
    'twitter:creator': '@radioflambeaubanka'
  };
};

// Update page title with proper formatting
export const updatePageTitle = (title) => {
  const fullTitle = title ? `${title} - ${SITE_CONFIG.name}` : `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`;
  document.title = fullTitle;
  
  // Also update Open Graph title
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute('content', fullTitle);
  }
  
  // Update Twitter title
  const twitterTitle = document.querySelector('meta[name="twitter:title"]');
  if (twitterTitle) {
    twitterTitle.setAttribute('content', fullTitle);
  }
};

// Update meta description
export const updateMetaDescription = (description) => {
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', description);
  }
  
  // Also update Open Graph description
  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) {
    ogDescription.setAttribute('content', description);
  }
  
  // Update Twitter description
  const twitterDescription = document.querySelector('meta[name="twitter:description"]');
  if (twitterDescription) {
    twitterDescription.setAttribute('content', description);
  }
};

// Add or update canonical URL
export const addCanonicalUrl = (url) => {
  let canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) {
    canonical.setAttribute('href', url);
  } else {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = url;
    document.head.appendChild(canonical);
  }
  
  // Also update Open Graph URL
  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) {
    ogUrl.setAttribute('content', url);
  }
  
  // Update Twitter URL
  const twitterUrl = document.querySelector('meta[name="twitter:url"]');
  if (twitterUrl) {
    twitterUrl.setAttribute('content', url);
  }
};

// Add structured data (JSON-LD)
export const addStructuredData = (data) => {
  // Remove existing structured data with the same type
  const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
  existingScripts.forEach(script => {
    if (script.textContent.includes(`"@type": "${data['@type']}"`)) {
      script.remove();
    }
  });
  
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data, null, 2);
  document.head.appendChild(script);
};

// Generate breadcrumb structured data
export const generateBreadcrumbData = (breadcrumbs) => {
  const itemListElement = breadcrumbs.map((crumb, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: crumb.name,
    item: crumb.url
  }));
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement
  };
};

// Generate event structured data
export const generateEventData = (event) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.title,
    description: event.description,
    startDate: event.date,
    endDate: event.endDate || event.date,
    location: {
      '@type': 'Place',
      name: event.location,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Banka',
        addressRegion: 'Haut-Nkam',
        addressCountry: 'CM'
      }
    },
    organizer: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url
    },
    performer: {
      '@type': 'Organization',
      name: SITE_CONFIG.name
    },
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode'
  };
};

// Generate article structured data
export const generateArticleData = (article) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image,
    author: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.url}/images/logo.png`
      }
    },
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url
    }
  };
};

// Generate FAQ structured data
export const generateFAQData = (faqs) => {
  const mainEntity = faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer
    }
  }));
  
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity
  };
};

// Generate local business structured data
export const generateLocalBusinessData = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'RadioStation',
    name: SITE_CONFIG.name,
    alternateName: 'RFB',
    description: 'Radio communautaire locale diffusant sur 91.5 MHz à Banka, Cameroun',
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/images/logo.png`,
    image: `${SITE_CONFIG.url}/images/og-image.jpg`,
    foundingDate: '2020',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Banka',
      addressRegion: 'Haut-Nkam',
      addressCountry: 'CM',
      postalCode: '00000'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 5.2833,
      longitude: 10.2833
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+237-XXX-XXX-XXX',
      contactType: 'customer service',
      availableLanguage: 'French'
    },
    sameAs: [
      'https://facebook.com/radioflambeaubanka',
      'https://twitter.com/radioflambeaubanka',
      'https://instagram.com/radioflambeaubanka',
      'https://youtube.com/@radioflambeaubanka'
    ],
    broadcastDisplayName: SITE_CONFIG.name,
    broadcastFrequency: '91.5 MHz',
    broadcastTimezone: 'Africa/Douala',
    areaServed: {
      '@type': 'City',
      name: 'Banka',
      addressRegion: 'Haut-Nkam',
      addressCountry: 'CM'
    }
  };
};

// Track page view for analytics
export const trackPageView = (pageTitle, pagePath) => {
  if (typeof gtag !== 'undefined') {
    gtag('config', 'G-XXXXXXXXXX', {
      page_title: pageTitle,
      page_location: `${SITE_CONFIG.url}${pagePath}`,
      custom_map: {
        'custom_parameter_1': 'radio_station',
        'custom_parameter_2': 'banka_cameroun'
      }
    });
  }
};

// Track custom events
export const trackEvent = (action, category, label, value) => {
  if (typeof gtag !== 'undefined') {
    gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    });
  }
};

// Initialize SEO for a page
export const initializePageSEO = (pageData) => {
  const metaTags = generateMetaTags(pageData);
  
  // Update meta tags
  updatePageTitle(pageData.title);
  updateMetaDescription(pageData.description);
  addCanonicalUrl(pageData.url || window.location.href);
  
  // Add structured data based on page type
  if (pageData.type === 'event') {
    addStructuredData(generateEventData(pageData));
  } else if (pageData.type === 'article') {
    addStructuredData(generateArticleData(pageData));
  } else if (pageData.type === 'faq') {
    addStructuredData(generateFAQData(pageData.faqs));
  }
  
  // Add breadcrumbs if provided
  if (pageData.breadcrumbs) {
    addStructuredData(generateBreadcrumbData(pageData.breadcrumbs));
  }
  
  // Track page view
  trackPageView(pageData.title, pageData.path || window.location.pathname);
  
  return metaTags;
};