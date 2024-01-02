import './index.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import CollegeShuttles from './Pages/CollegeShuttles/CollegeShuttles';
import GetAQuote from './Pages/GetAQuote/GetAQuote';
import ContactUs from './Pages/ContactUs/ContactUs';
import AboutUs from './Pages/AboutUs/AboutUs';
import Chartering from './Pages/Chartering/Chartering';
import Invoice from './Pages/Invoice/Invoice';
import Services from './Pages/Services/Services';
import TermsOfService from './Pages/TermsOfService/TermsOfService';
import PrivacyPolicy from './Pages/Privacy-Policy/PrivacyPolicy';
import Nav from './components/Nav/Nav';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';

function App() {
  const HamburgerIcon = () => (
    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 12H18V9.99984H0V12ZM0 6.99984H18V5.00016H0V6.99984ZM0 0V2.00016H18V0H0Z" fill="#DC2141" />
    </svg>
  );
  
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <Router>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <HamburgerIcon />
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
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
