// src/pages/Programs.jsx
import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useInView } from 'framer-motion';
import { 
  Clock, 
  Calendar, 
  Users, 
  Play, 
  Mic, 
  Filter,
  Search,
  Heart,
  MessageCircle,
  Music,
  Phone,
  Mail
} from 'lucide-react';

const Programs = () => {
  console.log('Programs component is rendering...');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [selectedDay, setSelectedDay] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  const days = ['all', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];
  const categories = ['all', 'actualités', 'musique', 'culture', 'éducation', 'divertissement', 'religion', 'société'];
  
  const programs = [
    {
      id: 1,
      title: 'Réveil Matinal',
      host: 'Mr. Gabriel YOSSA',
      time: '06:00 - 09:00',
      category: 'actualités',
      days: ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi'],
      description: 'Commencez votre journée avec les dernières actualités nationales et internationales, la météo détaillée, les chroniques économiques et une sélection musicale énergisante pour bien démarrer la journée.',
      image: '/images/programs/reveil-matinal.jpg',
      color: 'from-orange-400 to-red-500',
      duration: '3h',
      type: 'live',
      interactive: true,
      phone: '+237 693 45 67 89',
      email: 'reveil@radioflambeaubanka.com'
    },
    {
      id: 2,
      title: 'Journal Parlé',
      host: 'Mme Naomie DJEUKAM',
      time: '12:00 - 13:00',
      category: 'actualités',
      days: ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'],
      description: 'Le rendez-vous quotidien avec l\'actualité locale, nationale et internationale. Informations vérifiées, analyses approfondies et interviews exclusives présentées par notre équipe de journalistes expérimentés.',
      image: '/images/programs/journal.jpg',
      color: 'from-blue-600 to-purple-600',
      duration: '1h',
      type: 'live',
      interactive: false,
      phone: '+237 693 45 67 90',
      email: 'journal@radioflambeaubanka.com'
    },
    {
      id: 3,
      title: 'Variétés Africaines',
      host: 'Mr. Gabriel YOSSA',
      time: '15:00 - 17:00',
      category: 'musique',
      days: ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'],
      description: 'Un voyage musical fascinant à travers l\'Afrique avec les meilleurs hits contemporains, les classiques intemporels et les nouvelles découvertes. Interviews d\'artistes, chroniques musicales et dédicaces.',
      image: '/images/programs/varietes.jpg',
      color: 'from-green-500 to-emerald-500',
      duration: '2h',
      type: 'live',
      interactive: true,
      phone: '+237 693 45 67 91',
      email: 'musique@radioflambeaubanka.com'
    },
    {
      id: 4,
      title: 'Débat Citoyen',
      host: 'Mme Naomie DJEEKAM',
      time: '18:00 - 19:00',
      category: 'culture',
      days: ['lundi', 'mercredi', 'vendredi'],
      description: 'Discussions ouvertes et démocratiques sur les enjeux sociétaux contemporains avec la participation active des auditeurs. Débats constructifs, témoignages et solutions concrètes pour notre société.',
      image: '/images/programs/debat.jpg',
      color: 'from-purple-600 to-pink-600',
      duration: '1h',
      type: 'live',
      interactive: true,
      phone: '+237 693 45 67 92',
      email: 'debat@radioflambeaubanka.com'
    },
    {
      id: 5,
      title: 'Femmes d\'Impact',
      host: 'Mme Naomie DJEUKAM',
      time: '14:00 - 15:00',
      category: 'culture',
      days: ['dimanche'],
      description: 'Portraits inspirants de femmes exceptionnelles qui transforment leur communauté. Entrepreneures, leaders, artistes et militantes partagent leurs parcours, défis et succès pour inspirer la nouvelle génération.',
      image: '/images/programs/femmes.jpg',
      color: 'from-red-500 to-orange-500',
      duration: '1h',
      type: 'live',
      interactive: true,
      phone: '+237 693 45 67 93',
      email: 'femmes@radioflambeaubanka.com'
    },
    {
      id: 6,
      title: 'Éducation & Avenir',
      host: 'Mr. Gabriel YOSSA',
      time: '10:00 - 11:00',
      category: 'éducation',
      days: ['samedi'],
      description: 'Programmes éducatifs spécialisés pour accompagner les jeunes dans leur formation académique et professionnelle. Conseils d\'orientation, méthodologie d\'étude et témoignages d\'experts.',
      image: '/images/programs/education.jpg',
      color: 'from-blue-600 to-purple-600',
      duration: '1h',
      type: 'live',
      interactive: true,
      phone: '+237 693 45 67 94',
      email: 'education@radioflambeaubanka.com'
    },
    {
      id: 7,
      title: 'Culture & Traditions',
      host: 'Mr. Gabriel YOSSA',
      time: '16:00 - 17:00',
      category: 'culture',
      days: ['samedi'],
      description: 'Découverte passionnante des traditions ancestrales et de la richesse culturelle camerounaise. Contes, légendes, musiques traditionnelles et rencontres avec les gardiens de nos traditions.',
      image: '/images/programs/culture.jpg',
      color: 'from-yellow-500 to-orange-500',
      duration: '1h',
      type: 'live',
      interactive: true,
      phone: '+237 693 45 67 95',
      email: 'culture@radioflambeaubanka.com'
    },
    {
      id: 8,
      title: 'Nuit Musicale',
      host: 'Programmation automatique',
      time: '22:00 - 06:00',
      category: 'musique',
      days: ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'],
      description: 'Musiques douces et mélodies apaisantes pour accompagner vos nuits. Sélection soigneuse de jazz, blues, soul et musiques du monde pour créer une ambiance relaxante et favoriser le sommeil.',
      image: '/images/programs/nuit.jpg',
      color: 'from-indigo-600 to-blue-600',
      duration: '8h',
      type: 'auto',
      interactive: false
    },
    {
      id: 9,
      title: 'Radio Culturelle',
      host: 'Mme Naomie DJEUKAM',
      time: '18:00 - 19:00',
      category: 'culture',
      days: ['jeudi'],
      description: 'Rendez-vous hebdomadaire dédié à la promotion de la culture sous toutes ses formes. Littérature, arts visuels, théâtre, cinéma africain et événements culturels locaux sont au programme de cette émission enrichissante.',
      image: '/images/programs/radio-culturelle.jpg',
      color: 'from-purple-600 to-pink-600',
      duration: '1h',
      type: 'live',
      interactive: true,
      phone: '+237 693 45 67 96',
      email: 'radioculture@radioflambeaubanka.com'
    },
    {
      id: 10,
      title: 'Agopastoral',
      host: 'Mr. Gabriel YOSSA',
      time: '12:00 - 13:00',
      category: 'éducation',
      days: ['mardi'],
      description: 'Émission spécialisée dans l\'agriculture et l\'élevage moderne. Conseils pratiques, techniques innovantes, gestion des cultures et du bétail, marchés agricoles et développement rural durable pour nos communautés.',
      image: '/images/programs/agopastoral.jpg',
      color: 'from-green-600 to-emerald-600',
      duration: '1h',
      type: 'live',
      interactive: true,
      phone: '+237 693 45 67 97',
      email: 'agropastoral@radioflambeaubanka.com'
    },
    {
      id: 11,
      title: 'Débat du Matinal',
      host: 'Mr. Gabriel YOSSA & invités',
      time: '07:30 - 08:30',
      category: 'actualités',
      days: ['mardi', 'jeudi'],
      description: 'Segment spécial du réveil matinal consacré aux débats d\'actualité. Politiques, économistes, sociologues et citoyens débattent des questions brûlantes qui préoccupent notre société dans un format interactif et dynamique.',
      image: '/images/programs/debat-matinal.jpg',
      color: 'from-red-600 to-orange-600',
      duration: '1h',
      type: 'live',
      interactive: true,
      phone: '+237 693 45 67 98',
      email: 'debatmatinal@radioflambeaubanka.com'
    },
    {
      id: 12,
      title: 'Travail et Sécurité',
      host: 'Mme Naomie DJEUKAM',
      time: '15:00 - 16:00',
      category: 'société',
      days: ['jeudi'],
      description: 'Émission dédiée aux questions du travail et de la sécurité professionnelle. Droits des travailleurs, prévention des accidents, santé au travail, réglementation et conseils pratiques pour un environnement professionnel sûr.',
      image: '/images/programs/travail-securite.jpg',
      color: 'from-purple-600 to-pink-600',
      duration: '1h',
      type: 'live',
      interactive: true,
      phone: '+237 693 45 67 99',
      email: 'travailsecurite@radioflambeaubanka.com'
    }
  ];
  
    const filteredPrograms = programs.filter(program => {
    const matchesDay = selectedDay === 'all' || program.days.includes(selectedDay);
    const matchesCategory = selectedCategory === 'all' || program.category === selectedCategory;
    const matchesSearch = program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         program.host.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         program.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesDay && matchesCategory && matchesSearch;
  });

  // Debug: Check if programs are being filtered correctly
  console.log('Total programs:', programs.length);
  console.log('Filtered programs:', filteredPrograms.length);
  console.log('Selected day:', selectedDay);
  console.log('Selected category:', selectedCategory);
  console.log('Search term:', searchTerm);
    
    return (
    <>
      <Helmet>
        <title>Programmes - Radio Flambeau-Banka</title>
        <meta name="description" content="Découvrez tous nos programmes radio : actualités, musique, culture, éducation, religion et société. Grille complète des émissions de Radio Flambeau-Banka." />
        <meta name="keywords" content="programmes, émissions, grille, horaires, radio, actualités, musique, culture, agropastoral, débat" />
        <meta property="og:title" content="Programmes - Radio Flambeau-Banka" />
        <meta property="og:description" content="Découvrez tous nos programmes radio : actualités, musique, culture, éducation, religion et société." />
        <meta property="og:url" content="https://www.radioflambeaubanka.com/programs" />
        <link rel="canonical" href="https://www.radioflambeaubanka.com/programs" />
      </Helmet>
      
      <div className="min-h-screen bg-white" ref={ref}>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white py-20">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Nos Programmes
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Une grille variée et riche pour tous les goûts, 24h/24 et 7j/7
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <span>12 émissions en direct</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users size={16} />
                  <span>Programmes interactifs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone size={16} />
                  <span>Participation des auditeurs</span>
                </div>
              </div>
              <div className="w-24 h-1 bg-white mx-auto rounded-full mt-8"></div>
            </motion.div>
          </div>
        </section>
        
        {/* Filtres */}
        <section className="py-8 bg-white shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Recherche */}
              <div className="relative flex-1 max-w-md">
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher un programme..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              {/* Filtres */}
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex items-center space-x-2">
                  <Filter size={16} className="text-gray-500" />
                  <span className="text-sm text-gray-600">Filtres :</span>
                </div>
                
                <select
                  value={selectedDay}
                  onChange={(e) => setSelectedDay(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {days.map(day => (
                    <option key={day} value={day}>
                      {day === 'all' ? 'Tous les jours' : day.charAt(0).toUpperCase() + day.slice(1)}
                    </option>
                  ))}
                </select>
                
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'Toutes catégories' : category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>
        
        {/* Grille des programmes */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {filteredPrograms.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Mic size={48} className="mx-auto" />
                </div>
                <p className="text-gray-600">Aucun programme trouvé pour ces critères.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPrograms.map((program, index) => (
                  <div
                    key={program.id}
                    className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  >
                    {/* Header avec gradient */}
                    <div className={`h-48 bg-gradient-to-br ${program.color} p-6 relative`}>
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="relative z-10 h-full flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                          <div className="bg-white/20 px-3 py-1 rounded-full text-sm">
                            {program.category}
                          </div>
                          <div className="flex items-center space-x-2">
                            {program.type === 'live' && (
                              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                            )}
                            <span className="text-xs text-white/80">
                              {program.type === 'live' ? 'EN DIRECT' : 'AUTO'}
                            </span>
                          </div>
                        </div>
                        
                        <div className="text-white">
                          <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                          <div className="flex items-center space-x-4 text-sm">
                            <div className="flex items-center space-x-1">
                              <Clock size={14} />
                              <span>{program.time}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar size={14} />
                              <span>{program.duration}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Contenu */}
                    <div className="p-6">
                      <div className="mb-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <Mic size={16} className="text-gray-500" />
                          <span className="text-sm font-medium text-gray-700">{program.host}</span>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">{program.description}</p>
                      </div>
                      
                      {/* Jours de diffusion */}
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {program.days.map(day => (
                            <span
                              key={day}
                              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                            >
                              {day.charAt(0).toUpperCase() + day.slice(1)}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Contact info pour programmes interactifs */}
                      {program.interactive && (
                        <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                          <div className="text-xs text-blue-700 font-medium mb-1">Participez en direct :</div>
                          <div className="flex items-center space-x-4 text-xs text-blue-600">
                            {program.phone && (
                              <div className="flex items-center space-x-1">
                                <Phone size={12} />
                                <span>{program.phone}</span>
                              </div>
                            )}
                            {program.email && (
                              <div className="flex items-center space-x-1">
                                <Mail size={12} />
                                <span>{program.email}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                      
                      {/* Actions */}
                      <div className="flex items-center justify-between">
                        <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors">
                          <Play size={16} />
                          <span className="text-sm">Écouter</span>
                        </button>
                        
                        <div className="flex items-center space-x-3">
                          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                            <Heart size={16} className="text-gray-400" />
                          </button>
                          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                            <MessageCircle size={16} className="text-gray-400" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
        
        {/* Grille horaire */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Grille Horaire Complète
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Retrouvez tous vos programmes préférés selon vos disponibilités
              </p>
            </motion.div>
            
            <div className="bg-white rounded-3xl p-8 shadow-lg overflow-x-auto">
              <div className="min-w-[900px]">
                <div className="grid grid-cols-8 gap-4 mb-6">
                  <div className="font-bold text-gray-800 text-lg">Horaire</div>
                  {['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'].map(day => (
                    <div key={day} className="font-bold text-gray-800 text-center text-sm">{day}</div>
                  ))}
                </div>
                
                {/* Lignes horaires étendues */}
                {[
                  { time: '06:00', programs: ['Réveil Matinal', 'Réveil Matinal', 'Réveil Matinal', 'Réveil Matinal', 'Réveil Matinal', 'Musique', 'Musique'] },
                  { time: '07:30', programs: ['Réveil Matinal', 'Débat du Matinal', 'Réveil Matinal', 'Débat du Matinal', 'Réveil Matinal', 'Musique', 'Musique'] },
                  { time: '10:00', programs: ['Musique', 'Musique', 'Musique', 'Musique', 'Musique', 'Éducation & Avenir', 'Musique'] },
                  { time: '12:00', programs: ['Journal', 'Agopastoral', 'Journal', 'Journal', 'Journal', 'Journal', 'Journal'] },
                  { time: '14:00', programs: ['Musique', 'Musique', 'Musique', 'Musique', 'Musique', 'Musique', 'Femmes d\'Impact'] },
                  { time: '15:00', programs: ['Variétés', 'Variétés', 'Variétés', 'Travail & Sécurité', 'Variétés', 'Variétés', 'Variétés'] },
                  { time: '16:00', programs: ['Variétés', 'Variétés', 'Variétés', 'Variétés', 'Variétés', 'Culture & Traditions', 'Variétés'] },
                  { time: '18:00', programs: ['Débat Citoyen', 'Musique', 'Débat Citoyen', 'Radio Culturelle', 'Débat Citoyen', 'Musique', 'Musique'] },
                  { time: '20:00', programs: ['Musique', 'Musique', 'Musique', 'Musique', 'Musique', 'Musique', 'Musique'] },
                  { time: '22:00', programs: ['Nuit Musicale', 'Nuit Musicale', 'Nuit Musicale', 'Nuit Musicale', 'Nuit Musicale', 'Nuit Musicale', 'Nuit Musicale'] }
                ].map((slot, index) => (
                  <div key={index} className="grid grid-cols-8 gap-4 mb-3">
                    <div className="font-semibold text-gray-700 text-sm">{slot.time}</div>
                    {slot.programs.map((program, dayIndex) => (
                      <div key={dayIndex} className="text-center">
                        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-2 text-xs font-medium text-gray-700 hover:from-blue-100 hover:to-purple-100 transition-all duration-200 cursor-pointer border border-gray-100">
                          {program}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
      </div>
    </>
  );
};

export default Programs;