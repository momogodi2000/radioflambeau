// src/pages/Gallery.jsx
import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  Camera, 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  ExternalLink, 
  Play,
  Heart,
  Share2,
  Filter,
  Search,
  Grid,
  List,
  Star,
  Award,
  Mic,
  Music,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Eye,
  Download,
  Tag,
  ArrowRight,
  Zap,
  Sparkles,
  X,
  ChevronLeft,
  ChevronRight,
  Image as ImageIcon
} from 'lucide-react';

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeSection, setActiveSection] = useState('events'); // 'events' or 'gallery'

  const categories = [
    { id: 'all', label: 'Tout', icon: Grid, color: 'from-blue-500 to-purple-600' },
    { id: 'events', label: 'Événements', icon: Calendar, color: 'from-green-500 to-emerald-600' },
    { id: 'projects', label: 'Projets', icon: Zap, color: 'from-orange-500 to-red-600' },
    { id: 'shows', label: 'Émissions', icon: Mic, color: 'from-purple-500 to-pink-600' },
    { id: 'behind-scenes', label: 'Coulisses', icon: Camera, color: 'from-teal-500 to-blue-600' },
    { id: 'community', label: 'Communauté', icon: Users, color: 'from-indigo-500 to-purple-600' }
  ];

  const galleryCategories = [
    { id: 'all', label: 'Tous' },
    { id: 'studio', label: 'Studio' },
    { id: 'events', label: 'Événements' },
    { id: 'team', label: 'Équipe' },
    { id: 'field', label: 'Reportages' }
  ];

  const galleryItems = [
    {
      id: 1,
      title: 'Lancement du Projet "Voix de Femmes"',
      description: 'Cérémonie officielle du lancement de l\'émission révolutionnaire qui donne la parole aux femmes de Banka.',
      category: 'projects',
      type: 'video',
      date: '2025-04-23',
      location: 'Studio Radio Flambeau-Banka',
      image: '/images/gallery/first-voix-femmes.jpg',
      thumbnail: '/images/gallery/first-voix-femmes.jpg',
      links: {
        youtube: 'https://www.youtube.com/watch?v=DSrdKNCNMBM',
        facebook: 'https://facebook.com/radioflambeaubanka/posts/voix-femmes-launch',
        instagram: 'https://instagram.com/p/voix-femmes-launch'
      },
      tags: ['Voix de Femmes', 'PROTEGE QV', 'Autonomisation', 'Innovation'],
      featured: true,
      stats: { views: 2847, likes: 234, shares: 89 },
      participants: ['PROTEGE QV Association', 'Femmes Générales Tchonte Zemekam', 'Mutuelle des Amies']
    },
    {
      id: 2,
      title: 'Première Émission "Voix de Femmes"',
      description: 'Diffusion historique de la première émission, marquant une nouvelle ère pour la radio communautaire.',
      category: 'shows',
      type: 'audio',
      date: '2025-04-23',
      time: '18:00',
      location: '91.5 MHz - Haut-Nkam',
      image: '/images/gallery/first-voix-femmes.jpg',
      thumbnail: '/images/gallery/logo.png',
      links: {
        youtube: 'https://www.youtube.com/watch?v=DSrdKNCNMBM',
        facebook: 'https://facebook.com/radioflambeaubanka/videos/first-voix-femmes',
        soundcloud: 'https://soundcloud.com/radioflambeaubanka/voix-femmes-ep1'
      },
      tags: ['Émission', 'Direct', 'Femmes', 'Haut-Nkam'],
      featured: true,
      stats: { views: 1956, likes: 187, shares: 64 },
      duration: '60 minutes'
    },
    {
      id: 3,
      title: 'Réhabilitation du Studio',
      description: 'Transformation complète du studio radio avec l\'aide de PROTEGE QV Association.',
      category: 'projects',
      type: 'gallery',
      date: '2025-01-15',
      location: 'Radio Flambeau-Banka',
      image: '/images/gallery/studio-renovation.jpg',
      thumbnail: '/images/gallery/studio-renovation.jpg',
      links: {
        facebook: 'https://facebook.com/radioflambeaubanka/albums/studio-renovation',
        instagram: 'https://instagram.com/p/studio-renovation',
        flickr: 'https://flickr.com/radioflambeaubanka/sets/studio-renovation'
      },
      tags: ['Rénovation', 'PROTEGE QV', 'Modernisation', 'Équipements'],
      stats: { views: 1543, likes: 156, shares: 43 },
      imageCount: 25
    },
    {
      id: 4,
      title: 'Festival Culturel de Banka 2025',
      description: 'Couverture spéciale du festival culturel annuel avec retransmission en direct.',
      category: 'events',
      type: 'live',
      date: '2025-06-15',
      time: 'Toute la journée',
      location: 'Place Publique de Banka',
      image: '/images/gallery/cultural-festival.jpg',
      thumbnail: '/images/gallery/cultural-festival.jpg',
      links: {
        youtube: 'https://www.youtube.com/live/cultural-festival-banka-2025',
        facebook: 'https://facebook.com/radioflambeaubanka/live/cultural-festival',
        instagram: 'https://instagram.com/p/cultural-festival-2025'
      },
      tags: ['Festival', 'Culture', 'Direct', 'Tradition'],
      upcoming: false,
      stats: { views: 3521, likes: 298, shares: 124 },
      attendees: '5000+'
    },
    {
      id: 5,
      title: 'Formation des Animatrices',
      description: 'Session de formation intensive pour les femmes productrices d\'émissions radio.',
      category: 'projects',
      type: 'gallery',
      date: '2025-03-10',
      location: 'Centre de Formation PROTEGE QV',
      image: '/images/gallery/training-session.jpg',
      thumbnail: '/images/gallery/training-session.jpg',
      links: {
        facebook: 'https://facebook.com/radioflambeaubanka/posts/training-session',
        instagram: 'https://instagram.com/p/training-session',
        linkedin: 'https://linkedin.com/company/protegeqv/posts/training'
      },
      tags: ['Formation', 'Femmes', 'Compétences', 'Radio'],
      stats: { views: 987, likes: 89, shares: 34 },
      participants: ['15 femmes formées', 'PROTEGE QV', 'Experts radio']
    },
    {
      id: 6,
      title: 'Coulisses du Studio',
      description: 'Découvrez l\'envers du décor et le quotidien de l\'équipe radio.',
      category: 'behind-scenes',
      type: 'gallery',
      date: '2025-05-20',
      location: 'Studio Radio Flambeau-Banka',
      image: '/images/gallery/behind-scenes.jpg',
      thumbnail: '/images/gallery/behind-scenes.jpg',
      links: {
        instagram: 'https://instagram.com/p/behind-scenes-daily',
        facebook: 'https://facebook.com/radioflambeaubanka/posts/behind-scenes',
        tiktok: 'https://tiktok.com/@radioflambeaubanka/behind-scenes'
      },
      tags: ['Coulisses', 'Équipe', 'Quotidien', 'Studio'],
      stats: { views: 1234, likes: 145, shares: 67 },
      imageCount: 18
    },
    {
      id: 7,
      title: 'Émission Spéciale Jeunesse',
      description: 'Programme dédié aux jeunes talents de Banka avec showcase musical.',
      category: 'shows',
      type: 'video',
      date: '2025-06-01',
      time: '20:00',
      location: 'Studio Radio Flambeau-Banka',
      image: '/images/gallery/youth-special.jpg',
      thumbnail: '/images/gallery/jeunesse.png',
      links: {
        youtube: 'https://www.youtube.com/watch?v=youth-special-banka',
        facebook: 'https://facebook.com/radioflambeaubanka/videos/youth-special',
        instagram: 'https://instagram.com/p/youth-special'
      },
      tags: ['Jeunesse', 'Musique', 'Talents', 'Showcase'],
      stats: { views: 2156, likes: 234, shares: 78 },
      duration: '90 minutes'
    },
    {
      id: 8,
      title: 'Journée Portes Ouvertes',
      description: 'La communauté découvre les installations modernisées de Radio Flambeau-Banka.',
      category: 'events',
      type: 'gallery',
      date: '2025-05-01',
      time: '09:00 - 17:00',
      location: 'Radio Flambeau-Banka',
      image: '/images/gallery/open-house.jpg',
      thumbnail: '/images/gallery/jeunesse.png',
      links: {
        facebook: 'https://facebook.com/radioflambeaubanka/albums/open-house-2025',
        instagram: 'https://instagram.com/p/open-house-2025',
        youtube: 'https://www.youtube.com/watch?v=open-house-highlights'
      },
      tags: ['Portes Ouvertes', 'Communauté', 'Visite', 'Découverte'],
      stats: { views: 1876, likes: 167, shares: 89 },
      attendees: '300+',
      imageCount: 45
    },
    {
      id: 9,
      title: 'Série Documentaire "Femmes de Banka"',
      description: 'Portrait de femmes inspirantes qui transforment leur communauté.',
      category: 'projects',
      type: 'video',
      date: '2025-07-01',
      location: 'Diverses locations à Banka',
      image: '/images/gallery/women-documentary.jpg',
      thumbnail: '/images/gallery/women-documentary.jpg',
      links: {
        youtube: 'https://www.youtube.com/playlist?list=women-of-banka',
        facebook: 'https://facebook.com/radioflambeaubanka/videos/women-documentary',
        instagram: 'https://instagram.com/p/women-documentary-series'
      },
      tags: ['Documentaire', 'Femmes', 'Inspiration', 'Série'],
      upcoming: true,
      stats: { views: 0, likes: 0, shares: 0 },
      episodes: 6
    },
    {
      id: 10,
      title: 'Concert Acoustique Live',
      description: 'Session acoustique intime avec des artistes locaux en direct du studio.',
      category: 'shows',
      type: 'live',
      date: '2025-07-15',
      time: '19:00',
      location: 'Studio Radio Flambeau-Banka',
      image: '/images/gallery/acoustic-concert.jpg',
      thumbnail: '/images/gallery/acoustic-concert.jpg',
      links: {
        youtube: 'https://www.youtube.com/live/acoustic-concert-july',
        facebook: 'https://facebook.com/radioflambeaubanka/live/acoustic-concert',
        instagram: 'https://instagram.com/p/acoustic-concert-live'
      },
      tags: ['Concert', 'Acoustique', 'Live', 'Artistes Locaux'],
      upcoming: true,
      stats: { views: 0, likes: 0, shares: 0 },
      artists: ['Marie Tchombe', 'Jean-Paul Ndongo', 'Les Voix du Haut-Nkam']
    }
  ];

  // Galerie d'images traditionnelle
  const galleryImages = [
    {
      id: 1,
      src: '/images/team/gabriel-1.jpg',
      alt: 'Mr Yossa en studio',
      category: 'studio',
      title: 'Mr Gabriel yossa en direct',
      description: 'Animation de l\'émission matinale'
    },
    {
      id: 2,
      src: '/images/team/test.jpg',
      alt: 'Naomie en interview',
      category: 'events',
      title: 'Interview exclusive',
      description: 'Naomie avec notre invité spécial'
    },
    {
      id: 3,
      src: '/images/team/gabriel-2.jpg',
      alt: 'Mr Gabriel yossa en reportage',
      category: 'field',
      title: 'Reportage terrain',
      description: 'Mr Gabriel yossa en reportage à Banka'
    },
    {
      id: 4,
      src: '/images/bafang.jpg',
      alt: 'Studio principal',
      category: 'studio',
      title: 'Notre studio principal',
      description: 'Équipement professionnel pour une qualité optimale'
    },
    {
      id: 5,
      src: '/images/clovy.jpg',
      alt: 'Digitalisation de la radio flambeau banka',
      category: 'events',
      title: 'Digitalisation de la radio flambeau banka',
      description: 'La stagiare Canadaine Mme Clovy de Association PROTEGE QV a fait une visite de la radio flambeau banka'
    },
    {
      id: 6,
      src: '/images/protege.jpg',
      alt: 'Nos Partenaires Protege QV',
      category: 'team',
      title: 'Protege Qv Association',
      description: 'Promotion des Technologies Garantes de l\'Environnement et de la Qualité de Vie (PROTEGE QV)'
    },
    {
      id: 7,
      src: '/images/qv1.jpg',
      alt: 'PROTEGE QV outille des femmes professionnelles en sécurité numérique',
      category: 'team',
      title: 'PROTEGE QV outille des femmes professionnelles en sécurité numérique',
      description: 'Le 15 mai 2025, une trentaine de professionnelles anglophones et francophones (journalistes, enseignantes, bloggeuses, women tech, OSC, etc….) '
    },
    {
      id: 8,
      src: '/images/logo.png',
      alt: 'Émission matinale',
      category: 'studio',
      title: 'Émission matinale',
      description: 'Réveil en douceur avec Radio Flambeau-Banka'
    },
    {
      id: 9,
      src: '/images/logo.png',
      alt: 'Voix de Femmes',
      category: 'studio',
      title: 'Voix de Femmes',
      description: 'Voix de Femmes est une émission de radio qui vise à promouvoir la voix des femmes et à les aider à se développer.'
    },
    {
      id: 10,
      src: '/images/programs/news.jpg',
      alt: 'Bulletin d\'information',
      category: 'studio',
      title: 'Bulletin d\'information',
      description: 'L\'actualité locale et nationale en direct'
    },
    {
      id: 11,
      src: '/images/flyer.png',
      alt: 'Événement spécial',
      category: 'events',
      title: 'Concert annuel',
      description: 'Radio Flambeau-Banka présente les talents locaux'
    },
    {
      id: 12,
      src: '/images/team/naomie-4.jpg',
      alt: 'Naomie a emmission de radio flambeau banka ',
      category: 'field',
      title: 'thematique de l\'emission de radio flambeau banka chaque jour a midi',
      description: 'utilisation de la radio pour promouvoir les activités communautaires et les projets de la region'
    }
  ];

  const filteredItems = galleryItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const featuredItems = galleryItems.filter(item => item.featured);

  const getTypeIcon = (type) => {
    switch (type) {
      case 'video': return Play;
      case 'audio': return Music;
      case 'gallery': return Camera;
      case 'live': return Zap;
      default: return Camera;
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction) => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    }
    
    setSelectedImage(filteredImages[newIndex]);
  };

  const downloadImage = () => {
    if (!selectedImage) return;
    
    const link = document.createElement('a');
    link.href = selectedImage.src;
    link.download = `radio-flambeau-${selectedImage.id}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Helmet>
        <title>Galerie & Événements - Radio Flambeau-Banka</title>
        <meta name="description" content="Découvrez notre galerie d'événements, projets et émissions. Photos, vidéos et contenus exclusifs de Radio Flambeau-Banka et du projet Voix de Femmes." />
        <meta name="keywords" content="galerie radio flambeau banka, événements radio cameroun, voix de femmes photos, projets radio communautaire" />
      </Helmet>

      <div ref={ref} className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Galerie & Événements
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                Découvrez nos moments forts, projets innovants et l'évolution de Radio Flambeau-Banka en images et vidéos.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Album Videos or Photos Section */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl px-8 py-6 shadow-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 flex items-center justify-center gap-2">
                <Camera size={28} />
                Voir tous les albums photos & vidéos
              </h2>
              <p className="text-white/90 mb-4">Accédez à l'intégralité de nos médias sur Google Drive (ouvre dans un nouvel onglet).</p>
              <a
                href="https://drive.google.com/drive/folders/1AMRRL1fGQT9ePiJCWnVy5f5VICkX-rDQ?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-blue-50 transition-all text-lg"
              >
                <ExternalLink size={20} />
                Accéder à l'album Google Drive
              </a>
            </div>
          </div>
        </section>

        {/* Section Selector */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex justify-center space-x-4 mb-8">
              <button
                onClick={() => setActiveSection('events')}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeSection === 'events'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Calendar size={20} />
                <span>Événements & Projets</span>
              </button>
              <button
                onClick={() => setActiveSection('gallery')}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeSection === 'gallery'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <ImageIcon size={20} />
                <span>Galerie Photos</span>
              </button>
            </div>
          </div>
        </section>

        {activeSection === 'events' && (
          <>
            {/* Featured Section */}
            <section className="py-16">
              <div className="container mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8 }}
                  className="text-center mb-12"
                >
                  <h2 className="text-4xl font-bold bg-gradient-to-r bg-clip-text text-transparent mb-4 [--tw-gradient-from:#7c3aed] [--tw-gradient-to:#ec4899]">
                    À la Une
                  </h2>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Nos moments les plus marquants et nos projets phares
                  </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 mb-16">
                  {featuredItems.slice(0, 2).map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 50 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.8, delay: index * 0.2 }}
                      className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                      onClick={() => setSelectedItem(item)}
                    >
                      <div className="relative">
                        <img 
                          src={item.thumbnail || '/images/fallback.jpg'} 
                          alt={item.title}
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={e => { e.target.src = '/images/fallback.jpg'; }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div className="absolute top-4 right-4">
                          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                            <Star size={14} />
                            <span>Featured</span>
                          </span>
                        </div>
                        <div className="absolute bottom-4 left-4">
                          <div className="flex items-center space-x-2 text-white">
                            {React.createElement(getTypeIcon(item.type), { size: 20 })}
                            <span className="text-sm font-medium capitalize">{item.type}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-sm text-gray-500">{formatDate(item.date)}</span>
                          <div className="flex items-center space-x-4 text-gray-500">
                            <div className="flex items-center space-x-1">
                              <Eye size={14} />
                              <span className="text-sm">{item.stats.views}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Heart size={14} />
                              <span className="text-sm">{item.stats.likes}</span>
                            </div>
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {item.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {item.tags.slice(0, 3).map((tag, tagIndex) => (
                            <span key={tagIndex} className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs">
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex space-x-2">
                            {item.links.youtube && (
                              <a href={item.links.youtube} target="_blank" rel="noopener noreferrer" 
                                 className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-colors">
                                <Youtube size={14} />
                              </a>
                            )}
                            {item.links.facebook && (
                              <a href={item.links.facebook} target="_blank" rel="noopener noreferrer"
                                 className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                                <Facebook size={14} />
                              </a>
                            )}
                            {item.links.instagram && (
                              <a href={item.links.instagram} target="_blank" rel="noopener noreferrer"
                                 className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white hover:bg-pink-600 transition-colors">
                                <Instagram size={14} />
                              </a>
                            )}
                          </div>
                          <button className="flex items-center space-x-1 text-purple-600 hover:text-purple-700 font-medium">
                            <span>Voir plus</span>
                            <ArrowRight size={16} />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Filters and Search */}
            <section className="py-8 bg-white">
              <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                  {/* Categories */}
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                          selectedCategory === category.id
                            ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        <category.icon size={16} />
                        <span>{category.label}</span>
                      </button>
                    ))}
                  </div>

                  {/* Search and View Controls */}
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Rechercher..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                      />
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setViewMode('grid')}
                        className={`p-2 rounded-lg transition-colors ${
                          viewMode === 'grid' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        <Grid size={20} />
                      </button>
                      <button
                        onClick={() => setViewMode('list')}
                        className={`p-2 rounded-lg transition-colors ${
                          viewMode === 'list' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        <List size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-16">
              <div className="container mx-auto px-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedCategory + searchTerm + viewMode}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.6 }}
                    className={
                      viewMode === 'grid' 
                        ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8'
                        : 'space-y-6'
                    }
                  >
                    {filteredItems.map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className={`group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer ${
                          viewMode === 'list' ? 'flex items-center' : ''
                        }`}
                        onClick={() => setSelectedItem(item)}
                      >
                        <div className={`relative ${viewMode === 'list' ? 'w-48 h-32 flex-shrink-0' : 'w-full h-48'}`}>
                          <img 
                            src={item.thumbnail || '/images/fallback.jpg'} 
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            onError={e => { e.target.src = '/images/fallback.jpg'; }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                          
                          {item.upcoming && (
                            <div className="absolute top-3 left-3">
                              <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                                <Sparkles size={12} />
                                <span>À venir</span>
                              </span>
                            </div>
                          )}
                          
                          <div className="absolute bottom-3 right-3">
                            <div className="flex items-center space-x-1 bg-black/50 text-white px-2 py-1 rounded-full text-xs">
                              {React.createElement(getTypeIcon(item.type), { size: 12 })}
                              <span className="capitalize">{item.type}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-sm text-gray-500">{formatDate(item.date)}</span>
                            {!item.upcoming && (
                              <div className="flex items-center space-x-3 text-gray-500">
                                <div className="flex items-center space-x-1">
                                  <Eye size={12} />
                                  <span className="text-xs">{item.stats.views}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Heart size={12} />
                                  <span className="text-xs">{item.stats.likes}</span>
                                </div>
                              </div>
                            )}
                          </div>
                          
                          <h3 className={`font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors ${
                            viewMode === 'list' ? 'text-lg' : 'text-base'
                          }`}>
                            {item.title}
                          </h3>
                          
                          <p className={`text-gray-600 mb-3 ${
                            viewMode === 'list' ? 'line-clamp-2' : 'line-clamp-3'
                          }`}>
                            {item.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-1 mb-3">
                            {item.tags.slice(0, viewMode === 'list' ? 2 : 3).map((tag, tagIndex) => (
                              <span key={tagIndex} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                                {tag}
                              </span>
                            ))}
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex space-x-1">
                              {item.links.youtube && (
                                <a href={item.links.youtube} target="_blank" rel="noopener noreferrer" 
                                   onClick={(e) => e.stopPropagation()}
                                   className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-colors">
                                  <Youtube size={10} />
                                </a>
                              )}
                              {item.links.facebook && (
                                <a href={item.links.facebook} target="_blank" rel="noopener noreferrer"
                                   onClick={(e) => e.stopPropagation()}
                                   className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                                  <Facebook size={10} />
                                </a>
                              )}
                              {item.links.instagram && (
                                <a href={item.links.instagram} target="_blank" rel="noopener noreferrer"
                                   onClick={(e) => e.stopPropagation()}
                                   className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center text-white hover:bg-pink-600 transition-colors">
                                  <Instagram size={10} />
                                </a>
                              )}
                            </div>
                            <ExternalLink size={16} className="text-gray-400 group-hover:text-purple-600 transition-colors" />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </section>
          </>
        )}

        {activeSection === 'gallery' && (
          <>
            {/* Gallery Section */}
            <section className="py-16 md:py-24">
              <div className="container mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8 }}
                  className="text-center mb-12"
                >
                  <h2 className="text-4xl font-bold bg-gradient-to-r bg-clip-text text-transparent mb-4 [--tw-gradient-from:#7c3aed] [--tw-gradient-to:#ec4899]">
                    Galerie Photos
                  </h2>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Découvrez Radio Flambeau-Banka en images
                  </p>
                </motion.div>

                {/* Category Filters */}
                <div className="mb-12">
                  <div className="flex flex-wrap justify-center gap-3">
                    {galleryCategories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`px-6 py-2 rounded-full transition-colors ${
                          selectedCategory === category.id
                            ? 'bg-blue-600 text-white'
                            : 'bg-white text-gray-700 hover:bg-gray-100'
                        } shadow-sm`}
                      >
                        {category.label}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {filteredImages.map((image, index) => (
                    <motion.div
                      key={image.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow bg-white"
                    >
                      <div 
                        className="aspect-w-4 aspect-h-3 cursor-pointer"
                        onClick={() => openLightbox(image)}
                      >
                        <img 
                          src={image.src} 
                          alt={image.alt} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                          onError={e => { e.target.src = '/images/fallback.jpg'; }}
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                        <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                        <p className="text-white/80 text-sm">{image.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Empty State */}
                {filteredImages.length === 0 && (
                  <div className="text-center py-16">
                    <p className="text-gray-500 text-lg">
                      Aucune image trouvée dans cette catégorie.
                    </p>
                  </div>
                )}
              </div>
            </section>

            {/* Banka Town Presentation Video */}
            <section className="py-12">
              <div className="container mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="max-w-3xl mx-auto"
                >
                  <div className="bg-white rounded-3xl overflow-hidden">
                    <div className="relative group">
                      <video
                        src="https://drive.google.com/uc?export=preview&id=1CHZ4m_AY7jmuVlANi_x75X6uGLZHDhd8"
                        controls
                        poster="/images/bafang.jpg"
                        className="w-full h-72 md:h-96 object-cover rounded-3xl transition-transform duration-500 group-hover:scale-105"
                        style={{ background: "#222" }}
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                        <span className="text-white text-2xl font-bold drop-shadow-lg animate-fade-in">
                          Présentation de la Ville de Banka
                        </span>
                        <span className="mt-2 text-white/80 text-base font-medium drop-shadow animate-fade-in">
                          Découvrez l’histoire, la culture et la beauté de Banka à travers cette vidéo immersive.
                        </span>
                      </div>
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full shadow-lg text-sm font-semibold animate-fade-in">
                        🎬 Vidéo officielle
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>
          </>
        )}

     
      </div>

      {/* Item Detail Modal */}
      {selectedItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img 
                src={selectedItem.image} 
                alt={selectedItem.title}
                className="w-full h-64 md:h-80 object-cover"
                onError={e => { e.target.src = '/images/fallback.jpg'; }}
              />
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                ✕
              </button>
            </div>
            
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">{selectedItem.title}</h2>
                  <div className="flex items-center space-x-4 text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{formatDate(selectedItem.date)}</span>
                    </div>
                    {selectedItem.time && (
                      <div className="flex items-center space-x-1">
                        <Clock size={16} />
                        <span>{selectedItem.time}</span>
                      </div>
                    )}
                    {selectedItem.location && (
                      <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span>{selectedItem.location}</span>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  {Object.entries(selectedItem.links).map(([platform, url]) => {
                    const icons = {
                      youtube: Youtube,
                      facebook: Facebook,
                      instagram: Instagram,
                      twitter: Twitter
                    };
                    const colors = {
                      youtube: 'bg-red-500 hover:bg-red-600',
                      facebook: 'bg-blue-600 hover:bg-blue-700',
                      instagram: 'bg-pink-500 hover:bg-pink-600',
                      twitter: 'bg-sky-500 hover:bg-sky-600'
                    };
                    const Icon = icons[platform];
                    
                    return Icon ? (
                      <a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-10 h-10 ${colors[platform]} rounded-full flex items-center justify-center text-white transition-colors`}
                      >
                        <Icon size={20} />
                      </a>
                    ) : null;
                  })}
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                {selectedItem.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedItem.tags.map((tag, index) => (
                  <span key={index} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              
              {!selectedItem.upcoming && (
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-800">{selectedItem.stats.views}</div>
                    <div className="text-sm text-gray-600">Vues</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-800">{selectedItem.stats.likes}</div>
                    <div className="text-sm text-gray-600">J'aime</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-800">{selectedItem.stats.shares}</div>
                    <div className="text-sm text-gray-600">Partages</div>
                  </div>
                </div>
              )}
              
              {selectedItem.participants && (
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Participants :</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.participants.map((participant, index) => (
                      <span key={index} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">
                        {participant}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Lightbox for Gallery Images */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="absolute top-4 right-4 z-10 flex gap-4">
            <button
              onClick={downloadImage}
              className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
              aria-label="Télécharger l'image"
            >
              <Download size={24} />
            </button>
            <button
              onClick={closeLightbox}
              className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
              aria-label="Fermer"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="relative w-full max-w-5xl max-h-[80vh]">
            <div className="relative h-full flex items-center justify-center">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt} 
                className="max-h-[80vh] max-w-full object-contain"
                onError={e => { e.target.src = '/images/fallback.jpg'; }}
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
                <h3 className="font-semibold text-lg">{selectedImage.title}</h3>
                <p className="text-white/80 text-sm">{selectedImage.description}</p>
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
              aria-label="Image précédente"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
              aria-label="Image suivante"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;