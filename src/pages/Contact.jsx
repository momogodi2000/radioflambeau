// src/pages/Contact.jsx
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Building2,
  Landmark,
  Scale,
  ClipboardList,
  Users,
  BookOpen,
  Shield
} from 'lucide-react';
import AdministrativeServicesSection from '../components/Sections/AdministrativeServicesSection';

const Contact = () => {
  const handleWhatsAppContact = () => {
    const message = `Bonjour, je souhaite contacter Radio Flambeau-Banka.`;
    const whatsappUrl = `https://wa.me/237696044661?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmailContact = () => {
    const subject = encodeURIComponent('Contact Radio Flambeau-Banka');
    const body = encodeURIComponent(`Bonjour,\n\nJe souhaite contacter Radio Flambeau-Banka.\n\nCordialement,`);
    const mailtoUrl = `mailto:contact@radioflambeaubanka.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
  };

  return (
    <>
      <Helmet>
        <title>Contact - Radio Flambeau-Banka</title>
        <meta name="description" content="Contactez Radio Flambeau-Banka pour toute question, suggestion ou collaboration. Nous sommes à votre écoute !" />
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
                Contactez-Nous
              </h1>
              <p className="text-xl md:text-2xl text-blue-100">
                Nous sommes à votre écoute
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-8">
                  Nos Coordonnées
                </h2>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800 mb-1">Adresse</h3>
                      <p className="text-gray-600">
                        Rue Principale, Quartier Centre<br />
                        Banka, Département du Haut-Nkam<br />
                        Région de l'Ouest, Cameroun
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800 mb-1">Téléphone</h3>
                      <p className="text-gray-600">
                        <a href="tel:+237696044661" className="hover:text-blue-600 transition-colors">
                          +237 696 044 661
                        </a><br />
                        <a href="tel:+237676543210" className="hover:text-blue-600 transition-colors">
                          +237 676 543 210
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800 mb-1">Email</h3>
                      <p className="text-gray-600">
                        <a href="mailto:contact@radioflambeaubanka.com" className="hover:text-blue-600 transition-colors">
                          contact@radioflambeaubanka.com
                        </a><br />
                        <a href="mailto:info@radioflambeaubanka.com" className="hover:text-blue-600 transition-colors">
                          info@radioflambeaubanka.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Clock className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800 mb-1">Heures d'ouverture</h3>
                      <p className="text-gray-600">
                        Lundi - Vendredi: 8h00 - 18h00<br />
                        Samedi: 9h00 - 16h00<br />
                        Dimanche: Fermé
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Social Media */}
                <div className="mt-12">
                  <h3 className="font-semibold text-lg text-gray-800 mb-4">Suivez-nous</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://facebook.com/radioflambeaubanka" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook size={20} />
                    </a>
                    <a 
                      href="https://instagram.com/radioflambeaubanka" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram size={20} />
                    </a>
                    <a 
                      href="https://twitter.com/radioflambeau" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-400 hover:text-white transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter size={20} />
                    </a>
                    <a 
                      href="https://youtube.com/radioflambeaubanka" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors"
                      aria-label="YouTube"
                    >
                      <Youtube size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
              
              {/* Contact Options */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <MessageSquare className="text-blue-600" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    Contactez-nous directement
                  </h2>
                </div>
                
                <div className="space-y-6">
                  {/* WhatsApp Contact */}
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">WhatsApp</h3>
                        <p className="text-sm text-gray-600">Chat direct avec notre équipe</p>
                      </div>
                    </div>
                    <button
                      onClick={handleWhatsAppContact}
                      className="w-full bg-green-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 flex items-center justify-center"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                      Chat WhatsApp
                    </button>
                  </div>

                  {/* Email Contact */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                        <p className="text-sm text-gray-600">Envoyez-nous un email</p>
                      </div>
                    </div>
                    <button
                      onClick={handleEmailContact}
                      className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center"
                    >
                      <Mail size={18} className="mr-2" />
                      Envoyer un email
                    </button>
                  </div>

                  {/* Phone Contact */}
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">Téléphone</h3>
                        <p className="text-sm text-gray-600">Appelez-nous directement</p>
                      </div>
                    </div>
                    <a
                      href="tel:+237696044661"
                      className="w-full bg-purple-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 flex items-center justify-center"
                    >
                      <Phone size={18} className="mr-2" />
                      Appeler +237 696 044 661
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Administrative Services Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-24"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Services Administratifs de Banka
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Contacts des principales administrations locales
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6 rounded-full"></div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Mairie */}
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-500"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <Building2 className="text-blue-600" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Mairie de Banka</h3>
                  </div>
                  <div className="space-y-3">
                    <p className="text-gray-600 flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-blue-500" />
                      <a href="tel:+237699876543" className="hover:text-blue-600">+237 699 876 543</a>
                    </p>
                    <p className="text-gray-600 flex items-center">
                      <Mail className="w-4 h-4 mr-2 text-blue-500" />
                      <a href="mailto:mairie@banka.cm" className="hover:text-blue-600">mairie@banka.cm</a>
                    </p>
                    <p className="text-gray-600 flex items-start">
                      <MapPin className="w-4 h-4 mr-2 mt-1 text-blue-500 flex-shrink-0" />
                      <span>Centre-ville de Banka, face au marché central</span>
                    </p>
                    <p className="text-gray-600 flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-blue-500" />
                      Lundi-Vendredi: 7h30-15h30
                    </p>
                  </div>
                </motion.div>

                {/* Sous-Préfecture */}
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-xl shadow-md border-t-4 border-purple-500"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                      <Landmark className="text-purple-600" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Sous-Préfecture</h3>
                  </div>
                  <div className="space-y-3">
                    <p className="text-gray-600 flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-purple-500" />
                      <a href="tel:+237677889900" className="hover:text-purple-600">+237 677 889 900</a>
                    </p>
                    <p className="text-gray-600 flex items-center">
                      <Mail className="w-4 h-4 mr-2 text-purple-500" />
                      <a href="mailto:sousprefecture@banka.cm" className="hover:text-purple-600">sousprefecture@banka.cm</a>
                    </p>
                    <p className="text-gray-600 flex items-start">
                      <MapPin className="w-4 h-4 mr-2 mt-1 text-purple-500 flex-shrink-0" />
                      <span>Quartier administratif, Banka</span>
                    </p>
                    <p className="text-gray-600 flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-purple-500" />
                      Lundi-Vendredi: 8h00-15h30
                    </p>
                  </div>
                </motion.div>

                {/* Commissariat */}
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-xl shadow-md border-t-4 border-red-500"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                      <Shield className="text-red-600" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Commissariat de Police</h3>
                  </div>
                  <div className="space-y-3">
                    <p className="text-gray-600 flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-red-500" />
                      <a href="tel:+237699112233" className="hover:text-red-600">+237 699 112 233</a> (Urgences)
                    </p>
                    <p className="text-gray-600 flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-red-500" />
                      <a href="tel:+237677445566" className="hover:text-red-600">+237 677 445 566</a> (Standard)
                    </p>
                    <p className="text-gray-600 flex items-start">
                      <MapPin className="w-4 h-4 mr-2 mt-1 text-red-500 flex-shrink-0" />
                      <span>Route principale, entrée nord de Banka</span>
                    </p>
                    <p className="text-gray-600 flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-red-500" />
                      Ouvert 24h/24
                    </p>
                  </div>
                </motion.div>

                {/* Tribunal */}
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-xl shadow-md border-t-4 border-yellow-500"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                      <Scale className="text-yellow-600" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Tribunal de Première Instance</h3>
                  </div>
                  <div className="space-y-3">
                    <p className="text-gray-600 flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-yellow-500" />
                      <a href="tel:+237677778888" className="hover:text-yellow-600">+237 677 778 888</a>
                    </p>
                    <p className="text-gray-600 flex items-center">
                      <Mail className="w-4 h-4 mr-2 text-yellow-500" />
                      <a href="mailto:tribunal@banka.cm" className="hover:text-yellow-600">tribunal@banka.cm</a>
                    </p>
                    <p className="text-gray-600 flex items-start">
                      <MapPin className="w-4 h-4 mr-2 mt-1 text-yellow-500 flex-shrink-0" />
                      <span>Quartier administratif, près de la Sous-Préfecture</span>
                    </p>
                    <p className="text-gray-600 flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-yellow-500" />
                      Lundi-Vendredi: 7h30-15h30
                    </p>
                  </div>
                </motion.div>

                {/* Hôpital */}
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-xl shadow-md border-t-4 border-green-500"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Hôpital de District</h3>
                  </div>
                  <div className="space-y-3">
                    <p className="text-gray-600 flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-green-500" />
                      <a href="tel:+237699554433" className="hover:text-green-600">+237 699 554 433</a> (Urgences)
                    </p>
                    <p className="text-gray-600 flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-green-500" />
                      <a href="tel:+237677665544" className="hover:text-green-600">+237 677 665 544</a> (Standard)
                    </p>
                    <p className="text-gray-600 flex items-start">
                      <MapPin className="w-4 h-4 mr-2 mt-1 text-green-500 flex-shrink-0" />
                      <span>Route de Bafang, sortie sud de Banka</span>
                    </p>
                    <p className="text-gray-600 flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-green-500" />
                      Ouvert 24h/24
                    </p>
                  </div>
                </motion.div>

                {/* Éducation */}
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-xl shadow-md border-t-4 border-indigo-500"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                      <BookOpen className="text-indigo-600" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Délégation d'Éducation</h3>
                  </div>
                  <div className="space-y-3">
                    <p className="text-gray-600 flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-indigo-500" />
                      <a href="tel:+237677334455" className="hover:text-indigo-600">+237 677 334 455</a>
                    </p>
                    <p className="text-gray-600 flex items-center">
                      <Mail className="w-4 h-4 mr-2 text-indigo-500" />
                      <a href="mailto:delegation@banka.cm" className="hover:text-indigo-600">delegation@banka.cm</a>
                    </p>
                    <p className="text-gray-600 flex items-start">
                      <MapPin className="w-4 h-4 mr-2 mt-1 text-indigo-500 flex-shrink-0" />
                      <span>Quartier administratif, Banka</span>
                    </p>
                    <p className="text-gray-600 flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-indigo-500" />
                      Lundi-Vendredi: 7h30-15h30
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Questions fréquentes
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Trouvez rapidement des réponses à vos questions
              </p>
            </motion.div>
            
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  question: "Comment puis-je proposer un sujet d'émission ?",
                  answer: "Vous pouvez nous contacter par email ou via le formulaire de contact ci-dessus en précisant votre idée d'émission. Notre équipe éditoriale examinera votre proposition et vous recontactera."
                },
                {
                  question: "Comment devenir partenaire de Radio Flambeau-Banka ?",
                  answer: "Pour devenir partenaire, veuillez nous contacter par email à partenariats@radioflambeaubanka.com ou appelez-nous au +237 696 044 661. Nous vous proposerons différentes formules adaptées à vos besoins."
                },
                {
                  question: "Puis-je visiter vos studios ?",
                  answer: "Oui, nous organisons régulièrement des visites de nos studios. Veuillez nous contacter à l'avance pour planifier votre visite pendant nos heures d'ouverture."
                },
                {
                  question: "Comment signaler un problème technique ?",
                  answer: "Pour tout problème technique concernant notre diffusion ou notre site web, veuillez nous contacter par email à support@radioflambeaubanka.com en décrivant précisément le problème rencontré."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden"
                >
                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer p-6">
                      <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                      <span className="ml-6 flex-shrink-0 text-gray-400 group-open:rotate-180 transition-transform">
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </span>
                    </summary>
                    <div className="px-6 pb-6 pt-2 text-gray-600">
                      <p>{faq.answer}</p>
                    </div>
                  </details>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;