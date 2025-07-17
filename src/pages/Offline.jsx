// src/pages/Offline.jsx - Enhanced offline experience
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { WifiOff, RefreshCw, Radio, Home } from 'lucide-react';

const Offline = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <>
      <Helmet>
        <title>Hors ligne - Radio Flambeau-Banka</title>
        <meta name="description" content="Vous êtes actuellement hors ligne. Vérifiez votre connexion internet pour accéder à Radio Flambeau-Banka." />
      </Helmet>

      <div className="min-h-screen bg-gray-50 flex flex-col">
        <div className="flex-grow flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center"
          >
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <WifiOff size={40} className="text-red-500" />
            </div>
            
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Vous êtes hors ligne
            </h1>
            
            <p className="text-gray-600 mb-8">
              Impossible de se connecter à Radio Flambeau-Banka. Vérifiez votre connexion internet et réessayez.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleRefresh}
                className="flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                <RefreshCw size={18} className="mr-2" />
                Actualiser la page
              </button>
              
              <a
                href="/"
                className="flex items-center justify-center bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
              >
                <Home size={18} className="mr-2" />
                Retour à l'accueil
              </a>
            </div>
          </motion.div>
        </div>
        
        <div className="bg-white p-6 shadow-inner">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center">
                <Radio size={24} className="text-blue-600 mr-3" />
                <div>
                  <h2 className="font-bold text-gray-800">Radio Flambeau-Banka</h2>
                  <p className="text-sm text-gray-600">Votre voix, votre communauté</p>
                </div>
              </div>
              
              <div className="text-center md:text-right">
                <p className="text-sm text-gray-600 mb-1">
                  Certaines fonctionnalités sont disponibles hors ligne
                </p>
                <p className="text-xs text-gray-500">
                  Version PWA 2.0.2
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offline;