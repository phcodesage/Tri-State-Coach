import './index.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import CollegeShuttles from './pages/CollegeShuttles/CollegeShuttles';
import GetAQuote from './pages/GetAQuote/GetAQuote';
import ContactUs from './pages/ContactUs/ContactUs';
import AboutUs from './pages/AboutUs/AboutUs';
import Chartering from './pages/Chartering/Chartering';
import Invoice from './pages/Invoice/Invoice';
import Services from './pages/Services/Services';
import TermsOfService from './pages/TermsOfService/TermsOfService';
import PrivacyPolicy from './pages/Privacy-Policy/PrivacyPolicy';
import Nav from './components/Nav/Nav';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <Router>
      <div className="hamburger-menu" onClick={toggleMenu}></div>
      {menuOpen && <Nav toggleMenu={toggleMenu} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/college-shuttles" element={<CollegeShuttles />} />
        <Route path="/quote" element={<GetAQuote />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/charter-work" element={<Chartering />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/services" element={<Services />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
