// src/components/UI/Button.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  disabled = false, 
  loading = false,
  icon: Icon,
  iconPosition = 'left',
  className = '',
  onClick,
  type = 'button',
  fullWidth = false,
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 focus:ring-blue-500 shadow-lg hover:shadow-xl',
    secondary: 'bg-white text-gray-800 border border-gray-300 hover:bg-gray-50 focus:ring-gray-500',
    outline: 'bg-transparent text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
    success: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500',
    warning: 'bg-yellow-600 text-white hover:bg-yellow-700 focus:ring-yellow-500',
    glass: 'bg-white/10 backdrop-blur-lg text-white border border-white/20 hover:bg-white/20 focus:ring-white/50'
  };
  
  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl'
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`;
  
  const iconSizes = {
    sm: 16,
    md: 18,
    lg: 20,
    xl: 24
  };
  
  const iconSize = iconSizes[size];
  
  const renderIcon = () => {
    if (!Icon || loading) return null;
    return <Icon size={iconSize} />;
  };
  
  const renderContent = () => {
    if (loading) {
      return (
        <>
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2"></div>
          <span>Chargement...</span>
        </>
      );
    }
    
    if (Icon && iconPosition === 'left') {
      return (
        <>
          {renderIcon()}
          <span className="ml-2">{children}</span>
        </>
      );
    }
    
    if (Icon && iconPosition === 'right') {
      return (
        <>
          <span className="mr-2">{children}</span>
          {renderIcon()}
        </>
      );
    }
    
    return children;
  };
  
  return (
    <motion.button
      whileHover={{ scale: disabled || loading ? 1 : 1.02, y: disabled || loading ? 0 : -1 }}
      whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
      className={buttonClasses}
      disabled={disabled || loading}
      onClick={onClick}
      type={type}
      {...props}
    >
      {renderContent()}
    </motion.button>
  );
};

export default Button;
