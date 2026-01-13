
import React from 'react';
// Fix: Use wildcard import for react-router-dom to handle environment-specific resolution issues
import * as ReactRouterDOM from 'react-router-dom';
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';

const { Link } = ReactRouterDOM;

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16 border-b border-slate-800 pb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Logo className="h-12" textColor="text-white" />
            <p className="text-sm leading-relaxed text-slate-400 font-medium">
              Empowering global enterprises through cutting-edge technology, process efficiency, ROI-driven marketing, and strategic real estate investments.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="bg-slate-900 p-3 rounded-xl hover:bg-blue-600 transition-all text-white border border-slate-800">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-black uppercase tracking-widest mb-8 text-sm">Navigation</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">Our Legacy</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Connect With Us</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Request Audit</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-black uppercase tracking-widest mb-8 text-sm">Solutions</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/it-services" className="hover:text-blue-400 transition-colors">IT & AI Engineering</Link></li>
              <li><Link to="/bpo-services" className="hover:text-blue-400 transition-colors">BPO & Ops Excellence</Link></li>
              <li><Link to="/digital-marketing" className="hover:text-blue-400 transition-colors">Growth Marketing</Link></li>
              <li><Link to="/real-estate" className="hover:text-blue-400 transition-colors">Strategic Real Estate</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-black uppercase tracking-widest mb-8 text-sm">Direct Contact</h4>
            <ul className="space-y-5 text-sm font-medium">
              <li className="flex items-center space-x-4 group">
                <div className="p-2.5 bg-slate-900 rounded-lg text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Mail size={18} />
                </div>
                <span className="text-slate-300">manduri9217@gmail.com</span>
              </li>
              <li className="flex items-center space-x-4 group">
                <div className="p-2.5 bg-slate-900 rounded-lg text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Phone size={18} />
                </div>
                <span className="text-slate-300">+91 9133552227 FEATURE-V</span>
              </li>
              <li className="flex items-start space-x-4 group">
                <div className="p-2.5 bg-slate-900 rounded-lg text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <MapPin size={18} />
                </div>
                <span className="text-slate-300 leading-relaxed">HQ: Samrat Complex,<br/>Flat#c3,3rd floor, office block, opposite to AG's office,saidabad, Hyderabad 500004, Telangana, India.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600">
          <p>© {new Date().getFullYear()} FEATURE V ENTERPRISE. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
