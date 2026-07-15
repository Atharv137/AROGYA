
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const cards = [
    { 
      title: 'Workout Library', 
      desc: 'Browse 40+ exercises for every muscle group.', 
      icon: 'fa-dumbbell', 
      link: '/workouts', 
      color: 'bg-blue-600', 
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800'
    },
    { 
      title: 'Diet Planner', 
      desc: 'Get meal plans for Bulking, Cutting or Maintenance.', 
      icon: 'fa-utensils', 
      link: '/diet', 
      color: 'bg-green-600', 
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800'
    },
    { 
      title: 'Yoga & Zen', 
      desc: 'Relax with guided poses and stress relief.', 
      icon: 'fa-om', 
      link: '/yoga', 
      color: 'bg-purple-600', 
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800'
    },
    { 
      title: 'Wellness AI', 
      desc: 'Chat with our AI for health tips and guidance.', 
      icon: 'fa-robot', 
      link: '/ai-assistant', 
      color: 'bg-indigo-600', 
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fdec0ed?auto=format&fit=crop&q=80&w=800'
    },
    { 
      title: 'Mindfulness Sounds', 
      desc: 'Calm your mind with ambient sounds.', 
      icon: 'fa-spa', 
      link: '/meditation', 
      color: 'bg-cyan-600', 
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800'
    },
    { 
      title: 'BMI Calculator', 
      desc: 'Check your current health status and suggestions.', 
      icon: 'fa-calculator', 
      link: '/bmi', 
      color: 'bg-orange-600', 
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800'
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <header className="mb-12">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-2">Welcome Back to Arogyam</h1>
        <p className="text-gray-600">Your health journey is in your hands. What would you like to focus on today?</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, i) => (
          <Link
            key={i}
            to={card.link}
            className="group relative block rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 aspect-[4/5]"
          >
            {/* Background Image */}
            <img src={card.image} alt={card.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
            
            {/* Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
              <div className={`w-12 h-12 ${card.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                <i className={`fa-solid ${card.icon} text-xl`}></i>
              </div>
              <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
              <p className="text-white/80 text-sm mb-6 line-clamp-2">{card.desc}</p>
              <div className="flex items-center text-white font-semibold">
                <span>Explore Now</span>
                <i className="fa-solid fa-arrow-right ml-2 group-hover:translate-x-2 transition-transform"></i>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-10 text-white flex flex-col md:flex-row items-center justify-between shadow-xl overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
        
        <div className="relative z-10 mb-8 md:mb-0 md:mr-8 flex-1">
          <h2 className="text-3xl font-serif font-bold mb-4">Need personalized guidance?</h2>
          <p className="text-indigo-100 text-lg mb-6 max-w-lg">Book a 1-to-1 session with our expert wellness mentors for a tailored plan designed specifically for your unique physiology.</p>
          <Link to="/mentors" className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-full font-bold hover:bg-indigo-50 transition-colors shadow-lg active:scale-95">
            Find a Mentor
          </Link>
        </div>
        
        <div className="relative z-10 w-full md:w-2/5 h-64 rounded-2xl overflow-hidden shadow-2xl">
           <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Health Professional" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
