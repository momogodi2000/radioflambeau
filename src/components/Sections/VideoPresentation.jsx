import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const VideoPresentation = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [iframeBlocked, setIframeBlocked] = useState(false);

  // Fallback: if iframe doesn't load after 3s, consider it blocked
  useEffect(() => {
    const timer = setTimeout(() => {
      if (videoRef.current && !videoRef.current.contentWindow) {
        setIframeBlocked(true);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleIframeError = () => {
    setIframeBlocked(true);
  };

  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);

  // Function to convert Google Drive sharing link to direct streaming URL
  const getGoogleDriveStreamUrl = (shareUrl) => {
    const fileId = shareUrl.match(/\/d\/([a-zA-Z0-9-_]+)/)?.[1];
    return fileId ? `https://drive.google.com/file/d/${fileId}/preview` : shareUrl;
  };

  // Function to get direct download URL from Google Drive
  const getGoogleDriveDownloadUrl = (shareUrl) => {
    const fileId = shareUrl.match(/\/d\/([a-zA-Z0-9-_]+)/)?.[1];
    return fileId ? `https://drive.google.com/uc?export=download&id=${fileId}` : shareUrl;
  };

  // Google Drive video links
  const presentationVideoUrl = "https://drive.google.com/file/d/1TccbMwVHxPbDE9Vwg4mUB6Fe4h1ZwIhr/view?usp=sharing";
  const podcastVideoUrl = "https://drive.google.com/file/d/1g3UTxH2Dchnnu8jaLG6cj0JAylKD57cY/view?usp=sharing";
  const podcastMacaboUrl = "https://drive.google.com/file/d/16Ko8iWHjGIW5OI-y6xRrTgaVIZsOMr3K/view?usp=sharing";

  // Podcast data with Google Drive links
  const podcasts = [
    {
      title: 'Budget citoyen 2025 Cameroun',
      description: 'Découvrez le budget de citoyen 2025 du cameroun et les avantages de connaitre ces document. Une analyse complète des allocations budgétaires et leur impact sur la vie quotidienne des citoyens.',
      video: podcastVideoUrl,
      thumbnail: '/images/Podcast/one.jpg',
      duration: '20:34',
      category: 'Politique'
    },
    {
      title: 'Culture du macabo',
      description: 'Découvrez la culture du macabo, comment entretenir sont champ, les benefit du macabo est sa rentability. Techniques modernes d\'agriculture et conseils pratiques pour maximiser vos récoltes.',
      video: podcastMacaboUrl,
      thumbnail: '/images/Podcast/one.jpg',
      duration: '30:22',
      category: 'Agriculture'
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        {/* Main Video Presentation Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-1 mb-8">
            <div className="bg-white rounded-3xl overflow-hidden">
              <div className="relative group">
                {/* Google Drive iframe for main presentation */}
                <iframe
                  ref={videoRef}
                  src={getGoogleDriveStreamUrl(presentationVideoUrl)}
                  className="w-full h-72 md:h-96 object-cover rounded-3xl transition-transform duration-500 group-hover:scale-105 border-4 border-blue-400 shadow-lg"
                  style={{ background: '#222' }}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="Radio Flambeau-Banka Presentation"
                  onError={handleIframeError}
                />
                {/* Fallback overlay if blocked */}
                {(iframeBlocked) && (
                  <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center z-20 p-4 rounded-3xl">
                    <p className="text-white text-lg font-semibold mb-4 text-center">
                      Cette vidéo ne peut pas être affichée ici.<br />
                      Cliquez ci-dessous pour l’ouvrir dans un nouvel onglet.
                    </p>
                    <a
                      href={presentationVideoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform duration-200"
                    >
                      Ouvrir la vidéo
                    </a>
                  </div>
                )}
                {/* Always show open in new tab button for reliability */}
                <a
                  href={presentationVideoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full shadow-lg text-sm font-semibold flex items-center gap-2 hover:scale-105 transition-transform duration-200 z-10"
                  style={{ textDecoration: 'none' }}
                  title="Ouvrir la vidéo dans un nouvel onglet"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 3h7m0 0v7m0-7L10 14m-7 7h7a2 2 0 002-2v-7" /></svg>
                  Ouvrir la vidéo
                </a>
                
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <span className="text-white text-2xl md:text-3xl font-bold drop-shadow-lg animate-fade-in text-center px-4">
                    Radio Flambeau-Banka: Voix de la Communauté
                  </span>
                  <span className="mt-4 text-white/80 text-base md:text-lg font-medium drop-shadow animate-fade-in text-center max-w-2xl px-4">
                    Depuis 2009, nous sommes la voix du Haut-Nkam, engagés dans l'éducation, l'information et le divertissement de qualité.
                  </span>
                </div>
                <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full shadow-lg text-sm font-semibold animate-fade-in">
                  🎬 Vidéo officielle 2025
                </div>
              </div>
            </div>
          </div>

          {/* Video Description Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500"
            >
              <h4 className="font-bold text-blue-700 mb-2">Notre Mission</h4>
              <p className="text-gray-600 text-sm">
                Informer, éduquer et divertir la communauté de Banka et ses environs à travers des programmes innovants.
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500"
            >
              <h4 className="font-bold text-purple-700 mb-2">Programmes Phares</h4>
              <p className="text-gray-600 text-sm">
                "Voix de Femmes", "Jeunesse en Vacances", et nos émissions matinales quotidiennes.
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-400"
            >
              <h4 className="font-bold text-blue-600 mb-2">Équipe Dynamique</h4>
              <p className="text-gray-600 text-sm">
                15 animateurs passionnés et 5 techniciens dévoués au service de la communauté.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Podcast Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-7xl mx-auto mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Nos Podcasts Vidéo
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez nos contenus exclusifs sur des sujets qui vous intéressent
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {podcasts.map((podcast, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
              >
                <div className="relative">
                  {/* Google Drive iframe for podcasts */}
                  <iframe
                    src={getGoogleDriveStreamUrl(podcast.video)}
                    className="w-full h-64 object-cover"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title={podcast.title}
                  />
                  <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs font-medium">
                    {podcast.duration}
                  </div>
                  <a
                    href={getGoogleDriveDownloadUrl(podcast.video)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full shadow-lg text-xs font-semibold hover:scale-105 transition-transform duration-200 z-10"
                    style={{ textDecoration: 'none' }}
                    title="Télécharger ce podcast"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" /></svg>
                  </a>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      podcast.category === 'Politique' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {podcast.category}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{podcast.title}</h4>
                  <p className="text-gray-600 text-sm mb-4">{podcast.description}</p>
                  <button 
                    onClick={() => window.open(podcast.video, '_blank')}
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center"
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                    Regarder le podcast
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-200 shadow-lg">
              Voir tous les podcasts
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default VideoPresentation;