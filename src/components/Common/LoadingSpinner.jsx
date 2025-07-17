// src/components/Common/LoadingSpinner.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Radio, Loader, Zap } from 'lucide-react';

const LoadingSpinner = ({ 
  size = 'medium', 
  type = 'radio', 
  message = 'Chargement...', 
  showMessage = true,
  color = 'blue' 
}) => {
  // Size configurations
  const sizeConfig = {
    small: {
      container: 'w-8 h-8',
      icon: 16,
      text: 'text-sm',
      spacing: 'space-y-2'
    },
    medium: {
      container: 'w-12 h-12',
      icon: 24,
      text: 'text-base',
      spacing: 'space-y-3'
    },
    large: {
      container: 'w-16 h-16',
      icon: 32,
      text: 'text-lg',
      spacing: 'space-y-4'
    },
    xl: {
      container: 'w-24 h-24',
      icon: 48,
      text: 'text-xl',
      spacing: 'space-y-6'
    }
  };

  // Color configurations
  const colorConfig = {
    blue: {
      gradient: 'from-blue-500 to-purple-600',
      text: 'text-blue-600',
      bg: 'bg-blue-500'
    },
    green: {
      gradient: 'from-green-500 to-emerald-600',
      text: 'text-green-600',
      bg: 'bg-green-500'
    },
    red: {
      gradient: 'from-red-500 to-pink-600',
      text: 'text-red-600',
      bg: 'bg-red-500'
    },
    purple: {
      gradient: 'from-purple-500 to-indigo-600',
      text: 'text-purple-600',
      bg: 'bg-purple-500'
    },
    gray: {
      gradient: 'from-gray-500 to-gray-600',
      text: 'text-gray-600',
      bg: 'bg-gray-500'
    }
  };

  const config = sizeConfig[size];
  const colors = colorConfig[color];

  // Animation variants
  const spinnerVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const dotsVariants = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const dotVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 0.6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Spinner components based on type
  const SpinnerComponents = {
    radio: () => (
      <motion.div
        className={`${config.container} bg-gradient-to-r ${colors.gradient} rounded-full flex items-center justify-center relative`}
        variants={spinnerVariants}
        animate="animate"
      >
        <Radio size={config.icon} className="text-white" />
        <motion.div
          className="absolute inset-0 border-2 border-white border-t-transparent rounded-full"
          variants={spinnerVariants}
          animate="animate"
        />
      </motion.div>
    ),

    pulse: () => (
      <motion.div
        className={`${config.container} bg-gradient-to-r ${colors.gradient} rounded-full flex items-center justify-center`}
        variants={pulseVariants}
        animate="animate"
      >
        <Zap size={config.icon} className="text-white" />
      </motion.div>
    ),

    spinner: () => (
      <motion.div
        className={`${config.container} border-4 ${colors.text} border-t-transparent rounded-full`}
        variants={spinnerVariants}
        animate="animate"
      />
    ),

    dots: () => (
      <motion.div
        className="flex space-x-2"
        variants={dotsVariants}
        animate="animate"
      >
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className={`w-3 h-3 ${colors.bg} rounded-full`}
            variants={dotVariants}
          />
        ))}
      </motion.div>
    ),

    bars: () => (
      <motion.div
        className="flex space-x-1 items-end"
        variants={dotsVariants}
        animate="animate"
      >
        {[0, 1, 2, 3].map((index) => (
          <motion.div
            key={index}
            className={`w-2 ${colors.bg} rounded-sm`}
            style={{ height: `${12 + index * 4}px` }}
            animate={{
              scaleY: [1, 2, 1],
              transition: {
                duration: 0.8,
                repeat: Infinity,
                delay: index * 0.1,
                ease: "easeInOut"
              }
            }}
          />
        ))}
      </motion.div>
    ),

    circle: () => (
      <motion.div className="relative">
        <div className={`${config.container} border-4 border-gray-200 rounded-full`} />
        <motion.div
          className={`absolute inset-0 border-4 ${colors.text} border-t-transparent rounded-full`}
          variants={spinnerVariants}
          animate="animate"
        />
      </motion.div>
    )
  };

  const SpinnerComponent = SpinnerComponents[type] || SpinnerComponents.radio;

  return (
    <div className={`flex flex-col items-center ${config.spacing}`}>
      <SpinnerComponent />
      
      {showMessage && message && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className={`${config.text} ${colors.text} font-medium text-center`}
        >
          {message}
        </motion.div>
      )}
    </div>
  );
};

// Specialized loading components for specific use cases
export const PageLoader = ({ message = "Chargement de la page..." }) => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
    <div className="text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <img 
          src="/images/logo.png" 
          alt="Radio Flambeau-Banka" 
          className="w-20 h-20 mx-auto mb-4"
        />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Radio Flambeau-Banka</h2>
      </motion.div>
      <LoadingSpinner size="large" type="radio" message={message} />
    </div>
  </div>
);

export const AudioLoader = () => (
  <LoadingSpinner 
    size="small" 
    type="bars" 
    message="Connexion au stream..." 
    color="green" 
  />
);

export const ContentLoader = ({ inline = false }) => (
  <div className={inline ? "flex items-center space-x-3" : "flex justify-center py-8"}>
    <LoadingSpinner 
      size={inline ? "small" : "medium"} 
      type="dots" 
      message={inline ? "" : "Chargement du contenu..."} 
      showMessage={!inline}
    />
  </div>
);

export const ButtonLoader = () => (
  <LoadingSpinner 
    size="small" 
    type="spinner" 
    showMessage={false} 
    color="gray" 
  />
);

// Skeleton loader for content placeholders
export const SkeletonLoader = ({ 
  lines = 3, 
  height = 'h-4', 
  spacing = 'space-y-3',
  showAvatar = false 
}) => (
  <div className={`animate-pulse ${spacing}`}>
    {showAvatar && (
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
        <div className="flex-1">
          <div className="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
          <div className="h-3 bg-gray-300 rounded w-1/2"></div>
        </div>
      </div>
    )}
    
    {Array.from({ length: lines }).map((_, index) => (
      <div
        key={index}
        className={`${height} bg-gray-300 rounded`}
        style={{
          width: index === lines - 1 ? '75%' : '100%'
        }}
      />
    ))}
  </div>
);

export default LoadingSpinner;