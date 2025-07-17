import React from 'react';
import { useAudio } from '../../context/AudioContext';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

const RADIO_STREAM_URL = 'https://s2.myradiostream.com/5382/listen.mp3';

const RadioPlayer = () => {
  const {
    isPlaying,
    volume,
    isMuted,
    isLoading,
    error,
    play,
    pause,
    togglePlay,
    setVolume,
    toggleMute
  } = useAudio();

  return (
    <div className="w-full max-w-md mx-auto flex items-center gap-4 bg-gray-900 rounded-2xl shadow-lg px-6 py-3 border border-blue-700">
      <div className="flex items-center gap-2">
        <div className="bg-blue-600 rounded-full p-2">
          <span role="img" aria-label="radio" className="text-xl">📻</span>
        </div>
        <div>
          <div className="font-bold text-white text-base leading-tight">Radio Flambeau-Banka</div>
          <div className="text-xs text-blue-200">En direct</div>
        </div>
      </div>
      <button
        onClick={() => {
          if (isPlaying) pause(); else play(RADIO_STREAM_URL, { streamUrl: RADIO_STREAM_URL });
        }}
        className="ml-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        aria-label={isPlaying ? 'Pause' : 'Play'}
      >
        {isPlaying ? <Pause size={22} /> : <Play size={22} />}
      </button>
      <div className="flex items-center gap-2 ml-2">
        <button
          onClick={toggleMute}
          className="text-blue-300 hover:text-blue-500 focus:outline-none"
          aria-label={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={isMuted ? 0 : volume}
          onChange={e => setVolume(Number(e.target.value))}
          className="w-20 accent-blue-500"
        />
      </div>
      {isLoading && <span className="ml-2 text-xs text-blue-300 animate-pulse">Chargement...</span>}
      {error && <span className="ml-2 text-xs text-red-400">{error}</span>}
    </div>
  );
};

export default RadioPlayer; 