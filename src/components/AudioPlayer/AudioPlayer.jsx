// src/components/AudioPlayer/AudioPlayer.jsx
import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import { Play, Pause, Volume2, SkipBack, SkipForward, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAudio } from '../../context/AudioContext';

const AudioPlayer = forwardRef(({ isSticky = false, onClose, streamUrl }, ref) => {
  const {
    isPlaying,
    isLoading,
    error,
    play,
    pause,
    togglePlay,
    setVolume,
    volume,
    currentTrack,
    listenersCount
  } = useAudio();
  // Auto-play when player is shown and not already playing
  useEffect(() => {
    if (streamUrl && !isPlaying) {
      play(streamUrl, { streamUrl });
    }
    // eslint-disable-next-line
  }, [streamUrl]);
  
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
      // setCurrentTrack(randomTrack); // Removed as per edit hint
      
      // Simuler le nombre d'auditeurs
      const baseCount = 247;
      const variation = Math.floor(Math.random() * 50) - 25;
      // setListenersCount(baseCount + variation); // Removed as per edit hint
    };
    
    updateMetadata();
    const interval = setInterval(updateMetadata, 30000); // 30 secondes
    
    return () => clearInterval(interval);
  }, []);

  useImperativeHandle(ref, () => ({
    playRadio: async () => {
      if (!isPlaying) {
        await togglePlay();
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
              {error
                ? error
                : typeof currentTrack === 'string'
                  ? currentTrack
                  : (currentTrack?.title || currentTrack?.name || currentTrack?.streamUrl || 'Radio Flambeau-Banka')}
            </p>
            <div className="flex items-center space-x-2 mt-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className={`
                text-xs ${isSticky ? 'text-gray-400' : 'text-gray-500'}
              `}>
                {(typeof listenersCount !== 'undefined' ? listenersCount : '...')} auditeurs
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
            onClick={togglePlay}
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
              max="1"
              step="0.01"
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
        <span>Stream en direct</span>
        <span className="flex items-center space-x-2">
          <div className={`
            w-2 h-2 rounded-full 
            ${isPlaying ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}
          `}></div>
          <span>{isPlaying ? 'En direct' : 'Hors ligne'}</span>
        </span>
      </div>
      
    </motion.div>
  );
  
  return <PlayerContent />;
});

export default AudioPlayer;