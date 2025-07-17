// src/components/AudioPlayer/AudioPlayer.jsx
import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import { Play, Pause, Volume2, SkipBack, SkipForward, X } from 'lucide-react';
import { motion } from 'framer-motion';

const AudioPlayer = forwardRef(({ isSticky = false, onClose }, ref) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState('Radio Flambeau-Banka - En direct');
  const [volume, setVolume] = useState(50);
  const [currentStreamIndex, setCurrentStreamIndex] = useState(0);
  const [listenersCount, setListenersCount] = useState(247);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const audioRef = useRef(null);
  const retryTimeoutRef = useRef(null);
  
  // URLs de streaming avec fallback
  const streamUrls = [
    'https://s2.myradiostream.com/5382/listen.mp3'
    // Add more fallback URLs here if needed
  ];
  
  // Initialisation du lecteur audio
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    
    // Définir le volume initial
    audio.volume = volume / 100;
    
    // Gestionnaires d'événements
    const handleCanPlay = () => {
      setIsLoading(false);
      setError(null);
    };
    
    const handleError = (e) => {
      console.error('Erreur de lecture audio:', e);
      setError('Erreur de connexion au stream');
      setIsLoading(false);
      tryNextStream();
    };
    
    const handleLoadStart = () => {
      setIsLoading(true);
      setError(null);
    };
    
    const handlePlay = () => {
      setIsPlaying(true);
      setIsLoading(false);
    };
    
    const handlePause = () => {
      setIsPlaying(false);
    };
    
    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('error', handleError);
    audio.addEventListener('loadstart', handleLoadStart);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    
    return () => {
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('error', handleError);
      audio.removeEventListener('loadstart', handleLoadStart);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      
      if (retryTimeoutRef.current) {
        clearTimeout(retryTimeoutRef.current);
      }
    };
  }, [currentStreamIndex]);
  
  // Mise à jour du volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);
  
  // Essayer le stream suivant en cas d'erreur
  const tryNextStream = () => {
    if (retryTimeoutRef.current) {
      clearTimeout(retryTimeoutRef.current);
    }
    
    retryTimeoutRef.current = setTimeout(() => {
      setCurrentStreamIndex((prev) => {
        const nextIndex = (prev + 1) % streamUrls.length;
        if (nextIndex === 0) {
          setError('Tous les streams sont indisponibles');
          return prev;
        }
        return nextIndex;
      });
    }, 2000);
  };
  
  // Fonction pour jouer/pause
  const togglePlayPause = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    
    try {
      if (isPlaying) {
        audio.pause();
      } else {
        setIsLoading(true);
        audio.src = streamUrls[currentStreamIndex];
        await audio.play();
      }
    } catch (error) {
      console.error('Erreur lors de la lecture:', error);
      setError('Impossible de lire le stream');
      setIsLoading(false);
    }
  };
  
  // Mettre à jour les métadonnées
  useEffect(() => {
    const updateMetadata = () => {
      const tracks = [
        'Musique Africaine - Variétés',
        'Actualités - Radio Flambeau-Banka',
        'Émission Culturelle - Débat',
        'Musique Traditionnelle',
      ];
      
      const randomTrack = tracks[Math.floor(Math.random() * tracks.length)];
      setCurrentTrack(randomTrack);
      
      // Simuler le nombre d'auditeurs
      const baseCount = 247;
      const variation = Math.floor(Math.random() * 50) - 25;
      setListenersCount(baseCount + variation);
    };
    
    updateMetadata();
    const interval = setInterval(updateMetadata, 30000); // 30 secondes
    
    return () => clearInterval(interval);
  }, []);

  useImperativeHandle(ref, () => ({
    playRadio: async () => {
      if (!isPlaying) {
        await togglePlayPause();
      }
    }
  }));
  
  // Composant principal du lecteur
  const PlayerContent = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`
        ${isSticky 
          ? 'fixed bottom-0 left-0 right-0 z-50 bg-gray-900 text-white shadow-2xl' 
          : 'bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20'
        }
      `}
    >
      <div className={`
        ${isSticky ? 'container mx-auto px-4' : ''}
        flex items-center justify-between
        ${isSticky ? 'py-4' : ''}
      `}>
        {/* Informations de la piste */}
        <div className="flex items-center space-x-4">
          <div className={`
            ${isSticky ? 'w-12 h-12' : 'w-16 h-16'}
            bg-gradient-to-r from-blue-500 to-purple-600 rounded-full 
            flex items-center justify-center relative
          `}>
            {isLoading ? (
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
            ) : (
              <motion.div
                animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
                transition={{ duration: 2, repeat: isPlaying ? Infinity : 0, ease: "linear" }}
              >
                📻
              </motion.div>
            )}
            
            {/* Indicateur de statut */}
            <div className={`
              absolute -top-1 -right-1 w-4 h-4 rounded-full 
              ${isPlaying ? 'bg-green-500' : error ? 'bg-red-500' : 'bg-gray-400'}
              ${isPlaying ? 'animate-pulse' : ''}
            `}></div>
          </div>
          
          <div className={`${isSticky ? 'hidden sm:block' : ''}`}>
            <h4 className={`
              font-semibold ${isSticky ? 'text-white' : 'text-gray-800'}
              ${isSticky ? 'text-sm' : 'text-lg'}
            `}>
              Radio Flambeau-Banka
            </h4>
            <p className={`
              text-sm ${isSticky ? 'text-gray-300' : 'text-gray-600'}
              ${isSticky ? 'text-xs' : ''}
            `}>
              {error ? error : currentTrack}
            </p>
            <div className="flex items-center space-x-2 mt-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className={`
                text-xs ${isSticky ? 'text-gray-400' : 'text-gray-500'}
              `}>
                {listenersCount} auditeurs
              </span>
            </div>
          </div>
        </div>
        
        {/* Contrôles */}
        <div className="flex items-center space-x-4">
          {/* Bouton précédent */}
          <button
            onClick={() => setCurrentStreamIndex((prev) => (prev - 1 + streamUrls.length) % streamUrls.length)}
            className={`
              ${isSticky ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-800'}
              transition-colors
            `}
            disabled={isLoading}
          >
            <SkipBack size={isSticky ? 16 : 20} />
          </button>
          
          {/* Bouton play/pause principal */}
          <button
            onClick={togglePlayPause}
            disabled={isLoading}
            className={`
              ${isSticky ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'}
              text-white ${isSticky ? 'w-10 h-10' : 'w-12 h-12'} rounded-full 
              flex items-center justify-center transition-all duration-200
              ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}
            `}
          >
            {isLoading ? (
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
            ) : isPlaying ? (
              <Pause size={isSticky ? 16 : 20} />
            ) : (
              <Play size={isSticky ? 16 : 20} />
            )}
          </button>
          
          {/* Bouton suivant */}
          <button
            onClick={() => setCurrentStreamIndex((prev) => (prev + 1) % streamUrls.length)}
            className={`
              ${isSticky ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-800'}
              transition-colors
            `}
            disabled={isLoading}
          >
            <SkipForward size={isSticky ? 16 : 20} />
          </button>
          
          {/* Contrôle de volume */}
          <div className={`
            ${isSticky ? 'hidden md:flex' : 'flex'} items-center space-x-2
          `}>
            <Volume2 
              size={isSticky ? 16 : 20} 
              className={`
                ${isSticky ? 'text-gray-400' : 'text-gray-600'}
              `} 
            />
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className={`
                w-20 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer
                ${isSticky ? 'accent-blue-500' : 'accent-blue-600'}
              `}
            />
          </div>
          
          {/* Bouton fermer (sticky seulement) */}
          {isSticky && onClose && (
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>
      
      {/* Barre de statut */}
      <div className={`
        ${isSticky ? 'mt-2' : 'mt-4'}
        flex items-center justify-between text-xs
        ${isSticky ? 'text-gray-400' : 'text-gray-600'}
      `}>
        <span>Stream {currentStreamIndex + 1} de {streamUrls.length}</span>
        <span className="flex items-center space-x-2">
          <div className={`
            w-2 h-2 rounded-full 
            ${isPlaying ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}
          `}></div>
          <span>{isPlaying ? 'En direct' : 'Hors ligne'}</span>
        </span>
      </div>
      
      {/* Élément audio */}
      <audio
        ref={audioRef}
        preload="none"
        crossOrigin="anonymous"
        className="hidden"
      />
    </motion.div>
  );
  
  return <PlayerContent />;
});

export default AudioPlayer;