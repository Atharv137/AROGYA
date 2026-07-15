
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BMICalculator: React.FC = () => {
  const [weight, setWeight] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [result, setResult] = useState<{ bmi: number; category: string; color: string; advice: string } | null>(null);

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100; // to meters
    if (w > 0 && h > 0) {
      const bmiValue = parseFloat((w / (h * h)).toFixed(1));
      let category = '';
      let color = '';
      let advice = '';

      if (bmiValue < 18.5) {
        category = 'Underweight';
        color = 'text-blue-500';
        advice = 'A nutrient-rich "Bulking" plan could help you gain healthy weight and muscle.';
      } else if (bmiValue < 25) {
        category = 'Normal weight';
        color = 'text-green-500';
        advice = 'Great job! A "Balanced" plan will help you maintain your current healthy status.';
      } else if (bmiValue < 30) {
        category = 'Overweight';
        color = 'text-yellow-500';
        advice = 'A "Cutting" plan with consistent exercise can help you reach your goals safely.';
      } else {
        category = 'Obese';
        color = 'text-red-500';
        advice = 'Focus on a controlled "Cutting" diet and consult our mentors for personalized care.';
      }

      setResult({ bmi: bmiValue, category, color, advice });
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="glass-card rounded-3xl overflow-hidden shadow-xl flex flex-col md:flex-row">
        <div className="md:w-1/2 p-10 bg-gradient-to-br from-indigo-600 to-purple-700 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
          <h1 className="text-3xl font-serif font-bold mb-6 relative z-10">Know Your BMI</h1>
          <p className="mb-8 text-indigo-100 relative z-10">Body Mass Index is a simple screening tool that helps identify if your weight is in a healthy range relative to your height.</p>
          
          <form onSubmit={calculateBMI} className="space-y-6 relative z-10">
            <div>
              <label className="block text-sm font-medium mb-2">Weight (kg)</label>
              <input 
                type="number" 
                value={weight} 
                onChange={(e) => setWeight(e.target.value)} 
                className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                placeholder="e.g. 70"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Height (cm)</label>
              <input 
                type="number" 
                value={height} 
                onChange={(e) => setHeight(e.target.value)} 
                className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                placeholder="e.g. 175"
                required
              />
            </div>
            <button 
              type="submit" 
              className="w-full py-4 bg-white text-indigo-700 font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
            >
              Calculate BMI
            </button>
          </form>
        </div>

        <div className="md:w-1/2 bg-white flex flex-col justify-center items-center relative overflow-hidden">
          {!result ? (
            <div className="w-full h-full relative">
               <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800" className="absolute inset-0 w-full h-full object-cover opacity-20" alt="Doctor" />
               <div className="absolute inset-0 flex flex-col justify-center items-center p-10">
                  <i className="fa-solid fa-calculator text-6xl mb-4 text-indigo-600/20"></i>
                  <p className="text-gray-400 font-medium">Enter your details to see results</p>
               </div>
            </div>
          ) : (
            <div className="text-center p-10 animate-fadeIn">
              <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Your Result</span>
              <div className={`text-7xl font-bold mb-2 ${result.color}`}>{result.bmi}</div>
              <div className={`text-2xl font-bold mb-6 ${result.color}`}>{result.category}</div>
              <p className="text-gray-600 mb-8 italic max-w-sm">"{result.advice}"</p>
              
              <Link 
                to="/diet" 
                className="inline-block px-10 py-4 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition-all shadow-lg active:scale-95"
              >
                Explore Targeted Diet Plans
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { label: 'Underweight', range: '< 18.5', color: 'bg-blue-100 text-blue-700', icon: 'fa-arrow-down' },
          { label: 'Normal', range: '18.5 - 24.9', color: 'bg-green-100 text-green-700', icon: 'fa-check' },
          { label: 'Overweight', range: '25.0 - 29.9', color: 'bg-yellow-100 text-yellow-700', icon: 'fa-arrow-up' },
          { label: 'Obese', range: '30.0 +', color: 'bg-red-100 text-red-700', icon: 'fa-warning' },
        ].map((item) => (
          <div key={item.label} className={`p-6 rounded-2xl text-center shadow-sm border transition-all hover:shadow-md ${item.color}`}>
            <i className={`fa-solid ${item.icon} mb-2`}></i>
            <div className="font-bold text-lg">{item.label}</div>
            <div className="text-xs opacity-80 font-medium">{item.range}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BMICalculator;
