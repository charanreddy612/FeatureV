
import React, { useEffect, useRef, useState } from 'react';
import { Cloud, Shield, Database, Globe, Brain, Code, Search, BarChart } from 'lucide-react';
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

const ITServices: React.FC = () => {
  const categories = [
    {
      title: "Core Emerging Tech",
      services: [
        { name: "AI & Automation", icon: <Brain />, desc: "Deploying next-gen LLMs and intelligent process automation for enterprise workflows." },
        { name: "AR / VR / MR", icon: <Globe />, desc: "Immersive spatial computing solutions for training, retail, and remote collaboration." },
        { name: "Blockchain", icon: <Shield />, desc: "Secure, decentralized ledger technology for transparent and immutable data management." }
      ]
    },
    {
      title: "Cloud & Infrastructure",
      services: [
        { name: "Cloud Transformation", icon: <Cloud />, desc: "Seamless migration and modernization across AWS, Azure, and Google Cloud environments." },
        { name: "DevXOps", icon: <Code />, desc: "Accelerating software delivery lifecycles with automated CI/CD and security-first cultures." },
        { name: "NexGen SOC", icon: <Shield />, desc: "24/7 cybersecurity monitoring and incident response powered by threat intelligence." }
      ]
    },
    {
      title: "Data & Intelligence",
      services: [
        { name: "Enterprise Data Advisory", icon: <Database />, desc: "Strategic consulting for data governance, quality, and lifecycle modernization." },
        { name: "Analytics & AI", icon: <BarChart />, desc: "Transforming raw data into actionable business intelligence through predictive modeling." },
        { name: "Data Engineering", icon: <Search />, desc: "Building robust data pipelines and scalable warehouse architectures." }
      ]
    }
  ];

  return (
    <div className="bg-slate-50">
      {/* Hero */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <RevealSection>
            <div className="max-w-3xl">
              <span className="text-amber-500 font-black uppercase tracking-widest text-xs mb-4 block">Enterprise Innovation</span>
              <h1 className="text-5xl md:text-6xl font-black mb-6">Cutting-Edge <span className="text-amber-500 italic">IT Services</span></h1>
              <p className="text-xl text-slate-300 leading-relaxed mb-8">
                Driving digital transformation through AI, Cloud, and Data Modernization. We build high-performance infrastructure for the world's most ambitious businesses.
              </p>
              <div className="flex flex-wrap gap-3">
                {['AI-Ready', 'Cloud-Native', 'Cyber-Secure', 'Data-Driven'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-slate-800 text-amber-500/80 border border-slate-700 rounded-md text-[10px] font-bold uppercase tracking-wider">{tag}</span>
                ))}
              </div>
            </div>
          </RevealSection>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="50" r="40" stroke="white" strokeWidth="0.5" />
            <circle cx="100" cy="50" r="30" stroke="white" strokeWidth="0.5" />
            <circle cx="100" cy="50" r="20" stroke="white" strokeWidth="0.5" />
          </svg>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {categories.map((cat, idx) => (
            <div key={idx} className="mb-20 last:mb-0">
              <RevealSection>
                <h2 className="text-3xl font-black text-slate-900 mb-10 pb-4 border-b border-slate-200 uppercase tracking-tight">
                  {cat.title}
                </h2>
              </RevealSection>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {cat.services.map((svc, sIdx) => (
                  <RevealSection key={sIdx} delay={sIdx * 100}>
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-amber-500/5 hover:-translate-y-1 transition-all group h-full">
                      <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-white transition-all">
                        {svc.icon}
                      </div>
                      <h3 className="text-xl font-black text-slate-900 mb-3">{svc.name}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-4">{svc.desc}</p>
                      <div className="text-[10px] font-bold text-amber-600 uppercase tracking-widest pt-4 border-t border-slate-50 mt-auto">Enterprise Efficiency</div>
                    </div>
                  </RevealSection>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CRM & Specialist Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="bg-slate-950 rounded-[3rem] p-12 text-white flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-[100px] rounded-full"></div>
              <div className="lg:w-1/2 relative z-10">
                <h2 className="text-4xl font-black mb-6 tracking-tight">Advanced CRM & Application Management</h2>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                  Optimize customer relationships and legacy systems with our NextGen AMS and Well-Architected Framework Assessments. We ensure your application stack is robust, scalable, and cost-efficient.
                </p>
                <ul className="space-y-4">
                  {['NextGen Application Management', 'Salesforce & Custom CRM Solutions', 'Cloud-Native App Modernization', 'Architecture Health Checks'].map((item, i) => (
                    <li key={item} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center text-slate-950 font-black text-xs">✓</div>
                      <span className="text-slate-200 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:w-1/3 relative z-10 w-full">
                <ContactForm title="IT Assessment" subtitle="Request specialized audit" />
              </div>
            </div>
          </RevealSection>
        </div>
      </section>
    </div>
  );
};

export default ITServices;
