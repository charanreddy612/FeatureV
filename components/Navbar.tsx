
import React, { useState, useEffect } from 'react';
// Fix: Use wildcard import for react-router-dom to handle environment-specific resolution issues
import * as ReactRouterDOM from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const { Link, useLocation } = ReactRouterDOM;

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine if the current page starts with a dark hero section
  const isDarkPage = ['/', '/it-services', '/about', '/real-estate'].includes(location.pathname);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'IT Services', path: '/it-services' },
    { name: 'BPO Services', path: '/bpo-services' },
    { name: 'Marketing', path: '/digital-marketing' },
    { name: 'Real Estate', path: '/real-estate' },
    { name: 'About', path: '/about' },
  ];

  // Helper to get text color for Logo and Mobile Menu Button
  const getBrandTextColor = () => {
    if (scrolled) return 'text-slate-900';
    return isDarkPage ? 'text-white' : 'text-slate-900';
  };

  // Helper for Nav Link styles
  const getNavLinkStyles = (path: string) => {
    const isActive = location.pathname === path;
    
    // State 1: Scrolled (Sticky White Header)
    if (scrolled) {
      return isActive 
        ? 'text-amber-600 font-black' 
        : 'text-slate-600 hover:text-amber-600 font-bold';
    }
    
    // State 2: Not Scrolled, Dark Hero Page
    if (isDarkPage) {
      return isActive 
        ? 'text-amber-400 font-black' 
        : 'text-white/80 hover:text-white font-bold';
    }
    
    // State 3: Not Scrolled, Light Hero Page
    return isActive 
      ? 'text-amber-600 font-black' 
      : 'text-slate-700 hover:text-amber-600 font-bold';
  };

  // Helper for Consultation Button styles
  const getButtonStyles = () => {
    const base = "px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 shadow-xl hover:scale-105 active:scale-95 flex items-center";
    
    if (scrolled) {
      return `${base} bg-amber-500 text-slate-950 shadow-amber-600/20 hover:bg-amber-400`;
    }
    
    if (isDarkPage) {
      // High contrast white button for dark backgrounds
      return `${base} bg-white text-slate-950 shadow-black/20 hover:bg-amber-400 hover:text-slate-950`;
    }
    
    // Standard brand button for light backgrounds
    return `${base} bg-amber-500 text-slate-950 shadow-amber-600/20 hover:bg-amber-400`;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1)
      ${scrolled
        ? 'bg-white/90 backdrop-blur-md shadow-xl py-2'
        : 'bg-transparent py-6'}
    `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" onClick={() => setIsOpen(false)} className="transition-opacity hover:opacity-80">
              <Logo 
                className="h-10 md:h-12" 
                textColor={getBrandTextColor()} 
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-[11px] uppercase tracking-[0.2em] transition-all duration-300 relative group ${getNavLinkStyles(item.path)}`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full ${location.pathname === item.path ? 'w-full' : ''}`}></span>
              </Link>
            ))}
            <Link
              to="/contact"
              className={getButtonStyles()}
            >
              Consultation
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 transition-transform duration-300 hover:scale-110 active:scale-95 ${getBrandTextColor()}`}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden absolute top-0 left-0 w-full bg-white shadow-2xl transition-all duration-500 ease-in-out overflow-hidden z-[-1] rounded-b-[2.5rem]
          ${isOpen ? 'max-h-[600px] opacity-100 border-b border-slate-100' : 'max-h-0 opacity-0 pointer-events-none'}
        `}
      >
        <div className="flex flex-col space-y-2 p-8 pt-24">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`text-sm font-black uppercase tracking-widest px-6 py-4 rounded-2xl transition-all ${
                location.pathname === item.path 
                  ? 'bg-amber-50 text-amber-600' 
                  : 'text-slate-700 hover:bg-slate-50 hover:text-amber-600'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="bg-amber-500 text-slate-950 text-center py-5 rounded-2xl font-black uppercase tracking-[0.2em] shadow-lg mt-6 text-xs hover:bg-amber-400 transition-colors"
          >
            Get Consultation
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
