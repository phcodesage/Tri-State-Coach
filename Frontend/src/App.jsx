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


function App() {
  const HamburgerMenu = styled.div`
  position: fixed;
  top: 85px;
  right: 65px;
  z-index: 1000;
  cursor: pointer;

  svg {
    fill: #DC2141;
    width: 41px;
    height: auto;
  }

  @media (max-width: 768px) {
    top: 10px;
    right: 10px;
  }
`;

  
const MenuOverlay = styled.div`
z-index: 910;
width: 613px;
height: 100vh;
float: right;
grid-column-gap: 3vh;
grid-row-gap: 3vh;
border-left: 0px solid var(--dark-slate-grey);
background-color: var(--dark-slate-grey);
text-align: left;
mix-blend-mode: normal;
border-radius: 0;
flex-direction: column;
padding-left: 42px;
padding-right: 69px;
display: none;
position: fixed;
top: 0%;
bottom: 0%;
left: auto;
right: 0%;
box-shadow: inset 13px 0 18px 1px rgba(0,0,0,.18);
`;
  const HamburgerIcon = () => (
    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">

      <path d="M0 12H18V9.99984H0V12ZM0 6.99984H18V5.00016H0V6.99984ZM0 0V2.00016H18V0H0Z" fill="#DC2141" />
    </svg>
  );
  
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    
    <Router>
      <HamburgerMenu onClick={toggleMenu}>
        <HamburgerIcon />
      </HamburgerMenu>

      {menuOpen && (
        <MenuOverlay className="menu_overlay">
<div data-w-id="0a31589d-2c6a-068e-4473-e1383b9d3dc4" className="exit_menu">
</div><div className="link_section_parent">
<div className="link_section">
<div className="link_section_heading">
<div className="link_section_line">
</div><div className="book_a_ride_text">
BOOK A RIDE</div></div><div className="nav_link">
<a href="/" aria-current="page" className="link_block_text w-inline-block w--current">
<div className="nav_link_text">
Home<br /></div></a></div><div className="nav_link">
<a href="/college-shuttles" className="link_block_text w-inline-block">
<div className="nav_link_text">
College Shuttles<br /></div></a></div><div className="nav_link">
<a href="/quote" className="link_block_text w-inline-block">
<div className="nav_link_text">
Get A Quote</div></a></div><div className="nav_link">
<a href="/contact-us" className="link_block_text w-inline-block">
<div className="nav_link_text">
Contact Us</div></a></div></div><div className="link_section">
<div className="link_section_heading">
<div className="link_section_line">
</div><div className="about_us_text">
ABOUT&nbsp;US</div></div><div className="nav_link">
<a href="/about-us" className="link_block_text w-inline-block">
<div className="nav_link_text">
Our Buses<br /></div></a></div><div className="nav_link">
<a href="/charter-work" className="link_block_text w-inline-block">
<div className="nav_link_text">
Chartering</div></a></div><div className="nav_link">
<a href="/product/invoice" className="link_block_text w-inline-block">
<div className="nav_link_text">
Pay Invoice</div></a></div><div className="nav_link">
<a href="/services" className="link_block_text w-inline-block">
<div className="nav_link_text">
Services</div></a></div><div className="nav_link secondary">
<a href="/terms-of-service" className="link_block_text w-inline-block">
<div className="nav_link_text secondary">
Terms of Service</div></a></div><div className="nav_link secondary">
<a href="/privacy-policy" className="link_block_text w-inline-block">
<div className="nav_link_text secondary">
Privacy Policy</div></a></div></div></div><div className="menu_action_icons">
<a href="tel:+16315432500" className="link-block w-inline-block">
<div className="menu_phone">
</div></a><a href="#" className="link-block w-inline-block">
<div className="menu_chat">
</div></a><a href="mailto:regencybuses@gmail.com" className="link-block w-inline-block">
<div className="menu_mail">
</div></a><a href="https://goo.gl/maps/AGVfBWNNL3ZGRmVJ9" className="link-block w-inline-block">
<div className="menu__location">
</div></a></div></MenuOverlay>
      )}
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
