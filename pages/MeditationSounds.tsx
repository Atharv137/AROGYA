
import React, { useState, useRef, useEffect } from 'react';
import { SOUND_LIBRARY } from '../constants';

const MeditationSounds: React.FC = () => {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [isLooping, setIsLooping] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = (soundId: string, url: string) => {
    if (playingId === soundId) {
      audioRef.current?.pause();
      setPlayingId(null);
    } else {
      if (audioRef.current) {
        audioRef.current.src = url;
        audioRef.current.loop = isLooping;
        audioRef.current.play().catch(e => console.error("Audio playback error", e));
        setPlayingId(soundId);
      }
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.loop = isLooping;
    }
  }, [isLooping]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-slate-50 min-h-screen">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">Mindfulness Sounds</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">Create your own sanctuary. Choose from our curated collection of calming sounds to help you focus, relax, or sleep better.</p>
        
        <div className="mt-8 flex items-center justify-center space-x-4">
           <button 
             onClick={() => setIsLooping(!isLooping)}
             className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center ${
               isLooping ? 'bg-indigo-600 text-white' : 'bg-white text-gray-600 border'
             }`}
           >
             <i className={`fa-solid fa-arrows-rotate mr-2 ${isLooping ? 'animate-spin' : ''}`}></i>
             Loop Mode: {isLooping ? 'ON' : 'OFF'}
           </button>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {SOUND_LIBRARY.map((sound) => (
          <div 
            key={sound.id}
            className={`relative group h-64 rounded-3xl overflow-hidden shadow-lg transition-all duration-500 transform hover:scale-[1.02] ${playingId === sound.id ? 'ring-4 ring-indigo-400 ring-offset-4' : ''}`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${sound.bgGradient} opacity-90 group-hover:opacity-100 transition-opacity`}></div>
            
            <div className="relative h-full p-8 flex flex-col justify-between text-white">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full mb-4 inline-block">
                  {sound.category}
                </span>
                <h3 className="text-3xl font-serif font-bold">{sound.name}</h3>
              </div>

              <div className="flex items-center justify-between">
                <i className={`fa-solid ${sound.icon} text-5xl opacity-30`}></i>
                
                <button 
                  onClick={() => togglePlay(sound.id, sound.audioUrl)}
                  className="w-16 h-16 rounded-full bg-white text-indigo-600 flex items-center justify-center shadow-2xl hover:scale-110 transition-transform focus:outline-none"
                >
                  <i className={`fa-solid ${playingId === sound.id ? 'fa-pause' : 'fa-play'} text-2xl ml-1`}></i>
                </button>
              </div>
            </div>

            {/* Visualizer Animation */}
            {playingId === sound.id && (
              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center space-x-1 h-12 pb-2">
                {[...Array(12)].map((_, i) => (
                  <div 
                    key={i} 
                    className="w-1 bg-white/40 rounded-full animate-bounce"
                    style={{ 
                      height: `${Math.random() * 80 + 20}%`,
                      animationDuration: `${Math.random() * 0.5 + 0.5}s`
                    }}
                  ></div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <audio 
        ref={audioRef} 
        onEnded={() => !isLooping && setPlayingId(null)}
        className="hidden" 
      />
      
      <div className="mt-16 text-center opacity-50">
        <p className="text-sm">Put on your headphones for the best experience.</p>
      </div>
    </div>
  );
};

export default MeditationSounds;
