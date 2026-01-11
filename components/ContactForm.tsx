
import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm: React.FC<{ title?: string; subtitle?: string }> = ({ title, subtitle }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Logic for API submission would go here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <div className="bg-white p-12 rounded-2xl shadow-2xl border border-blue-50 text-center animate-pulse">
        <div className="flex justify-center mb-6">
          <CheckCircle className="text-green-500" size={64} />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent Successfully!</h3>
        <p className="text-slate-600 mb-8">One of our experts will contact you within the next 24 hours.</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="text-blue-600 font-bold hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl border border-blue-50">
      <h3 className="text-3xl font-bold text-slate-900 mb-2">{title || "Request a Consultation"}</h3>
      <p className="text-slate-600 mb-8">{subtitle || "Ready to transform your business? Let's discuss your goals."}</p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
            <input
              type="text"
              name="fullName"
              required
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              placeholder="John Doe"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              placeholder="john@company.com"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
            <input
              type="tel"
              name="phone"
              required
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              placeholder="+1 (555) 000-0000"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Service Interested In</label>
            <select
              name="service"
              required
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all appearance-none"
              onChange={handleChange}
            >
              <option value="">Select a service</option>
              <option value="IT Services">IT Services</option>
              <option value="BPO Services">BPO Services</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Real Estate">Real Estate</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">How can we help?</label>
          <textarea
            name="message"
            rows={4}
            required
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            placeholder="Tell us about your project or requirements..."
            onChange={handleChange}
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transform hover:-translate-y-0.5 transition-all flex items-center justify-center space-x-2"
        >
          <span>Send Message</span>
          <Send size={18} />
        </button>
        <p className="text-center text-xs text-slate-400">
          By clicking, you agree to our privacy policy and data processing.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
