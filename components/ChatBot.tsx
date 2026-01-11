
import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Bot, User, Sparkles, Minus, Maximize2 } from 'lucide-react';
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { ChatMessage } from '../types';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: "Welcome to FeatureV. I'm your Digital Strategist. How can I help you scale your ambition today?",
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatInstance = useRef<Chat | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const initChat = () => {
    if (!chatInstance.current) {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      chatInstance.current = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: `You are the FeatureV Digital Strategist, an elite AI assistant for a premium multi-service agency.
          
          SERVICE DOCUMENTATION:
          1. IT SERVICES:
             - Specialties: AI Engineering (Custom LLMs, RAG), Cloud Infrastructure (AWS, Azure, GCP), DevXOps, Cybersecurity (NextGen SOC, Pen-testing), and Legacy Application Modernization.
             - Tech Stack: MERN (MongoDB, Express, React, Node), Python/Django, TypeScript, Docker, Kubernetes.
             - Value: 99.9% reliability and significant cost reduction through automated workflows.

          2. BPO SERVICES (BUSINESS PROCESS OUTSOURCING):
             - Specialties: Revenue Cycle Management (RCM) for healthcare, Manufacturing supply chain BPO, HR Outsourcing (Global Talent), and 24/7 Omnichannel Customer Support.
             - Focus: Scalability, Lean Six Sigma methodologies, and bottleneck reduction.
             - Goal: Help businesses focus on core strategy while we handle operations.

          3. DIGITAL MARKETING:
             - Specialties: Growth Marketing, SEO (technical and content-driven), ROI-focused PPC (Google/Meta), WhatsApp Business API integration, Bulk SMS solutions, and Advanced IVR voice systems.
             - Performance: Average 300% traffic growth and 12x ROAS for long-term partners.

          4. REAL ESTATE:
             - Specialties: Strategic high-value investment in high-growth corridors, sustainable infrastructure development, and legal transparency.
             - Assurance: 100+ point legal verification process for every property.

          BEHAVIORAL GUIDELINES:
          - Use professional, visionary, and authoritative language.
          - Lead Qualification: If a user asks about a service, briefly explain our expertise and then ask: "Would you like to schedule a deep-dive audit or receive a custom roadmap for this?"
          - Redirection: If the user is ready to proceed, suggest they use the "Consultation" button in the header or the contact form on the service page.
          - Keep responses concise, under 150 words.
          - Use bullet points for readability.`,
        },
      });
    }
  };

  const handleSend = async (text: string = inputText) => {
    if (!text.trim()) return;

    const userMessage: ChatMessage = {
      role: 'user',
      text: text,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);
    initChat();

    try {
      const response = await chatInstance.current!.sendMessageStream({ message: text });
      
      let fullResponse = '';
      setMessages(prev => [...prev, { role: 'model', text: '', timestamp: new Date() }]);

      for await (const chunk of response) {
        const c = chunk as GenerateContentResponse;
        const chunkText = c.text || '';
        fullResponse += chunkText;
        
        setMessages(prev => {
          const newMessages = [...prev];
          const lastIndex = newMessages.length - 1;
          newMessages[lastIndex] = { ...newMessages[lastIndex], text: fullResponse };
          return newMessages;
        });
      }
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { 
        role: 'model', 
        text: "I apologize, but I'm experiencing a temporary connection issue. Please feel free to reach out via our contact form!", 
        timestamp: new Date() 
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  const quickActions = [
    "IT Audit Inquiry",
    "BPO Cost Optimization",
    "Marketing ROI Roadmap",
    "Real Estate Investments"
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
      {/* Floating Action Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative bg-amber-500 text-slate-950 p-4 rounded-full shadow-[0_10px_40px_rgba(245,158,11,0.4)] hover:scale-110 transition-all duration-500 animate-bounce-slow"
        >
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white flex items-center justify-center">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping"></span>
          </div>
          <MessageCircle size={28} />
          <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
            Talk to an Expert
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className={`flex flex-col bg-white rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-slate-100 overflow-hidden transition-all duration-500 ease-in-out
          ${isMinimized ? 'h-16 w-64' : 'h-[600px] w-[380px] md:w-[420px]'}
        `}>
          {/* Header */}
          <div className="bg-slate-950 p-4 flex items-center justify-between text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 blur-2xl rounded-full"></div>
            <div className="flex items-center space-x-3 relative z-10">
              <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center text-slate-950 shadow-lg shadow-amber-500/20">
                <Bot size={22} />
              </div>
              <div>
                <h4 className="text-sm font-black uppercase tracking-widest leading-none">FeatureV AI</h4>
                <div className="flex items-center space-x-1.5 mt-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">Strategist Online</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-1 relative z-10">
              <button onClick={() => setIsMinimized(!isMinimized)} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                {isMinimized ? <Maximize2 size={16} /> : <Minus size={16} />}
              </button>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                <X size={18} />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Messages Area */}
              <div className="flex-grow overflow-y-auto p-6 space-y-6 bg-slate-50/50">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-text-reveal`}>
                    <div className={`flex items-end space-x-2 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shadow-sm flex-shrink-0
                        ${msg.role === 'user' ? 'bg-slate-900 text-white' : 'bg-amber-500 text-slate-950'}
                      `}>
                        {msg.role === 'user' ? <User size={14} /> : <Sparkles size={14} />}
                      </div>
                      <div className={`p-4 rounded-2xl text-sm leading-relaxed shadow-sm
                        ${msg.role === 'user' 
                          ? 'bg-slate-900 text-white rounded-br-none' 
                          : 'bg-white text-slate-700 border border-slate-100 rounded-bl-none'}
                      `}>
                        {msg.text || (isTyping && i === messages.length - 1 ? <span className="flex space-x-1"><span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce"></span><span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.2s]"></span><span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.4s]"></span></span> : '')}
                      </div>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Actions */}
              {messages.length < 3 && !isTyping && (
                <div className="p-4 flex flex-wrap gap-2 border-t border-slate-100 bg-white">
                  {quickActions.map(action => (
                    <button
                      key={action}
                      onClick={() => handleSend(action)}
                      className="text-[10px] font-bold uppercase tracking-widest px-3 py-2 bg-slate-50 text-slate-500 border border-slate-200 rounded-lg hover:border-amber-500 hover:text-amber-600 transition-all"
                    >
                      {action}
                    </button>
                  ))}
                </div>
              )}

              {/* Input Area */}
              <div className="p-4 bg-white border-t border-slate-100">
                <form 
                  onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                  className="relative flex items-center"
                >
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Ask about our services..."
                    className="w-full pl-4 pr-14 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all text-sm font-medium"
                  />
                  <button
                    type="submit"
                    disabled={!inputText.trim() || isTyping}
                    className="absolute right-2 p-3 bg-amber-500 text-slate-950 rounded-xl hover:bg-amber-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-amber-500/20"
                  >
                    <Send size={18} />
                  </button>
                </form>
                <p className="text-[9px] text-center text-slate-400 mt-3 font-bold uppercase tracking-[0.2em]">
                  Powered by FeatureV Intelligence
                </p>
              </div>
            </>
          )}
        </div>
      )}
      
      <style>
        {`
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .animate-bounce-slow {
            animation: bounce-slow 3s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
};

export default ChatBot;
