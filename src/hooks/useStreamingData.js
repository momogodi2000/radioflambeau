
// src/hooks/useStreamingData.js
import { useState, useEffect } from 'react';

const useStreamingData = () => {
  const [streamingData, setStreamingData] = useState({
    isLive: false,
    listeners: 0,
    currentShow: '',
    nextShow: '',
    bitrate: 128,
    format: 'MP3'
  });
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchStreamingData = async () => {
      try {
        // Simuler l'appel API Listen2MyRadio
        const response = await fetch(`${import.meta.env.VITE_LISTEN2MYRADIO_API}/status`);
        
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des données');
        }
        
        const data = await response.json();
        setStreamingData(data);
        setError(null);
      } catch (err) {
        // Données de fallback
        setStreamingData({
          isLive: true,
          listeners: 247 + Math.floor(Math.random() * 50),
          currentShow: 'Radio Flambeau-Banka - En direct',
          nextShow: 'Actualités - 12:00',
          bitrate: 128,
          format: 'MP3'
        });
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchStreamingData();
    
    // Mettre à jour toutes les 30 secondes
    const interval = setInterval(fetchStreamingData, 30000);
    
    return () => clearInterval(interval);
  }, []);
  
  return { streamingData, loading, error };
};

export { useStreamingData };