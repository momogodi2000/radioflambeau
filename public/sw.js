// public/sw.js - Optimized Service Worker for Radio Flambeau-Banka PWA

const CACHE_VERSION = 'v2.0.3';
const CACHE_NAME = `radio-flambeau-banka-${CACHE_VERSION}`;
const OFFLINE_PAGE = '/offline';

// Optimized caching strategy with different cache categories
const STATIC_CACHE = `static-${CACHE_VERSION}`;
const DYNAMIC_CACHE = `dynamic-${CACHE_VERSION}`;
const AUDIO_CACHE = `audio-${CACHE_VERSION}`;
const IMAGE_CACHE = `images-${CACHE_VERSION}`;
const API_CACHE = `api-${CACHE_VERSION}`;

// SPA routes that should serve index.html
const SPA_ROUTES = [
  '/',
  '/about',
  '/contact',
  '/gallery',
  '/news',
  '/offline',
  '/partners',
  '/programs',
  '/team'
];

// Resources to cache immediately on install
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/offline',
  '/manifest.json',
  '/icons/android-chrome-192x192.png',
  '/icons/apple-touch-icon.png',
  '/icons/favicon.ico',
  '/audio/offline-message.mp3',
  '/images/logo.png',
  '/images/hero-bg.jpg'
];

// Route patterns for different caching strategies
const CACHE_STRATEGIES = {
  static: [
    /\.(css|js|woff2?|ttf|eot)$/,
    /\/icons\//,
    /\/fonts\//
  ],
  images: [
    /\.(png|jpg|jpeg|svg|gif|webp|avif)$/,
    /\/images\//
  ],
  audio: [
    /\.(mp3|wav|ogg|m4a|aac)$/,
    /\/audio\//,
    /radiostream/
  ],
  api: [
    /\/api\//,
    /listen2myradio\.com/
  ]
};

// Install Event - Cache essential resources
self.addEventListener('install', (event) => {
  console.log('[SW] Installing service worker...');
  
  event.waitUntil(
    Promise.all([
      // Cache static assets
      caches.open(STATIC_CACHE).then((cache) => {
        console.log('[SW] Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      }),
      
      // Skip waiting to activate immediately
      self.skipWaiting()
    ])
  );
});

// Activate Event - Clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating service worker...');
  
  event.waitUntil(
    Promise.all([
      // Clean up old caches
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && 
                cacheName !== DYNAMIC_CACHE && 
                cacheName !== AUDIO_CACHE && 
                cacheName !== IMAGE_CACHE && 
                cacheName !== API_CACHE) {
              console.log('[SW] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      }),
      
      // Claim clients immediately
      self.clients.claim()
    ])
  );
});

// Fetch Event - Advanced caching with strategies
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }
  
  // Handle SPA routes
  if (isSPARoute(url)) {
    event.respondWith(networkFirstWithOfflineFallback(event.request));
    return;
  }
  
  // Handle different types of requests with appropriate strategies
  if (isStaticAsset(url)) {
    event.respondWith(cacheFirst(event.request, STATIC_CACHE));
  } else if (isImage(url)) {
    event.respondWith(cacheFirst(event.request, IMAGE_CACHE));
  } else if (isAudio(url)) {
    event.respondWith(networkFirst(event.request, AUDIO_CACHE));
  } else if (isAPI(url)) {
    event.respondWith(networkFirst(event.request, API_CACHE));
  } else if (isHTMLPage(event.request)) {
    event.respondWith(networkFirstWithOfflineFallback(event.request));
  } else {
    event.respondWith(networkFirst(event.request, DYNAMIC_CACHE));
  }
});

// Cache First Strategy - For static assets
async function cacheFirst(request, cacheName) {
  try {
    const cache = await caches.open(cacheName);
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      // Update cache in background
      fetch(request).then((response) => {
        if (response.ok) {
          cache.put(request, response.clone());
        }
      }).catch(() => {}); // Ignore network errors
      
      return cachedResponse;
    }
    
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
    
  } catch (error) {
    console.log('[SW] Cache first failed:', error);
    return handleOfflineRequest(request);
  }
}

// Network First Strategy - For dynamic content
async function networkFirst(request, cacheName) {
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
    
  } catch (error) {
    console.log('[SW] Network first - trying cache:', error);
    
    const cache = await caches.open(cacheName);
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    return handleOfflineRequest(request);
  }
}

