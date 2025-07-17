// src/services/streamingAPI.js
const LISTEN2MYRADIO_API = import.meta.env.VITE_LISTEN2MYRADIO_API;
const CONTROL_PANEL_URL = import.meta.env.VITE_LISTEN2MYRADIO_CONTROL;

export const streamingAPI = {
  // Récupérer le statut du stream
  async getStreamStatus() {
    try {
      const response = await fetch(`${LISTEN2MYRADIO_API}/status`);
      
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération du statut');
      }
      
      const data = await response.json();
      return {
        success: true,
        data: {
          isLive: data.isLive || true,
          listeners: data.listeners || 247,
          bitrate: data.bitrate || 128,
          format: data.format || 'MP3',
          currentTrack: data.currentTrack || 'Radio Flambeau-Banka - En direct'
        }
      };
    } catch (error) {
      console.error('Erreur API streaming:', error);
      
      // Données de fallback
      return {
        success: false,
        data: {
          isLive: true,
          listeners: 247 + Math.floor(Math.random() * 50),
          bitrate: 128,
          format: 'MP3',
          currentTrack: 'Radio Flambeau-Banka - En direct'
        },
        error: error.message
      };
    }
  },
  
  // Récupérer les métadonnées du stream
  async getStreamMetadata() {
    try {
      const response = await fetch(`${LISTEN2MYRADIO_API}/metadata`);
      
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des métadonnées');
      }
      
      const data = await response.json();
      return {
        success: true,
        data: {
          title: data.title || 'Radio Flambeau-Banka',
          artist: data.artist || 'En direct',
          album: data.album || '',
          genre: data.genre || 'Variétés',
          duration: data.duration || null
        }
      };
    } catch (error) {
      console.error('Erreur métadonnées:', error);
      
      return {
        success: false,
        data: {
          title: 'Radio Flambeau-Banka',
          artist: 'En direct',
          album: '',
          genre: 'Variétés',
          duration: null
        },
        error: error.message
      };
    }
  },
  
  // Récupérer les statistiques d'écoute
  async getListenerStats() {
    try {
      const response = await fetch(`${LISTEN2MYRADIO_API}/stats`);
      
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des statistiques');
      }
      
      const data = await response.json();
      return {
        success: true,
        data: {
          current: data.current || 247,
          peak: data.peak || 500,
          countries: data.countries || 20,
          totalListenTime: data.totalListenTime || 0
        }
      };
    } catch (error) {
      console.error('Erreur statistiques:', error);
      
      return {
        success: false,
        data: {
          current: 247 + Math.floor(Math.random() * 50),
          peak: 500,
          countries: 20,
          totalListenTime: 0
        },
        error: error.message
      };
    }
  },
  
  // URL du panneau de contrôle
  getControlPanelUrl() {
    return CONTROL_PANEL_URL;
  }
};
