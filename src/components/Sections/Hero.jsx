// src/components/Sections/Hero.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Info, Users, Radio, Globe, LogIn } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Hero = ({ onPlayClick, isPlaying, onRadioPlay, overlay = true, showAdminButton = true }) => {
  const [listenersCount, setListenersCount] = useState(247);
  const [currentTime, setCurrentTime] = useState(new Date());
  
  // Mise à jour du nombre d'auditeurs
  useEffect(() => {
    const interval = setInterval(() => {
      const baseCount = 247;
      const variation = Math.floor(Math.random() * 50) - 25;
      setListenersCount(Math.max(50, baseCount + variation));
    }, 10000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Mise à jour de l'heure
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const handleLoginClick = () => {
    window.open('https://myradiostream.com/user/login.php', '_blank');
  };
  
  return (
    <>
      <Helmet>
        <title>Radio Flambeau-Banka - Votre voix communautaire</title>
        <meta name="description" content="Écoutez Radio Flambeau-Banka en direct depuis n'importe où dans le monde. Radio communautaire de l'arrondissement de Banka, Cameroun." />
        <meta property="og:title" content="Radio Flambeau-Banka - Votre voix communautaire" />
        <meta property="og:description" content="Écoutez Radio Flambeau-Banka en direct depuis n'importe où dans le monde." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.radioflambeaubanka.com" />
      </Helmet>
      
      <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Arrière-plan avec gradient */}
        <div className="absolute inset-0 bg-gradient-to-br [--tw-gradient-from:#2563eb] [--tw-gradient-via:#9333ea] [--tw-gradient-to:#db2777]"></div>
        {/* Overlay (optional) */}
        {overlay && (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 via-purple-600/80 to-pink-600/80"></div>
        )}
        {/* Éléments décoratifs animés */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 left-20 w-20 h-20 bg-white/10 rounded-full"
          />
          <motion.div
            animate={{
              y: [0, -30, 0],
              rotate: [0, -15, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute top-40 right-32 w-16 h-16 bg-white/10 rounded-full"
          />
          <motion.div
            animate={{
              y: [0, -25, 0],
              rotate: [0, 20, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-32 left-40 w-24 h-24 bg-white/10 rounded-full"
          />
        </div>
        {/* Fix: close the container div properly */}
        <div className="container mx-auto px-2 sm:px-4 relative z-10">
          <div className="text-center text-white">
            {/* Logo principal animé */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "backOut" }}
              className="mb-6 sm:mb-8"
            >
              <div className={`w-24 h-24 sm:w-32 sm:h-32 mx-auto ${overlay ? 'bg-white/20 backdrop-blur-sm' : 'bg-white/10'} rounded-full flex items-center justify-center mb-4 sm:mb-6`}>
                <motion.div
                  animate={{ 
                    rotate: isPlaying ? 360 : 0,
                    scale: isPlaying ? [1, 1.1, 1] : 1
                  }}
                  transition={{ 
                    rotate: { duration: 3, repeat: isPlaying ? Infinity : 0, ease: "linear" },
                    scale: { duration: 2, repeat: isPlaying ? Infinity : 0, ease: "easeInOut" }
                  }}
                  className="text-4xl sm:text-6xl"
                >
                  📻
                </motion.div>
              </div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-2 sm:mb-4 drop-shadow-lg"
              >
                Radio Flambeau-Banka
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2 drop-shadow-md"
              >
                La voix, de la communauté
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-base sm:text-lg md:text-xl text-blue-200 mb-4 sm:mb-8 drop-shadow-md"
              >
                Maintenant dans le monde entier
              </motion.p>
              
              {/* Drapeau du Cameroun */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="h-2 w-32 sm:w-48 mx-auto rounded-full mb-4 sm:mb-8 overflow-hidden"
                style={{
                  background: 'linear-gradient(90deg, #00AA00 0%, #FF0000 50%, #FFFF00 100%)'
                }}
              />
            </motion.div>
            
            {/* Boutons d'action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  onPlayClick && onPlayClick();
                  onRadioPlay && onRadioPlay();
                }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg flex items-center space-x-3 shadow-2xl hover:shadow-3xl transition-all duration-300"
              >
                {isPlaying ? (
                  <Pause size={20} />
                ) : (
                  <Play size={20} />
                )}
                <span>
                  {isPlaying ? 'Pause' : 'Écouter en direct'}
                </span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('apropos')}
                className={`px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg flex items-center space-x-3 transition-all duration-300 ${overlay ? 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30' : 'bg-white/80 text-blue-700 hover:bg-white'}`}
              >
                <Info size={20} />
                <span>Découvrir</span>
              </motion.button>
              
              {showAdminButton && (
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleLoginClick}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-5 sm:px-6 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg flex items-center space-x-3 shadow-2xl hover:shadow-3xl transition-all duration-300"
                  title="Accéder au panneau de contrôle"
                >
                  <LogIn size={18} />
                  <span>Administration</span>
                </motion.button>
              )}
            </motion.div>
            
            {/* Statistiques en temps réel */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white/80 text-sm">Statut</span>
                </div>
                <div className="text-2xl font-bold text-green-400">EN DIRECT</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Users size={16} className="text-white/80" />
                  <span className="text-white/80 text-sm">Auditeurs</span>
                </div>
                <div className="text-2xl font-bold text-white">{listenersCount}</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Globe size={16} className="text-white/80" />
                  <span className="text-white/80 text-sm">Portée</span>
                </div>
                <div className="text-2xl font-bold text-white">20+ pays</div>
              </div>
            </motion.div>
            
            {/* Heure actuelle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="mt-8 text-center"
            >
              <p className="text-white/60 text-sm mb-2">Heure locale (Cameroun)</p>
              <p className="text-white font-mono text-xl">
                {currentTime.toLocaleTimeString('fr-FR', { 
                  timeZone: 'Africa/Douala',
                  hour: '2-digit',
                  minute: '2-digit',
                  second: '2-digit'
                })}
              </p>
            </motion.div>
          </div>
        </div>
        
        {/* Flèche de défilement */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.7 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white cursor-pointer"
          onClick={() => scrollToSection('apropos')}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center"
          >
            <span className="text-sm mb-2">Découvrir</span>
            <div className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center">
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-1 bg-white rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
