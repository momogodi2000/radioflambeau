
// src/components/Sections/News.jsx
import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  Tag, 
  User, 
  Eye,
  Share2,
  Heart,
  MessageCircle
} from 'lucide-react';

const News = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = [
    { id: 'all', label: 'Toutes', color: 'from-blue-500 to-purple-600' },
    { id: 'radio', label: 'Radio', color: 'from-green-500 to-emerald-600' },
    { id: 'culture', label: 'Culture', color: 'from-purple-500 to-pink-600' },
    { id: 'communaute', label: 'Communauté', color: 'from-orange-500 to-red-600' },
    { id: 'technology', label: 'Technologie', color: 'from-teal-500 to-blue-600' }
  ];
  
  const newsArticles = [
    {
      id: 1,
      title: 'Lancement de notre site web officiel',
      excerpt: 'Radio Flambeau-Banka franchit une nouvelle étape avec le lancement de son site web officiel, permettant à notre communauté mondiale d\'accéder facilement à nos contenus.',
      content: 'Après plusieurs mois de développement, nous sommes fiers de vous présenter notre nouveau site web officiel. Cette plateforme moderne permet à nos auditeurs du monde entier de nous écouter en direct, découvrir nos programmes et interagir avec notre équipe.',
      date: '2025-07-10',
      category: 'technology',
      author: 'Jean-Paul MBARGA',
      readTime: '3 min',
      views: 1247,
      likes: 89,
      comments: 12,
      image: '/images/news/website-launch.jpg',
      gradient: 'from-blue-500 to-indigo-600',
      featured: true
    },
    {
      id: 2,
      title: 'Nouvelle émission: "Femmes d\'Impact"',
      excerpt: 'Découvrez notre nouvelle émission dédiée aux femmes qui font la différence dans notre communauté et au-delà.',
      content: 'Chaque dimanche à 14h, rejoignez-nous pour découvrir les parcours inspirants de femmes qui transforment leur communauté. Des entrepreneures aux leaders associatives, nous donnons la parole à celles qui façonnent l\'avenir.',
      date: '2025-07-08',
      category: 'radio',
      author: 'Célestine ATANGANA',
      readTime: '2 min',
      views: 892,
      likes: 67,
      comments: 8,
      image: '/images/news/femmes-impact.jpg',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      id: 3,
      title: 'Célébration des 10 ans de Radio Flambeau-Banka',
      excerpt: 'Une décennie de service à la communauté, d\'information et de divertissement. Retour sur nos moments forts.',
      content: 'Il y a 10 ans, Radio Flambeau-Banka voyait le jour avec pour mission d\'informer, d\'éduquer et de divertir la population de Banka et ses environs. Aujourd\'hui, nous rayonnons dans le monde entier grâce à notre digitalisation.',
      date: '2025-07-05',
      category: 'radio',
      author: 'Marie ONDOA',
      readTime: '5 min',
      views: 2134,
      likes: 156,
      comments: 23,
      image: '/images/news/10-ans.jpg',
      gradient: 'from-green-500 to-emerald-600',
      featured: true
    },
    {
      id: 4,
      title: 'Festival culturel de Banka 2025',
      excerpt: 'Radio Flambeau-Banka partenaire officiel du Festival culturel de Banka qui se tiendra du 15 au 20 août.',
      content: 'Nous sommes fiers d\'annoncer notre partenariat avec le Festival culturel de Banka 2025. Nos équipes seront présentes pour couvrir l\'événement et vous faire vivre les meilleurs moments.',
      date: '2025-07-03',
      category: 'culture',
      author: 'Robert MFOU',
      readTime: '4 min',
      views: 1456,
      likes: 98,
      comments: 15,
      image: '/images/news/festival.jpg',
      gradient: 'from-orange-500 to-red-600'
    },
    {
      id: 5,
      title: 'Nouveau studio d\'enregistrement',
      excerpt: 'Amélioration de la qualité audio avec l\'installation d\'un nouveau studio d\'enregistrement dernière génération.',
      content: 'Dans notre démarche d\'amélioration continue, nous avons investi dans un nouveau studio d\'enregistrement équipé des dernières technologies pour offrir une qualité audio exceptionnelle à nos auditeurs.',
      date: '2025-07-01',
      category: 'technology',
      author: 'Paul ESSOMBA',
      readTime: '3 min',
      views: 743,
      likes: 54,
      comments: 7,
      image: '/images/news/studio.jpg',
      gradient: 'from-teal-500 to-blue-600'
    },
    {
      id: 6,
      title: 'Partenariat avec les écoles locales',
      excerpt: 'Initiative éducative pour sensibiliser les jeunes aux métiers de la radio et de la communication.',
      content: 'Radio Flambeau-Banka lance un programme de partenariat avec les établissements scolaires de la région pour initier les jeunes aux métiers de la radio et développer leurs compétences en communication.',
      date: '2025-06-28',
      category: 'communaute',
      author: 'Équipe Radio',
      readTime: '3 min',
      views: 1089,
      likes: 87,
      comments: 11,
      image: '/images/news/ecoles.jpg',
      gradient: 'from-indigo-500 to-purple-600'
    }
  ];
  
  const filteredNews = selectedCategory === 'all' 
    ? newsArticles 
    : newsArticles.filter(article => article.category === selectedCategory);
  
  const featuredNews = newsArticles.filter(article => article.featured);
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
  
  const handleShare = (article) => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href
      });
    } else {
      // Fallback pour les navigateurs qui ne supportent pas l'API Share
      const shareText = `${article.title} - ${article.excerpt}`;
      const shareUrl = window.location.href;
      const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
      window.open(twitterUrl, '_blank');
    }
  };
  
  return (
    <section id="actualites" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" ref={ref}>
      <div className="container mx-auto px-4">
        {/* En-tête de section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Actualités
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Restez informé avec nos dernières nouvelles et événements
          </p>
        </motion.div>
        
        {/* Filtres de catégories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>
        
        {/* Articles à la une */}
        {selectedCategory === 'all' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              À la une
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredNews.map((article, index) => (
                <div
                  key={article.id}
                  className={`bg-gradient-to-br ${article.gradient} rounded-3xl p-8 text-white relative overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300`}
                >
                  <div className="relative z-10">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-white/20 px-3 py-1 rounded-full text-sm">
                        <Tag size={14} className="inline mr-2" />
                        {categories.find(c => c.id === article.category)?.label}
                      </div>
                      <div className="flex items-center text-white/80 text-sm">
                        <Calendar size={14} className="mr-2" />
                        {formatDate(article.date)}
                      </div>
                    </div>
                    
                    <h4 className="text-2xl font-bold mb-4">{article.title}</h4>
                    <p className="text-white/90 mb-6 leading-relaxed">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-white/80">
                        <div className="flex items-center">
                          <User size={14} className="mr-2" />
                          {article.author}
                        </div>
                        <div className="flex items-center">
                          <Clock size={14} className="mr-2" />
                          {article.readTime}
                        </div>
                      </div>
                      
                      <ArrowRight size={20} className="transform group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
        
        {/* Grille des articles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
            >
              {/* Image/Gradient header */}
              <div className={`h-48 bg-gradient-to-br ${article.gradient} relative`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm">
                  {categories.find(c => c.id === article.category)?.label}
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center text-sm">
                    <Calendar size={14} className="mr-2" />
                    {formatDate(article.date)}
                  </div>
                </div>
              </div>
              
              {/* Contenu */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                
                {/* Métadonnées */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center">
                      <User size={14} className="mr-1" />
                      {article.author}
                    </div>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                </div>
                
                {/* Statistiques et actions */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Eye size={14} className="mr-1" />
                      {article.views}
                    </div>
                    <div className="flex items-center">
                      <Heart size={14} className="mr-1" />
                      {article.likes}
                    </div>
                    <div className="flex items-center">
                      <MessageCircle size={14} className="mr-1" />
                      {article.comments}
                    </div>
                  </div>
                  
                  <button
                    onClick={() => handleShare(article)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <Share2 size={16} className="text-gray-500" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        
        {/* Bouton voir plus */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-12"
        >
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2 mx-auto">
            <span>Voir plus d'actualités</span>
            <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default News;
