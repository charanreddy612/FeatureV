
import React, { useState, useEffect, useRef } from 'react';
// Fix: Use wildcard import for react-router-dom to handle environment-specific resolution issues
import * as ReactRouterDOM from 'react-router-dom';
import { Cpu, Users, BarChart, Home as HouseIcon, ArrowRight, ShieldCheck, Zap, Globe } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import ContactForm from '../components/ContactForm';

const { Link } = ReactRouterDOM;

const AnimatedCounter: React.FC<{ target: number }> = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    const duration = 2000;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const increment = Math.min(Math.floor((progress / duration) * end), end);
      setCount(increment);
      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [target]);

  return <span className="text-5xl md:text-6xl font-extrabold text-amber-500">{count}+</span>;
};

const RevealItem: React.FC<{ children: React.ReactNode; index: number }> = ({ children, index }) => {
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
      { threshold: 0.15 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-[1200ms] cubic-bezier(0.16, 1, 0.3, 1) transform ${
        isVisible ? 'opacity-100 translate-y-0 reveal-visible' : 'opacity-0 translate-y-12'
      }`}
    >
      {children}
    </div>
  );
};

const Home: React.FC = () => {
  const [headerInView, setHeaderInView] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: "IT Services",
      icon: <Cpu size={32} />,
      link: "/it-services",
      description: [
        "End-to-end digital transformation",
        "Advanced AI & Cloud solutions",
        "Robust enterprise data security",
        "Custom application development",
        "Modern DevXOps frameworks"
      ],
      keywords: ["AI", "Cloud", "Data", "Security", "Scale"]
    },
    {
      title: "BPO Services",
      icon: <Users size={32} />,
      link: "/bpo-services",
      description: [
        "Optimized revenue cycle management",
        "Scalable process outsourcing",
        "Efficiency-driven operations",
        "Global talent management",
        "24/7 omnichannel chat support"
      ],
      keywords: ["Efficiency", "RCM", "Operations", "Growth"]
    },
    {
      title: "Digital Marketing",
      icon: <BarChart size={32} />,
      link: "/digital-marketing",
      description: [
        "High-impact SEO & SEM strategies",
        "ROI-driven paid campaigns",
        "Brand authority management",
        "WhatsApp API & SMS marketing",
        "Advanced IVR & voice solutions"
      ],
      keywords: ["Leads", "ROI", "SEO", "Traffic"]
    },
    {
      title: "Real Estate",
      icon: <HouseIcon size={32} />,
      link: "/real-estate",
      description: [
        "Strategic high-value investment",
        "Sustainable infrastructure dev",
        "Legal & compliance transparency",
        "Market-leading location insights",
        "Client-centric long-term assets"
      ],
      keywords: ["Trust", "Asset", "Growth", "Compliance"]
    }
  ];

  return (
    <div className="overflow-hidden">
      <style>
        {`
          @keyframes morph {
            0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
            50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
            100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          }
          @keyframes float-subtle {
            0%, 100% { transform: translateY(0) translateX(0); }
            33% { transform: translateY(-30px) translateX(15px); }
            66% { transform: translateY(15px) translateX(-20px); }
          }
          @keyframes drift-organic {
            0% { transform: translate(0, 0) scale(1) rotate(0deg); }
            25% { transform: translate(5%, 10%) scale(1.1) rotate(2deg); }
            50% { transform: translate(-5%, 15%) scale(0.95) rotate(-1deg); }
            75% { transform: translate(-10%, -5%) scale(1.05) rotate(1deg); }
            100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          }
          @keyframes float-particle {
            0%, 100% { transform: translateY(0) translateX(0) scale(1); opacity: 0.4; }
            25% { transform: translateY(-60px) translateX(30px) scale(1.2); opacity: 0.6; }
            50% { transform: translateY(-20px) translateX(60px) scale(0.8); opacity: 0.3; }
            75% { transform: translateY(-80px) translateX(15px) scale(1.1); opacity: 0.5; }
          }
          @keyframes gradient-shift {
            0% { filter: hue-rotate(0deg) brightness(1); }
            50% { filter: hue-rotate(15deg) brightness(1.2); }
            100% { filter: hue-rotate(0deg) brightness(1); }
          }
          @keyframes rotate-slow {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes text-gradient-move {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          @keyframes iconBounce {
            0% { transform: translateY(20px) scale(0.6); opacity: 0; }
            60% { transform: translateY(-12px) scale(1.05); opacity: 1; }
            85% { transform: translateY(4px) scale(0.98); }
            100% { transform: translateY(0) scale(1); opacity: 1; }
          }
          @keyframes grain {
            0%, 100% { transform: translate(0, 0); }
            10% { transform: translate(-1%, -1%); }
            20% { transform: translate(1%, 1%); }
            30% { transform: translate(-2%, -2%); }
            40% { transform: translate(2%, 2%); }
            50% { transform: translate(-1%, 1%); }
            60% { transform: translate(1%, -1%); }
            70% { transform: translate(-2%, 1%); }
            80% { transform: translate(2%, -1%); }
            90% { transform: translate(-1%, -2%); }
          }
          @keyframes textReveal {
            0% { opacity: 0; transform: translateY(40px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-morph {
            animation: morph 12s ease-in-out infinite;
          }
          .animate-drift {
            animation: drift-organic 30s ease-in-out infinite;
          }
          .animate-particle {
            animation: float-particle 20s ease-in-out infinite;
          }
          .animate-gradient-shift {
            animation: gradient-shift 15s ease-in-out infinite;
          }
          .animate-text-gradient {
            background-size: 300% 300%;
            animation: text-gradient-move 8s ease-in-out infinite;
          }
          .animate-float-bg {
            animation: float-subtle 18s ease-in-out infinite;
          }
          .animate-rotate-slow {
            animation: rotate-slow 40s linear infinite;
          }
          .hero-noise::before {
            content: "";
            position: absolute;
            top: -100%;
            left: -100%;
            width: 300%;
            height: 300%;
            background-image: url("https://grainy-gradients.vercel.app/noise.svg");
            opacity: 0.04;
            animation: grain 8s steps(10) infinite;
            pointer-events: none;
            z-index: 1;
          }
          .reveal-visible .service-icon-container {
            animation: iconBounce 1s cubic-bezier(0.17, 0.89, 0.32, 1.28) forwards;
          }
          .service-icon-container {
            opacity: 0;
            transform: translateY(20px);
          }
          .animate-text-reveal {
            opacity: 0;
            animation: textReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          .delay-200 { animation-delay: 0.2s; }
          .delay-400 { animation-delay: 0.4s; }
          .delay-600 { animation-delay: 0.6s; }
          .delay-800 { animation-delay: 0.8s; }
          
          .grid-pattern-subtle {
            background-image: 
              linear-gradient(to right, #f1f5f9 1px, transparent 1px),
              linear-gradient(to bottom, #f1f5f9 1px, transparent 1px);
            background-size: 60px 60px;
          }
        `}
      </style>

      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center bg-slate-950 overflow-hidden hero-noise">
        {/* Advanced Dynamic Background Layers */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Base Atmosphere */}
          <div className="absolute inset-0 opacity-40 animate-rotate-slow" style={{ background: 'conic-gradient(from 180deg at 50% 50%, #1e293b 0deg, #1e1b4b 120deg, #0f172a 240deg, #1e293b 360deg)' }}></div>
          
          {/* Grids with varying depth */}
          <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff12_2px,transparent_2px),linear-gradient(to_bottom,#ffffff12_2px,transparent_2px)] bg-[size:240px_240px]"></div>
          
          {/* Primary Morphing Mesh Orbs */}
          <div className="absolute top-[-15%] right-[-10%] w-[90vw] h-[90vw] max-w-[1300px] bg-amber-600/5 rounded-full blur-[180px] animate-morph animate-drift animate-gradient-shift"></div>
          <div className="absolute bottom-[-20%] left-[-15%] w-[80vw] h-[80vw] max-w-[1100px] bg-amber-500/10 rounded-full blur-[160px] animate-morph animate-drift animate-gradient-shift" style={{ animationDelay: '-5s', animationDirection: 'reverse' }}></div>
          
          {/* Secondary Drifting Accents */}
          <div className="absolute top-[10%] left-[5%] w-[50vw] h-[50vw] max-w-[700px] bg-slate-800/25 rounded-full blur-[140px] animate-morph animate-float-bg animate-gradient-shift" style={{ animationDelay: '-12s' }}></div>
          <div className="absolute bottom-[30%] right-[5%] w-[40vw] h-[40vw] max-w-[600px] bg-amber-400/5 rounded-full blur-[120px] animate-morph animate-particle" style={{ animationDuration: '25s', animationDelay: '-8s' }}></div>

          {/* Floating Orbital Particles */}
          <div className="absolute top-[20%] left-[40%] w-2 h-2 bg-amber-500 rounded-full blur-[4px] animate-particle" style={{ animationDuration: '15s' }}></div>
          <div className="absolute top-[60%] left-[20%] w-3 h-3 bg-amber-400 rounded-full blur-[6px] animate-particle" style={{ animationDuration: '22s', animationDelay: '-10s' }}></div>
          <div className="absolute bottom-[20%] right-[30%] w-2 h-2 bg-white rounded-full blur-[3px] animate-particle" style={{ animationDuration: '18s', animationDelay: '-5s' }}></div>
          
          {/* Dynamic Glassmorphism distortion shapes */}
          <div className="absolute top-[35%] right-[10%] w-[30vw] h-[30vw] max-w-[450px] backdrop-blur-[80px] bg-white/5 rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] border border-white/10 animate-drift shadow-[inset_0_0_80px_rgba(255,255,255,0.05)]" style={{ animationDuration: '35s', animationDelay: '-12s' }}></div>
          <div className="absolute bottom-[10%] left-[25%] w-[20vw] h-[20vw] max-w-[300px] backdrop-blur-[60px] bg-amber-500/5 rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] border border-amber-500/10 animate-float-bg" style={{ animationDuration: '45s', animationDelay: '-20s' }}></div>
          
          {/* Gradient Mask Vignette */}
          <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(2, 6, 23, 0.4) 40%, rgba(2, 6, 23, 0.8) 75%, rgba(2, 6, 23, 0.98) 100%)' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-amber-900/20 text-amber-300 border border-amber-800/30 rounded-full text-[10px] font-bold mb-8 tracking-[0.2em] uppercase backdrop-blur-sm animate-text-reveal">
                Next-Gen Business Solutions
              </span>
              <h1 className="text-6xl lg:text-8xl font-black text-white leading-tight mb-8 tracking-tighter animate-text-reveal delay-200">
                Scale Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-yellow-200 to-amber-400 animate-text-gradient">Ambition</span>
              </h1>
              <p className="text-xl text-slate-400 mb-12 leading-relaxed max-w-xl font-medium animate-text-reveal delay-400">
                FeatureV provides enterprise-grade transformation through specialized IT, process optimization, growth marketing, and strategic real estate.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 animate-text-reveal delay-600">
                <Link to="/it-services" className="group bg-amber-500 text-slate-950 px-10 py-5 rounded-xl text-lg font-bold hover:bg-amber-400 transition-all flex items-center justify-center shadow-2xl shadow-amber-900/20 relative overflow-hidden">
                  <span className="relative z-10">Explore Expertise</span>
                  <ArrowRight className="ml-2 relative z-10 group-hover:translate-x-1 transition-transform" size={22} />
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </Link>
                <Link to="/contact" className="backdrop-blur-md bg-white/5 border border-white/10 text-white px-10 py-5 rounded-xl text-lg font-bold hover:bg-white/10 transition-all flex items-center justify-center">
                  Consult an Expert
                </Link>
              </div>
              
              <div className="mt-16 flex items-center space-x-8 opacity-60 animate-text-reveal delay-800">
                <div className="flex flex-col">
                  <span className="text-white font-black text-2xl">99.9%</span>
                  <span className="text-slate-500 text-[10px] uppercase tracking-wider font-bold">Reliability</span>
                </div>
                <div className="w-[1px] h-10 bg-slate-800"></div>
                <div className="flex flex-col">
                  <span className="text-white font-black text-2xl">10X</span>
                  <span className="text-slate-500 text-[10px] uppercase tracking-wider font-bold">Efficiency</span>
                </div>
                <div className="w-[1px] h-10 bg-slate-800"></div>
                <div className="flex flex-col">
                  <span className="text-white font-black text-2xl">24/7</span>
                  <span className="text-slate-500 text-[10px] uppercase tracking-wider font-bold">Global Support</span>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block animate-text-reveal delay-600">
              <div className="relative z-10 p-2 bg-gradient-to-br from-amber-500/10 to-transparent rounded-[2.5rem] backdrop-blur-2xl border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" 
                  alt="Enterprise Architecture" 
                  className="rounded-[2rem] shadow-2xl grayscale-[0.3] hover:grayscale-0 transition-all duration-700 transform hover:scale-[1.02]"
                />
              </div>
              <div className="absolute -bottom-12 -left-12 bg-slate-900/90 backdrop-blur-xl p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center space-x-5 border border-white/5 z-20 group hover:border-amber-500/30 transition-colors">
                <div className="p-4 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-2xl text-slate-950 shadow-lg shadow-amber-600/20 group-hover:scale-110 transition-transform">
                  <ShieldCheck size={32} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-amber-500 uppercase tracking-[0.2em] mb-1">Status Report</p>
                  <p className="text-2xl font-black text-white leading-none">Security Grade A+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section with Granular Scroll Animation */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Architectural Grid Pattern */}
        <div className="absolute inset-0 grid-pattern-subtle [mask-image:radial-gradient(ellipse_at_center,black,transparent)] pointer-events-none opacity-60"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div 
            ref={headerRef}
            className={`text-center mb-24 transition-all duration-1000 ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <span className="text-amber-600 font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Unified Services</span>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">Enterprise <span className="text-amber-600">Ecosystem</span></h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
              We integrate deep domain expertise to provide a cohesive strategy for your digital, operational, and physical assets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <RevealItem key={index} index={index}>
                <ServiceCard {...service} />
              </RevealItem>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-center">
            <div className="flex flex-col items-center">
              <AnimatedCounter target={150} />
              <p className="mt-4 text-slate-400 font-bold uppercase tracking-widest text-[10px]">Strategic Partners</p>
            </div>
            <div className="md:col-span-2 text-left">
              <h3 className="text-4xl font-black text-slate-900 mb-8 leading-tight">
                Empowering businesses across <span className="text-amber-600 italic">Technology, Operations, Marketing, and Real Estate.</span>
              </h3>
              <p className="text-slate-600 text-xl leading-relaxed font-medium">
                Our approach is rooted in measurable outcomes. We don't just provide services; we engineer success frameworks that grow with you.
              </p>
              <div className="flex flex-wrap gap-8 mt-10">
                <div className="flex items-center space-x-3 text-slate-900 font-bold bg-white px-5 py-3 rounded-xl shadow-sm border border-slate-100">
                  <Zap className="text-amber-600" size={20} /> <span className="text-sm uppercase tracking-wider">Fast Execution</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-900 font-bold bg-white px-5 py-3 rounded-xl shadow-sm border border-slate-100">
                  <Globe className="text-amber-600" size={20} /> <span className="text-sm uppercase tracking-wider">Global Standards</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-900 font-bold bg-white px-5 py-3 rounded-xl shadow-sm border border-slate-100">
                  <ShieldCheck className="text-amber-600" size={20} /> <span className="text-sm uppercase tracking-wider">Enterprise Trust</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-32 bg-white" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <span className="text-amber-600 font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Get Started</span>
              <h2 className="text-5xl font-black text-slate-900 mb-8 tracking-tight">Ready to <span className="text-amber-600 italic">Dominate</span> Your Industry?</h2>
              <p className="text-xl text-slate-500 mb-12 leading-relaxed">
                Connect with our consultants for an exhaustive audit of your business ecosystem. We identify gaps, propose architectures, and deliver results.
              </p>
              <div className="space-y-6">
                {[
                  "Detailed domain analysis and opportunity mapping",
                  "Expert strategy for tech, ops, and marketing integration",
                  "Transparent roadmap with clear ROI benchmarks"
                ].map((step, i) => (
                  <div key={i} className="flex items-center space-x-5 p-6 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-amber-500/20 transition-colors">
                    <div className="w-14 h-14 bg-white shadow-sm border border-slate-200 rounded-full flex items-center justify-center text-amber-600 font-black text-xl group-hover:bg-amber-600 group-hover:text-white transition-colors">
                      {i + 1}
                    </div>
                    <p className="font-bold text-slate-700 leading-tight">{step}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-amber-600/5 blur-2xl rounded-[3rem] -z-10"></div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
