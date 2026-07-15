
import React, { useState } from 'react';
import { WORKOUT_CATEGORIES, EXERCISES } from '../constants';

const Workouts: React.FC = () => {
  const [activeTab, setActiveTab] = useState(WORKOUT_CATEGORIES[0]);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const exercises = EXERCISES[activeTab] || [];

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">Workout Library</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">Select a muscle group to view effective exercises with detailed guidance and suggested repetitions.</p>
      </div>

      {/* Tabs */}
      <div className="flex overflow-x-auto scroll-hide space-x-2 mb-10 pb-2 border-b">
        {WORKOUT_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveTab(cat);
              setExpandedId(null);
            }}
            className={`px-6 py-3 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
              activeTab === cat 
              ? 'bg-indigo-600 text-white shadow-md' 
              : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Exercise Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
        {exercises.map((ex) => (
          <div key={ex.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
            <div className="relative h-56 shrink-0">
              <img src={ex.image} alt={ex.name} className="w-full h-full object-cover" />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-indigo-600 shadow-sm">
                {ex.difficulty}
              </div>
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{ex.name}</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">
                {ex.description}
              </p>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-50 mb-4">
                <div className="flex items-center space-x-4">
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-gray-400 tracking-wider">Sets</span>
                    <span className="text-indigo-600 font-bold">{ex.sets}</span>
                  </div>
                  <div className="w-px h-8 bg-gray-100"></div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-gray-400 tracking-wider">Reps</span>
                    <span className="text-indigo-600 font-bold">{ex.reps}</span>
                  </div>
                </div>
                <button 
                  onClick={() => toggleExpand(ex.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    expandedId === ex.id 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100'
                  }`}
                >
                  {expandedId === ex.id ? 'Close' : 'Details'}
                </button>
              </div>

              {/* Expanded Details */}
              {expandedId === ex.id && (
                <div className="pt-4 border-t border-gray-50 space-y-4 animate-fadeIn">
                  <div>
                    <h4 className="text-[10px] uppercase font-bold text-gray-400 tracking-widest mb-1">Target Muscles</h4>
                    <div className="flex flex-wrap gap-2">
                      {ex.targetMuscles.map((muscle, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-[10px] rounded-md font-medium">
                          {muscle}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase font-bold text-gray-400 tracking-widest mb-1">Equipment</h4>
                    <p className="text-sm text-gray-700 font-medium">{ex.equipment}</p>
                  </div>
                  <div>
                    <a 
                      href={ex.videoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors"
                    >
                      <i className="fa-brands fa-youtube mr-2 text-red-500 text-sm"></i>
                      Watch Demonstration
                      <i className="fa-solid fa-arrow-up-right-from-square ml-2 text-[10px]"></i>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {exercises.length === 0 && (
        <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-gray-100">
           <i className="fa-solid fa-dumbbell text-4xl text-gray-200 mb-4"></i>
           <p className="text-gray-400">Exercises for this category are coming soon.</p>
        </div>
      )}
    </div>
  );
};

export default Workouts;
