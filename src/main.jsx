
// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

console.log('main.jsx: Starting application...');

// Vérifier que l'élément root existe
const rootElement = document.getElementById('root');
console.log('main.jsx: Root element found:', rootElement);

if (!rootElement) {
  throw new Error('Root element not found');
}

console.log('main.jsx: Creating React root...');

// Créer et monter l'application
const root = ReactDOM.createRoot(rootElement);

console.log('main.jsx: Rendering App component...');

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

console.log('main.jsx: Application rendered successfully');
