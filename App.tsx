
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Workouts from './pages/Workouts';
import DietPlanner from './pages/DietPlanner';
import Yoga from './pages/Yoga';
import MeditationSounds from './pages/MeditationSounds';
import AIAssistant from './pages/AIAssistant';
import MentorBooking from './pages/MentorBooking';
import BMICalculator from './pages/BMICalculator';

// Defining ProtectedRoute outside the App component to fix TypeScript errors and closure issues
const ProtectedRoute = ({ children, isAuthenticated }: { children: React.ReactNode; isAuthenticated: boolean }) => {
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!localStorage.getItem('token'));

  useEffect(() => {
    const checkAuth = () => {
      setIsAuthenticated(!!localStorage.getItem('token'));
    };
    window.addEventListener('storage', checkAuth);
    return () => window.removeEventListener('storage', checkAuth);
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {isAuthenticated && <Navbar onLogout={() => { localStorage.removeItem('token'); setIsAuthenticated(false); }} />}
        <main className="flex-grow">
          <Routes>
            <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <Login onLogin={() => setIsAuthenticated(true)} />} />
            <Route path="/register" element={isAuthenticated ? <Navigate to="/" /> : <Register />} />
            
            <Route path="/" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Dashboard /></ProtectedRoute>} />
            <Route path="/workouts" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Workouts /></ProtectedRoute>} />
            <Route path="/diet" element={<ProtectedRoute isAuthenticated={isAuthenticated}><DietPlanner /></ProtectedRoute>} />
            <Route path="/yoga" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Yoga /></ProtectedRoute>} />
            <Route path="/meditation" element={<ProtectedRoute isAuthenticated={isAuthenticated}><MeditationSounds /></ProtectedRoute>} />
            <Route path="/ai-assistant" element={<ProtectedRoute isAuthenticated={isAuthenticated}><AIAssistant /></ProtectedRoute>} />
            <Route path="/mentors" element={<ProtectedRoute isAuthenticated={isAuthenticated}><MentorBooking /></ProtectedRoute>} />
            <Route path="/bmi" element={<ProtectedRoute isAuthenticated={isAuthenticated}><BMICalculator /></ProtectedRoute>} />
            
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
