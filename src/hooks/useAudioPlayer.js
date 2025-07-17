// src/hooks/useAudioPlayer.js
import { useState, useRef, useEffect } from 'react';
import toast from 'react-hot-toast';

const useAudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState('Radio Flambeau-Banka - En direct');
  const [volume, setVolume] = useState(50);
  const [currentStreamIndex, setCurrentStreamIndex] = useState(0);
  const [listenersCount, setListenersCount] = useState(247);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const audioRef = useRef(null);
  const retryTimeoutRef = useRef(null);
  
  const streamUrls = [
    import.meta.env.VITE_STREAM_URL_1,
    import.meta.env.VITE_STREAM_URL_2,
    import.meta.env.VITE_STREAM_URL_3
  ].filter(Boolean);
  
  // Initialiser l'audio
  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
      audioRef.current.preload = 'none';
      audioRef.current.volume = volume / 100;
    }
    
    const audio = audioRef.current;
    
    const handleCanPlay = () => {
      setIsLoading(false);
      setError(null);
    };
    
    const handleError = () => {
      setError('Erreur de connexion');
      setIsLoading(false);
      tryNextStream();
    };
    
    const handleLoadStart = () => {
      setIsLoading(true);
    };
    
    const handlePlay = () => {
      setIsPlaying(true);
      setIsLoading(false);
      toast.success('Radio en cours de lecture');
    };
    
    const handlePause = () => {
      setIsPlaying(false);
      toast.info('Radio en pause');
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
    };
  }, []);
  
  // Mettre à jour le volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);
  
  // Essayer le stream suivant
  const tryNextStream = () => {
    if (retryTimeoutRef.current) {
      clearTimeout(retryTimeoutRef.current);
    }
    
    retryTimeoutRef.current = setTimeout(() => {
      setCurrentStreamIndex((prev) => {
        const nextIndex = (prev + 1) % streamUrls.length;
        if (nextIndex === 0) {
          setError('Tous les streams sont indisponibles');
          toast.error('Impossible de se connecter à la radio');
          return prev;
        }
        return nextIndex;
      });
    }, 2000);
  };
  
  // Toggle play/pause
  const togglePlayPause = async () => {
    if (!audioRef.current) return;
    
    try {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        setIsLoading(true);
        audioRef.current.src = streamUrls[currentStreamIndex];
        await audioRef.current.play();
      }
    } catch (error) {
      console.error('Erreur de lecture:', error);
      setError('Impossible de lire le stream');
      setIsLoading(false);
      toast.error('Erreur de lecture');
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
        'Journal Parlé - Actualités',
        'Variétés Internationales'
      ];
      
      const randomTrack = tracks[Math.floor(Math.random() * tracks.length)];
      setCurrentTrack(randomTrack);
      
      // Simuler le nombre d'auditeurs
      const baseCount = 247;
      const variation = Math.floor(Math.random() * 50) - 25;
      setListenersCount(Math.max(50, baseCount + variation));
    };
    
    updateMetadata();
    const interval = setInterval(updateMetadata, 30000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Changer de stream
  const changeStream = (index) => {
    if (index >= 0 && index < streamUrls.length) {
      setCurrentStreamIndex(index);
      if (isPlaying) {
        audioRef.current.src = streamUrls[index];
        audioRef.current.play();
      }
    }
  };
  
  return {
    isPlaying,
    currentTrack,
    volume,
    setVolume,
    currentStreamIndex,
    listenersCount,
    isLoading,
    error,
    togglePlayPause,
    changeStream,
    streamUrls
  };
};

export default useAudioPlayer;
