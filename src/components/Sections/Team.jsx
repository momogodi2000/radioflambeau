// src/components/Sections/Team.jsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  User, 
  Mic, 
  Users, 
  Award,
  Calendar,
  Facebook,
  Twitter,
  Instagram,
  Headphones,
  Briefcase,
  Clock
} from 'lucide-react';

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const teamMembers = [
    {
      id: 1,
      name: 'Madame Abdoulaye',
      role: 'Présidente du Comité de Pilotage',
      bio: 'Spécialiste des questions sociales et culturelles. Diplômée en journalisme et communication.',
      experience: '8 ans',
      speciality: 'Journalisme, Actualités',
      shows: ['Journal Parlé', 'Magazine Culturel'],
      image: '/images/team/abdoulaye-1.jpg',
      gradient: 'from-purple-500 to-pink-600',
      social: {
        facebook: '#',
        instagram: '#'
      },
      workingHours: 'Lundi-Samedi: 9h-17h'
    },
    {
      id: 2,
      name: 'Gabriel Yossa',
      role: 'Directeur & Animateur Principal',
      bio: '15 ans d\'expérience dans l\'audiovisuel et la communication. Passionné par le développement communautaire.',
      experience: '15 ans',
      speciality: 'Animation, Management',
      shows: ['Réveil Matinal', 'Émissions Spéciales'],
      image: '/images/team/gabriel-1.jpg',
      gradient: 'from-blue-500 to-indigo-600',
      social: {
        facebook: '#',
        twitter: '#'
      },
      workingHours: 'Lundi-Vendredi: 6h-18h'
    },
    {
      id: 3,
      name: 'Naomie Djeukam',
      role: 'Stagiaire  & Animatrice',
      bio: 'Expert en technique audio et animation musicale. Garant de la qualité sonore de nos émissions.',
      experience: '10 ans',
      speciality: 'Technique Audio, Animation',
      shows: ['Variétés Africaines', 'Nuit Musicale'],
      image: '/images/team/naomie-1.jpg',
      gradient: 'from-green-500 to-emerald-600',
      social: {
        facebook: '#'
      },
      workingHours: 'Lundi-Dimanche: selon programmation'
    }
  ];
  
  const stats = [
    { icon: Users, value: '25+', label: 'Membres d\'équipe' },
    { icon: Mic, value: '75+', label: 'Heures d\'antenne/semaine' },
    { icon: Award, value: '15+', label: 'Prix et reconnaissances' },
    { icon: Calendar, value: '12+', label: 'Années d\'expérience moyenne' }
  ];
  
  return (
    <section id="equipe" className="py-16 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r bg-clip-text text-transparent mb-4 [--tw-gradient-from:#2563eb] [--tw-gradient-to:#7c3aed]">
            Notre Équipe
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Les voix passionnées qui font vivre Radio Flambeau-Banka
          </p>
        </motion.div>
        
        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon size={24} className="text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
        
        {/* Team Members Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Image */}
              <div className={`relative h-48 bg-gradient-to-br ${member.gradient} flex items-center justify-center`}>
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <User size={48} className="text-white" />
                </div>
                
                {/* Social Links */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {member.social.facebook && (
                    <a href={member.social.facebook} className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                      <Facebook size={16} />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a href={member.social.twitter} className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                      <Twitter size={16} />
                    </a>
                  )}
                  {member.social.instagram && (
                    <a href={member.social.instagram} className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                      <Instagram size={16} />
                    </a>
                  )}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                  {member.bio}
                </p>
                
                {/* Quick Details */}
                <div className="space-y-2 text-sm mb-4">
                  <div className="flex items-center text-gray-500">
                    <Clock size={14} className="mr-2 text-blue-500" />
                    <span>Expérience: {member.experience}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Briefcase size={14} className="mr-2 text-blue-500" />
                    <span>Spécialité: {member.speciality.split(',')[0]}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Headphones size={14} className="mr-2 text-blue-500" />
                    <span>{member.shows.length} émissions</span>
                  </div>
                </div>
                
                {/* Schedule */}
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-xs text-gray-600 font-medium">Horaires:</p>
                  <p className="text-sm text-gray-700">{member.workingHours}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a 
            href="/team" 
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
          >
            Voir toute l'équipe
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;