
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

interface Message {
  role: 'user' | 'ai';
  text: string;
}

const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'ai', text: 'Hello! I am Arogya, your AI wellness assistant. How can I help you with your diet, workouts, or stress management today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsLoading(true);

    // Initializing Google GenAI with the provided API KEY from environment
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      // Using ai.models.generateContent to fetch response directly with system instructions
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: "You are Arogya, a friendly and professional wellness coach. Provide concise, helpful advice on diet, fitness, and mental well-being. IMPORTANT: Do not provide medical diagnoses or prescriptions. Always recommend consulting a doctor for medical concerns. Keep responses encouraging and balanced.",
        },
      });

      // Correctly accessing the .text property from GenerateContentResponse
      const aiResponse = response.text || "I'm sorry, I couldn't process your request. Please try again.";
      setMessages(prev => [...prev, { role: 'ai', text: aiResponse }]);
    } catch (error) {
      console.error("Gemini API Error:", error);
      setMessages(prev => [...prev, { role: 'ai', text: "I'm currently having trouble connecting. Please check your connection and try again in a few moments!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 h-[calc(100vh-64px)] flex flex-col">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-serif font-bold text-gray-900">Arogya AI Assistant</h1>
          <p className="text-sm text-gray-500">Intelligent wellness coaching</p>
        </div>
        <div className="flex items-center space-x-2">
           <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
           <span className="text-xs font-medium text-gray-500 uppercase tracking-widest">Online</span>
        </div>
      </div>

      <div className="flex-grow bg-white rounded-3xl shadow-sm border border-gray-100 flex flex-col overflow-hidden">
        <div className="flex-grow overflow-y-auto p-6 space-y-6 scroll-hide">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-4 rounded-2xl ${
                msg.role === 'user' 
                  ? 'bg-indigo-600 text-white rounded-tr-none' 
                  : 'bg-gray-100 text-gray-800 rounded-tl-none'
              }`}>
                <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-100 p-4 rounded-2xl rounded-tl-none flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
              </div>
            </div>
          )}
          <div ref={scrollRef} />
        </div>

        <form onSubmit={handleSend} className="p-4 bg-gray-50 border-t border-gray-100">
          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about diet, workouts, or stress..."
              className="w-full pl-6 pr-14 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all shadow-sm"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading}
              className="absolute right-2 top-2 bottom-2 px-4 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors disabled:opacity-50"
            >
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </div>
          <p className="text-[10px] text-gray-400 mt-2 text-center uppercase tracking-widest font-bold">
            AROGYA AI DOES NOT PROVIDE MEDICAL DIAGNOSIS
          </p>
        </form>
      </div>
    </div>
  );
};

export default AIAssistant;
