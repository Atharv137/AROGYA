
import React, { useState } from 'react';
import { MENTORS } from '../constants';

const MentorBooking: React.FC = () => {
  const [selectedMentor, setSelectedMentor] = useState<string | null>(null);
  const [bookingStatus, setBookingStatus] = useState<'idle' | 'success'>('idle');

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setBookingStatus('success');
      setTimeout(() => {
        setBookingStatus('idle');
        setSelectedMentor(null);
      }, 3000);
    }, 1000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">Wellness Mentors</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">Get expert guidance with personalized 1-to-1 sessions. Our mentors are here to help you navigate your unique health journey.</p>
      </header>

      {bookingStatus === 'success' ? (
        <div className="max-w-md mx-auto bg-green-50 border border-green-200 p-10 rounded-3xl text-center shadow-sm">
           <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-3xl shadow-lg">
             <i className="fa-solid fa-check"></i>
           </div>
           <h2 className="text-2xl font-bold text-green-800 mb-2">Booking Requested!</h2>
           <p className="text-green-700">Your mentor will review the request and get back to you shortly via email.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Mentor List */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Expert Roster</h2>
            {MENTORS.map((m) => (
              <div 
                key={m.id}
                className={`flex flex-col sm:flex-row items-center p-6 bg-white rounded-3xl shadow-sm border-2 transition-all cursor-pointer ${
                  selectedMentor === m.id ? 'border-indigo-500' : 'border-transparent hover:border-gray-100'
                }`}
                onClick={() => setSelectedMentor(m.id)}
              >
                <img src={m.photo} className="w-24 h-24 rounded-2xl object-cover mb-4 sm:mb-0 sm:mr-6 shadow-md" alt={m.name} />
                <div className="flex-grow text-center sm:text-left">
                  <h3 className="text-xl font-bold text-gray-900">{m.name}</h3>
                  <span className="inline-block text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
                    {m.specialization}
                  </span>
                  <p className="text-gray-600 text-sm line-clamp-2">{m.bio}</p>
                </div>
                <button 
                  className={`mt-4 sm:mt-0 sm:ml-4 px-6 py-2 rounded-full font-bold text-sm transition-all ${
                    selectedMentor === m.id ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {selectedMentor === m.id ? 'Selected' : 'Choose'}
                </button>
              </div>
            ))}
          </div>

          {/* Booking Form */}
          <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 h-fit sticky top-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Schedule a Session</h2>
            <form onSubmit={handleBook} className="space-y-6">
              {!selectedMentor && (
                <div className="p-4 bg-amber-50 text-amber-700 rounded-xl text-sm mb-4 border border-amber-100">
                  Please select a mentor from the list to continue.
                </div>
              )}
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                  <input type="date" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Time Slot</label>
                  <select required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none">
                    <option value="">Select Time</option>
                    <option>09:00 AM</option>
                    <option>11:00 AM</option>
                    <option>02:00 PM</option>
                    <option>04:00 PM</option>
                    <option>06:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Session Goals / Notes</label>
                <textarea 
                  rows={4} 
                  placeholder="Tell your mentor what you want to achieve..."
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={!selectedMentor}
                className="w-full py-4 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Confirm Booking Request
              </button>
              
              <p className="text-[10px] text-gray-400 text-center uppercase tracking-widest">
                Safe & Confidential Coaching Environment
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MentorBooking;
