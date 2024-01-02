import './index.css';
import React, { useState, useEffect  } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/Home.js';
import CollegeShuttles from './pages/CollegeShuttles/CollegeShuttles.js';
import GetAQuote from './pages/GetAQuote/GetAQuote.js';
import ContactUs from './pages/ContactUs/ContactUs.js';
import AboutUs from './pages/AboutUs/AboutUs.js'
import Chartering from './pages/Chartering/Chartering.js';
import Invoice from './pages/Invoice/Invoice.js'
import Services from './pages/Services/Services.js'
import TermsOfService from './pages/TermsOfService/TermsOfService.js'
import PrivacyPolicy from './pages/Privacy-Policy/PrivacyPolicy.js'
import Nav from './components/Nav/Nav.js';


function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  /*useEffect(() => {
    fetch('http://localhost:5000/api/tickets')
      .then(response => response.json())
      .then(data => setTickets(data))
      .catch(error => console.error(error));
  }, []);*/
  
  return (
    <Router>
      <div className="hamburger-menu" onClick={toggleMenu}>
        
      </div>
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
