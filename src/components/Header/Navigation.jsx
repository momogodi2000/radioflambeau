// src/components/Header/Navigation.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  const navigationItems = [
    { name: 'Accueil', path: '/' },
    { name: 'À propos', path: '/about' },
    { name: 'Programmes', path: '/programs' },
    { name: 'Équipe', path: '/team' },
    { name: 'Actualités', path: '/news' },
    { name: 'Galerie', path: '/gallery' },
    { name: 'Partenaires', path: '/partners' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActivePath = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="flex items-center space-x-1">
      {navigationItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
            isActivePath(item.path)
              ? 'bg-blue-600 text-white shadow-lg'
              : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
          }`}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
