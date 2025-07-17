// src/pages/About.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Radio, Users, Clock, Award, Headphones, Heart } from 'lucide-react';

const About = () => {
  return (
    <>
      <Helmet>
        <title>À propos - Radio Flambeau-Banka</title>
        <meta name="description" content="Découvrez l'histoire et la mission de Radio Flambeau-Banka, votre radio communautaire de référence à Banka, département de l'Ouest du Haut-Nkam, Cameroun." />
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
                À Propos de Nous
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-4">
                Votre voix, votre communauté
              </p>
              <p className="text-lg text-blue-200">
                Depuis le cœur du département de l'Ouest du Haut-Nkam, Cameroun
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Notre Histoire
                </h2>
                <p className="text-gray-600 mb-6">
                  Fondée le 24 septembre 2009, Radio Flambeau-Banka est née de la volonté passionnée d'un groupe  des femmes de l'association des dames flambeaux Banka pour la richesse culturelle, linguistique et les préoccupations quotidiennes de la population de Banka et de tout le département de l'Ouest du Haut-Nkam au Cameroun.
                </p>
                <p className="text-gray-600 mb-6">
                  Ce qui a commencé comme une petite initiative locale avec un émetteur de 100 watts et une équipe de 3 bénévoles passionnés s'est progressivement transformé en une station de radio influente qui touche aujourd'hui plus de 50 000 auditeurs quotidiennement dans 8 arrondissements de la région, devenant un pilier essentiel de l'information, de l'éducation et du divertissement culturel dans toute la province de l'Ouest.
                </p>
                <p className="text-gray-600 mb-6">
                  Au fil des années, Radio Flambeau-Banka s'est imposée comme la voix référence des communautés Bamiléké, diffusant en français, en anglais et dans les langues locales comme le Medumba, le Yemba et le Ghomala', créant ainsi un pont authentique entre les générations et les cultures de notre belle région.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center">
                    <Clock className="text-blue-600 mr-2" size={20} />
                    <span className="text-gray-700 font-medium">Depuis septembre 2009</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="text-blue-600 mr-2" size={20} />
                    <span className="text-gray-700 font-medium">+50,000 auditeurs quotidiens</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="text-blue-600 mr-2" size={20} />
                    <span className="text-gray-700 font-medium">Prix d'excellence radiophonique 2022</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="images/logo/logo.jpg" 
                    alt="Studio principal de Radio Flambeau-Banka à Banka, Haut-Nkam" 
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg hidden md:block">
                  <div className="flex items-center space-x-2">
                    <Headphones className="text-blue-600" size={24} />
                    <div>
                      <p className="text-sm text-gray-500">En direct 24/7</p>
                      <p className="font-bold text-gray-800">FM 95.8 MHz</p>
                      <p className="text-xs text-gray-400">Portée: 80km</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Mission & Vision
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Nous sommes déterminés à être la voix authentique et moderne de notre communauté du Haut-Nkam, un pont entre la tradition et le progrès
                </p>
              </motion.div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                  <Radio className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Notre Mission</h3>
                <p className="text-gray-700 mb-6">
                  Informer, éduquer et divertir notre communauté du Haut-Nkam à travers une programmation de qualité supérieure qui reflète nos valeurs ancestrales Bamiléké, répond aux besoins d'information locale contemporaine, et contribue au développement socio-économique de la région de l'Ouest du Cameroun.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Promouvoir et préserver la culture Bamiléké et les langues locales</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Faciliter le dialogue intercommunautaire et intergénérationnel</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Diffuser une information fiable, objective et contextuelle</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Soutenir l'entrepreneuriat local et l'agriculture durable</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Éduquer sur les enjeux de santé publique et d'environnement</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl"
              >
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6">
                  <Heart className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Notre Vision</h3>
                <p className="text-gray-700 mb-6">
                  Devenir la radio communautaire de référence de l'Afrique centrale d'ici 2030, reconnue internationalement pour son impact positif sur le développement rural durable, son engagement exemplaire envers l'excellence journalistique multiculturelle, et sa contribution à la préservation du patrimoine culturel Bamiléké.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-purple-200 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Innover constamment avec les technologies digitales et plateformes numériques</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-purple-200 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Étendre notre couverture à toute la région de l'Ouest du Cameroun</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-purple-200 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Former et encadrer la prochaine génération de journalistes africains</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-purple-200 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Créer un réseau de radios communautaires partenaires en Afrique</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-purple-200 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Développer une plateforme multimédia complète (radio, web, podcast)</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Nos Valeurs Fondamentales
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Les principes ancestraux et modernes qui guident notre travail quotidien au service de la communauté du Haut-Nkam
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Intégrité",
                  description: "Nous adhérons rigoureusement aux plus hauts standards d'éthique journalistique internationale, de transparence totale et d'honnêteté intellectuelle, dans le respect des traditions de vérité Bamiléké.",
                  color: "bg-blue-500"
                },
                {
                  title: "Communauté",
                  description: "Nous plaçons systématiquement les besoins réels, les aspirations légitimes et les intérêts collectifs de notre communauté du Haut-Nkam au centre absolu de toutes nos décisions éditoriales et stratégiques.",
                  color: "bg-green-500"
                },
                {
                  title: "Innovation",
                  description: "Nous cherchons constamment et proactivement à améliorer notre offre médiatique, à adopter les nouvelles technologies de communication et à expérimenter de nouveaux formats radiophoniques adaptés à notre époque.",
                  color: "bg-purple-500"
                },
                {
                  title: "Excellence",
                  description: "Nous visons l'excellence professionnelle absolue dans tout ce que nous entreprenons, de la production créative à la diffusion technique, en passant par l'animation culturelle et l'investigation journalistique approfondie.",
                  color: "bg-orange-500"
                },
                {
                  title: "Respect Culturel",
                  description: "Nous honorons et préservons activement la richesse de notre patrimoine culturel Bamiléké tout en embrassant la modernité et l'ouverture au monde, créant un équilibre harmonieux entre tradition et progrès.",
                  color: "bg-red-500"
                },
                {
                  title: "Responsabilité",
                  description: "Nous assumons pleinement notre responsabilité sociale en tant que média de service public, contribuant activement au développement éducatif, économique et culturel de notre région du Haut-Nkam.",
                  color: "bg-indigo-500"
                },
                {
                  title: "Diversité",
                  description: "Nous célébrons et promouvons la diversité linguistique, culturelle et générationnelle de notre communauté, offrant une programmation inclusive qui reflète la richesse de notre mosaïque sociale.",
                  color: "bg-pink-500"
                },
                {
                  title: "Développement",
                  description: "Nous nous engageons activement dans le développement durable de notre région, soutenant les initiatives locales, l'entrepreneuriat jeune et l'agriculture moderne respectueuse de l'environnement.",
                  color: "bg-teal-500"
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className={`w-12 h-12 ${value.color} rounded-lg mb-4 flex items-center justify-center`}>
                    <span className="text-white text-xl font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {value.description}
                  </p>
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
                Rejoignez Notre Grande Famille Communautaire
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Participez activement à nos émissions interactives, proposez des sujets d'actualité locale, devenez bénévole passionné, ou contribuez à notre mission de développement communautaire dans le Haut-Nkam
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
                >
                  Contactez-nous Maintenant
                </a>
                
                <a
                  href="/programs"
                  className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Découvrir Nos Programmes
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;