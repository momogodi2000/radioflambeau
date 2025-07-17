// src/context/PWAContext.jsx - Enhanced PWA Context with device detection
import React, { createContext, useContext, useState, useEffect } from 'react';

const PWAContext = createContext();

export const usePWA = () => {
  const context = useContext(PWAContext);
  if (!context) {
    throw new Error('usePWA must be used within a PWAProvider');
  }
  return context;
};

export const PWAProvider = ({ children }) => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [canInstall, setCanInstall] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const [cacheSize, setCacheSize] = useState(0);
  const [deviceInfo, setDeviceInfo] = useState(null);

  // Enhanced device detection
  useEffect(() => {
    const detectDevice = () => {
      const ua = navigator.userAgent;
      const platform = navigator.platform;
      
      const info = {
        // Device type detection
        isMobile: /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua),
        isTablet: /iPad|Android(?!.*Mobile)/i.test(ua),
        isDesktop: !/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua),
        
        // OS detection
        isIOS: /iPad|iPhone|iPod/.test(ua) && !window.MSStream,
        isAndroid: /Android/.test(ua),
        isWindows: /Windows/.test(ua),
        isMacOS: /Macintosh|MacIntel|MacPPC|Mac68K/.test(platform),
        isLinux: /Linux/.test(platform),
        
        // Browser detection
        isChrome: /Chrome/.test(ua) && /Google Inc/.test(navigator.vendor),
        isSafari: /Safari/.test(ua) && /Apple Computer/.test(navigator.vendor),
        isFirefox: /Firefox/.test(ua),
        isEdge: /Edg/.test(ua),
        
        // PWA detection
        isPWA: window.navigator.standalone === true || window.matchMedia('(display-mode: standalone)').matches,
        
        // Device capabilities
        touchSupport: 'ontouchstart' in window || navigator.maxTouchPoints > 0,
        orientation: screen.orientation?.type || 'unknown',
        
        // Screen info
        screenWidth: screen.width,
        screenHeight: screen.height,
        pixelRatio: window.devicePixelRatio || 1,
      };
      
      setDeviceInfo(info);
      return info;
    };
    
    const info = detectDevice();
    
    // Set up orientation change listener
    const handleOrientationChange = () => {
      setDeviceInfo(prev => ({
        ...prev,
        orientation: screen.orientation?.type || 'unknown'
      }));
    };
    
    window.addEventListener('orientationchange', handleOrientationChange);
    screen.orientation?.addEventListener('change', handleOrientationChange);
    
    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
      screen.orientation?.removeEventListener('change', handleOrientationChange);
    };
  }, []);

  // Check if app is already installed
  useEffect(() => {
    const checkInstallation = () => {
      if (!deviceInfo) return;
      
      // Different checks based on platform
      if (deviceInfo.isIOS) {
        // iOS standalone mode
        const isStandalone = window.navigator.standalone === true;
        setIsInstalled(isStandalone);
      } else {
        // Android/Desktop PWA mode
        const isDisplayModeStandalone = window.matchMedia('(display-mode: standalone)').matches;
        const isInstalledPWA = isDisplayModeStandalone || 
                              document.referrer.includes('android-app://') ||
                              localStorage.getItem('pwa-installed') === 'true';
        
        setIsInstalled(isInstalledPWA);
      }
    };

    checkInstallation();
  }, [deviceInfo]);

  // Listen for beforeinstallprompt event
  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      console.log('[PWA] beforeinstallprompt event fired');
      e.preventDefault();
      setDeferredPrompt(e);
      setCanInstall(true);
    };

    const handleAppInstalled = () => {
      console.log('[PWA] App installed successfully');
      setIsInstalled(true);
      setCanInstall(false);
      setDeferredPrompt(null);
      localStorage.setItem('pwa-installed', 'true');
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  // Monitor online/offline status
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      console.log('[PWA] App is online');
    };
    
    const handleOffline = () => {
      setIsOnline(false);
      console.log('[PWA] App is offline');
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Service Worker management
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.addEventListener('message', (event) => {
        if (event.data && event.data.type === 'UPDATE_AVAILABLE') {
          setUpdateAvailable(true);
        }
      });

      // Get cache size
      getCacheSize();
    }
  }, []);

  // Install PWA with platform-specific handling
  const installPWA = async () => {
    // For iOS Safari, show manual installation instructions
    if (deviceInfo?.isIOS && deviceInfo?.isSafari) {
      showIOSInstallInstructions();
      return false;
    }
    
    // For Android Chrome or other browsers that support the install prompt
    if (deferredPrompt) {
      try {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        
        console.log(`[PWA] User choice: ${outcome}`);
        
        if (outcome === 'accepted') {
          setCanInstall(false);
          setDeferredPrompt(null);
          localStorage.setItem('pwa-installed', 'true');
          return true;
        }
        
        return false;
      } catch (error) {
        console.error('[PWA] Install error:', error);
        return false;
      }
    } else {
      console.log('[PWA] No deferred prompt available');
      
      // For desktop browsers without install prompt
      if (deviceInfo?.isDesktop) {
        showDesktopInstallInstructions();
      }
      
      return false;
    }
  };
  
  // Show iOS installation instructions
  const showIOSInstallInstructions = () => {
    const instructions = `
      Pour installer cette app sur votre iPhone/iPad:
      
      1. Appuyez sur le bouton de partage ${deviceInfo?.isSafari ? '📤' : '⋯'} en bas de l'écran
      2. Faites défiler et sélectionnez "Sur l'écran d'accueil"
      3. Appuyez sur "Ajouter" en haut à droite
      
      Vous pourrez ensuite accéder à l'application depuis votre écran d'accueil.
    `;
    alert(instructions);
  };
  
  // Show desktop installation instructions
  const showDesktopInstallInstructions = () => {
    let instructions = 'Pour installer cette application:';
    
    if (deviceInfo?.isChrome) {
      instructions += '\n\n1. Cliquez sur l\'icône ⋮ en haut à droite\n2. Sélectionnez "Installer Radio Flambeau-Banka"\n3. Suivez les instructions à l\'écran';
    } else if (deviceInfo?.isEdge) {
      instructions += '\n\n1. Cliquez sur l\'icône ⋯ en haut à droite\n2. Sélectionnez "Applications" puis "Installer ce site comme une application"\n3. Suivez les instructions à l\'écran';
    } else if (deviceInfo?.isFirefox) {
      instructions += '\n\nDans Firefox, vous pouvez ajouter notre site à votre écran d\'accueil, mais l\'installation complète en tant qu\'application n\'est pas encore supportée.';
    } else {
      instructions += '\n\nRecherchez une option "Installer" ou "Ajouter à l\'écran d\'accueil" dans le menu de votre navigateur.';
    }
    
    alert(instructions);
  };

  // Get cache size
  const getCacheSize = async () => {
    if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
      try {
        const messageChannel = new MessageChannel();
        
        navigator.serviceWorker.controller.postMessage(
          { type: 'GET_CACHE_SIZE' },
          [messageChannel.port2]
        );

        messageChannel.port1.onmessage = (event) => {
          if (event.data.cacheSize) {
            setCacheSize(event.data.cacheSize);
          }
        };
      } catch (error) {
        console.error('[PWA] Error getting cache size:', error);
      }
    }
  };

  // Clear cache
  const clearCache = async () => {
    if ('caches' in window) {
      try {
        const cacheNames = await caches.keys();
        await Promise.all(
          cacheNames.map(cacheName => caches.delete(cacheName))
        );
        setCacheSize(0);
        console.log('[PWA] Cache cleared successfully');
        return true;
      } catch (error) {
        console.error('[PWA] Error clearing cache:', error);
        return false;
      }
    }
    return false;
  };

  // Cache specific URLs
  const cacheUrls = async (urls) => {
    if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
      try {
        const messageChannel = new MessageChannel();
        
        navigator.serviceWorker.controller.postMessage(
          { type: 'CACHE_URLS', urls },
          [messageChannel.port2]
        );

        return new Promise((resolve) => {
          messageChannel.port1.onmessage = (event) => {
            resolve(event.data.success);
          };
        });
      } catch (error) {
        console.error('[PWA] Error caching URLs:', error);
        return false;
      }
    }
    return false;
  };

  // Request notification permission
  const requestNotificationPermission = async () => {
    if ('Notification' in window) {
      try {
        const permission = await Notification.requestPermission();
        console.log(`[PWA] Notification permission: ${permission}`);
        return permission === 'granted';
      } catch (error) {
        console.error('[PWA] Error requesting notification permission:', error);
        return false;
      }
    }
    return false;
  };

  // Subscribe to push notifications
  const subscribeToPush = async () => {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      try {
        const registration = await navigator.serviceWorker.ready;
        
        const subscription = await registration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: import.meta.env.VITE_VAPID_PUBLIC_KEY
        });

        console.log('[PWA] Push subscription successful:', subscription);
        
        // Send subscription to server (you'd implement this)
        // await sendSubscriptionToServer(subscription);
        
        return subscription;
      } catch (error) {
        console.error('[PWA] Push subscription failed:', error);
        return null;
      }
    }
    return null;
  };

  // Format cache size for display
  const formatCacheSize = (bytes) => {
    if (bytes === 0) return '0 B';
    
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  // Check if device supports PWA features
  const getDeviceCapabilities = () => {
    return {
      serviceWorker: 'serviceWorker' in navigator,
      pushNotifications: 'PushManager' in window,
      backgroundSync: 'serviceWorker' in navigator && 'sync' in window.ServiceWorkerRegistration.prototype,
      webShare: 'share' in navigator,
      fullscreen: 'requestFullscreen' in document.documentElement,
      camera: 'mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices,
      geolocation: 'geolocation' in navigator,
      storage: 'storage' in navigator && 'estimate' in navigator.storage
    };
  };

  // Share content using Web Share API
  const shareContent = async (data) => {
    if ('share' in navigator) {
      try {
        await navigator.share(data);
        return true;
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.error('[PWA] Share failed:', error);
        }
        return false;
      }
    }
    return false;
  };

  // Update service worker
  const updateServiceWorker = () => {
    if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage({ type: 'SKIP_WAITING' });
      window.location.reload();
    }
  };

  // Check if installation is supported
  const isInstallSupported = () => {
    if (!deviceInfo) return false;
    
    // Chrome on Android
    if (deviceInfo.isAndroid && deviceInfo.isChrome) return true;
    
    // Chrome/Edge on Desktop
    if (deviceInfo.isDesktop && (deviceInfo.isChrome || deviceInfo.isEdge)) return true;
    
    // Safari on iOS (Add to Home Screen)
    if (deviceInfo.isIOS && deviceInfo.isSafari) return true;
    
    return false;
  };

  const value = {
    // State
    canInstall,
    isInstalled,
    isOnline,
    updateAvailable,
    cacheSize: formatCacheSize(cacheSize),
    rawCacheSize: cacheSize,
    deviceInfo,
    
    // Functions
    installPWA,
    clearCache,
    cacheUrls,
    requestNotificationPermission,
    subscribeToPush,
    shareContent,
    updateServiceWorker,
    getCacheSize,
    getDeviceCapabilities,
    isInstallSupported,
    showIOSInstallInstructions,
    showDesktopInstallInstructions,
    
    // Utilities
    formatCacheSize
  };

  return (
    <PWAContext.Provider value={value}>
      {children}
    </PWAContext.Provider>
  );
};