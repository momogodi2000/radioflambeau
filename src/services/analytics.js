
// src/services/analytics.js
import { SITE_CONFIG } from '../utils/config.js';

// Google Analytics Measurement ID - Replace with your actual ID
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

// Initialize Google Analytics
export const initializeAnalytics = () => {
  if (typeof gtag === 'undefined') {
    console.warn('Google Analytics not loaded');
    return false;
  }
  
  // Configure GA4 with custom parameters
  gtag('config', GA_MEASUREMENT_ID, {
    page_title: 'Radio Flambeau-Banka',
    page_location: SITE_CONFIG.url,
    custom_map: {
      'custom_parameter_1': 'radio_station',
      'custom_parameter_2': 'banka_cameroun',
      'custom_parameter_3': 'community_radio'
    },
    // Enhanced ecommerce tracking
    send_page_view: true,
    anonymize_ip: true,
    cookie_flags: 'SameSite=None;Secure'
  });
  
  return true;
};

// Track page views
export const trackPageView = (pageTitle, pagePath, customParams = {}) => {
  if (typeof gtag === 'undefined') return;
  
  gtag('config', GA_MEASUREMENT_ID, {
    page_title: pageTitle,
    page_location: `${SITE_CONFIG.url}${pagePath}`,
    page_path: pagePath,
    ...customParams
  });
  
  console.log(`📊 Page view tracked: ${pageTitle} (${pagePath})`);
};

// Track custom events
export const trackEvent = (action, category, label, value, customParams = {}) => {
  if (typeof gtag === 'undefined') return;
  
  gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
    custom_parameter_1: 'radio_station',
    custom_parameter_2: 'banka_cameroun',
    ...customParams
  });
  
  console.log(`📊 Event tracked: ${action} (${category}/${label})`);
};

// Track user engagement events
export const trackUserEngagement = {
  // Audio player interactions
  audioPlay: (trackName, duration) => {
    trackEvent('play', 'audio', trackName, duration);
  },
  
  audioPause: (trackName, position) => {
    trackEvent('pause', 'audio', trackName, position);
  },
  
  audioComplete: (trackName, duration) => {
    trackEvent('complete', 'audio', trackName, duration);
  },
  
  // Navigation events
  navigationClick: (linkText, destination) => {
    trackEvent('click', 'navigation', linkText, 1, {
      destination: destination
    });
  },
  
  // Contact interactions
  contactClick: (method) => {
    trackEvent('click', 'contact', method, 1);
  },
  
  // Social media interactions
  socialShare: (platform, content) => {
    trackEvent('share', 'social', platform, 1, {
      content_type: content
    });
  },
  
  // Form interactions
  formStart: (formName) => {
    trackEvent('begin_checkout', 'form', formName, 1);
  },
  
  formComplete: (formName) => {
    trackEvent('purchase', 'form', formName, 1);
  },
  
  // Button clicks
  buttonClick: (buttonText, location) => {
    trackEvent('click', 'button', buttonText, 1, {
      button_location: location
    });
  },
  
  // Scroll depth
  scrollDepth: (percentage) => {
    trackEvent('scroll', 'engagement', `scroll_${percentage}%`, percentage);
  },
  
  // Time on page
  timeOnPage: (seconds) => {
    trackEvent('timing_complete', 'engagement', 'page_time', seconds);
  }
};

// Track performance metrics
export const trackPerformance = {
  // Page load time
  pageLoadTime: (loadTime) => {
    if (typeof gtag === 'undefined') return;
    
    gtag('event', 'timing_complete', {
      name: 'load',
      value: loadTime,
      event_category: 'performance'
    });
  },
  
  // First contentful paint
  firstContentfulPaint: (fcp) => {
    if (typeof gtag === 'undefined') return;
    
    gtag('event', 'timing_complete', {
      name: 'first_contentful_paint',
      value: fcp,
      event_category: 'performance'
    });
  },
  
  // Largest contentful paint
  largestContentfulPaint: (lcp) => {
    if (typeof gtag === 'undefined') return;
    
    gtag('event', 'timing_complete', {
      name: 'largest_contentful_paint',
      value: lcp,
      event_category: 'performance'
    });
  }
};

// Track user demographics and interests
export const trackUserProfile = {
  // Language preference
  setLanguage: (language) => {
    trackEvent('set', 'user_property', 'language', 1, {
      language: language
    });
  },
  
  // Device type
  setDeviceType: (deviceType) => {
    trackEvent('set', 'user_property', 'device_type', 1, {
      device_type: deviceType
    });
  },
  
  // User location (country level)
  setLocation: (country) => {
    trackEvent('set', 'user_property', 'location', 1, {
      country: country
    });
  }
};

