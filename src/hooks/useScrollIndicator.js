
// src/hooks/useScrollIndicator.js
import { useState, useEffect } from 'react';

const useScrollIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  
  useEffect(() => {
    const updateScrollIndicator = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(Math.min(100, Math.max(0, scrollPercent)));
    };
    
    window.addEventListener('scroll', updateScrollIndicator);
    updateScrollIndicator(); // Initial call
    
    return () => window.removeEventListener('scroll', updateScrollIndicator);
  }, []);
  
  return { scrollProgress };
};

export { useScrollIndicator };
export default useScrollIndicator;
