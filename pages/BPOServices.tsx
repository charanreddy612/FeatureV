
import React, { useEffect, useRef, useState } from 'react';
import { Settings, Users, MessageSquare, ClipboardCheck, Factory, TrendingUp } from 'lucide-react';
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

const BPOServices: React.FC = () => {
  const bpoOfferings = [
    { title: "RCM Services", icon: <TrendingUp />, desc: "Optimizing the entire revenue cycle for healthcare providers to minimize leakage and maximize profitability." },
    { title: "Manufacturing BPO", icon: <Factory />, desc: "Streamlining procurement, supply chain logistics, and production support for high-volume manufacturers." },
    { title: "Human Resource Outsourcing", icon: <Users />, desc: "End-to-end talent acquisition, payroll management, and employee lifecycle services." },
    { title: "Chat Support Outsourcing", icon: <MessageSquare />, desc: "Scaling customer delight with 24/7 omnichannel chat and ticketing support via human-AI synergy." },
    { title: "Business Consulting", icon: <Settings />, desc: "Strategic management consulting to identify operational bottlenecks and drive process excellence." },
    { title: "Process Excellence", icon: <ClipboardCheck />, desc: "Implementing Lean and Six Sigma methodologies to drive continuous improvement across business units." }
  ];

  return (
    <div className="bg-white pt-20">
      {/* Hero */}
      <section className="bg-slate-50 py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="text-center mb-16">
              <span className="text-amber-600 font-black uppercase tracking-widest text-xs mb-4 block">Process Optimization</span>
              <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">Strategic <span className="text-amber-500 italic">BPO Solutions</span></h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Unlock operational excellence with global outsourcing solutions designed for scalability, cost-efficiency, and high performance. We don't just handle tasks; we optimize your core business.
              </p>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bpoOfferings.map((svc, idx) => (
              <RevealSection key={idx} delay={idx * 100}>
                <div className="group p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-2xl hover:shadow-amber-500/5 transition-all border-b-4 hover:border-amber-500 h-full flex flex-col">
                  <div className="text-amber-600 mb-6 group-hover:scale-110 transition-transform bg-amber-50 w-14 h-14 rounded-2xl flex items-center justify-center">
                    {React.cloneElement(svc.icon as React.ReactElement<any>, { size: 28 })}
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{svc.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm mb-6 flex-grow">{svc.desc}</p>
                  <div className="flex items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest pt-4 border-t border-slate-50">
                    <span className="w-8 h-[1px] bg-amber-500/30 mr-3"></span> Scalability First
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-amber-500/20 rounded-full blur-[120px]"></div>
        </div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <RevealSection>
            <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter">Optimize Your <span className="text-amber-500 italic">Operations</span> Today</h2>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-3xl mx-auto">
              Leading enterprises trust FeatureV to manage their critical business processes. Reduce overhead and focus on your core strategy while we handle the operational excellence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button 
                onClick={() => document.getElementById('bpo-contact')?.scrollIntoView({behavior:'smooth'})} 
                className="bg-amber-500 text-slate-950 px-10 py-4 rounded-xl font-black text-lg hover:bg-amber-400 transition-all shadow-xl shadow-amber-900/20"
              >
                Request Operational Audit
              </button>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 bg-white" id="bpo-contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="max-w-4xl mx-auto">
              <ContactForm title="Scale Your Operations" subtitle="Consult with our BPO strategists to identify bottleneck reduction opportunities." />
            </div>
          </RevealSection>
        </div>
      </section>
    </div>
  );
};

export default BPOServices;
