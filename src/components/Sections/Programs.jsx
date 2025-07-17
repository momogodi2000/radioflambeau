// src/components/Sections/Programs.jsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Sun, 
  Newspaper, 
  Music, 
  MessageCircle, 
  Heart, 
  Moon, 
  Clock,
  Users,
  Send,
  ArrowRight
} from 'lucide-react';

const Programs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const programs = [
    {
      id: 1,
      title: 'Réveil Matinal',
      host: 'Mr. Gabriel YOSSA',
      time: '06:00 - 09:00',
      description: 'Commencez votre journée avec les dernières actualités nationales et internationales, la météo détaillée, les chroniques économiques et une sélection musicale énergisante pour bien démarrer la journée.',
      icon: Sun,
      color: 'from-orange-400 to-red-500',
      bgColor: 'from-orange-50 to-red-50',
      category: 'actualités',
      days: ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi'],
      interactive: true
    },
    {
      id: 2,
      title: 'Journal Parlé',
      host: 'Mme Naomie DJEUKAM',
      time: '12:00 - 13:00',
      description: "Le rendez-vous quotidien avec l'actualité locale, nationale et internationale. Informations vérifiées, analyses approfondies et interviews exclusives présentées par notre équipe de journalistes expérimentés.",
      icon: Newspaper,
      color: 'from-blue-400 to-indigo-500',
      bgColor: 'from-blue-50 to-indigo-50',
      category: 'actualités',
      days: ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'],
      interactive: false
    },
    {
      id: 3,
      title: 'Variétés Africaines',
      host: 'Mr. Gabriel YOSSA',
      time: '15:00 - 17:00',
      description: 'Un voyage musical fascinant à travers l\'Afrique avec les meilleurs hits contemporains, les classiques intemporels et les nouvelles découvertes. Interviews d\'artistes, chroniques musicales et dédicaces.',
      icon: Music,
      color: 'from-green-400 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50',
      category: 'musique',
      days: ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'],
      interactive: true
    },
    {
      id: 4,
      title: 'Débat Citoyen',
      host: 'Mme Naomie DJEUKAM',
      time: '18:00 - 19:00',
      description: 'Discussions ouvertes et démocratiques sur les enjeux sociétaux contemporains avec la participation active des auditeurs. Débats constructifs, témoignages et solutions concrètes pour notre société.',
      icon: MessageCircle,
      color: 'from-purple-400 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50',
      category: 'culture',
      days: ['lundi', 'mercredi', 'vendredi'],
      interactive: true
    },
    {
      id: 5,
      title: 'Femmes d\'Impact',
      host: 'Mme Naomie DJEUKAM',
      time: '14:00 - 15:00',
      description: 'Portraits inspirants de femmes exceptionnelles qui transforment leur communauté. Entrepreneures, leaders, artistes et militantes partagent leurs parcours, défis et succès pour inspirer la nouvelle génération.',
      icon: Heart,
      color: 'from-red-400 to-pink-500',
      bgColor: 'from-red-50 to-pink-50',
      category: 'culture',
      days: ['dimanche'],
      interactive: true
    },
    {
      id: 6,
      title: 'Nuit Musicale',
      host: 'Programmation automatique',
      time: '22:00 - 06:00',
      description: 'Musiques douces et mélodies apaisantes pour accompagner vos nuits. Sélection soigneuse de jazz, blues, soul et musiques du monde pour créer une ambiance relaxante et favoriser le sommeil.',
      icon: Moon,
      color: 'from-indigo-400 to-blue-500',
      bgColor: 'from-indigo-50 to-blue-50',
      category: 'musique',
      days: ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'],
      interactive: false
    }
  ];
  
  const getCurrentProgram = () => {
    const now = new Date();
    const currentHour = now.getHours();
    const currentDay = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
    const dayNames = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
    const currentDayName = dayNames[currentDay];
    
    // Check each program based on time and day
    if (currentHour >= 6 && currentHour < 9 && programs[0].days.includes(currentDayName)) return programs[0];
    if (currentHour >= 12 && currentHour < 13 && programs[1].days.includes(currentDayName)) return programs[1];
    if (currentHour >= 14 && currentHour < 15 && programs[4].days.includes(currentDayName)) return programs[4];
    if (currentHour >= 15 && currentHour < 17 && programs[2].days.includes(currentDayName)) return programs[2];
    if (currentHour >= 18 && currentHour < 19 && programs[3].days.includes(currentDayName)) return programs[3];
    if (currentHour >= 22 || currentHour < 6) return programs[5]; // Nuit Musicale
    return programs[0]; // fallback to first program
  };
  
  const currentProgram = getCurrentProgram();
  
  return (
    <section id="programmes" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" ref={ref}>
      <div className="container mx-auto px-4">
        {/* En-tête de section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Nos Programmes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Une grille variée pour tous les goûts, 24h/24 et 7j/7
          </p>
        </motion.div>
        
        {/* Programme en cours */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className={`bg-gradient-to-r ${currentProgram.color} rounded-3xl p-8 text-white text-center shadow-2xl`}>
            <div className="flex items-center justify-center mb-4">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse mr-3"></div>
              <span className="text-lg font-semibold">EN COURS</span>
            </div>
            <h3 className="text-3xl font-bold mb-2">{currentProgram.title}</h3>
            <p className="text-xl mb-4">{currentProgram.time}</p>
            <p className="text-white/90 max-w-2xl mx-auto">{currentProgram.description}</p>
          </div>
        </motion.div>
        
        {/* Grille des programmes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className={`
                bg-gradient-to-br ${program.bgColor} rounded-3xl p-8 hover:shadow-xl transition-all duration-300
                ${program.id === currentProgram.id ? 'ring-4 ring-blue-500 ring-opacity-50' : ''}
              `}
            >
              <div className="text-center">
                <div className={`w-16 h-16 mx-auto bg-gradient-to-r ${program.color} rounded-full flex items-center justify-center mb-6 shadow-lg`}>
                  <program.icon size={32} className="text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {program.title}
                </h3>
                
                <div className="flex items-center justify-center mb-2">
                  <Users size={14} className="text-gray-500 mr-1" />
                  <span className="text-sm font-medium text-gray-700">
                    {program.host}
                  </span>
                </div>
                
                <div className="flex items-center justify-center mb-4">
                  <Clock size={16} className="text-gray-500 mr-2" />
                  <span className="text-lg font-semibold text-gray-700">
                    {program.time}
                  </span>
                </div>
                
                <p className="text-gray-600 leading-relaxed text-sm mb-4">
                  {program.description}
                </p>
                
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <span className="px-3 py-1 bg-white/60 rounded-full text-xs font-medium text-gray-700">
                    {program.category}
                  </span>
                  {program.interactive && (
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                      Interactif
                    </span>
                  )}
                </div>
                
                {program.id === currentProgram.id && (
                  <div className="mt-4 flex items-center justify-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
                    <span className="text-sm text-green-600 font-semibold">
                      EN DIRECT
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* View All Programs Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link
            to="/programs"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <span>Voir tous les programmes</span>
            <ArrowRight size={20} />
          </Link>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Programs;
