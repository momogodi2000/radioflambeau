
// src/hooks/useAnalytics.js
import { useEffect } from 'react';

const useAnalytics = () => {
  const trackPageView = (page) => {
    if (typeof gtag !== 'undefined') {
      gtag('config', import.meta.env.VITE_GA_MEASUREMENT_ID, {
        page_path: page,
      });
    }
  };
  
  const trackEvent = (action, category, label, value) => {
    if (typeof gtag !== 'undefined') {
      gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  };
  
  const trackStreamPlay = (streamUrl) => {
    trackEvent('play_stream', 'Audio', streamUrl);
  };
  
  const trackFormSubmit = (formType) => {
    trackEvent('form_submit', 'Contact', formType);
  };
  
  const trackSocialShare = (platform) => {
    trackEvent('social_share', 'Engagement', platform);
  };
  
  return {
    trackPageView,
    trackEvent,
    trackStreamPlay,
    trackFormSubmit,
    trackSocialShare
  };
};

export { useAnalytics };
export default useAnalytics;
