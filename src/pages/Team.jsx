// src/pages/Team.jsx
import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useInView } from 'framer-motion';
import { 
  User, 
  Mic, 
  Calendar, 
  Award, 
  Mail, 
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Star,
  Users,
  Briefcase,
  Heart,
  ChevronLeft,
  ChevronRight,
  Clock,
  BookOpen,
  Trophy,
  Globe,
  Headphones,
  Camera,
  Music,
  Tv
} from 'lucide-react';

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [selectedMember, setSelectedMember] = useState(null);
  const [imageIndex, setImageIndex] = useState({});
  
  const teamMembers = [
    {
      id: 1,
      name: 'Madame Abdoulaye',
      role: 'Présidente du Comité de Pilotage',
      bio: 'Journaliste diplômée de l\'ESSTIC avec 8 ans d\'expérience dans les médias audiovisuels, Madame Abdoulaye est reconnue pour son professionnalisme exemplaire et son engagement social. Spécialiste des questions de société, elle couvre avec expertise les sujets politiques, économiques et culturels. Son approche humaine et accessible lui a valu une reconnaissance nationale. Elle maîtrise parfaitement l\'art de l\'interview et a interrogé de nombreuses personnalités camerounaises et africaines.',
      experience: '15 ans +',
      speciality: 'Journalisme d\'Investigation, Actualités Politiques, Reportages Sociaux, Interviews Exclusives',
      shows: ['Journal Parlé 13h', 'Magazine Culturel Dimanche', 'Interviews Exclusives VIP', 'Débat Politique Mensuel', 'Chronique Féminine'],
      achievements: ['Prix du Meilleur Reportage Social 2022 - Union des Journalistes', 'Certification en Journalisme Digital - Google News Initiative', 'Membre active de l\'Association des Journalistes Camerounais', 'Lauréate du Prix Excellence Féminine en Journalisme 2023', 'Formation spécialisée en Fact-Checking - AFP'],
      education: 'Licence en Journalisme et Sciences de l\'Information, ESSTIC Yaoundé (2015) • Formation en Journalisme Digital, Google News Initiative (2021)',
      hobbies: ['Photographie artistique', 'Cuisine fusion africaine', 'Théâtre amateur', 'Lecture de biographies', 'Yoga et méditation'],
      quote: 'Informer avec vérité et humanité, c\'est servir la démocratie et construire une société plus juste.',
      images: [
        '/images/team/abdoulaye-1.jpg',
        '/images/team/abdoulaye-2.jpg',
        '/images/team/abdoulaye-3.jpg'
      ],
      gradient: 'from-pink-500 to-rose-600',
      social: {
        facebook: 'https://facebook.com/abdoulaye.radio',
        instagram: 'https://instagram.com/abdoulaye_radio',
        twitter: 'https://twitter.com/abdoulaye_radio',
        email: 'abdoulaye@radioflambeaubanka.com'
      },
      contact: {
        phone: '+237 698 234 567',
        email: 'abdoulaye@radioflambeaubanka.com',
        office: 'Studio Journalisme - Banka'
      },
      languages: ['Français', 'Anglais', 'Ewondo', 'Español (niveau intermédiaire)'],
      workingHours: 'Lundi-Samedi: 9h-17h • Disponible pour urgences',
      personalityTraits: ['Curiosité intellectuelle', 'Rigueur professionnelle', 'Sensibilité sociale', 'Charisme naturel'],
      favoriteQuote: 'La vérité n\'a pas de couleur politique',
      careerHighlights: [
        'Couverture exclusive des élections présidentielles 2018',
        'Interview exclusive avec le Ministre de la Communication',
        'Reportage primé sur l\'éducation rurale',
        'Création du magazine féminin le plus écouté'
      ]
    },
    {
      id: 2,
      name: 'Gabriel Yossa',
      role: 'Directeur & Animateur Principal',
      bio: 'Fondateur et directeur de Radio Flambeau-Banka depuis 2009, Gabriel possède plus de 15 ans d\'expérience dans l\'audiovisuel. Diplômé en communication de l\'Université de Yaoundé, il a débuté sa carrière à Radio Cameroun avant de créer sa propre vision radiophonique. Passionné par le développement communautaire, il a transformé une petite radio locale en une plateforme internationale qui touche maintenant plus de 50 000 auditeurs réguliers.',
      experience: '15 ans',
      speciality: 'Animation, Management, Stratégie, Développement Communautaire',
      shows: ['Réveil Matinal (6h-9h)', 'Émissions Spéciales Weekend', 'Conférences Hebdomadaires', 'Talk-Show du Jeudi'],
      achievements: ['Prix du Meilleur Animateur Radio Cameroun 2020', 'Certification en Management Médiatique - ESIJY 2019', 'Membre du Conseil National des Radios Communautaires', 'Lauréat du Prix Innovation Radio Afrique 2021', 'Formateur certifié en Animation Radio'],
      education: 'Master en Communication et Journalisme, Université de Yaoundé I (2008) • Formation continue en Management des Médias, ESIJY (2019)',
      hobbies: ['Football (supporter des Lions Indomptables)', 'Lecture (romans africains)', 'Voyage (découverte culturelle)', 'Cuisine traditionnelle camerounaise'],
      quote: 'La radio est un pont entre les cœurs, peu importe la distance. Notre mission est de rassembler les communautés à travers la voix.',
      images: [
        '/images/team/yossa.jpg',
        '/images/team/gabriel-1.jpg',
        '/images/team/gabriel-2.jpg'
      ],
      gradient: 'from-blue-500 to-purple-600',
      social: {
        facebook: 'https://facebook.com/gabriel.yossa',
        twitter: 'https://twitter.com/gabrielyossa',
        instagram: 'https://instagram.com/gabrielyossa',
        email: 'gabriel@flambeaubanka.com'
      },
      contact: {
        phone: '+237 675 123 456',
        email: 'gabriel@flambeaubanka.com',
        office: 'Bureau Principal - Banka'
      },
      languages: ['Français', 'Anglais', 'Bamiléké', 'Fulfuldé'],
      workingHours: 'Lundi-Vendredi: 6h-14h • Weekend: 8h-12h',
      personalityTraits: ['Leadership naturel', 'Créativité', 'Empathie', 'Vision stratégique'],
      favoriteQuote: 'La communication authentique transforme les communautés',
      careerHighlights: [
        'Création de Radio Flambeau-Banka en 2009',
        'Expansion internationale vers 12 pays africains',
        'Lancement du streaming digital en 2020',
        'Formation de plus de 100 animateurs radio'
      ]
    },
    {
      id: 3,
      name: 'Naomie Djeukam',
      role: 'Stagiaire & Animatrice Musicale',
      bio: 'Jeune talent dynamique, Naomie apporte une énergie fraîche à Radio Flambeau-Banka. Avec une passion pour la musique et une voix captivante, elle anime des émissions musicales tout en apprenant les rouages de l\'industrie radiophonique. Elle collabore étroitement avec l\'équipe technique et créative pour produire des contenus innovants.',
      experience: '1 an',
      speciality: 'Animation Musicale, Programmation Playlist, Interviews Artistiques',
      shows: ['Variétés Africaines (14h-17h)', 'Nuit Musicale Weekend', 'Sessions Acoustiques Live', 'Mix du Vendredi Soir', 'Découvertes Musicales'],
      achievements: ['Certification en Animation Radio - École des Médias Cameroun', 'Finaliste du Concours Jeunes Talents Radio 2023'],
      education: 'Licence en Communication des Organisations, Université de Douala (en cours) • Formation en Animation Radio, École des Médias Cameroun (2023)',
      hobbies: ['Chant', 'Danse traditionnelle', 'Écriture de poésie', 'Découverte de nouveaux artistes'],
      quote: 'La musique est un langage universel qui unit les âmes. Mon rôle est de faire vibrer nos auditeurs.',
      images: [
        '/images/team/naomie-1.jpg',
        '/images/team/naomie-2.jpg',
        '/images/team/naomie-3.jpg',
        '/images/team/naomie-4.jpg',
        '/images/team/naomie-5.jpg'
      ],
      gradient: 'from-green-500 to-teal-600',
      social: {
        facebook: 'https://facebook.com/naomie.djeukam',
        instagram: 'https://instagram.com/naomiemusic',
        email: 'naomie@radioflambeaubanka.com'
      },
      contact: {
        phone: '+237 677 345 678',
        email: 'naomie@radioflambeaubanka.com',
        office: 'Studio Animation - Banka'
      },
      languages: ['Français', 'Anglais', 'Douala'],
      workingHours: 'Lundi-Vendredi: 10h-18h • Weekends: selon programmation',
      personalityTraits: ['Enthousiasme', 'Créativité', 'Adaptabilité', 'Sens du rythme'],
      favoriteQuote: 'Chaque note de musique raconte une histoire',
      careerHighlights: [
        'Première animation en direct à 19 ans',
        'Organisation d\'un concert caritatif pour la jeunesse',
        'Collaboration avec 20+ artistes locaux'
      ]
    }
  ];
  
  const stats = [
    { icon: Users, value: '25+', label: 'Membres d\'équipe actifs' },
    { icon: Mic, value: '75+', label: 'Heures d\'antenne/semaine' },
    { icon: Award, value: '15+', label: 'Prix et reconnaissances' },
    { icon: Calendar, value: '12+', label: 'Années d\'expérience moyenne' }
  ];

  const nextImage = (memberId) => {
    const member = teamMembers.find(m => m.id === memberId);
    const count = member.images.length;
    setImageIndex(prev => ({
      ...prev,
      [memberId]: ((prev[memberId] || 0) + 1) % count
    }));
  };

  const prevImage = (memberId) => {
    const member = teamMembers.find(m => m.id === memberId);
    const count = member.images.length;
    setImageIndex(prev => ({
      ...prev,
      [memberId]: ((prev[memberId] || 0) - 1 + count) % count
    }));
  };

  const ImageCarousel = ({ member, size = 'small' }) => {
    const currentIndex = imageIndex[member.id] || 0;
    const isLarge = size === 'large';
    
    return (
      <div className={`relative ${isLarge ? 'h-64 sm:h-80' : 'h-48 sm:h-64'} bg-white rounded-t-3xl shadow-md mb-4 overflow-hidden group`}>
        <div 
          className="flex transition-transform duration-300 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {member.images.map((image, index) => (
            <div key={index} className="w-full h-full flex-shrink-0 bg-gray-200 flex items-center justify-center relative">
              <img src={image} alt={member.name} className="w-full h-full object-cover" />
              <span className="absolute bottom-2 right-2 text-white text-xs bg-black/50 px-2 py-1 rounded">
                {index + 1}/{member.images.length}
              </span>
            </div>
          ))}
        </div>
        {/* Navigation buttons */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            prevImage(member.id);
          }}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            nextImage(member.id);
          }}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronRight size={16} />
        </button>
        {/* Dots indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
          {member.images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    );
  };
  
  return (
    <>
      <Helmet>
        <title>Équipe - Radio Flambeau-Banka</title>
        <meta name="description" content="Rencontrez l'équipe passionnée de Radio Flambeau-Banka : animateurs, journalistes, techniciens et producteurs qui font vivre la radio." />
        <meta name="keywords" content="équipe, animateurs, journalistes, techniciens, producteurs, radio, Cameroun, Banka" />
        <meta property="og:title" content="Équipe - Radio Flambeau-Banka" />
        <meta property="og:description" content="Rencontrez l'équipe passionnée de Radio Flambeau-Banka." />
        <meta property="og:url" content="https://www.radioflambeaubanka.com/team" />
        <link rel="canonical" href="https://www.radioflambeaubanka.com/team" />
      </Helmet>
      
      <div className="min-h-screen bg-white dark:bg-gray-900" ref={ref}>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white py-8 sm:py-12 md:py-20 dark:bg-gradient-to-br dark:from-gray-900 dark:via-purple-900 dark:to-gray-800">
          <div className="absolute inset-0 bg-black/20 dark:bg-black/40"></div>
          <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                Notre Équipe Passionnée
              </h1>
              <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-8 text-blue-100 dark:text-purple-200">
                Découvrez les talents qui donnent vie à Radio Flambeau-Banka chaque jour
              </p>
              <div className="w-16 sm:w-24 h-1 bg-white dark:bg-purple-400 mx-auto rounded-full"></div>
            </motion.div>
          </div>
        </section>
        
        {/* Statistiques */}
        <section className="py-8 sm:py-12 md:py-20 bg-gradient-to-r from-gray-50 to-blue-50">
          <div className="container mx-auto px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-4 sm:p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4">
                    <stat.icon size={24} className="text-white" />
                  </div>
                  <div className="text-xl sm:text-3xl font-bold text-gray-800">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Grille des membres */}
        <section className="py-8 sm:py-12 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedMember(member)}
                >
                  {/* Header avec carousel */}
                  <div className={`relative bg-gradient-to-br ${member.gradient}`}>
                    <ImageCarousel member={member} />
                    {/* Overlay social */}
                    <div className="absolute top-2 right-2 flex flex-col space-y-2 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                      {member.social.facebook && (
                        <a href={member.social.facebook} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                          <Facebook size={16} />
                        </a>
                      )}
                      {member.social.twitter && (
                        <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                          <Twitter size={16} />
                        </a>
                      )}
                      {member.social.instagram && (
                        <a href={member.social.instagram} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                          <Instagram size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                  {/* Contenu */}
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-4 leading-relaxed line-clamp-3 sm:line-clamp-4">
                      {member.bio}
                    </p>
                    {/* Détails rapides */}
                    <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm mb-2 sm:mb-4">
                      <div className="flex items-center text-gray-500">
                        <Clock size={12} className="mr-1 sm:mr-2 text-blue-500" />
                        <span>Expérience: {member.experience}</span>
                      </div>
                      <div className="flex items-center text-gray-500">
                        <Briefcase size={12} className="mr-1 sm:mr-2 text-blue-500" />
                        <span className="truncate">{member.speciality.split(',')[0]}</span>
                      </div>
                      <div className="flex items-center text-gray-500">
                        <Headphones size={12} className="mr-1 sm:mr-2 text-blue-500" />
                        <span>{member.shows.length} émissions</span>
                      </div>
                    </div>
                    {/* Horaires */}
                    <div className="bg-gray-50 p-2 sm:p-3 rounded-lg mb-2 sm:mb-4">
                      <p className="text-xs text-gray-600 font-medium">Horaires:</p>
                      <p className="text-xs sm:text-sm text-gray-700">{member.workingHours}</p>
                    </div>
                    {/* Bouton voir plus */}
                    <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-2 sm:py-3 px-2 sm:px-4 rounded-lg transition-all text-xs sm:text-sm font-medium shadow-md hover:shadow-lg">
                      Voir le profil complet
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Modal profil détaillé */}
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-0 sm:p-4 overflow-y-auto"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              className="bg-white rounded-none sm:rounded-3xl w-full h-full sm:w-full sm:max-w-4xl sm:max-h-[95vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
              style={{ maxHeight: '100vh' }}
            >
              {/* Header avec image originale et navigation */}
              <div className="relative bg-gradient-to-br from-gray-100 to-blue-50 rounded-t-2xl sm:rounded-t-3xl">
                {(() => {
                  const currentIndex = imageIndex[selectedMember.id] || 0;
                  const images = selectedMember.images;
                  return (
                    <>
                      <img
                        src={images[currentIndex]}
                        alt={selectedMember.name}
                        className="w-full h-48 sm:h-64 md:h-80 object-cover bg-black rounded-t-2xl sm:rounded-t-3xl"
                      />
                      {/* Navigation arrows - always visible on mobile */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          prevImage(selectedMember.id);
                        }}
                        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-8 sm:w-10 h-8 sm:h-10 bg-black/40 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors z-10"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          nextImage(selectedMember.id);
                        }}
                        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-8 sm:w-10 h-8 sm:h-10 bg-black/40 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors z-10"
                      >
                        <ChevronRight size={20} />
                      </button>
                      {/* Image count */}
                      <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm">
                        {currentIndex + 1} / {images.length}
                      </div>
                    </>
                  );
                })()}
                <button
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-2 sm:top-4 right-2 sm:right-4 w-8 sm:w-10 h-8 sm:h-10 bg-black/30 rounded-full flex items-center justify-center text-white hover:bg-black/50 transition-colors z-10 text-xl sm:text-2xl"
                >
                  ×
                </button>
                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 text-white">
                  <h2 className="text-xl sm:text-3xl font-bold drop-shadow-lg">{selectedMember.name}</h2>
                  <p className="text-blue-100 text-base sm:text-lg drop-shadow">{selectedMember.role}</p>
                </div>
              </div>
              {/* Contenu détaillé */}
              <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                {/* Citation */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 sm:p-6 rounded-xl border-l-4 border-blue-500">
                  <p className="text-blue-800 italic text-sm sm:text-base font-medium">"{selectedMember.quote}"</p>
                </div>
                {/* Informations personnelles */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-4 flex items-center">
                      <Clock size={16} className="mr-2 text-blue-500" />
                      Informations Professionnelles
                    </h3>
                    <div className="space-y-2 sm:space-y-3 text-sm">
                      <div>
                        <span className="font-semibold text-gray-700">Horaires de travail:</span>
                        <p className="text-gray-600">{selectedMember.workingHours}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">Bureau:</span>
                        <p className="text-gray-600">{selectedMember.contact.office}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">Expérience:</span>
                        <p className="text-gray-600">{selectedMember.experience}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Biographie détaillée */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-4 flex items-center">
                    <BookOpen size={16} className="mr-2 text-blue-500" />
                    Biographie Complète
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{selectedMember.bio}</p>
                </div>
                
                {/* Temps forts de carrière */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-4 flex items-center">
                    <Star size={16} className="mr-2 text-blue-500" />
                    Temps Forts de Carrière
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedMember.careerHighlights.map((highlight, index) => (
                      <div key={index} className="bg-gradient-to-r from-gray-50 to-blue-50 p-4 rounded-lg">
                        <div className="flex items-start">
                          <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-white text-xs font-bold">{index + 1}</span>
                          </div>
                          <p className="ml-3 text-gray-700 text-sm">{highlight}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Détails professionnels */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                      <Briefcase size={16} className="mr-2 text-blue-500" />
                      Spécialités
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedMember.speciality.split(', ').map((specialty, index) => (
                        <span key={index} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs sm:text-sm">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                      <Heart size={16} className="mr-2 text-blue-500" />
                      Loisirs & Passions
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedMember.hobbies.map((hobby, index) => (
                        <span key={index} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs sm:text-sm">
                          {hobby}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Formation */}
                <div>
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                    <BookOpen size={16} className="mr-2 text-blue-500" />
                    Formation & Éducation
                  </h4>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700 text-sm leading-relaxed">{selectedMember.education}</p>
                  </div>
                </div>
                
                {/* Émissions */}
                <div>
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                    <Mic size={16} className="mr-2 text-blue-500" />
                    Émissions Animées
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedMember.shows.map((show, index) => (
                      <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 p-3 rounded-lg">
                        <div className="flex items-center">
                          <Headphones size={16} className="mr-2 text-blue-500" />
                          <span className="text-gray-700 text-sm font-medium">{show}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Récompenses */}
                <div>
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                    <Trophy size={16} className="mr-2 text-blue-500" />
                    Récompenses & Certifications
                  </h4>
                  <div className="space-y-3">
                    {selectedMember.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start bg-yellow-50 p-3 rounded-lg">
                        <Award size={16} className="mr-3 mt-1 text-yellow-600 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Contact */}
                <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-4 sm:p-6 rounded-xl">
                  <h4 className="font-bold text-gray-800 mb-4 flex items-center">
                    <Mail size={16} className="mr-2 text-blue-500" />
                    Informations de Contact
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-center text-gray-600">
                        <Mail size={16} className="mr-3 text-blue-500" />
                        <a href={`mailto:${selectedMember.contact.email}`} className="hover:text-blue-600 transition-colors text-sm">
                          {selectedMember.contact.email}
                        </a>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Phone size={16} className="mr-3 text-blue-500" />
                        <span className="text-sm">{selectedMember.contact.phone}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin size={16} className="mr-3 text-blue-500" />
                        <span className="text-sm">{selectedMember.contact.office}</span>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-600 mb-3">Suivez-moi sur les réseaux sociaux :</p>
                      <div className="flex items-center space-x-3">
                        {selectedMember.social.facebook && (
                          <a href={selectedMember.social.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                            <Facebook size={18} />
                          </a>
                        )}
                        {selectedMember.social.twitter && (
                          <a href={selectedMember.social.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center text-white hover:bg-sky-600 transition-colors">
                            <Twitter size={18} />
                          </a>
                        )}
                        {selectedMember.social.instagram && (
                          <a href={selectedMember.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center text-white hover:bg-pink-700 transition-colors">
                            <Instagram size={18} />
                          </a>
                        )}
                        <a href={`mailto:${selectedMember.contact.email}`} className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-colors">
                          <Mail size={18} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
        
        {/* Section Valeurs d'équipe */}
        <section className="py-10 sm:py-16 md:py-20 bg-gradient-to-r from-gray-50 to-blue-50">
          <div className="container mx-auto px-4 sm:px-6 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Nos Valeurs d'Équipe
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                Ce qui nous unit et nous guide dans notre mission quotidienne
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Passion</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Nous aimons ce que nous faisons et cela se ressent dans chaque émission, chaque programme.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Collaboration</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Ensemble, nous créons des contenus exceptionnels qui touchent le cœur de nos auditeurs.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Innovation</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Nous repoussons constamment les limites pour offrir une expérience radio unique et moderne.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* CTA Rejoindre */}
        <section className="py-10 sm:py-16 md:py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
                Rejoignez Notre Équipe Passionnée !
              </h2>
              <p className="text-base sm:text-lg md:text-xl mb-8 max-w-3xl mx-auto">
                Vous êtes passionné par la radio, la communication et souhaitez contribuer à notre mission de rassembler les communautés ? 
                Nous recherchons toujours des talents motivés pour enrichir notre équipe dynamique.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
                <div className="bg-white/10 p-4 rounded-lg">
                  <Mic size={24} className="mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Animateurs</h3>
                  <p className="text-xs sm:text-sm text-blue-100">Exprimez votre créativité à l'antenne</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <Users size={24} className="mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Bénévoles</h3>
                  <p className="text-xs sm:text-sm text-blue-100">Contribuez selon vos disponibilités</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <Briefcase size={24} className="mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Techniciens</h3>
                  <p className="text-xs sm:text-sm text-blue-100">Maîtrisez les technologies radio</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-6 py-3 sm:px-8 sm:py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                  Postuler maintenant
                </button>
                <button className="border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Devenir bénévole
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Team;