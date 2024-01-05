import React from 'react';
import { Link } from 'react-router-dom';

const MenuOverlay = () => {
  return (
    <div className="menu_overlay" style={{ display: 'block' }}>
      <div className="exit_menu"></div>
      <div className="link_section_parent">
        <div className="link_section">
          <div className="link_section_heading">
            <div className="link_section_line"></div>
            <div className="book_a_ride_text">BOOK A RIDE</div>
          </div>
          <div className="nav_link">
            <Link to="/" className="link_block_text w-inline-block">
              <div className="nav_link_text">Home<br /></div>
            </Link>
          </div>
          <div className="nav_link">
            <Link to="/college-shuttles" className="link_block_text w-inline-block">
              <div className="nav_link_text">College Shuttles<br /></div>
            </Link>
          </div>
          <div className="nav_link">
            <Link to="/quote" className="link_block_text w-inline-block">
              <div className="nav_link_text">Get A Quote</div>
            </Link>
          </div>
          <div className="nav_link">
            <Link to="/contact-us" className="link_block_text w-inline-block">
              <div className="nav_link_text">Contact Us</div>
            </Link>
          </div>
        </div>

        <div className="link_section">
          <div className="link_section_heading">
            <div className="link_section_line"></div>
            <div className="about_us_text">ABOUT US</div>
          </div>
          <div className="nav_link">
            <Link to="/about-us" className="link_block_text w-inline-block">
              <div className="nav_link_text">Our Buses<br /></div>
            </Link>
          </div>
          <div className="nav_link">
            <Link to="/charter-work" className="link_block_text w-inline-block">
              <div className="nav_link_text">Chartering</div>
            </Link>
          </div>
          <div className="nav_link">
            <Link to="/product/invoice" className="link_block_text w-inline-block">
              <div className="nav_link_text">Pay Invoice</div>
            </Link>
          </div>
          <div className="nav_link">
            <Link to="/services" className="link_block_text w-inline-block">
              <div className="nav_link_text">Services</div>
            </Link>
          </div>
          <div className="nav_link secondary">
            <Link to="/terms-of-service" className="link_block_text w-inline-block">
              <div className="nav_link_text secondary">Terms of Service</div>
            </Link>
          </div>
          <div className="nav_link secondary">
            <Link to="/privacy-policy" className="link_block_text w-inline-block">
              <div className="nav_link_text secondary">Privacy Policy</div>
            </Link>
          </div>
        </div>
      </div>
      <div className="menu_action_icons">
        <a href="tel:+16315432500" className="link-block w-inline-block">
          <div className="menu_phone"></div>
        </a>
        <a href="#" className="link-block w-inline-block">
          <div className="menu_chat"></div>
        </a>
        <a href="mailto:regencybuses@gmail.com" className="link-block w-inline-block">
          <div className="menu_mail"></div>
        </a>
        <a href="https://goo.gl/maps/AGVfBWNNL3ZGRmVJ9" className="link-block w-inline-block">
          <div className="menu__location"></div>
        </a>
      </div>
    </div>
  );
};

export default MenuOverlay;
