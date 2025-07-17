import React, { useRef, useState, useEffect } from 'react';

const podcasts = [
  {
    title: 'Budget citoyen 2025 Cameroun',
    description: 'Découvrez le budget de citoyen 2025 du cameroun et les avantages de connaitre ces document. Une analyse complète des allocations budgétaires et leur impact sur la vie quotidienne des citoyens.',
    video: '/videos/Podcast.avi',
    thumbnail: '/images/Podcast/one.jpg',
    mp4: null,
    duration: '20:34',
    category: 'Politique'
  },
  {
    title: 'Culture du macabo',
    description: 'Découvrez la culture du macabo, comment entretenir sont champ, les benefit du macabo est sa rentability. Techniques modernes d\'agriculture et conseils pratiques pour maximiser vos récoltes.',
    video: '/videos/Podcast_macabo.avi',
    thumbnail: '/images/Podcast/one.jpg',
    mp4: null,
    duration: '30:22',
    category: 'Agriculture'
  },
  
];

const PodcastSection = () => {
  const [playingIdx, setPlayingIdx] = useState(null);
  const [loadingIdx, setLoadingIdx] = useState(null);
  const [videoErrors, setVideoErrors] = useState({});
  const videoRefs = useRef([]);

  // Handle video loading
  const handleVideoLoad = (idx) => {
    setLoadingIdx(null);
  };

  // Handle video errors
  const handleVideoError = (idx) => {
    setVideoErrors(prev => ({ ...prev, [idx]: true }));
    setLoadingIdx(null);
  };

  // Handle play button click
  const handlePlayClick = (idx) => {
    setLoadingIdx(idx);
    if (videoRefs.current[idx]) {
      videoRefs.current[idx].play();
    }
  };

  // Category colors
  const getCategoryColor = (category) => {
    const colors = {
      'Politique': 'from-blue-600 to-indigo-600',
      'Agriculture': 'from-green-600 to-emerald-600',
      'Business': 'from-purple-600 to-violet-600'
    };
    return colors[category] || 'from-gray-600 to-gray-700';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Podcasts Vidéo
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez nos contenus vidéo exclusifs sur des sujets qui vous intéressent
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Podcasts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {podcasts.map((podcast, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group"
            >
              {/* Video Container */}
              <div className="relative overflow-hidden">
                <video
                  ref={el => videoRefs.current[idx] = el}
                  controls
                  poster={podcast.thumbnail}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
                  onPlay={() => {
                    setPlayingIdx(idx);
                    setLoadingIdx(null);
                  }}
                  onPause={() => setPlayingIdx(null)}
                  onLoadStart={() => setLoadingIdx(idx)}
                  onLoadedData={() => handleVideoLoad(idx)}
                  onError={() => handleVideoError(idx)}
                  preload="metadata"
                >
                  {/* AVI source with proper MIME type */}
                  <source src={podcast.video} type="video/x-msvideo" />
                  {/* Fallback AVI MIME type */}
                  <source src={podcast.video} type="video/avi" />
                  {/* MP4 fallback if available */}
                  {podcast.mp4 && <source src={podcast.mp4} type="video/mp4" />}
                  {/* WebM fallback */}
                  <source src={podcast.video.replace('.avi', '.webm')} type="video/webm" />
                  Votre navigateur ne supporte pas la lecture vidéo.
                </video>

                {/* Loading Overlay */}
                {loadingIdx === idx && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="flex items-center space-x-2 text-white">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                      <span className="text-sm font-medium">Chargement...</span>
                    </div>
                  </div>
                )}

                {/* Error Overlay */}
                {videoErrors[idx] && (
                  <div className="absolute inset-0 bg-red-100 flex items-center justify-center">
                    <div className="text-center text-red-600 p-4">
                      <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.962-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                      <p className="text-sm font-medium">Erreur de chargement</p>
                      <p className="text-xs mt-1">Vérifiez votre connexion</p>
                    </div>
                  </div>
                )}

                {/* Play Button Overlay */}
                {playingIdx !== idx && !loadingIdx && (
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => handlePlayClick(idx)}
                      className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-4 transform hover:scale-110 transition-all duration-200 shadow-lg"
                    >
                      <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </button>
                  </div>
                )}

                {/* Download Button */}
                {playingIdx === idx && (
                  <a
                    href={podcast.video}
                    download
                    className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full shadow-lg text-sm font-semibold flex items-center gap-2 hover:scale-105 transition-transform duration-200 z-10"
                    title="Télécharger la vidéo"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
                    </svg>
                    Télécharger
                  </a>
                )}

                {/* Category Badge */}
                <div className={`absolute top-4 left-4 bg-gradient-to-r ${getCategoryColor(podcast.category)} text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg`}>
                  {podcast.category}
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs font-medium">
                  {podcast.duration}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                  {podcast.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {podcast.description}
                </p>
                
                {/* Action Buttons */}
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => handlePlayClick(idx)}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                    Regarder
                  </button>
                  
                  <div className="flex items-center gap-3 text-gray-400">
                    <button className="hover:text-red-500 transition-colors duration-200">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                    <button className="hover:text-blue-500 transition-colors duration-200">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-200 shadow-lg">
            Voir plus de podcasts
          </button>
        </div>
      </div>
    </section>
  );
};

export default PodcastSection;