// Track business-specific events
export const trackBusinessEvents = {
  // Radio station specific events
  streamStart: (streamType) => {
    trackEvent('stream_start', 'radio', streamType, 1);
  },
  
  streamEnd: (streamType, duration) => {
    trackEvent('stream_end', 'radio', streamType, duration);
  },
  
  // Program interactions
  programView: (programName) => {
    trackEvent('view', 'program', programName, 1);
  },
  
  programClick: (programName) => {
    trackEvent('click', 'program', programName, 1);
  },
  
  // News interactions
  newsView: (newsTitle) => {
    trackEvent('view', 'news', newsTitle, 1);
  },
  
  newsShare: (newsTitle, platform) => {
    trackEvent('share', 'news', `${newsTitle}_${platform}`, 1);
  },
  
  // Team member interactions
  teamMemberView: (memberName) => {
    trackEvent('view', 'team', memberName, 1);
  },
  
  // Partner interactions
  partnerClick: (partnerName) => {
    trackEvent('click', 'partner', partnerName, 1);
  }
};

// Track conversion goals
export const trackConversions = {
  // Newsletter signup
  newsletterSignup: (email) => {
    trackEvent('sign_up', 'conversion', 'newsletter', 1, {
      method: 'email',
      email_domain: email.split('@')[1]
    });
  },
  
  // Contact form submission
  contactSubmission: (method) => {
    trackEvent('generate_lead', 'conversion', method, 1);
  },
  
  // Social media follow
  socialFollow: (platform) => {
    trackEvent('follow', 'conversion', platform, 1);
  },
  
  // App installation
  appInstall: () => {
    trackEvent('app_install', 'conversion', 'pwa', 1);
  }
};

// Enhanced error tracking
export const trackError = (error, context = {}) => {
  if (typeof gtag === 'undefined') return;
  
  gtag('event', 'exception', {
    description: error.message || error,
    fatal: false,
    error_type: context.type || 'javascript_error',
    error_location: context.location || window.location.pathname,
    ...context
  });
  
  console.error(`📊 Error tracked: ${error.message || error}`, context);
};

// Track user journey
export const trackUserJourney = {
  // Session start
  sessionStart: () => {
    trackEvent('session_start', 'user_journey', 'new_session', 1);
  },
  
  // Page sequence
  pageSequence: (fromPage, toPage) => {
    trackEvent('page_view', 'user_journey', `${fromPage}_to_${toPage}`, 1);
  },
  
  // User return
  userReturn: (daysSinceLastVisit) => {
    trackEvent('user_return', 'user_journey', `return_${daysSinceLastVisit}_days`, daysSinceLastVisit);
  }
};

// Initialize performance monitoring
export const initializePerformanceMonitoring = () => {
  if ('PerformanceObserver' in window) {
    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        switch (entry.entryType) {
          case 'largest-contentful-paint':
            trackPerformance.largestContentfulPaint(entry.startTime);
            break;
          case 'first-input':
            trackEvent('timing_complete', 'performance', 'first_input_delay', entry.processingStart - entry.startTime);
            break;
          case 'layout-shift':
            if (entry.hadRecentInput) break;
            trackEvent('timing_complete', 'performance', 'cumulative_layout_shift', entry.value);
            break;
        }
      }
    });
    
    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
  }
  
  // Track page load time
  window.addEventListener('load', () => {
    const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    trackPerformance.pageLoadTime(loadTime);
  });
};

// Track scroll depth
export const initializeScrollTracking = () => {
  let maxScroll = 0;
  const scrollThresholds = [25, 50, 75, 90];
  const trackedThresholds = new Set();
  
  window.addEventListener('scroll', () => {
    const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
    
    if (scrollPercent > maxScroll) {
      maxScroll = scrollPercent;
      
      // Track scroll depth milestones
      scrollThresholds.forEach(threshold => {
        if (scrollPercent >= threshold && !trackedThresholds.has(threshold)) {
          trackedThresholds.add(threshold);
          trackUserEngagement.scrollDepth(threshold);
        }
      });
    }
  });
};

// Export all tracking functions
export default {
  initializeAnalytics,
  trackPageView,
  trackEvent,
  trackUserEngagement,
  trackPerformance,
  trackUserProfile,
  trackBusinessEvents,
  trackConversions,
  trackError,
  trackUserJourney,
  initializePerformanceMonitoring,
  initializeScrollTracking
};
