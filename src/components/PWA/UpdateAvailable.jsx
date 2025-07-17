// src/components/PWA/UpdateAvailable.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, RefreshCw, X, Sparkles } from 'lucide-react';

const UpdateAvailable = ({ onUpdate }) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  const handleUpdate = async () => {
    setIsUpdating(true);
    
    try {
      await onUpdate();
    } catch (error) {
      console.error('Update failed:', error);
      setIsUpdating(false);
    }
  };

  const handleDismiss = () => {
    setIsDismissed(true);
    // Store dismissal in localStorage to remember user preference
    localStorage.setItem('update-dismissed', Date.now().toString());
  };

  const handleLater = () => {
    setIsDismissed(true);
    // Don't store permanent dismissal, just hide for this session
  };

  if (isDismissed) return null;

  const updateVariants = {
    initial: { opacity: 0, y: 100, scale: 0.9 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 100, scale: 0.9 }
  };

  return (
    <AnimatePresence>
      <motion.div
        variants={updateVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="fixed bottom-4 right-4 max-w-sm z-50"
      >
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Sparkles size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Mise à jour disponible</h3>
                  <p className="text-blue-100 text-sm">Nouvelle version prête</p>
                </div>
              </div>
              <button
                onClick={handleDismiss}
                className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/20 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="mb-4">
              <p className="text-gray-700 mb-3">
                Une nouvelle version de l'application est disponible avec des améliorations et corrections.
              </p>
              
              <div className="bg-blue-50 rounded-lg p-3 mb-4">
                <h4 className="font-semibold text-blue-900 text-sm mb-2">Nouveautés :</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Performances améliorées</li>
                  <li>• Corrections de bugs</li>
                  <li>• Nouvelles fonctionnalités</li>
                  <li>• Expérience utilisateur optimisée</li>
                </ul>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleUpdate}
                disabled={isUpdating}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 flex items-center justify-center space-x-2"
              >
                {isUpdating ? (
                  <>
                    <RefreshCw size={20} className="animate-spin" />
                    <span>Mise à jour en cours...</span>
                  </>
                ) : (
                  <>
                    <Download size={20} />
                    <span>Mettre à jour maintenant</span>
                  </>
                )}
              </button>

              <div className="flex space-x-3">
                <button
                  onClick={handleLater}
                  className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                >
                  Plus tard
                </button>
                
                <button
                  onClick={handleDismiss}
                  className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                >
                  Ignorer
                </button>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center">
                La mise à jour sera appliquée immédiatement et l'application sera rechargée.
              </p>
            </div>
          </div>
        </div>

        {/* Pulse animation for attention */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl -z-10"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.1, 0.3]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default UpdateAvailable;