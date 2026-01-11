
import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Building2, Leaf, FileCheck, UserCheck, ShieldCheck, Gem } from 'lucide-react';
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

const RealEstate: React.FC = () => {
  const expertise = [
    { title: "Strategic Location Selection", icon: <MapPin />, desc: "Identifying high-growth corridors using advanced demographic and infrastructural data analysis." },
    { title: "Quality Infrastructure", icon: <Building2 />, desc: "Partnering with top-tier engineers to deliver developments that stand the test of time." },
    { title: "Sustainable Development", icon: <Leaf />, desc: "Prioritizing eco-friendly designs and energy-efficient systems for long-term ecological balance." },
    { title: "Clear Titles & Compliance", icon: <FileCheck />, desc: "Rigorous legal vetting to ensure 100% transparency and absolute investment security." },
    { title: "Customer-Centric Approach", icon: <UserCheck />, desc: "Tailoring every aspect of our development to the needs and aspirations of our investors." }
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920" alt="Modern Real Estate" className="absolute inset-0 w-full h-full object-cover grayscale-[0.3]" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <RevealSection>
            <div className="max-w-2xl">
              <span className="text-amber-500 font-black uppercase tracking-[0.3em] text-xs mb-4 block">Strategic Investments</span>
              <h1 className="text-6xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-none">Invest in <span className="text-amber-500 italic">Stability</span> and Vision</h1>
              <p className="text-xl text-slate-300 leading-relaxed mb-10 font-medium">
                FeatureV Real Estate focuses on high-value strategic developments that combine luxury, sustainability, and long-term capital appreciation.
              </p>
              <button 
                onClick={() => document.getElementById('expertise')?.scrollIntoView({behavior:'smooth'})} 
                className="bg-amber-500 text-slate-950 px-10 py-5 rounded-xl font-black text-lg hover:bg-amber-400 transition-all shadow-2xl shadow-amber-900/40"
              >
                Explore Opportunities
              </button>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-32" id="expertise">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="text-center mb-24">
              <span className="text-amber-600 font-black uppercase tracking-widest text-xs mb-4 block">Our Advantage</span>
              <h2 className="text-5xl font-black text-slate-900 mb-6 tracking-tight">Our Core <span className="text-amber-500">Expertise</span></h2>
              <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
                We leverage multi-domain intelligence to ensure every property development we undertake meets the highest standards of quality and investment ROI.
              </p>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {expertise.map((item, idx) => (
              <RevealSection key={idx} delay={idx * 100}>
                <div className="flex space-x-6 group h-full">
                  <div className="flex-shrink-0 w-16 h-16 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center border border-amber-100 group-hover:bg-amber-500 group-hover:text-white transition-all shadow-sm">
                    {/* Fix: Adding <any> to React.ReactElement to allow passing the 'size' prop to the cloned element without TypeScript errors */}
                    {React.cloneElement(item.icon as React.ReactElement<any>, { size: 28 })}
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-slate-900 mb-3 tracking-tight">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-sm font-medium">{item.desc}</p>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Transparency */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:40px_40px] opacity-40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <RevealSection>
              <div className="order-2 lg:order-1">
                <ContactForm title="Investment Enquiry" subtitle="Speak with our portfolio managers about exclusive high-value real estate opportunities." />
              </div>
            </RevealSection>
            <RevealSection delay={200}>
              <div className="order-1 lg:order-2">
                <span className="text-amber-600 font-black uppercase tracking-widest text-xs mb-4 block">Proven Reliability</span>
                <h2 className="text-5xl font-black text-slate-900 mb-8 tracking-tighter">Built on <span className="text-amber-500 italic">Integrity.</span> Designed for Growth.</h2>
                <div className="space-y-10">
                  <div className="flex items-start space-x-6">
                    <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100 text-amber-600">
                      <ShieldCheck size={32} />
                    </div>
                    <div>
                      <h4 className="text-xl font-black text-slate-900 mb-2 tracking-tight">Legal Compliance Guaranteed</h4>
                      <p className="text-slate-600 font-medium leading-relaxed">Every project undergoes 100+ point legal verification to ensure clear titles and absolute peace of mind for our investors.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6">
                    <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100 text-amber-600">
                      <Gem size={32} />
                    </div>
                    <div>
                      <h4 className="text-xl font-black text-slate-900 mb-2 tracking-tight">Premium Assets Only</h4>
                      <p className="text-slate-600 font-medium leading-relaxed">We specialize in niche, high-value real estate that offers superior rental yields and capital appreciation in emerging corridors.</p>
                    </div>
                  </div>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RealEstate;
