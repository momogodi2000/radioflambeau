// src/components/UI/Card.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  variant = 'default',
  hover = true,
  className = '',
  onClick,
  image,
  imageAlt,
  title,
  subtitle,
  footer,
  badge,
  loading = false,
  ...props 
}) => {
  const baseClasses = 'bg-white rounded-2xl shadow-lg transition-all duration-300 overflow-hidden';
  
  const variants = {
    default: 'hover:shadow-xl',
    glass: 'bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20',
    elevated: 'shadow-xl hover:shadow-2xl hover:-translate-y-1',
    bordered: 'border-2 border-gray-200 hover:border-blue-300',
    gradient: 'bg-gradient-to-br from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100'
  };
  
  const hoverClass = hover ? variants[variant] : '';
  const clickableClass = onClick ? 'cursor-pointer' : '';
  
  const cardClasses = `${baseClasses} ${hoverClass} ${clickableClass} ${className}`;
  
  const renderImage = () => {
    if (!image) return null;
    
    return (
      <div className="relative overflow-hidden">
        {loading ? (
          <div className="w-full h-48 bg-gray-200 animate-pulse"></div>
        ) : (
          <img 
            src={image} 
            alt={imageAlt || title || 'Card image'} 
            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
          />
        )}
        {badge && (
          <div className="absolute top-3 right-3">
            <span className="px-2 py-1 text-xs font-semibold bg-blue-600 text-white rounded-full">
              {badge}
            </span>
          </div>
        )}
      </div>
    );
  };
  
  const renderContent = () => {
    if (loading) {
      return (
        <div className="p-6">
          <div className="h-6 bg-gray-200 rounded animate-pulse mb-3"></div>
          <div className="h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
          <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
        </div>
      );
    }
    
    return (
      <>
        {renderImage()}
        {(title || subtitle) && (
          <div className="p-6 pb-4">
            {title && (
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="text-gray-600 text-sm">
                {subtitle}
              </p>
            )}
          </div>
        )}
        <div className="px-6 pb-6">
          {children}
        </div>
        {footer && (
          <div className="px-6 py-4 border-t border-gray-100 bg-gray-50">
            {footer}
          </div>
        )}
      </>
    );
  };
  
  const CardWrapper = onClick ? motion.div : 'div';
  const cardProps = onClick ? {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    onClick
  } : {};
  
  return (
    <CardWrapper
      className={cardClasses}
      {...cardProps}
      {...props}
    >
      {renderContent()}
    </CardWrapper>
  );
};

export default Card;
