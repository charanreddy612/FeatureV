
import React, { useEffect, useRef, useState } from 'react';
import { Target, Eye, Heart, Award, Globe, ShieldCheck, Zap } from 'lucide-react';

const RevealItem: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {children}
    </div>
  );
};

const AboutUs: React.FC = () => {
  return (
    <div className="bg-white overflow-hidden">
      <style>
        {`
          @keyframes morph {
            0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
            50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(2deg); }
          }
          .animate-morph { animation: morph 12s ease-in-out infinite; }
          .animate-float { animation: float 6s ease-in-out infinite; }
        `}
      </style>

      {/* Intro Hero */}
      <section className="relative py-32 bg-slate-950 text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[120px] animate-morph"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-600 rounded-full blur-[100px] animate-morph" style={{ animationDelay: '-5s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block px-4 py-1.5 bg-blue-900/40 text-blue-300 border border-blue-800/50 rounded-full text-[10px] font-bold mb-8 tracking-[0.2em] uppercase">
            Our Identity
          </span>
          <h1 className="text-6xl md:text-7xl font-black mb-8 tracking-tighter">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">FeatureV</span> Legacy
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12 font-medium">
            Founded on the pillars of Trust, Transparency, and Innovation, FeatureV is a multi-domain powerhouse designed to solve the complex challenges of the modern business world.
          </p>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 -mt-32 relative z-20">
            {[
              { title: "Our Mission", desc: "To empower businesses through high-tech IT solutions, seamless operational efficiency, and ROI-focused market growth.", icon: <Target size={32} /> },
              { title: "Our Vision", desc: "To be the global benchmark for multi-disciplinary enterprise excellence, bridging technology and human ingenuity.", icon: <Eye size={32} /> },
              { title: "Our Values", desc: "Integrity first, client-centricity always, and a relentless pursuit of innovation in every domain we serve.", icon: <Heart size={32} /> }
            ].map((item, i) => (
              <div key={i} className="p-10 bg-white rounded-3xl shadow-2xl shadow-slate-200/50 border border-slate-100 group hover:-translate-y-2 transition-all duration-500">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why FeatureV */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <RevealItem>
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-600/10 rounded-[3rem] blur-2xl animate-pulse"></div>
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" alt="Team Collaboration" className="rounded-[2.5rem] shadow-2xl relative z-10 grayscale-[0.2] hover:grayscale-0 transition-all duration-700" />
              </div>
            </RevealItem>
            <div>
              <RevealItem>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">What Makes <span className="text-blue-600">FeatureV</span> the Industry Standard?</h2>
                <div className="space-y-10">
                  {[
                    { title: "Multi-Domain Intelligence", desc: "We don't operate in silos. Our marketing experts collaborate with our IT architects to ensure your technology stack drives real-world brand growth.", icon: <Award size={24} /> },
                    { title: "Global Scale, Local Precision", desc: "With a presence in major tech hubs, we bring international best practices to every localized strategy we deploy.", icon: <Globe size={24} /> },
                    { title: "Obsessive Focus on ROI", desc: "We measure success through your growth—whether it's 10x lead generation or 50% operational overhead reduction.", icon: <Zap size={24} /> }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start space-x-6">
                      <div className="bg-slate-900 text-white p-4 rounded-2xl shadow-lg shadow-slate-900/20">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-xl mb-2">{item.title}</h4>
                        <p className="text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </RevealItem>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Quote */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <RevealItem>
            <div className="flex justify-center mb-8">
              <ShieldCheck size={48} className="text-blue-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 italic leading-snug mb-8">
              "Excellence is not an act, but a habit. At FeatureV, we've built a culture where results are the only language we speak."
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">Our Executive Philosophy</p>
          </RevealItem>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
