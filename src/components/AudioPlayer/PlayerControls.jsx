// src/components/AudioPlayer/PlayerControls.jsx
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX,
  SkipBack, 
  SkipForward, 
  Shuffle,
  Repeat,
  Heart,
  Share2,
  Download,
  Settings
} from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

const PlayerControls = ({
  isPlaying = false,
  isLoading = false,
  onPlayPause,
  onPrevious,
  onNext,
  onVolumeChange,
  onShuffle,
  onRepeat,
  onLike,
  onShare,
  onDownload,
  onSettings,
  volume = 50,
  isLiked = false,
  isShuffled = false,
  repeatMode = 'none', // 'none', 'one', 'all'
  disabled = false,
  showAdvanced = false,
  className = ''
}) => {
  const [isVolumeVisible, setIsVolumeVisible] = useState(false);
  const [localVolume, setLocalVolume] = useState(volume);
  const volumeTimeoutRef = useRef(null);
  
  // Sync volume with parent
  useEffect(() => {
    setLocalVolume(volume);
  }, [volume]);
  
  // Handle volume change with debounce
  const handleVolumeChange = (newVolume) => {
    setLocalVolume(newVolume);
    
    if (volumeTimeoutRef.current) {
      clearTimeout(volumeTimeoutRef.current);
    }
    
    volumeTimeoutRef.current = setTimeout(() => {
      onVolumeChange?.(newVolume);
    }, 100);
  };
  
  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (volumeTimeoutRef.current) {
        clearTimeout(volumeTimeoutRef.current);
      }
    };
  }, []);
  
  const getRepeatIcon = () => {
    switch (repeatMode) {
      case 'one':
        return <Repeat size={16} className="text-blue-500" />;
      case 'all':
        return <Repeat size={16} className="text-blue-500" />;
      default:
        return <Repeat size={16} />;
    }
  };
  
  const getRepeatLabel = () => {
    switch (repeatMode) {
      case 'one':
        return 'Répéter une fois';
      case 'all':
        return 'Répéter tout';
      default:
        return 'Pas de répétition';
    }
  };
  
  const baseButtonClasses = "flex items-center justify-center transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const primaryButtonClasses = `${baseButtonClasses} w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full hover:scale-105`;
  const secondaryButtonClasses = `${baseButtonClasses} w-10 h-10 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-full`;
  const iconButtonClasses = `${baseButtonClasses} w-8 h-8 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full`;
  
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {/* Shuffle Button */}
      <button
        onClick={onShuffle}
        disabled={disabled}
        className={`${secondaryButtonClasses} ${isShuffled ? 'text-blue-600 bg-blue-50' : ''}`}
        title="Mélanger"
      >
        <Shuffle size={18} />
      </button>
      
      {/* Previous Button */}
      <button
        onClick={onPrevious}
        disabled={disabled || isLoading}
        className={secondaryButtonClasses}
        title="Précédent"
      >
        <SkipBack size={18} />
      </button>
      
      {/* Play/Pause Button */}
      <motion.button
        whileHover={{ scale: disabled || isLoading ? 1 : 1.05 }}
        whileTap={{ scale: disabled || isLoading ? 1 : 0.95 }}
        onClick={onPlayPause}
        disabled={disabled}
        className={primaryButtonClasses}
        title={isPlaying ? 'Pause' : 'Lecture'}
      >
        {isLoading ? (
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
        ) : isPlaying ? (
          <Pause size={20} />
        ) : (
          <Play size={20} />
        )}
      </motion.button>
      
      {/* Next Button */}
      <button
        onClick={onNext}
        disabled={disabled || isLoading}
        className={secondaryButtonClasses}
        title="Suivant"
      >
        <SkipForward size={18} />
      </button>
      
      {/* Repeat Button */}
      <button
        onClick={onRepeat}
        disabled={disabled}
        className={`${secondaryButtonClasses} ${repeatMode !== 'none' ? 'text-blue-600 bg-blue-50' : ''}`}
        title={getRepeatLabel()}
      >
        {getRepeatIcon()}
      </button>
      
      {/* Volume Control */}
      <div className="relative">
        <button
          onClick={() => setIsVolumeVisible(!isVolumeVisible)}
          className={iconButtonClasses}
          title="Volume"
        >
          {localVolume === 0 ? (
            <VolumeX size={16} />
          ) : localVolume < 50 ? (
            <Volume2 size={16} />
          ) : (
            <Volume2 size={16} />
          )}
        </button>
        
        {/* Volume Slider */}
        <AnimatePresence>
          {isVolumeVisible && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-white rounded-lg shadow-lg p-3 border border-gray-200"
            >
              <div className="flex flex-col items-center space-y-2">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={localVolume}
                  onChange={(e) => handleVolumeChange(Number(e.target.value))}
                  className="w-24 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  style={{ writingMode: 'bt-lr', transform: 'rotate(-90deg)' }}
                />
                <span className="text-xs text-gray-600">{localVolume}%</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Advanced Controls */}
      {showAdvanced && (
        <>
          {/* Like Button */}
          <button
            onClick={onLike}
            disabled={disabled}
            className={`${iconButtonClasses} ${isLiked ? 'text-red-500 bg-red-50' : ''}`}
            title={isLiked ? 'Retirer des favoris' : 'Ajouter aux favoris'}
          >
            <Heart size={16} fill={isLiked ? 'currentColor' : 'none'} />
          </button>
          
          {/* Share Button */}
          <button
            onClick={onShare}
            disabled={disabled}
            className={iconButtonClasses}
            title="Partager"
          >
            <Share2 size={16} />
          </button>
          
          {/* Download Button */}
          <button
            onClick={onDownload}
            disabled={disabled}
            className={iconButtonClasses}
            title="Télécharger"
          >
            <Download size={16} />
          </button>
          
          {/* Settings Button */}
          <button
            onClick={onSettings}
            disabled={disabled}
            className={iconButtonClasses}
            title="Paramètres"
          >
            <Settings size={16} />
          </button>
        </>
      )}
    </div>
  );
};

export default PlayerControls;
