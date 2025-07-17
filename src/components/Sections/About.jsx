// src/components/Sections/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Heart, Users, Globe, Mic, Calendar, Award, Music, BookOpen } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const stats = [
    { icon: Calendar, value: '15+', label: 'Années de service' },
    { icon: Users, value: '100K+', label: 'Auditeurs mensuels' },
    { icon: Globe, value: '12+', label: 'Pays couverts' },
    { icon: Mic, value: '25+', label: 'Émissions hebdomadaires' }
  ];
  
  const missions = [
    {
      icon: Check,
      title: 'Information locale',
      description: 'Actualités du Haut-Nkam et analyses régionales'
    },
    {
      icon: Heart,
      title: 'Patrimoine culturel',
      description: 'Promotion des langues Bamiléké et traditions Nguon'
    },
    {
      icon: BookOpen,
      title: 'Éducation rurale',
      description: 'Programmes agricoles et sanitaires en fe\'efe\'e'
    },
    {
      icon: Music,
      title: 'Plateforme artistique',
      description: 'Découverte des talents locaux et musique traditionnelle'
    }
  ];
  
  return (
    <section id="apropos" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        {/* En-tête de section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Notre Engagement Communautaire
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            La voix authentique du Haut-Nkam depuis 2009
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenu textuel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Notre Histoire</h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Fondée le <strong>24 septembre 2009</strong> à Banka (Haut-Nkam), Radio Flambeau-Banka est née de la volonté des femmes de l'association des dames flambeaux  Banka . Notre premier émetteur de 100W couvrait à peine 10km.
                </p>
                <p>
                  Aujourd'hui, avec notre réseau des correspondants villageois et notre studio numérique, nous produisons <strong>60% de nos contenus en langues locales</strong> (fe'efe'e, ghomala'), tout en connectant la diaspora via notre application mobile.
                </p>
                <p>
                  Lauréat du <strong>Prix National de la Radio Communautaire 2020</strong>, nous avons formé + 45  jeunes animateurs et contribué à 8 projets d'infrastructures locales.
                </p>
              </div>
            </div>
            
            {/* Statistiques */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="text-center p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-gray-100"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
                    <stat.icon size={24} className="text-white" />
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Mission et valeurs */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border border-gray-100 shadow-sm"
          >
            <h4 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Nos Axes Stratégiques
            </h4>
            
            <div className="space-y-6">
              {missions.map((mission, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                    <mission.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">
                      {mission.title}
                    </h5>
                    <p className="text-gray-600 text-sm">
                      {mission.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Citation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white text-center shadow-lg"
            >
              <p className="text-lg font-medium mb-2">
                "Radio Flambeau-Banka n'est pas qu'une fréquence, c'est le ciment de notre identité Bamiléké"
              </p>
              <p className="text-blue-200 text-sm">
                — Conseil des Chefs Traditionnels du Haut-Nkam
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;