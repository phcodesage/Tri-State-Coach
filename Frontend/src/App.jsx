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
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
import styled from 'styled-components';
import MenuOverlay from './Components/MenuOverlay/MenuOverlay'

const HamburgerMenu = styled.div`
  position: fixed;
  top: 18px;
  right: 80px;
  z-index: 1000;
  cursor: pointer;

  svg {
    fill: #DC2141;
    width: 58px;
    height: auto;
  }

  @media (max-width: 768px) {
    top: 10px;
    right: 10px;
  }
`;


const LinkSectionParent = styled.div`

  height: 70%;
  grid-column-gap: 3vh;
  grid-row-gap: 3vh;
  flex-direction: column;
  margin-bottom: 0;
  padding-bottom: 69px;
  display: flex;
  overflow: auto;

`
  const HamburgerIcon = () => (
    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">


      <path d="M0 12H18V9.99984H0V12ZM0 6.99984H18V5.00016H0V6.99984ZM0 0V2.00016H18V0H0Z" fill="#DC2141" />
    </svg>
  );

  const ArrowIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#f2d0a4" xmlns="http://www.w3.org/2000/svg">

      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" fill="#f2d0a4"/>
    </svg>
  );

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    
    <Router>
      <HamburgerMenu onClick={toggleMenu}>
      {menuOpen ? <ArrowIcon /> : <HamburgerIcon />}
      </HamburgerMenu>

      {menuOpen && (
        <MenuOverlay>
      </MenuOverlay>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/college-shuttles" element={<CollegeShuttles />} />
        <Route path="/quote" element={<GetAQuote />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/charter-work" element={<Chartering />} />
        <Route path="/product/invoice" element={<Invoice />} />
        <Route path="/services" element={<Services />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
