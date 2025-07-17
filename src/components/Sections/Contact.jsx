
// src/components/Sections/Contact.jsx
import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  MessageSquare,
  Send,
  Heart
} from 'lucide-react';
import { useGoogleForms } from '../../hooks/useGoogleForms';
import toast from 'react-hot-toast';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { openForm } = useGoogleForms();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      content: 'Banka, Région du Centre, Cameroun',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Phone,
      title: 'Téléphone',
      content: '+237 6XX XXX XXX',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'contact@radioflambeaubanka.com',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Clock,
      title: 'Horaires',
      content: '24h/24 - 7j/7',
      color: 'from-orange-500 to-red-600'
    }
  ];
  
  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com/radioflambeaubanka',
      color: 'hover:bg-blue-600'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/radioflambeaubanka',
      color: 'hover:bg-sky-500'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/radioflambeaubanka',
      color: 'hover:bg-pink-600'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://youtube.com/radioflambeaubanka',
      color: 'hover:bg-red-600'
    }
  ];
  
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation simple
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Veuillez remplir tous les champs obligatoires');
      return;
    }
    
    // Ouvrir le formulaire Google
    openForm('contact');
    toast.success('Redirection vers le formulaire de contact');
    
    // Réinitialiser le formulaire
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  
  const openNewsletterForm = () => {
    openForm('newsletter');
  };
  
  return (
    <section id="contact" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        {/* En-tête de section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r bg-clip-text text-transparent mb-4 [--tw-gradient-from:#2563eb] [--tw-gradient-to:#7c3aed]">
            Contactez-nous
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nous sommes à votre écoute. N'hésitez pas à nous contacter !
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
                Informations de Contact
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r rounded-full flex items-center justify-center [--tw-gradient-from:#3b82f6] [--tw-gradient-to:#2563eb]`}>
                      <info.icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{info.title}</h4>
                      <p className="text-gray-600">{info.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Réseaux sociaux */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8"
            >
              <h4 className="text-xl font-bold text-gray-800 mb-6 text-center">
                Suivez-nous
              </h4>
              
              <div className="flex justify-center space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 ${social.color} hover:text-white transition-all duration-300`}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
            
            {/* Formulaires rapides */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="space-y-4"
            >
              
              <button
                onClick={openNewsletterForm}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center space-x-3 hover:shadow-lg transition-all duration-300"
              >
                <Mail size={20} />
                <span>S'abonner à la newsletter</span>
              </button>
            </motion.div>
          </motion.div>
          
          {/* Formulaire de contact */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Envoyez-nous un message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Votre nom complet"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Sujet de votre message"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Votre message..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center space-x-3 hover:shadow-lg transition-all duration-300"
              >
                <Send size={20} />
                <span>Envoyer le message</span>
              </button>
            </form>
            
            <div className="mt-6 p-4 bg-blue-50 rounded-xl">
              <p className="text-sm text-blue-800 text-center">
                <MessageSquare size={16} className="inline mr-2" />
                Nous répondons généralement sous 24 heures
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;