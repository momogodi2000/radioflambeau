// src/pages/Home.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Sections/Hero';
import About from '../components/Sections/About';
import Programs from '../components/Sections/Programs';
import Team from '../components/Sections/Team';
import VideoPresentation from '../components/Sections/VideoPresentation';
import TestimonySection from '../components/Sections/TestimonySection';
import { useAudio } from '../context/AudioContext';
// Contact section removed from home page

const RADIO_STREAM_URL = 'https://s2.myradiostream.com/5382/listen.mp3';

const Home = ({ onRadioPlay, isStreaming, setIsStreaming }) => {
  const { isPlaying } = useAudio();

  return (
    <>
      <Helmet>
        <title>Radio Flambeau-Banka - La voix de la communauté</title>
        <meta name="description" content="Écoutez Radio Flambeau-Banka en direct depuis n'importe où dans le monde. Radio communautaire de l'arrondissement de Banka, Cameroun. Programmes variés, actualités locales et internationales." />
        <meta name="keywords" content="radio flambeau banka, radio cameroun, streaming audio, radio communautaire, banka, centre cameroun, écouter en ligne, musique africaine, actualités" />
        <meta property="og:title" content="Radio Flambeau-Banka - Votre voix communautaire" />
        <meta property="og:description" content="Écoutez Radio Flambeau-Banka en direct depuis n'importe où dans le monde" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.radioflambeaubanka.com" />
        <meta property="og:image" content="images/logo/logo.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Radio Flambeau-Banka - Votre voix communautaire" />
        <meta name="twitter:description" content="Écoutez Radio Flambeau-Banka en direct depuis n'importe où dans le monde" />
        <meta name="twitter:image" content="https://www.radioflambeaubanka.com/images/og-image.jpg" />
        <link rel="canonical" href="https://www.radioflambeaubanka.com" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RadioStation",
            "name": "Radio Flambeau-Banka",
            "description": "Radio communautaire de l'arrondissement de Banka, Cameroun",
            "url": "https://www.radioflambeaubanka.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Banka",
              "addressRegion": "Centre",
              "addressCountry": "CM"
            },
            "broadcastAffiliateOf": {
              "@type": "Organization",
              "name": "Radio Flambeau-Banka"
            },
            "sameAs": [
              "https://www.facebook.com/radioflambeaubanka",
              "https://twitter.com/radioflambeaubanka",
              "https://www.instagram.com/radioflambeaubanka"
            ],
            "broadcastFrequency": "Stream",
            "broadcastTimezone": "Africa/Douala"
          })}
        </script>
      </Helmet>
      
      <main className="min-h-screen">
        <Hero onRadioPlay={onRadioPlay} isPlaying={isPlaying} showAdminButton={false} />
        <About />
        <Programs />
        <Team />
        <VideoPresentation />
        <TestimonySection />
        
        {/* WhatsApp Floating Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <a
            href="https://wa.me/237696044661?text=Bonjour, je souhaite contacter Radio Flambeau-Banka."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
            aria-label="Chat WhatsApp"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
          </a>
        </div>
      </main>
    </>
  );
};

export default Home;