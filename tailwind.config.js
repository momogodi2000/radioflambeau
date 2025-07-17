// tailwind.config.js - Optimized Tailwind CSS Configuration
import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    './public/**/*.html',
  ],
  
  // Dark mode configuration
  darkMode: ['class', '[data-theme="dark"]'],
  
  theme: {
    extend: {
      // Custom colors for Radio Flambeau-Banka
      colors: {
        // Primary brand colors
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6', // Main blue
          600: '#2563eb', // Primary brand color
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        
        // Secondary colors
        secondary: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d946ef', // Main purple
          400: '#c026d3',
          500: '#a21caf',
          600: '#86198f',
          700: '#701a75',
          800: '#581c87',
          900: '#4c1d95',
          950: '#2e1065',
        },
        
        // Cameroon flag colors
        cameroon: {
          green: '#00AA00',
          red: '#FF0000',
          yellow: '#FFFF00',
        },
        
        // Radio-specific colors
        radio: {
          live: '#10b981', // Green for live status
          offline: '#ef4444', // Red for offline
          audio: '#8b5cf6', // Purple for audio
          streaming: '#06b6d4', // Cyan for streaming
        },
        
        // Utility colors
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#3b82f6',
      },
      
      // Custom fonts
      fontFamily: {
        sans: ['Poppins', ...fontFamily.sans],
        display: ['Poppins', ...fontFamily.sans],
        body: ['Inter', ...fontFamily.sans],
      },
      
      // Custom spacing
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      
      // Custom border radius
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      },
      
      // Custom box shadows
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 30px -5px rgba(0, 0, 0, 0.05)',
        'strong': '0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 20px 50px -10px rgba(0, 0, 0, 0.1)',
        'glow': '0 0 20px rgba(59, 130, 246, 0.5)',
        'glow-purple': '0 0 20px rgba(147, 51, 234, 0.5)',
        'inner-soft': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      },
      
      // Custom gradients
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': "url('/images/hero-pattern.svg')",
        'noise': "url('/images/noise.png')",
      },
      
      // Custom animations
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-out': 'fadeOut 0.5s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'slide-out': 'slideOut 0.3s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'spin-slow': 'spin 3s linear infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'radio-wave': 'radioWave 2s ease-in-out infinite',
      },
      
      // Custom keyframes
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOut: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(59, 130, 246, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.8)' },
        },
        radioWave: {
          '0%': { 
            transform: 'scale(1)',
            opacity: '1'
          },
          '100%': { 
            transform: 'scale(1.5)',
            opacity: '0'
          },
        },
      },
      
      // Custom typography
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.75rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      
      // Custom screen sizes
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
        // Custom breakpoints
        'mobile': { 'max': '767px' },
        'tablet': { 'min': '768px', 'max': '1023px' },
        'desktop': { 'min': '1024px' },
        'wide': { 'min': '1920px' },
      },
      
      // Custom z-index scale
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      
      // Custom aspect ratios
      aspectRatio: {
        'auto': 'auto',
        'square': '1 / 1',
        'video': '16 / 9',
        'photo': '4 / 3',
        'banner': '3 / 1',
        'card': '5 / 3',
      },
      
      // Custom transforms
      scale: {
        '102': '1.02',
        '103': '1.03',
        '175': '1.75',
      },
      
      // Custom transitions
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'bounce-out': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      },
      
      // Custom blur effects
      blur: {
        '4xl': '80px',
        '5xl': '100px',
      },
      
      // Custom backdrop blur
      backdropBlur: {
        '4xl': '80px',
        '5xl': '100px',
      },
      
      // Custom grid template columns
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
        '14': 'repeat(14, minmax(0, 1fr))',
        '15': 'repeat(15, minmax(0, 1fr))',
        '16': 'repeat(16, minmax(0, 1fr))',
        'auto-fit': 'repeat(auto-fit, minmax(250px, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(250px, 1fr))',
      },
    },
  },
  
  plugins: [
    // Typography plugin for rich text
    require('@tailwindcss/typography'),
    
    // Forms plugin for better form styling
    require('@tailwindcss/forms'),
    
    // Aspect ratio plugin
    require('@tailwindcss/aspect-ratio'),
    
    // Custom utility plugins
    function({ addUtilities, addComponents, theme }) {
      // Glass morphism utilities
      addUtilities({
        '.glass': {
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        },
        '.glass-dark': {
          background: 'rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        },
      });
      
      // Gradient text utilities
      addUtilities({
        '.text-gradient': {
          background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        },
        '.text-gradient-primary': {
          background: `linear-gradient(45deg, ${theme('colors.primary.500')}, ${theme('colors.secondary.500')})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        },
      });
      
      // Scroll behavior utilities
      addUtilities({
        '.scroll-smooth': {
          scrollBehavior: 'smooth',
        },
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      });
      
      // Custom components
      addComponents({
        '.btn': {
          padding: `${theme('spacing.2')} ${theme('spacing.4')}`,
          borderRadius: theme('borderRadius.lg'),
          fontWeight: theme('fontWeight.medium'),
          transition: 'all 0.2s ease-in-out',
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: theme('spacing.2'),
          '&:disabled': {
            opacity: theme('opacity.50'),
            cursor: 'not-allowed',
          },
        },
        '.btn-primary': {
          background: `linear-gradient(45deg, ${theme('colors.primary.500')}, ${theme('colors.primary.600')})`,
          color: theme('colors.white'),
          '&:hover': {
            background: `linear-gradient(45deg, ${theme('colors.primary.600')}, ${theme('colors.primary.700')})`,
            transform: 'translateY(-1px)',
            boxShadow: theme('boxShadow.md'),
          },
        },
        '.btn-secondary': {
          background: `linear-gradient(45deg, ${theme('colors.secondary.500')}, ${theme('colors.secondary.600')})`,
          color: theme('colors.white'),
          '&:hover': {
            background: `linear-gradient(45deg, ${theme('colors.secondary.600')}, ${theme('colors.secondary.700')})`,
            transform: 'translateY(-1px)',
            boxShadow: theme('boxShadow.md'),
          },
        },
        '.card': {
          backgroundColor: theme('colors.white'),
          borderRadius: theme('borderRadius.xl'),
          padding: theme('spacing.6'),
          boxShadow: theme('boxShadow.soft'),
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            boxShadow: theme('boxShadow.medium'),
            transform: 'translateY(-2px)',
          },
        },
        '.container-radio': {
          maxWidth: '1400px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: theme('spacing.4'),
          paddingRight: theme('spacing.4'),
          '@screen sm': {
            paddingLeft: theme('spacing.6'),
            paddingRight: theme('spacing.6'),
          },
          '@screen lg': {
            paddingLeft: theme('spacing.8'),
            paddingRight: theme('spacing.8'),
          },
        },
      });
    },
  ],
  
  // Future CSS features
  future: {
    hoverOnlyWhenSupported: true,
  },
  
  // Experimental features - disabled to avoid warnings
  // experimental: {
  //   optimizeUniversalDefaults: true,
  // },
};