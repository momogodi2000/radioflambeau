import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('fr');
  const [notifications, setNotifications] = useState([]);
  const [userPreferences, setUserPreferences] = useState({
    autoPlay: false,
    notifications: true,
    analytics: true,
  });

  // Load user preferences from localStorage
  useEffect(() => {
    try {
      const savedPreferences = localStorage.getItem('userPreferences');
      if (savedPreferences) {
        setUserPreferences(JSON.parse(savedPreferences));
      }
    } catch (error) {
      console.warn('Failed to load user preferences:', error);
    }
  }, []);

  // Save user preferences to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('userPreferences', JSON.stringify(userPreferences));
    } catch (error) {
      console.warn('Failed to save user preferences:', error);
    }
  }, [userPreferences]);

  // Monitor online/offline status
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Add notification
  const addNotification = (message, type = 'info', duration = 5000) => {
    const id = Date.now();
    const notification = { id, message, type, duration };
    
    setNotifications(prev => [...prev, notification]);
    
    // Auto-remove notification after duration
    setTimeout(() => {
      removeNotification(id);
    }, duration);
  };

  // Remove notification
  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  };

  // Update user preferences
  const updatePreferences = (newPreferences) => {
    setUserPreferences(prev => ({ ...prev, ...newPreferences }));
  };

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  // Set loading state
  const setLoading = (loading) => {
    setIsLoading(loading);
  };

  const value = {
    isLoading,
    isOnline,
    theme,
    language,
    notifications,
    userPreferences,
    setLoading,
    addNotification,
    removeNotification,
    updatePreferences,
    toggleTheme,
    setLanguage,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};