// Network First with Offline Fallback - For HTML pages and SPA routes
async function networkFirstWithOfflineFallback(request) {
  try {
    // For SPA routes, we want to serve the index.html file
    const requestToFetch = isSPARoute(new URL(request.url)) 
      ? new Request('/index.html') 
      : request;
    
    const networkResponse = await fetch(requestToFetch);
    
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
    
  } catch (error) {
    console.log('[SW] Network failed, trying cache...');
    
    const cache = await caches.open(DYNAMIC_CACHE);
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // If it's an SPA route, try to return the cached index.html
    if (isSPARoute(new URL(request.url))) {
      const indexResponse = await cache.match('/index.html');
      if (indexResponse) {
        return indexResponse;
      }
    }
    
    // Return offline page for navigation requests
    if (request.mode === 'navigate') {
      const offlineResponse = await caches.match(OFFLINE_PAGE);
      if (offlineResponse) {
        return offlineResponse;
      }
      // Fallback to cached index.html if offline page is not available
      return caches.match('/index.html');
    }
    
    return new Response('Offline', { status: 503 });
  }
}

// Handle offline requests with appropriate fallbacks
function handleOfflineRequest(request) {
  const url = new URL(request.url);
  
  if (isImage(url)) {
    return caches.match('/images/offline-image.png') || 
           new Response('Image not available offline', { status: 503 });
  }
  
  if (isAudio(url)) {
    return caches.match(FALLBACK_AUDIO) || 
           new Response('Audio not available offline', { status: 503 });
  }
  
  if (request.mode === 'navigate') {
    return caches.match(OFFLINE_PAGE);
  }
  
  return new Response('Content not available offline', { status: 503 });
}

// Utility functions to categorize requests
function isStaticAsset(url) {
  return CACHE_STRATEGIES.static.some(pattern => pattern.test(url.pathname));
}

function isImage(url) {
  return CACHE_STRATEGIES.images.some(pattern => pattern.test(url.pathname));
}

function isAudio(url) {
  return CACHE_STRATEGIES.audio.some(pattern => 
    pattern.test(url.pathname) || pattern.test(url.hostname)
  );
}

function isAPI(url) {
  return CACHE_STRATEGIES.api.some(pattern => 
    pattern.test(url.pathname) || pattern.test(url.hostname)
  );
}

function isHTMLPage(request) {
  return request.mode === 'navigate' || 
         request.headers.get('Accept').includes('text/html');
}

// Handle SPA routes - check if the request is for a known SPA route
function isSPARoute(url) {
  return SPA_ROUTES.some(route => url.pathname === route);
}

// Background Sync for offline actions
self.addEventListener('sync', (event) => {
  console.log('[SW] Background sync triggered:', event.tag);
  
  if (event.tag === 'contact-form') {
    event.waitUntil(syncContactForms());
  }
  
  if (event.tag === 'analytics') {
    event.waitUntil(syncAnalytics());
  }
});

// Sync contact forms when back online
async function syncContactForms() {
  try {
    const db = await openDB();
    const pendingForms = await getAllPendingForms(db);
    
    for (const form of pendingForms) {
      try {
        await sendContactForm(form.data);
        await deletePendingForm(db, form.id);
        console.log('[SW] Contact form synced successfully');
      } catch (error) {
        console.log('[SW] Failed to sync contact form:', error);
      }
    }
  } catch (error) {
    console.log('[SW] Background sync failed:', error);
  }
}

// Push Notifications
self.addEventListener('push', (event) => {
  console.log('[SW] Push notification received');
  
  const options = {
    body: 'Nouvelle émission en direct !',
    icon: '/icons/android-chrome-192x192.png',
    badge: '/icons/apple-touch-icon.png',
    image: '/images/logo.png',
    tag: 'radio-notification',
    renotify: true,
    requireInteraction: false,
    actions: [
      {
        action: 'listen',
        title: 'Écouter',
        icon: '/icons/android-chrome-192x192.png'
      },
      {
        action: 'dismiss',
        title: 'Ignorer',
        icon: '/icons/android-chrome-192x192.png'
      }
    ],
    data: {
      url: '/?action=play',
      timestamp: Date.now()
    }
  };
  
  if (event.data) {
    try {
      const payload = event.data.json();
      options.body = payload.body || options.body;
      options.data.url = payload.url || options.data.url;
    } catch (error) {
      console.log('[SW] Failed to parse push payload:', error);
    }
  }
  
  event.waitUntil(
    self.registration.showNotification('Radio Flambeau-Banka', options)
  );
});

