// src/pages/Services.jsx - Fixed Services page
import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useInView } from 'framer-motion';
import { 
  Radio, 
  Mic, 
  Music, 
  Users, 
  Calendar, 
  Heart,
  Megaphone,
  BookOpen,
  Headphones,
  Video,
  Camera,
  Edit3,
  Zap,
  Star,
  Award,
  Phone,
  Mail,
  ExternalLink
} from 'lucide-react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const services = [
    {
      id: 1,
      icon: Radio,
      title: "Diffusion Radio en Direct",
      description: "Broadcasting 24h/24 avec une programmation variée et de qualité",
      features: ["Streaming HD", "Multi-plateforme", "Redondance technique"],
      color: "from-blue-500 to-cyan-600"
    },
    {
      id: 2,
      icon: Mic,
      title: "Animation et Présentation",
      description: "Services d'animation pour événements et manifestations",
      features: ["Événements privés", "Manifestations publiques", "Cérémonies"],
      color: "from-purple-500 to-pink-600"
    },
    {
      id: 3,
      icon: Music,
      title: "Production Musicale",
      description: "Studio d'enregistrement et production audio professionnelle",
      features: ["Enregistrement", "Mixage", "Mastering"],
      color: "from-green-500 to-emerald-600"
    },
    {
      id: 4,
      icon: Megaphone,
      title: "Communication & Marketing",
      description: "Services de communication pour entreprises et organisations",
      features: ["Spots publicitaires", "Jingles", "Communication corporate"],
      color: "from-orange-500 to-red-600"
    },
    {
      id: 5,
      icon: BookOpen,
      title: "Formation Média",
      description: "Formation en communication radio et médias numériques",
      features: ["Formation technique", "Communication orale", "Médias sociaux"],
      color: "from-indigo-500 to-purple-600"
    },
    {
      id: 6,
      icon: Video,
      title: "Production Audiovisuelle",
      description: "Création de contenus vidéo et podcasts professionnels",
      features: ["Podcasts", "Vidéos promotionnelles", "Documentaires"],
      color: "from-teal-500 to-blue-600"
    }
  ];

  const advantages = [
    {
      icon: Award,
      title: "Expertise Reconnue",
      description: "Plus de 10 ans d'expérience dans les médias"
    },
    {
      icon: Users,
      title: "Équipe Professionnelle",
      description: "Journalistes et techniciens qualifiés"
    },
    {
      icon: Zap,
      title: "Technologie Moderne",
      description: "Équipements de pointe et dernières technologies"
    },
    {
      icon: Star,
      title: "Service Client",
      description: "Accompagnement personnalisé pour chaque projet"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Radio Flambeau-Banka</title>
        <meta name="description" content="Découvrez nos services : diffusion radio, animation, production musicale, formation médias et communication." />
        <meta property="og:title" content="Services - Radio Flambeau-Banka" />
        <meta property="og:description" content="Services professionnels de radio, animation, production et formation médias." />
      </Helmet>

      <div ref={ref} className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Nos Services
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Solutions complètes pour vos besoins en communication et médias
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Que Proposons-Nous ?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                De la diffusion radio à la production audiovisuelle, nous offrons une gamme complète de services médias.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <service.icon size={32} className="text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Pourquoi Nous Choisir ?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Notre engagement pour l'excellence nous distingue dans le paysage médiatique camerounais.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {advantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <advantage.icon size={40} className="text-white" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-800 mb-3">
                    {advantage.title}
                  </h3>
                  
                  <p className="text-gray-600">
                    {advantage.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Prêt à Collaborer ?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Contactez-nous pour discuter de votre projet et découvrir comment nous pouvons vous aider.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:radioflambeaubanka@gmail.com"
                  className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors"
                >
                  <Mail size={20} />
                  <span>Nous Écrire</span>
                </a>
                
                <a
                  href="tel:+237696044661"
                  className="inline-flex items-center space-x-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  <Phone size={20} />
                  <span>Nous Appeler</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;