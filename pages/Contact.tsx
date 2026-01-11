
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  return (
    <div className="bg-slate-50 py-24 pt-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-text-reveal">
          <span className="text-blue-600 font-black uppercase tracking-widest text-xs mb-4 block">Connect with Experts</span>
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter">Let's Build the <span className="text-blue-600 italic">Future</span> Together</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your business operations, technology stack, or investment portfolio? Our global consulting team is standing by.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Info Panels */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 flex items-start space-x-6 hover:shadow-xl hover:shadow-blue-600/5 transition-all group">
              <div className="bg-blue-50 text-blue-600 p-5 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg mb-1">Email Strategy</h4>
                <p className="text-slate-500 text-sm font-medium">golla_rajesh123@rediffmail.com</p>
                <p className="text-slate-400 text-xs mt-1">Response within 12 hours</p>
              </div>
            </div>
            
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 flex items-start space-x-6 hover:shadow-xl hover:shadow-blue-600/5 transition-all group">
              <div className="bg-blue-50 text-blue-600 p-5 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg mb-1">Direct Line</h4>
                <p className="text-slate-500 text-sm font-medium">+1 (800) FEATURE-V</p>
                <p className="text-slate-400 text-xs mt-1">Mon - Fri, 9am - 6pm EST</p>
              </div>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 flex items-start space-x-6 hover:shadow-xl hover:shadow-blue-600/5 transition-all group">
              <div className="bg-blue-50 text-blue-600 p-5 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg mb-1">Global Presence</h4>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">Silicon Valley • London • Bangalore</p>
              </div>
            </div>

            <div className="bg-slate-950 p-10 rounded-3xl shadow-2xl text-white relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="text-2xl font-black mb-4 tracking-tight">Join Our Force</h4>
                <p className="text-slate-400 text-sm mb-8 leading-relaxed">We are always looking for visionary talent to shape the next era of enterprise technology.</p>
                <button className="bg-blue-600 text-white font-bold px-8 py-3 rounded-xl text-sm hover:bg-blue-700 transition-all shadow-lg shadow-blue-900/40">
                  Career Portal
                </button>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600/20 blur-3xl rounded-full"></div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <ContactForm 
              title="Initiate Strategic Audit" 
              subtitle="Our team will perform an exhaustive evaluation of your business ecosystem and provide a custom-tailored roadmap for growth." 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
