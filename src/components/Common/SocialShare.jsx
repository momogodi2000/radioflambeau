
// src/components/Common/SocialShare.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Share2, 
  Facebook, 
  Twitter, 
  Instagram, 
  MessageCircle,
  Mail,
  Copy,
  Check
} from 'lucide-react';

const SocialShare = ({ 
  url = window.location.href, 
  title = 'Radio Flambeau-Banka', 
  description = 'Écoutez Radio Flambeau-Banka en direct!' 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  
  const shareData = {
    url: encodeURIComponent(url),
    title: encodeURIComponent(title),
    description: encodeURIComponent(description)
  };
  
  const socialPlatforms = [
    {
      name: 'Facebook',
      icon: Facebook,
      color: 'hover:bg-blue-600',
      url: `https://www.facebook.com/sharer/sharer.php?u=${shareData.url}`,
    },
    {
      name: 'Twitter',
      icon: Twitter,
      color: 'hover:bg-sky-500',
      url: `https://twitter.com/intent/tweet?url=${shareData.url}&text=${shareData.title}`,
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      color: 'hover:bg-green-500',
      url: `https://wa.me/?text=${shareData.title}%20${shareData.url}`,
    },
    {
      name: 'Email',
      icon: Mail,
      color: 'hover:bg-purple-600',
      url: `mailto:?subject=${shareData.title}&body=${shareData.description}%20${shareData.url}`,
    }
  ];
  
  const handleShare = (platform) => {
    window.open(platform.url, '_blank', 'width=600,height=400');
    setIsOpen(false);
  };
  
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Erreur lors de la copie:', error);
    }
  };
  
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full transition-colors"
      >
        <Share2 size={16} />
        <span className="text-sm">Partager</span>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="absolute top-full mt-2 right-0 bg-white rounded-2xl shadow-xl p-4 z-10 min-w-[250px]"
          >
            <div className="text-sm font-medium text-gray-800 mb-3">
              Partager sur
            </div>
            
            <div className="space-y-2">
              {socialPlatforms.map((platform, index) => (
                <motion.button
                  key={platform.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleShare(platform)}
                  className={`w-full flex items-center space-x-3 p-3 rounded-lg hover:text-white transition-colors ${platform.color}`}
                >
                  <platform.icon size={20} />
                  <span>{platform.name}</span>
                </motion.button>
              ))}
              
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                onClick={handleCopyLink}
                className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {copied ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
                <span>{copied ? 'Copié !' : 'Copier le lien'}</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SocialShare;
