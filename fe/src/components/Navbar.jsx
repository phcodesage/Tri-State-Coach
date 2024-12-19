import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import closeIcon from '../assets/close.png';
import menuIcon from '../assets/menu.png';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/');
  };

  return (
    <>
      {/* Main Navbar - Transparent */}
      <nav className="fixed top-0 left-0 right-0 z-40">
        <div className="flex justify-between items-center">
          {/* Left side - Close/Back button */}
          <button 
            onClick={handleClose}
            className="w-16 h-16 flex items-center justify-center bg-[#A13D3D]"
          >
            <img src={closeIcon} alt="Close" className="h-16 w-16" />
          </button>


          {/* Right side - Quote button and Menu */}
          <div className="flex items-start">
            <Link
              to="/get-a-quote"
              className="bg-[#F5ECD7] px-6 py-4 rounded-md text-sm font-medium"
            >
              Request a Quote
            </Link>
            <button
              onClick={() => setIsMenuOpen(true)}
              className="w-16 h-16 flex items-center justify-center bg-[#A13D3D]"
            >
              <img src={menuIcon} alt="Menu" className="h-16 w-16" />
            </button>
          </div>
        </div>
      </nav>

      {/* Backdrop with blur when menu is open */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 w-[300px] h-full bg-[#A13D3D] z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close button for menu - Now on the right */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 right-4 text-xl font-semibold text-black"
        >
          ✕
        </button>

        {/* Menu Items */}
        <div className="flex flex-col pt-16 px-8 text-white">
          <Link 
            to="/" 
            className="py-3 text-xl font-semibold"
            onClick={() => setIsMenuOpen(false)}
          >
            HOME
          </Link>
          <Link 
            to="/college-shuttles" 
            className="py-3 text-xl font-semibold"
            onClick={() => setIsMenuOpen(false)}
          >
            COLLEGE SHUTTLES
          </Link>
          <Link 
            to="/get-a-quote" 
            className="py-3 text-xl font-semibold"
            onClick={() => setIsMenuOpen(false)}
          >
            GET A QUOTE
          </Link>
          <Link 
            to="/contact-us" 
            className="py-3 text-xl font-semibold"
            onClick={() => setIsMenuOpen(false)}
          >
            CONTACT US
          </Link>

          {/* Divider */}
          <div className="border-t border-white/20 my-4"></div>

          <Link 
            to="/our-buses" 
            className="py-3 text-xl font-semibold"
            onClick={() => setIsMenuOpen(false)}
          >
            OUR BUSES
          </Link>
          <Link 
            to="/chartering" 
            className="py-3 text-xl font-semibold"
            onClick={() => setIsMenuOpen(false)}
          >
            CHARTERING
          </Link>
          <Link 
            to="/pay-invoices" 
            className="py-3 text-xl font-semibold"
            onClick={() => setIsMenuOpen(false)}
          >
            PAY INVOICES
          </Link>

          {/* Divider */}
          <div className="border-t border-white/20 my-4"></div>

          {/* Footer Links */}
          <Link 
            to="/terms-of-service" 
            className="py-2 text-sm opacity-80"
            onClick={() => setIsMenuOpen(false)}
          >
            Terms of Services
          </Link>
          <Link 
            to="/privacy-policy" 
            className="py-2 text-sm opacity-80"
            onClick={() => setIsMenuOpen(false)}
          >
            Privacy policy
          </Link>
        </div>
      </div>
    </>
  );
}
