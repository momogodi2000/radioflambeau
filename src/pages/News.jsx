// src/pages/News.jsx
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Search, Calendar, User, ArrowRight, Tag, ChevronRight } from 'lucide-react';

const News = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Updated news data with new content
  const newsItems = [
    {
      id: 1,
      title: "Voix de Femmes : Un programme qui porte leurs voix !",
      excerpt: "Depuis le 23 avril 2025, Radio Flambeau diffuse chaque mercredi à 18H00 'Voix de Femmes', un programme soutenu par PROTEGE QV et Flambeau Dames de Banka avec l'appui de WACC et APC.",
      date: "2025-04-23",
      author: "Mr Gabriel Yossa",
      image: "/images/logo.png",
      category: "programmes",
      tags: ["femmes", "empowerment", "éducation"]
    },
    {
      id: 2,
      title: "Nouveau programme jeunesse pour les vacances",
      excerpt: "Radio Flambeau lance un programme spécial vacances pour les jeunes avec des éducations, des débats et des animations du lundi au vendredi de 15H à 17H.",
      date: "2025-06-10",
      author: "Mr Gabriel Yossa",
      image: "/images/programs/jeunesse.png",
      category: "programmes",
      tags: ["jeunesse", "vacances", "éducation"]
    },
    {
      id: 3,
      title: "Digitalisation en cours de Radio Flambeau",
      excerpt: "PROTEGE QV soutient la transformation digitale de la radio avec l'arrivée prochaine d'un site web officiel et la migration vers une webradio.",
      date: "2025-05-15",
      author: "Mr Gabriel Yossa",
      image: "/images/logo/logo.jpg",
      category: "infrastructure",
      tags: ["digital", "webradio", "innovation"]
    },
    {
      id: 4,
      title: "Clovy Aby et Yvan Momo renforcent l'équipe",
      excerpt: "Les volontaires internationaux de PROTEGE QV apportent leur expertise pour la digitalisation et la conformisation des programmes de la radio.",
      date: "2025-05-01",
      author: "Mr Gabriel Yossa",
      image: "/images/clovy.jpg",
      category: "partenariats",
      tags: ["coopération", "volontariat", "expertise"]
    },
    {
      id: 5,
      title: "Radio Flambeau-Banka célèbre son 15eme anniversaire",
      excerpt: "La radio communautaire de Banka a célébré son 8ème anniversaire avec une série d'événements culturels et musicaux.",
      date: "2023-05-15",
      author: "Mr Gabriel Yossa",
      image: "/images/bafang.jpg",
      category: "événements",
      tags: ["anniversaire", "célébration", "communauté"]
    },
    {
      id: 6,
      title: "Rénovation des studios avec l'appui de PROTEGE QV",
      excerpt: "PROTEGE QV a financé la rénovation complète des studios et l'élaboration d'une nouvelle grille de programmes plus adaptée.",
      date: "2025-04-10",
      author: "Mr Gabriel Yossa",
      image: "/images/qv1.jpg",
      category: "infrastructure",
      tags: ["rénovation", "équipement", "qualité"]
    }
  ];
  
  // Updated categories for filtering
  const categories = [
    { id: 'all', label: 'Tous' },
    { id: 'actualités', label: 'Actualités' },
    { id: 'événements', label: 'Événements' },
    { id: 'programmes', label: 'Programmes' },
    { id: 'culture', label: 'Culture' },
    { id: 'partenariats', label: 'Partenariats' },
    { id: 'infrastructure', label: 'Infrastructure' }
  ];
  
  // Filter news based on search term and category
  const filteredNews = newsItems.filter(item => {
    const matchesSearch = searchTerm === '' || 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  // Format date to French locale
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
  };

  return (
    <>
      <Helmet>
        <title>Actualités - Radio Flambeau-Banka</title>
        <meta name="description" content="Restez informé des dernières actualités et événements de Radio Flambeau-Banka, votre radio communautaire à Banka." />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-blue-600 to-purple-600 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Actualités
              </h1>
              <p className="text-xl md:text-2xl text-blue-100">
                Découvrez les dernières innovations et programmes de Radio Flambeau-Banka
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 md:py-12 bg-white border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              {/* Search Bar */}
              <div className="relative flex-grow max-w-md">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={20} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Rechercher des actualités..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              {/* Categories Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-1 text-sm rounded-full transition-colors ${
                      activeCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* News Grid Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            {filteredNews.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredNews.map((news, index) => (
                  <motion.article
                    key={news.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="aspect-w-16 aspect-h-9">
                      <img 
                        src={news.image} 
                        alt={news.title} 
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded-full">
                          {news.category}
                        </span>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Calendar size={14} className="mr-1" />
                          <span>{formatDate(news.date)}</span>
                        </div>
                      </div>
                      <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                        {news.title}
                      </h2>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {news.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-500 text-sm">
                          <User size={14} className="mr-1" />
                          <span>{news.author}</span>
                        </div>
                        <a 
                          href={`/news/${news.id}`} 
                          className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                        >
                          Lire plus <ArrowRight size={16} className="ml-1" />
                        </a>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg mb-4">
                  Aucune actualité ne correspond à votre recherche.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setActiveCategory('all');
                  }}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Réinitialiser les filtres
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Popular Tags Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Tags populaires
            </h2>
            <div className="flex flex-wrap gap-3">
              {Array.from(new Set(newsItems.flatMap(item => item.tags))).map((tag, index) => (
                <button
                  key={index}
                  onClick={() => setSearchTerm(tag)}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Abonnez-vous à notre newsletter
              </h2>
              <p className="text-blue-100 mb-8">
                Soyez les premiers informés du lancement de notre webradio et de nos nouveaux programmes
              </p>
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="flex-grow px-4 py-3 rounded-lg focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  S'abonner
                </button>
              </form>
              <p className="text-sm text-blue-100 mt-4">
                Nous respectons votre vie privée. Vous pouvez vous désabonner à tout moment.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default News;