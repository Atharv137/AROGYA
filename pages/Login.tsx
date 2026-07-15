
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API Login
    localStorage.setItem('token', 'mock_token_123');
    onLogin();
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4 py-12 sm:px-6 lg:px-8 bg-[url('https://images.unsplash.com/photo-1518611012118-29fa113f5e3e?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-indigo-950/60 backdrop-blur-sm"></div>
      
      <div className="max-w-md w-full relative z-10">
        <div className="glass-card rounded-3xl p-10 shadow-2xl border border-white/20">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-serif font-bold text-white mb-2">AROGYAM <span className="text-indigo-400">PRO</span></h1>
            <p className="text-indigo-200/80 font-medium">Elevate Your Wellness Journey</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-white/90 mb-2">Email Address</label>
              <div className="relative">
                <i className="fa-solid fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-indigo-400 focus:bg-white/20 transition-all text-white placeholder-white/40"
                  placeholder="name@example.com"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-white/90 mb-2">Password</label>
              <div className="relative">
                <i className="fa-solid fa-lock absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-indigo-400 focus:bg-white/20 transition-all text-white placeholder-white/40"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-500 hover:shadow-lg transition-all transform active:scale-[0.98] shadow-indigo-500/20 shadow-lg"
            >
              Sign In
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-indigo-100/60">
            Don't have an account? <Link to="/register" className="font-bold text-indigo-400 hover:text-indigo-300 transition-colors">Register Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
