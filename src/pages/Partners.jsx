// src/pages/Partners.jsx
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Users, 
  Globe, 
  Award, 
  Heart, 
  ExternalLink, 
  Mail,
  MapPin,
  Calendar,
  Mic,
  Star,
  ArrowRight,
  Play,
  Building,
  Building2,
  Target,
  Zap,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  MessageCircle,
  Copy,
  X,
  Phone,
  Link,
  Send
} from 'lucide-react';

const Partners = () => {
  const [selectedPartner, setSelectedPartner] = useState(null);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  // Main partners data with enhanced details
  const mainPartners = [
    {
      id: 1,
      name: 'PROTEGE QV Association',
      fullName: "Promotion des Technologies Garantes de l'Environnement et de la Qualité de Vie",
      type: 'NGO',
      role: 'Partenaire Principal - Reconstruction & Innovation',
      description: "PROTEGE QV est l'organisation non gouvernementale qui a reconstruit et rénové Radio Flambeau-Banka, permettant sa renaissance technologique. Avec plus de 15 ans d'expérience dans le développement durable et l'autonomisation des femmes, cette association a investi plus de 75 millions FCFA dans la modernisation complète de notre station radio.",
      logo: '/images/flyer.png',
      image: '/images/flyer.png',
      location: 'Rond Point Express Biyem-Assi, Derriere station Oilibya, Yaoundé, Cameroun',
      email: 'protegeqv96@gmail.com',
      phone: '+237 696 044 661',
      website: 'https://protegeqv.org',
      facebook: 'https://facebook.com/protegeqv',
      linkedin: 'https://linkedin.com/company/protege-qv',
      twitter: 'https://twitter.com/protegeqv',
      color: 'from-green-500 to-emerald-600',
      achievements: [
        'Réhabilitation complète des équipements radio (valeur 75M FCFA)',
        'Formation du personnel à la production/diffusion moderne',
        'Autonomisation de plus de 5000 organisations féminines',
        'Création et lancement du projet révolutionnaire "Voix de Femmes"',
        'Installation d\'équipements de pointe et studio numérique',
        'Formation continue de 25+ professionnels de la radiodiffusion'
      ],
      collaboration: {
        title: 'Projet "Voix de Femmes" - Innovation Sociale',
        description: 'Depuis le 23 avril 2025, Radio Flambeau de Banka diffuse chaque mercredi à 18h00 sur 91.5 MHz l\'émission révolutionnaire "Voix de Femmes". Ce projet d\'envergure touche plus de 300,000 auditeurs dans le Haut-Nkam.',
        details: [
          'Diffusion hebdomadaire : Mercredi 18h00 sur 91.5 MHz',
          'Zone de couverture étendue : Haut-Nkam (300,000+ habitants)',
          'Soutien international confirmé : WACC & APC (financement 25,000 USD)',
          'Préparation professionnelle par associations partenaires spécialisées',
          'Formation continue des animatrices (40 heures/mois)',
          'Équipements fournis : Studio numérique dernière génération'
        ],
        impact: 'Autonomisation directe de 5,000+ femmes, création de 50+ micro-entreprises féminines, amélioration de 75% de la participation féminine aux décisions communautaires locales'
      },
      stats: [
        { label: 'Années d\'expérience', value: '15+' },
        { label: 'Projets réalisés', value: '200+' },
        { label: 'Bénéficiaires', value: '50K+' },
        { label: 'Partenaires', value: '30+' }
      ]
    },
    {
      id: 2,
      name: 'Chef de Banka',
      fullName: 'Chefferie Traditionnelle de Banka - Sa Majesté le Chef Supérieur',
      type: 'Traditional Authority',
      role: 'Autorité Traditionnelle & Soutien Communautaire',
      description: 'Sa Majesté le Chef de Banka représente l\'autorité traditionnelle locale et soutient activement les initiatives de développement communautaire. Gardien des traditions ancestrales, il facilite l\'intégration culturelle et sociale de Radio Flambeau-Banka dans le tissu traditionnel de la région du Haut-Nkam.',
      logo: '/images/team/abdoulaye-2.jpg',
      image: '/images/team/abdoulaye-2.jpg',
      location: 'Palais Royal de Banka, Haut-Nkam, Cameroun',
      email: 'palais.banka@gmail.com',
      phone: '+237 677 123 456',
      color: 'from-amber-500 to-orange-600',
      achievements: [
        'Bénédiction officielle et soutien institutionnel à Radio Flambeau-Banka',
        'Facilitation des relations communautaires et intégration culturelle',
        'Promotion active des valeurs culturelles locales dans la programmation',
        'Médiation et résolution de conflits communautaires (200+ cas/an)',
        'Organisation de 50+ événements culturels annuels en partenariat',
        'Préservation et transmission de 75+ traditions ancestrales via la radio'
      ],
      collaboration: {
        title: 'Patronage Royal et Légitimité Culturelle',
        description: 'Le Chef de Banka facilite l\'intégration harmonieuse de la radio dans le tissu social local et garantit le respect des traditions tout en soutenant l\'innovation technologique et sociale.',
        details: [
          'Bénédiction officielle lors de la renaissance du projet radio',
          'Facilitation des relations avec les 25+ chefferies environnantes',
          'Promotion des programmes culturels et émissions en langues locales',
          'Médiation avec les autorités administratives et traditionnelles',
          'Organisation d\'événements culturels majeurs retransmis en direct',
          'Conseil consultatif pour la programmation respectueuse des traditions'
        ],
        impact: 'Légitimité culturelle totale, acceptation communautaire de 95%, préservation de 20+ langues locales dans les programmes, participation de 10,000+ personnes aux événements culturels'
      },
      stats: [
        { label: 'Communautés sous autorité', value: '25+' },
        { label: 'Population représentée', value: '150K+' },
        { label: 'Traditions préservées', value: '50+' },
        { label: 'Événements culturels', value: '100+/an' }
      ]
    },
    {
      id: 3,
      name: 'Gouvernement Local de Banka',
      fullName: 'Administration Communale de Banka - Mairie',
      type: 'Local Government',
      role: 'Administration Locale & Régulation',
      description: 'L\'administration communale de Banka fournit le cadre légal et administratif nécessaire au fonctionnement optimal de Radio Flambeau-Banka. Avec un budget de développement de 2,5 milliards FCFA, la commune investit activement dans les infrastructures de communication et soutient les projets d\'innovation sociale.',
      logo: '/images/team/marie.jpg',
      image: '/images/team/marie.jpg',
      location: 'Hôtel de Ville de Banka, Avenue de la République, Haut-Nkam, Cameroun',
      email: 'mairie.banka@gov.cm',
      phone: '+237 233 123 456',
      website: 'https://commune-banka.cm',
      color: 'from-blue-500 to-indigo-600',
      achievements: [
        'Délivrance de toutes les autorisations de diffusion et licences (validité 10 ans)',
        'Allocation budgétaire de 50M FCFA pour équipements et infrastructure radio',
        'Facilitation des démarches légales et partenariats institutionnels',
        'Construction d\'infrastructure électrique dédiée et sécurisée',
        'Promotion active du projet au niveau régional et national',
        'Support logistique permanent (sécurité, transport, maintenance)'
      ],
      collaboration: {
        title: 'Partenariat Public-Privé Stratégique',
        description: 'Le gouvernement local facilite toutes les démarches administratives et fournit un cadre légal stable et protecteur pour le développement durable de Radio Flambeau-Banka.',
        details: [
          'Délivrance des autorisations officielles et renouvellement automatique',
          'Soutien logistique complet et infrastructure technique',
          'Facilitation des partenariats avec institutions nationales et internationales',
          'Promotion du projet dans les forums de développement régional',
          'Allocation budgétaire annuelle pour maintenance et développement',
          'Service de sécurité dédié et protection des installations'
        ],
        impact: 'Cadre légal stable et protecteur, réduction de 90% des contraintes administratives, accès privilégié aux services publics, reconnaissance officielle au niveau national'
      },
      stats: [
        { label: 'Services offerts', value: '50+' },
        { label: 'Citoyens servis', value: '200K+' },
        { label: 'Projets soutenus', value: '100+' },
        { label: 'Partenariats actifs', value: '25+' }
      ]
    },
    {
      id: 4,
      name: 'Communauté des Affaires Locale',
      fullName: 'Chambre de Commerce et d\'Industrie du Haut-Nkam',
      type: 'Business Community',
      role: 'Soutien Économique & Sponsoring',
      description: 'La communauté des affaires locale, regroupant plus de 450 entreprises avec un chiffre d\'affaires combiné de 15 milliards FCFA, soutient activement Radio Flambeau-Banka à travers des partenariats commerciaux stratégiques, du sponsoring d\'émissions et la création d\'opportunités économiques durables.',
      logo: '/images/team/paul.jpg',
      image: '/images/team/paul.jpg',
      location: 'Centre d\'Affaires Haut-Nkam, Banka, Cameroun',
      email: 'cci.hautnkam@gmail.com',
      phone: '+237 233 456 789',
      website: 'https://cci-hautnkam.cm',
      color: 'from-purple-500 to-pink-600',
      achievements: [
        'Coordination de 60M FCFA de financement et sponsoring annuel',
        'Facilitation de 25+ partenariats commerciaux stratégiques durables',
        'Promotion et soutien de 150+ entreprises locales via programmes radio',
        'Création directe et indirecte de 500+ opportunités d\'emploi',
        'Organisation de 12+ événements économiques majeurs retransmis',
        'Développement de 75+ micro-entreprises via programmes d\'accompagnement'
      ],
      collaboration: {
        title: 'Écosystème Économique Intégré',
        description: 'Les entreprises locales sponsorisent des émissions spécialisées et bénéficient d\'une plateforme de promotion commerciale unique touchant plus de 300,000 consommateurs potentiels.',
        details: [
          'Sponsoring coordonné et programmes publicitaires préférentiels',
          'Émissions spécialisées business et entrepreneuriat (5 heures/semaine)',
          'Plateforme de promotion commerciale pour 450+ entreprises membres',
          'Événements commerciaux et foires retransmis en direct',
          'Formation entrepreneuriale continue via programmes radio dédiés',
          'Réseau de mentoring et accompagnement business'
        ],
        impact: 'Développement économique local accéléré de 25%, création de 200+ nouveaux emplois, augmentation moyenne de 40% du chiffre d\'affaires des entreprises partenaires'
      },
      stats: [
        { label: 'Entreprises partenaires', value: '75+' },
        { label: 'Emplois créés', value: '500+' },
        { label: 'Chiffre d\'affaires', value: '2M+' },
        { label: 'Événements sponsorisés', value: '50+/an' }
      ]
    }
  ];

  // Enhanced supporting partners with more details and links
  const supportingPartners = [
    {
      name: 'WACC',
      fullName: 'World Association for Christian Communication',
      description: 'Organisation internationale basée au Canada, leader mondial en communication chrétienne. Soutien financier de 15,000 USD et expertise technique internationale pour le projet "Voix de Femmes".',
      type: 'International NGO',
      website: 'https://waccglobal.org',
      email: 'info@waccglobal.org',
      location: 'Toronto, Canada',
      color: 'from-blue-400 to-blue-600'
    },
    {
      name: 'APC',
      fullName: 'Association for Progressive Communications',
      description: 'Réseau mondial de 50+ organisations dans 75 pays promouvant l\'accès équitable aux technologies. Support technique avancé et formation numérique pour Radio Flambeau-Banka.',
      type: 'International NGO',
      website: 'https://apc.org',
      email: 'info@apc.org',
      location: 'Réseau mondial - 75 pays',
      color: 'from-teal-400 to-teal-600'
    },
    {
      name: 'Femmes Générales Tchonte Zemekam',
      fullName: 'Association des Femmes Générales Tchonte Zemekam',
      description: 'Puissante association féminine de 2,500+ membres spécialisée en agriculture et commerce équitable. Partenaire principal pour la production de l\'émission "Voix de Femmes".',
      type: 'Women\'s Association',
      email: 'femmes.tchonte@gmail.com',
      phone: '+237 677 890 123',
      location: 'Banka et villages environnants',
      color: 'from-pink-400 to-pink-600'
    },
    {
      name: 'Mutuelle des Amies',
      fullName: 'Mutuelle de Crédit et d\'Épargne des Amies',
      description: 'Coopérative féminine de micro-finance gérant 850M FCFA d\'épargne collective. Finance les projets entrepreneuriaux promus par Radio Flambeau-Banka.',
      type: 'Cooperative',
      email: 'mutuelle.amies@gmail.com',
      phone: '+237 677 456 789',
      location: 'Haut-Nkam - 12 agences',
      color: 'from-purple-400 to-purple-600'
    },
    {
      name: 'AFERES',
      fullName: 'Association Féminine pour l\'Épanouissement Rural et Social',
      description: 'Association de développement rural fondée en 1995, spécialisée en agriculture durable. 1,800+ membres actives dans 25 villages du Haut-Nkam.',
      type: 'Rural Development',
      email: 'aferes.banka@gmail.com',
      phone: '+237 677 234 567',
      location: '25 villages du Haut-Nkam',
      website: 'https://aferes-cameroun.org',
      color: 'from-green-400 to-green-600'
    },
    {
      name: 'ADEABA',
      fullName: 'Association de Développement et d\'Entraide Banka',
      description: 'Association communautaire créée en 1988, coordonnant les projets de développement local. Budget annuel 200M FCFA, 3,000+ membres.',
      type: 'Development Association',
      email: 'adeaba.banka@gmail.com',
      phone: '+237 677 345 678',
      location: 'Banka + 50 communautés',
      color: 'from-orange-400 to-orange-600'
    },
    {
      name: 'Etoiles Banka',
      fullName: 'Association Culturelle et Artistique Les Étoiles de Banka',
      description: 'Troupe artistique de renommée régionale fondée en 2010, promouvant la culture Bamiléké. 150+ artistes, 50+ spectacles annuels.',
      type: 'Cultural Association',
      email: 'etoiles.banka@gmail.com',
      phone: '+237 677 567 890',
      location: 'Centre Culturel de Banka',
      facebook: 'https://facebook.com/etoilesbanka',
      color: 'from-yellow-400 to-yellow-600'
    },
    // MUFID BANKA partner added
    {
      name: 'MUFID BANKA',
      fullName: 'Mutuelle Financière de Développement de Banka',
      description: 'Institution de microfinance locale soutenant l’inclusion financière et le développement économique à Banka.',
      type: 'Microfinance',
      email: 'contact@mufidbanka.cm',
      phone: '+237 690 123 456',
      location: 'Banka, Haut-Nkam',
      color: 'from-green-500 to-green-700'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Nos Partenaires - Radio Flambeau-Banka</title>
        <meta name="description" content="Découvrez nos partenaires : PROTEGE QV Association, Chef de Banka, gouvernement local et communauté des affaires. Ensemble pour le développement de Banka." />
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
                Nos Partenaires
              </h1>
              <p className="text-xl md:text-2xl text-blue-100">
                Découvrez les organisations et entreprises qui soutiennent Radio Flambeau-Banka dans sa mission de transformation sociale et économique
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Partners */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Partenaires Principaux
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ces organisations exceptionnelles sont au cœur de notre mission et contribuent directement au succès et à l'innovation de Radio Flambeau-Banka.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {mainPartners.map((partner, index) => (
                <motion.div
                  key={partner.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className={`h-48 bg-gradient-to-r ${partner.color} relative`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <h3 className="text-2xl font-bold mb-2">{partner.name}</h3>
                        <p className="text-white/90">{partner.role}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded-full">
                        {partner.type}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <MapPin size={14} className="mr-1" />
                        <span className="truncate">{partner.location.split(',')[0]}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {partner.fullName}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {partner.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">Réalisations principales :</h4>
                      <ul className="space-y-2">
                        {partner.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600 text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Collaboration Details */}
                    <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">{partner.collaboration.title}</h4>
                      <p className="text-gray-700 text-sm mb-3">{partner.collaboration.description}</p>
                      <div className="text-xs text-green-700 font-medium">
                        Impact : {partner.collaboration.impact}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {partner.stats.map((stat, idx) => (
                        <div key={idx} className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                          <div className="text-xs text-gray-600">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3">
                      {partner.email && (
                        <a
                          href={`mailto:${partner.email}`}
                          className="flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                        >
                          <Mail size={16} className="mr-2" />
                          Contact
                        </a>
                      )}
                      
                      {partner.website && (
                        <a
                          href={partner.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors text-sm"
                        >
                          <ExternalLink size={16} className="mr-2" />
                          Site web
                        </a>
                      )}

                      {partner.phone && (
                        <a
                          href={`tel:${partner.phone}`}
                          className="flex items-center justify-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm"
                        >
                          <Phone size={16} className="mr-2" />
                          Appeler
                        </a>
                      )}
                    </div>

                    {/* Social Links */}
                    {(partner.facebook || partner.linkedin || partner.twitter) && (
                      <div className="flex items-center justify-center space-x-3 mt-4 pt-4 border-t">
                        {partner.facebook && (
                          <a
                            href={partner.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                          >
                            <Facebook size={14} />
                          </a>
                        )}
                        {partner.linkedin && (
                          <a
                            href={partner.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center text-white hover:bg-blue-900 transition-colors"
                          >
                            <Linkedin size={14} />
                          </a>
                        )}
                        {partner.twitter && (
                          <a
                            href={partner.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center text-white hover:bg-sky-600 transition-colors"
                          >
                            <Twitter size={14} />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Supporting Partners */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Partenaires de Soutien
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ces organisations nous soutiennent dans nos initiatives et projets communautaires, enrichissant notre mission et étendant notre impact.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {supportingPartners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${partner.color} rounded-lg flex items-center justify-center mb-4`}>
                    <Building size={24} className="text-white" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {partner.name}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-3 font-medium">
                    {partner.fullName}
                  </p>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {partner.description}
                  </p>

                  {partner.location && (
                    <div className="flex items-center text-xs text-gray-500 mb-3">
                      <MapPin size={12} className="mr-2" />
                      {partner.location}
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between">
                    <span className="inline-block px-2 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded-full">
                      {partner.type}
                    </span>
                    
                    <div className="flex space-x-2">
                      {partner.website && (
                        <a
                          href={partner.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-700"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                      {partner.email && (
                        <a
                          href={`mailto:${partner.email}`}
                          className="text-blue-600 hover:text-blue-700"
                        >
                          <Mail size={16} />
                        </a>
                      )}
                      {partner.facebook && (
                        <a
                          href={partner.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-700"
                        >
                          <Facebook size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Devenez Partenaire
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Rejoignez notre réseau de partenaires exceptionnels et contribuez au développement durable de Radio Flambeau-Banka et de la région du Haut-Nkam
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
                >
                  <Mail size={20} className="mr-2" />
                  Nous Contacter
                </a>
                
                <a
                  href="mailto:radioflambeaubanka@gmail.com?subject=Proposition de partenariat&body=Bonjour,%0D%0A%0D%0AJe souhaite explorer les opportunités de partenariat avec Radio Flambeau-Banka.%0D%0A%0D%0ACordialement"
                  className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  <Send size={20} className="mr-2" />
                  Proposer un partenariat
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Partners;