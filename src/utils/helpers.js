
// src/utils/helpers.js
export const formatTime = (date) => {
  return date.toLocaleTimeString('fr-FR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
};

export const formatDate = (date) => {
  return date.toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export const getCurrentProgram = () => {
  const now = new Date();
  const currentHour = now.getHours();
  
  const program = PROGRAMS_SCHEDULE.find(p => {
    const [startHour] = p.time.split(':').map(Number);
    const [endHour] = p.time.split(' - ')[1].split(':').map(Number);
    
    if (endHour < startHour) {
      // Programme qui traverse minuit
      return currentHour >= startHour || currentHour < endHour;
    } else {
      return currentHour >= startHour && currentHour < endHour;
    }
  });
  
  return program || PROGRAMS_SCHEDULE[5]; // Programme par défaut
};

export const getNextProgram = () => {
  const now = new Date();
  const currentHour = now.getHours();
  
  const nextProgram = PROGRAMS_SCHEDULE.find(p => {
    const [startHour] = p.time.split(':').map(Number);
    return startHour > currentHour;
  });
  
  return nextProgram || PROGRAMS_SCHEDULE[0]; // Premier programme du lendemain
};

export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};

export const shareOnSocial = (platform, url, text) => {
  const shareUrl = encodeURIComponent(url || window.location.href);
  const shareText = encodeURIComponent(text || 'Écoutez Radio Flambeau-Banka en direct!');
  
  let shareLink = '';
  
  switch (platform) {
    case 'facebook':
      shareLink = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
      break;
    case 'twitter':
      shareLink = `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`;
      break;
    case 'whatsapp':
      shareLink = `https://wa.me/?text=${shareText}%20${shareUrl}`;
      break;
    case 'telegram':
      shareLink = `https://t.me/share/url?url=${shareUrl}&text=${shareText}`;
      break;
    case 'linkedin':
      shareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`;
      break;
    default:
      return;
  }
  
  window.open(shareLink, '_blank', 'width=600,height=400');
};

export const generateStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "RadioStation",
    "name": SITE_CONFIG.name,
    "description": SITE_CONFIG.description,
    "url": SITE_CONFIG.url,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Banka",
      "addressRegion": "Centre",
      "addressCountry": "CM"
    },
    "broadcastAffiliateOf": {
      "@type": "Organization",
      "name": SITE_CONFIG.name
    },
    "sameAs": Object.values(SOCIAL_LINKS)
  };
};

export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const generateSitemap = () => {
  const pages = [
    '/',
    '#apropos',
    '#programmes',
    '#equipe',
    '#actualites',
    '#contact'
  ];
  
  const sitemap = pages.map(page => ({
    url: `${SITE_CONFIG.url}${page}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: page === '/' ? 1.0 : 0.8
  }));
  
  return sitemap;
};
