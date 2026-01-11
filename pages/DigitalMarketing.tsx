
import React, { useEffect, useRef, useState } from 'react';
import { Search, Share2, MousePointer, Send, Smartphone, Megaphone, PhoneCall } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const RevealSection: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
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
    <div 
      ref={ref} 
      className={`transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-[0.98]'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const DigitalMarketing: React.FC = () => {
  const marketingTools = [
    { title: "SEO Strategy", icon: <Search />, desc: "Dominating search results through technical precision, quality content, and authority-building backlink profiles." },
    { title: "Social Media Marketing", icon: <Share2 />, desc: "Building brand communities and driving engagement through data-backed social platform strategies." },
    { title: "ROI-Driven PPC", icon: <MousePointer />, desc: "Maximizing conversion and minimizing cost-per-lead through expert management of Google & Meta ads." },
    { title: "Bulk SMS & WhatsApp API", icon: <Smartphone />, desc: "Harnessing the power of direct-to-customer communication with automated high-open-rate messaging solutions." },
    { title: "Advertising Services", icon: <Megaphone />, desc: "Full-cycle campaign management from creative conceptualization to media buying and performance analysis." },
    { title: "Advanced IVR Solutions", icon: <PhoneCall />, desc: "Enhancing caller experience and sales conversion with intelligent voice response and call routing systems." }
  ];

  return (
    <div className="bg-slate-50 pt-20">
      <section className="bg-white py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <span className="text-amber-600 font-black uppercase tracking-widest text-xs mb-4 block">Growth Marketing Agency</span>
                <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 leading-tight tracking-tight">Grow Your Brand with <span className="text-amber-500 italic">ROI-Focused</span> Marketing</h1>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  FeatureV delivers measurable growth through data-driven campaigns. We don't just chase clicks; we chase revenue, market share, and long-term brand equity.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="p-6 bg-slate-50 rounded-[1.5rem] border border-slate-100">
                    <p className="text-4xl font-black text-amber-600 tracking-tight">300%</p>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Avg. Traffic Growth</p>
                  </div>
                  <div className="p-6 bg-slate-50 rounded-[1.5rem] border border-slate-100">
                    <p className="text-4xl font-black text-amber-600 tracking-tight">12X</p>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Return on Ad Spend</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 relative">
                <div className="absolute -inset-4 bg-amber-500/5 blur-3xl rounded-[3rem]"></div>
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" alt="Digital Growth" className="rounded-[2.5rem] shadow-2xl relative z-10 grayscale-[0.2] hover:grayscale-0 transition-all duration-700" />
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {marketingTools.map((tool, idx) => (
              <RevealSection key={idx} delay={idx * 100}>
                <div className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:shadow-amber-500/5 transition-all group h-full flex flex-col border border-slate-100">
                  <div className="w-16 h-16 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-amber-500 group-hover:text-white transition-all shadow-sm">
                    {/* Fix: Adding <any> to React.ReactElement to allow passing the 'size' prop to the cloned element without TypeScript errors */}
                    {React.cloneElement(tool.icon as React.ReactElement<any>, { size: 28 })}
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{tool.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-6 flex-grow">{tool.desc}</p>
                  <div className="flex items-center text-amber-600 font-black text-xs uppercase tracking-widest cursor-pointer group-hover:translate-x-1 transition-transform pt-4 border-t border-slate-50">
                    Case Studies <Send size={14} className="ml-2" />
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <RevealSection>
            <h2 className="text-4xl md:text-5xl font-black mb-8 italic tracking-tighter text-amber-500">"Marketing without data is like driving with your eyes closed."</h2>
            <p className="text-slate-400 text-lg mb-12 leading-relaxed">
              Let's open your eyes to the true potential of your digital presence. Get a full audit of your current marketing efforts and a strategy to dominate your niche.
            </p>
            <div className="bg-white rounded-[3rem] p-4 shadow-2xl">
              <ContactForm title="Dominate Your Niche" subtitle="Consult with our growth strategists to build a data-driven ROI roadmap." />
            </div>
          </RevealSection>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketing;
