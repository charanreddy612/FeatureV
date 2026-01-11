
import React from 'react';
// Fix: Use wildcard import for react-router-dom to handle environment-specific resolution issues
import * as ReactRouterDOM from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { ServiceCardProps } from '../types';

const { Link } = ReactRouterDOM;

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, link, keywords }) => {
  return (
    <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-[0_30px_60px_-12px_rgba(245,158,11,0.2)] hover:scale-[1.05] hover:-translate-y-2 hover:border-amber-200 transition-all duration-500 group h-full flex flex-col relative overflow-hidden">
      {/* Subtle Background Glow on Hover */}
      <div className="absolute -right-10 -top-10 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl group-hover:bg-amber-500/10 transition-colors duration-500 pointer-events-none"></div>
      
      <div className="service-icon-container mb-6 p-4 bg-amber-50 rounded-2xl inline-block text-amber-600 group-hover:bg-amber-500 group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 self-start shadow-sm">
        {icon}
      </div>
      
      <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-amber-600 transition-colors duration-300 tracking-tight">{title}</h3>
      
      <ul className="space-y-3 mb-8 flex-grow">
        {description.map((line, idx) => (
          <li key={idx} className="flex items-start text-slate-600 text-sm font-medium leading-relaxed">
            <span className="text-amber-500 mr-2 mt-1 shrink-0">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </span>
            {line}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 mb-8">
        {keywords.map((kw, idx) => (
          <span key={idx} className="text-[9px] uppercase tracking-widest font-bold px-2.5 py-1 bg-slate-50 text-slate-400 rounded-lg border border-slate-100 group-hover:border-amber-100 group-hover:text-amber-600 transition-colors">
            {kw}
          </span>
        ))}
      </div>

      <Link
        to={link}
        className="flex items-center text-amber-600 font-black text-sm uppercase tracking-wider group-hover:translate-x-1 transition-transform duration-300 mt-auto"
      >
        Explore Service <ChevronRight size={18} className="ml-1 group-hover:ml-2 transition-all" />
      </Link>
    </div>
  );
};

export default ServiceCard;
