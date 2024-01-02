import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.div`
  // Your styles here
`;


function Nav({toggleMenu}) {
  const handleLinkClick = () => {
    // Close the menu when a link is clicked
    toggleMenu(); }
    return (
      <StyledNav className="nav-menu">
        <Link to="/" onClick={toggleMenu}>Home</Link>
        <Link to="/college-shuttles" onClick={toggleMenu}>College Shuttles</Link>
        <Link to="/quote" onClick={toggleMenu}>Get A Quote</Link>
        <Link to="/contact-us" onClick={toggleMenu}>Contact Us</Link>
        <Link to="/about-us" onClick={toggleMenu}>Our Buses</Link>
        <Link to="/charter-work" onClick={toggleMenu}>Chartering</Link>
        <Link to="/invoice" onClick={toggleMenu}>Pay Invoice</Link>
        <Link to="/services" onClick={toggleMenu}>Services</Link>
        <Link to="/terms-of-service" onClick={toggleMenu}>Terms of Services</Link>
        <Link to="/privacy-policy" onClick={toggleMenu}>Privacy Policy</Link>
  
      </StyledNav>
    );
  }

export default Nav;
