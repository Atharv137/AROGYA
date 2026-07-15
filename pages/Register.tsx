
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate Registration
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8 bg-[url('https://picsum.photos/seed/bghealth2/1920/1080')] bg-cover bg-center">
      <div className="absolute inset-0 bg-purple-900/40 backdrop-blur-sm"></div>
      
      <div className="max-w-md w-full relative">
        <div className="glass-card rounded-3xl p-10 shadow-2xl">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-serif font-bold text-purple-900 mb-2">Join Arogyam</h1>
            <p className="text-purple-700/80 font-medium">Start Your Transformation Today</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
             <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
              <div className="relative">
                <i className="fa-solid fa-user absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-gray-100 border-none rounded-xl focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all"
                  placeholder="John Doe"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
              <div className="relative">
                <i className="fa-solid fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-gray-100 border-none rounded-xl focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
              <div className="relative">
                <i className="fa-solid fa-lock absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-gray-100 border-none rounded-xl focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full py-4 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-700 hover:shadow-lg transition-all transform active:scale-[0.98]"
            >
              Create Account
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-gray-600">
            Already have an account? <Link to="/login" className="font-bold text-purple-600 hover:underline">Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
