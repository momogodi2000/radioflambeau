// src/components/Common/ErrorBoundary.jsx - Enhanced error handling
import React from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false, 
      error: null, 
      errorInfo: null,
      retryCount: 0 
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    this.setState({
      error: error,
      errorInfo: errorInfo
    });

    // Report error to monitoring service
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Log additional information for lazy loading errors
    if (error.name === 'ChunkLoadError' || 
        (error.message && error.message.includes('Loading chunk')) ||
        (error.message && error.message.includes('Failed to fetch'))) {
      console.log('Detected lazy loading error. This might be a network issue.');
      
      // Try to reload the failed chunk
      if (window.location.search.indexOf('retry=true') === -1) {
        const separator = window.location.search ? '&' : '?';
        setTimeout(() => {
          window.location.href = window.location.pathname + 
                                window.location.search + 
                                `${separator}retry=true`;
        }, 2000);
      }
    }
  }

  handleRetry = () => {
    this.setState(prevState => ({
      hasError: false,
      error: null,
      errorInfo: null,
      retryCount: prevState.retryCount + 1
    }));
    
    // Force reload of resources
    if (window.location.search.indexOf('retry=true') === -1) {
      const separator = window.location.search ? '&' : '?';
      window.location.href = window.location.pathname + 
                            window.location.search + 
                            `${separator}retry=true`;
    } else {
      window.location.reload();
    }
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      // Check for specific error types to provide better error messages
      const isNetworkError = this.state.error && (
        this.state.error.name === 'ChunkLoadError' || 
        (this.state.error.message && this.state.error.message.includes('Loading chunk')) ||
        (this.state.error.message && this.state.error.message.includes('Failed to fetch'))
      );
      
      const isLazyLoadError = this.state.error && (
        this.state.error.message && this.state.error.message.includes('lazy')
      );

      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle size={32} className="text-red-500" />
            </div>
            
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              {isNetworkError 
                ? "Problème de chargement" 
                : "Oups ! Une erreur s'est produite"}
            </h1>
            
            <p className="text-gray-600 mb-8">
              {isNetworkError 
                ? "Nous avons rencontré un problème de réseau lors du chargement de la page. Veuillez vérifier votre connexion internet."
                : isLazyLoadError
                  ? "Un composant de la page n'a pas pu être chargé correctement."
                  : "Nous sommes désolés, quelque chose ne fonctionne pas correctement. Veuillez réessayer ou retourner à l'accueil."}
            </p>
            
            {process.env.NODE_ENV === 'development' && (
              <details className="text-left mb-6 bg-gray-100 p-4 rounded-lg">
                <summary className="font-semibold cursor-pointer">
                  Détails de l'erreur (développement)
                </summary>
                <div className="mt-2 text-sm text-gray-700">
                  <strong>Erreur:</strong> {this.state.error && this.state.error.toString()}
                  <br />
                  <strong>Stack:</strong>
                  <pre className="mt-2 text-xs overflow-auto">
                    {this.state.errorInfo && this.state.errorInfo.componentStack}
                  </pre>
                </div>
              </details>
            )}
            
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={this.handleRetry}
                className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
              >
                <RefreshCw size={16} />
                <span>Réessayer</span>
              </button>
              
              <button
                onClick={this.handleGoHome}
                className="flex-1 bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors flex items-center justify-center space-x-2"
              >
                <Home size={16} />
                <span>Accueil</span>
              </button>
            </div>
            
            {this.state.retryCount > 0 && (
              <p className="text-sm text-gray-500 mt-4">
                Tentatives: {this.state.retryCount}
              </p>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