// Notification Click Handler
self.addEventListener('notificationclick', (event) => {
  console.log('[SW] Notification clicked:', event.action);
  
  event.notification.close();
  
  if (event.action === 'listen') {
    event.waitUntil(
      clients.openWindow(event.notification.data.url || '/')
    );
  } else if (event.action === 'dismiss') {
    // Just close the notification
    return;
  } else {
    // Default click - open the app
    event.waitUntil(
      clients.matchAll({ type: 'window' }).then((clientList) => {
        for (const client of clientList) {
          if (client.url === '/' && 'focus' in client) {
            return client.focus();
          }
        }
        if (clients.openWindow) {
          return clients.openWindow('/');
        }
      })
    );
  }
});

// Periodic Background Sync (when available)
self.addEventListener('periodicsync', (event) => {
  console.log('[SW] Periodic sync:', event.tag);
  
  if (event.tag === 'update-programs') {
    event.waitUntil(updateProgramsCache());
  }
});

// Update programs cache
async function updateProgramsCache() {
  try {
    const response = await fetch('/api/programs');
    if (response.ok) {
      const cache = await caches.open(API_CACHE);
      cache.put('/api/programs', response.clone());
      console.log('[SW] Programs cache updated');
    }
  } catch (error) {
    console.log('[SW] Failed to update programs cache:', error);
  }
}

// Message handler for communication with main thread
self.addEventListener('message', (event) => {
  console.log('[SW] Message received:', event.data);
  
  if (event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data.type === 'CACHE_URLS') {
    event.waitUntil(
      cacheUrls(event.data.urls).then(() => {
        event.ports[0].postMessage({ success: true });
      }).catch((error) => {
        event.ports[0].postMessage({ success: false, error: error.message });
      })
    );
  }
  
  if (event.data.type === 'GET_CACHE_SIZE') {
    event.waitUntil(
      getCacheSize().then((size) => {
        event.ports[0].postMessage({ cacheSize: size });
      })
    );
  }
});

// Cache specific URLs
async function cacheUrls(urls) {
  const cache = await caches.open(DYNAMIC_CACHE);
  await cache.addAll(urls);
}

// Get total cache size
async function getCacheSize() {
  const cacheNames = await caches.keys();
  let totalSize = 0;
  
  for (const cacheName of cacheNames) {
    const cache = await caches.open(cacheName);
    const keys = await cache.keys();
    
    for (const request of keys) {
      const response = await cache.match(request);
      if (response) {
        const blob = await response.blob();
        totalSize += blob.size;
      }
    }
  }
  
  return totalSize;
}

// Simple IndexedDB helpers for offline form storage
function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('RadioFlambeauDB', 1);
    
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
    
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      
      if (!db.objectStoreNames.contains('pendingForms')) {
        const store = db.createObjectStore('pendingForms', { 
          keyPath: 'id', 
          autoIncrement: true 
        });
        store.createIndex('timestamp', 'timestamp', { unique: false });
      }
    };
  });
}

function getAllPendingForms(db) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(['pendingForms'], 'readonly');
    const store = transaction.objectStore('pendingForms');
    const request = store.getAll();
    
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
  });
}

function deletePendingForm(db, id) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(['pendingForms'], 'readwrite');
    const store = transaction.objectStore('pendingForms');
    const request = store.delete(id);
    
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve();
  });
}

async function sendContactForm(formData) {
  // This would normally send to your backend
  // For now, we'll use mailto as fallback
  const subject = encodeURIComponent(formData.subject || 'Message depuis le site web');
  const body = encodeURIComponent(
    `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  );
  
  // In a real app, you'd send this to your backend API
  console.log('[SW] Would send form data:', formData);
  return Promise.resolve();
}

// Sync analytics data
async function syncAnalytics() {
  // Implementation for syncing analytics data when back online
  console.log('[SW] Syncing analytics data');
  return Promise.resolve();
}

// Error handler
self.addEventListener('error', (event) => {
  console.error('[SW] Service worker error:', event.error);
});

// Unhandled promise rejection handler
self.addEventListener('unhandledrejection', (event) => {
  console.error('[SW] Unhandled promise rejection:', event.reason);
});

console.log('[SW] Service worker loaded successfully');