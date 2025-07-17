// src/components/Common/ScrollIndicator.jsx
import React from 'react';
import { motion } from 'framer-motion';

const ScrollIndicator = ({ progress }) => {
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 z-50 transform-origin-left"
      style={{
        scaleX: progress / 100,
      }}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: progress / 100 }}
      transition={{ duration: 0.1 }}
    />
  );
};

export default ScrollIndicator;
