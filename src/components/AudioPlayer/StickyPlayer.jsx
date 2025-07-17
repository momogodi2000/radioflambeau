// src/components/AudioPlayer/StickyPlayer.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, SkipBack, SkipForward, X, Radio } from 'lucide-react';

const StickyPlayer = ({ isVisible = true, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState('Radio Flambeau-Banka - En direct');
  const [volume, setVolume] = useState(50);
  const [listenersCount, setListenersCount] = useState(247);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Simulate audio state updates
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
      
      const baseCount = 247;
      const variation = Math.floor(Math.random() * 50) - 25;
      setListenersCount(baseCount + variation);
    };
    
    updateMetadata();
    const interval = setInterval(updateMetadata, 30000);
    
    return () => clearInterval(interval);
  }, []);
  
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    setIsLoading(true);
    
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };
  
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  
  if (!isVisible) return null;
  
  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        exit={{ y: 100 }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 text-white shadow-2xl"
      >
        <div className="container mx-auto px-4">
          {/* Main Player Bar */}
          <div className="flex items-center justify-between py-4">
            {/* Track Info */}
            <div className="flex items-center space-x-4 flex-1 min-w-0">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center relative">
                {isLoading ? (
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                ) : (
                  <motion.div
                    animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
                    transition={{ duration: 2, repeat: isPlaying ? Infinity : 0, ease: "linear" }}
                  >
                    <Radio size={20} className="text-white" />
                  </motion.div>
                )}
                
                {/* Status indicator */}
                <div className={`
                  absolute -top-1 -right-1 w-4 h-4 rounded-full 
                  ${isPlaying ? 'bg-green-500' : error ? 'bg-red-500' : 'bg-gray-400'}
                  ${isPlaying ? 'animate-pulse' : ''}
                `}></div>
              </div>
              
              <div className="flex-1 min-w-0 hidden sm:block">
                <h4 className="font-semibold text-white text-sm truncate">
                  Radio Flambeau-Banka
                </h4>
                <p className="text-xs text-gray-300 truncate">
                  {error ? error : currentTrack}
                </p>
                <div className="flex items-center space-x-2 mt-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-gray-400">
                    {listenersCount} auditeurs
                  </span>
                </div>
              </div>
            </div>
            
            {/* Controls */}
            <div className="flex items-center space-x-4">
              {/* Previous */}
              <button
                onClick={() => {}}
                className="text-gray-400 hover:text-white transition-colors"
                disabled={isLoading}
              >
                <SkipBack size={16} />
              </button>
              
              {/* Play/Pause */}
              <button
                onClick={togglePlayPause}
                disabled={isLoading}
                className="bg-blue-600 hover:bg-blue-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105"
              >
                {isLoading ? (
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                ) : isPlaying ? (
                  <Pause size={16} />
                ) : (
                  <Play size={16} />
                )}
              </button>
              
              {/* Next */}
              <button
                onClick={() => {}}
                className="text-gray-400 hover:text-white transition-colors"
                disabled={isLoading}
              >
                <SkipForward size={16} />
              </button>
              
              {/* Volume Control */}
              <div className="hidden md:flex items-center space-x-2">
                <Volume2 size={16} className="text-gray-400" />
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                  className="w-20 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>
              
              {/* Expand/Collapse */}
              <button
                onClick={toggleExpand}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  ▼
                </motion.div>
              </button>
              
              {/* Close */}
              {onClose && (
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </div>
          
          {/* Expanded Content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="border-t border-gray-700 overflow-hidden"
              >
                <div className="py-4">
                  {/* Additional Controls */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-400">Volume</span>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={volume}
                        onChange={(e) => setVolume(Number(e.target.value))}
                        className="w-32 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                      />
                      <span className="text-sm text-gray-400">{volume}%</span>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span>Stream 1 de 3</span>
                      <div className="flex items-center space-x-2">
                        <div className={`
                          w-2 h-2 rounded-full 
                          ${isPlaying ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}
                        `}></div>
                        <span>{isPlaying ? 'En direct' : 'Hors ligne'}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Track Progress */}
                  <div className="w-full bg-gray-700 rounded-full h-1 mb-4">
                    <div className="bg-blue-500 h-1 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                  
                  {/* Quick Actions */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-gray-400">Partager:</span>
                      <button className="text-blue-400 hover:text-blue-300 text-xs">
                        WhatsApp
                      </button>
                      <button className="text-blue-400 hover:text-blue-300 text-xs">
                        Facebook
                      </button>
                    </div>
                    
                    <button className="text-xs text-gray-400 hover:text-white">
                      Voir plus d'infos
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default StickyPlayer;
