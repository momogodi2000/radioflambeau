// src/components/Header/MobileMenu.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Home, Info, Calendar, Users, Newspaper, Camera, Building2, Phone } from 'lucide-react';

const MobileMenu = ({ isOpen, onClose }) => {
  const location = useLocation();

  const navigationItems = [
    { name: 'Accueil', path: '/', icon: Home },
    { name: 'À propos', path: '/about', icon: Info },
    { name: 'Programmes', path: '/programs', icon: Calendar },
    { name: 'Équipe', path: '/team', icon: Users },
    { name: 'Actualités', path: '/news', icon: Newspaper },
    { name: 'Galerie', path: '/gallery', icon: Camera },
    { name: 'Partenaires', path: '/partners', icon: Building2 },
    { name: 'Contact', path: '/contact', icon: Phone },
  ];

  const isActivePath = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  // Close menu on route change
  // React.useEffect(() => {
  //   if (isOpen) {
  //     onClose();
  //   }
  // }, [location, isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-40 lg:hidden"
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Menu Content */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="absolute right-0 top-0 h-full w-80 max-w-[90vw] bg-white dark:bg-gray-900 shadow-2xl"
          >
            {/* Menu Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Menu</h2>
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="text-sm opacity-90">
                Radio Flambeau-Banka
              </div>
            </div>

            {/* Navigation Items */}
            <div className="flex-1 overflow-y-auto p-6">
              <nav className="space-y-2">
                {navigationItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link
                      to={item.path}
                      onClick={onClose}
                      className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ${
                        isActivePath(item.path)
                          ? 'bg-blue-600 text-white shadow-lg'
                          : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                      }`}
                    >
                      <item.icon size={20} />
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Quick Actions */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                  Contact Rapide
                </h3>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/237696044661"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                  >
                    <Phone size={20} />
                    <span className="font-medium">WhatsApp</span>
                  </a>
                  
                  <a
                    href="mailto:contact@radioflambeaubanka.com"
                    className="flex items-center space-x-3 p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    <Phone size={20} />
                    <span className="font-medium">Email</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
