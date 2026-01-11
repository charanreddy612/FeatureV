
import React, { useEffect } from 'react';
// Fix: Use wildcard import for react-router-dom to handle environment-specific resolution issues where named exports are not recognized
import * as ReactRouterDOM from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import Home from './pages/Home';
import ITServices from './pages/ITServices';
import BPOServices from './pages/BPOServices';
import DigitalMarketing from './pages/DigitalMarketing';
import RealEstate from './pages/RealEstate';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';

const { HashRouter, Routes, Route, useLocation } = ReactRouterDOM;
const Router = HashRouter;

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/it-services" element={<ITServices />} />
            <Route path="/bpo-services" element={<BPOServices />} />
            <Route path="/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/real-estate" element={<RealEstate />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <ChatBot />
      </div>
    </Router>
  );
};

export default App;
