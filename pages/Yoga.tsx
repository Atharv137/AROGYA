
import React from 'react';
import { YOGA_POSES } from '../constants';

const Yoga: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-indigo-50/30">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">Yoga & Zen Flow</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">Discover the power of flexibility and inner peace. Master these poses to strengthen your body and calm your mind.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {YOGA_POSES.map((pose, i) => (
          <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm group hover:shadow-2xl transition-all duration-300">
            <div className="h-64 relative overflow-hidden">
               <img src={pose.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={pose.name} />
               <div className="absolute inset-0 bg-indigo-900/10 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-indigo-900 mb-3">{pose.name}</h3>
              <p className="text-gray-600 text-sm mb-6 line-clamp-2">{pose.description}</p>
              
              <div className="pt-6 border-t border-indigo-50">
                 <h4 className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-3">Health Benefits</h4>
                 <p className="text-gray-700 text-sm font-medium italic">
                    <i className="fa-solid fa-leaf mr-2 text-green-500"></i>
                    {pose.benefits}
                 </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
         <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-10 text-white">
            <h3 className="text-2xl font-bold mb-4">The Morning Flow</h3>
            <p className="mb-6 opacity-90">Start your day with Sun Salutation to awaken your metabolism and energize your spirit for the day ahead.</p>
            <button className="bg-white text-indigo-600 px-6 py-2 rounded-full font-bold text-sm">Watch Tutorial</button>
         </div>
         <div className="bg-white border border-indigo-100 rounded-3xl p-10 text-indigo-900 shadow-sm">
            <h3 className="text-2xl font-bold mb-4">Mindful Breathing</h3>
            <p className="text-gray-600 mb-6 italic">"Breath is the bridge which connects life to consciousness, which unites your body to your thoughts."</p>
            <div className="flex space-x-2">
               {[...Array(4)].map((_, i) => <div key={i} className="w-2 h-2 bg-indigo-200 rounded-full animate-pulse" style={{animationDelay: `${i*0.2}s`}}></div>)}
            </div>
         </div>
      </div>
    </div>
  );
};

export default Yoga;
