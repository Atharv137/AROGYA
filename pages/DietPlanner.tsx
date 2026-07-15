
import React, { useState } from 'react';
import { DIET_PLANS } from '../constants';

const DietPlanner: React.FC = () => {
  const [activePlan, setActivePlan] = useState<string>('Cutting');
  const plan = DIET_PLANS[activePlan];

  const categories = ['Cutting', 'Bulking', 'Balanced'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">Precision Diet Planner</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">Nutrition is 70% of the battle. Choose a plan that aligns with your specific fitness objectives.</p>
      </header>

      <div className="flex justify-center space-x-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActivePlan(cat)}
            className={`px-8 py-3 rounded-full font-bold transition-all ${
              activePlan === cat 
              ? 'bg-indigo-600 text-white shadow-lg scale-105' 
              : 'bg-white text-gray-600 hover:bg-gray-100 shadow-sm'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {Object.entries(plan.meals).map(([type, meal]) => (
          <div key={type} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col md:flex-row hover:shadow-xl transition-all group">
            <div className="md:w-1/3 relative h-48 md:h-auto overflow-hidden">
               <img src={meal.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={meal.name} />
               <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-indigo-600 uppercase tracking-widest shadow-sm">
                 {type}
               </div>
            </div>
            <div className="p-8 md:w-2/3 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{meal.name}</h3>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center text-orange-600">
                    <i className="fa-solid fa-fire mr-2 text-sm"></i>
                    <span className="font-bold">{meal.calories} kcal</span>
                  </div>
                  <div className="w-px h-4 bg-gray-200"></div>
                  <p className="text-gray-500 text-sm italic">{meal.benefits}</p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-2xl">
                 <span className="block text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-2">Macro Breakdown</span>
                 <p className="text-gray-700 font-medium">{meal.macros}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-white p-10 rounded-3xl shadow-sm border border-gray-100 text-center">
        <h3 className="text-2xl font-serif font-bold mb-4 italic">Pro Tip</h3>
        <p className="text-gray-600 max-w-xl mx-auto leading-relaxed">
          While these plans provide a solid baseline, consistency is key. Ensure you're drinking at least 3 liters of water daily and getting 7-9 hours of quality sleep for optimal recovery and results.
        </p>
      </div>
    </div>
  );
};

export default DietPlanner;
