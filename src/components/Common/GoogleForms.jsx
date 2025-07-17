
// src/components/Common/GoogleForms.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';

const GoogleForms = ({ 
  formId, 
  title, 
  description, 
  embedded = false, 
  onClose 
}) => {
  const [isLoading, setIsLoading] = useState(true);
  
  const formUrl = `https://docs.google.com/forms/d/e/${formId}/viewform${embedded ? '?embedded=true' : ''}`;
  
  const handleLoad = () => {
    setIsLoading(false);
  };
  
  if (!embedded) {
    // Ouvrir dans une nouvelle fenêtre
    window.open(formUrl, '_blank', 'width=600,height=800');
    return null;
  }
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h3 className="text-xl font-bold text-gray-800">{title}</h3>
            {description && (
              <p className="text-gray-600 text-sm mt-1">{description}</p>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} className="text-gray-500" />
          </button>
        </div>
        
        {/* Content */}
        <div className="relative">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
          )}
          
          <iframe
            src={formUrl}
            width="100%"
            height="600"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            className="w-full"
            onLoad={handleLoad}
            title={title}
          >
            Chargement...
          </iframe>
        </div>
        
        {/* Footer */}
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Formulaire sécurisé par Google Forms
            </p>
            <a
              href={formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
            >
              <span className="text-sm">Ouvrir dans un nouvel onglet</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default GoogleForms;
