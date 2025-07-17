import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const NotFound = () => {
  useEffect(() => {
    // Track 404 page view
    if (typeof gtag !== 'undefined') {
      gtag('event', 'page_view', {
        page_title: 'Page non trouvée - Radio Flambeau-Banka',
        page_location: window.location.href,
        custom_map: {
          'error_type': '404'
        }
      });
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Page non trouvée - Radio Flambeau-Banka</title>
        <meta name="description" content="La page que vous recherchez n'existe pas. Retournez à l'accueil de Radio Flambeau-Banka." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href={window.location.origin} />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center px-4"
      >
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Animation */}
          <motion.div
            initial={{ scale: 0.8, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="relative">
              <h1 className="text-9xl font-bold text-gray-300 select-none">404</h1>
              <motion.div
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <img 
                  src="/images/logo.png" 
                  alt="Radio Flambeau-Banka" 
                  className="w-16 h-16 opacity-20"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Oups ! Page non trouvée
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              La page que vous recherchez semble avoir disparu dans les ondes radio.
              <br />
              Elle a peut-être été déplacée ou supprimée.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center"
          >
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Retour à l'accueil
            </Link>

            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center px-6 py-3 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-300 shadow-lg hover:bg-gray-50 hover:border-gray-400 transform hover:scale-105 transition-all duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Page précédente
            </button>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12"
          >
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Pages populaires
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                to="/programs"
                className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 text-sm font-medium text-gray-700 hover:text-blue-600"
              >
                Programmes
              </Link>
              <Link
                to="/news"
                className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 text-sm font-medium text-gray-700 hover:text-blue-600"
              >
                Actualités
              </Link>
              <Link
                to="/team"
                className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 text-sm font-medium text-gray-700 hover:text-blue-600"
              >
                Équipe
              </Link>
              <Link
                to="/contact"
                className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 text-sm font-medium text-gray-700 hover:text-blue-600"
              >
                Contact
              </Link>
            </div>
          </motion.div>

          {/* Search Suggestion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200"
          >
            <p className="text-sm text-blue-800">
              <strong>Conseil :</strong> Utilisez la navigation en haut de page ou retournez à l'accueil pour trouver ce que vous cherchez.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default NotFound; 