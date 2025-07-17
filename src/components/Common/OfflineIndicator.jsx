// src/components/Common/OfflineIndicator.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WifiOff, Wifi, AlertCircle, RefreshCw } from 'lucide-react';

const OfflineIndicator = ({ isOnline }) => {
  const [showIndicator, setShowIndicator] = useState(false);
  const [wasOffline, setWasOffline] = useState(false);
  const [isRetrying, setIsRetrying] = useState(false);

  useEffect(() => {
    if (!isOnline) {
      setShowIndicator(true);
      setWasOffline(true);
    } else if (wasOffline && isOnline) {
      // Show reconnection message briefly
      setShowIndicator(true);
      const timer = setTimeout(() => {
        setShowIndicator(false);
        setWasOffline(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isOnline, wasOffline]);

  const handleRetry = async () => {
    setIsRetrying(true);
    
    // Simulate retry delay
    setTimeout(() => {
      setIsRetrying(false);
      // Force a connection check
      window.location.reload();
    }, 1000);
  };

  const handleDismiss = () => {
    setShowIndicator(false);
  };

  if (!showIndicator) return null;

  const indicatorVariants = {
    initial: { opacity: 0, y: -50, scale: 0.9 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -50, scale: 0.9 }
  };

  return (
    <AnimatePresence>
      <motion.div
        variants={indicatorVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className={`fixed top-20 left-1/2 transform -translate-x-1/2 z-50 max-w-sm w-full mx-4 ${
          isOnline ? 'bg-green-500' : 'bg-red-500'
        } text-white rounded-lg shadow-2xl`}
      >
        <div className="p-4">
          <div className="flex items-center space-x-3">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              isOnline ? 'bg-green-600' : 'bg-red-600'
            }`}>
              {isOnline ? (
                <Wifi size={20} />
              ) : (
                <WifiOff size={20} />
              )}
            </div>
            
            <div className="flex-1">
              <h3 className="font-semibold text-sm">
                {isOnline ? 'Connexion rétablie' : 'Connexion perdue'}
              </h3>
              <p className="text-xs opacity-90">
                {isOnline 
                  ? 'Vous êtes de nouveau en ligne'
                  : 'Vérifiez votre connexion Internet'
                }
              </p>
            </div>

            {!isOnline && (
              <div className="flex space-x-2">
                <button
                  onClick={handleRetry}
                  disabled={isRetrying}
                  className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors disabled:opacity-50"
                  title="Réessayer"
                >
                  <RefreshCw size={14} className={isRetrying ? 'animate-spin' : ''} />
                </button>
                
                <button
                  onClick={handleDismiss}
                  className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  title="Fermer"
                >
                  ✕
                </button>
              </div>
            )}

            {isOnline && (
              <button
                onClick={handleDismiss}
                className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                title="Fermer"
              >
                ✕
              </button>
            )}
          </div>

          {!isOnline && (
            <div className="mt-3 pt-3 border-t border-red-400/30">
              <div className="flex items-center space-x-2 text-xs">
                <AlertCircle size={12} />
                <span>Mode hors ligne activé - Fonctionnalités limitées</span>
              </div>
            </div>
          )}
        </div>

        {/* Progress bar for online status */}
        {isOnline && (
          <motion.div
            className="h-1 bg-green-400 rounded-b-lg"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 3 }}
          />
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default OfflineIndicator;