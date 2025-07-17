// src/components/PWA/PWAInstallPrompt.jsx - Enhanced PWA install prompt with device detection
import React, { useState, useEffect } from 'react';
import { X, Download, ExternalLink, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePWA } from '../../context/PWAContext';

const PWAInstallPrompt = () => {
  const [showPrompt, setShowPrompt] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const { 
    canInstall, 
    isInstalled, 
    installPWA,
    deviceInfo
  } = usePWA();

  useEffect(() => {
    // Show prompt if:
    // 1. App can be installed
    // 2. App is not already installed
    // 3. User hasn't dismissed the prompt
    // 4. User has been on the site for at least 30 seconds
    if (canInstall && !isInstalled && !dismissed) {
      const timer = setTimeout(() => {
        setShowPrompt(true);
      }, 30000); // 30 seconds delay

      return () => clearTimeout(timer);
    }
  }, [canInstall, isInstalled, dismissed]);

  const handleInstall = async () => {
    const success = await installPWA();
    if (success) {
      setShowPrompt(false);
    }
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    setDismissed(true);
    localStorage.setItem('pwaPromptDismissed', Date.now().toString());
  };

  // Different prompt content based on device type
  const renderPromptContent = () => {
    if (deviceInfo.isIOS && deviceInfo.isSafari) {
      // iOS Safari prompt
      return (
        <div className="text-center">
          <div className="mb-4">
            <Info size={40} className="mx-auto text-blue-500" />
          </div>
          <h3 className="text-lg font-bold mb-2">Installez notre application</h3>
          <p className="mb-4 text-gray-600">
            Pour installer Radio Flambeau sur votre iPhone/iPad:
          </p>
          <ol className="text-left text-sm mb-4 space-y-2">
            <li className="flex items-start">
              <span className="bg-blue-500 text-white w-5 h-5 rounded-full flex items-center justify-center mr-2 flex-shrink-0">1</span>
              <span>Appuyez sur <ExternalLink size={16} className="inline mx-1" /> (Partager)</span>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-500 text-white w-5 h-5 rounded-full flex items-center justify-center mr-2 flex-shrink-0">2</span>
              <span>Faites défiler et appuyez sur "Sur l'écran d'accueil"</span>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-500 text-white w-5 h-5 rounded-full flex items-center justify-center mr-2 flex-shrink-0">3</span>
              <span>Appuyez sur "Ajouter"</span>
            </li>
          </ol>
          <button
            onClick={handleDismiss}
            className="w-full py-2 px-4 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
          >
            J'ai compris
          </button>
        </div>
      );
    } else if (deviceInfo.isAndroid) {
      // Android prompt
      return (
        <div>
          <h3 className="text-lg font-bold mb-2">Installez notre application</h3>
          <p className="mb-4 text-gray-600">
            Profitez de Radio Flambeau-Banka directement depuis votre écran d'accueil !
          </p>
          <div className="flex flex-col space-y-2">
            <button
              onClick={handleInstall}
              className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              <Download size={18} className="mr-2" />
              Installer l'application
            </button>
            <button
              onClick={handleDismiss}
              className="py-2 px-4 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Plus tard
            </button>
          </div>
        </div>
      );
    } else {
      // Desktop or other devices
      return (
        <div>
          <h3 className="text-lg font-bold mb-2">Installez notre application</h3>
          <p className="mb-4 text-gray-600">
            Installez Radio Flambeau-Banka pour un accès rapide et une meilleure expérience !
          </p>
          <div className="flex flex-col space-y-2">
            <button
              onClick={handleInstall}
              className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              <Download size={18} className="mr-2" />
              Installer
            </button>
            <button
              onClick={handleDismiss}
              className="py-2 px-4 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Non merci
            </button>
          </div>
        </div>
      );
    }
  };

  return (
    <AnimatePresence>
      {showPrompt && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:bottom-4 md:w-80 bg-white rounded-xl shadow-xl p-4 z-50"
        >
          <button
            onClick={handleDismiss}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            aria-label="Fermer"
          >
            <X size={20} />
          </button>
          
          {renderPromptContent()}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PWAInstallPrompt;