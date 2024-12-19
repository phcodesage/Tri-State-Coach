import { Link } from 'react-router-dom';
import LocationIcon from '../assets/location-small-icon.png';
import PhoneIcon from '../assets/phone-small-icon.png';
import ClockIcon from '../assets/clock-small-icon.png';

export default function Footer() {
  return (
    <div className="relative">
      {/* Newsletter Section - Positioned to overlap footer */}
      <div className="absolute left-20 right-20 -top-16 z-10">
        <div className="bg-[#192636] rounded-lg">
          <div className="px-6 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="md:w-[30%]">
                <h3 className="text-3xl text-white mb-1 font-inter font-bold">Join Our Newsletter</h3>
                <p className="text-[#908345]">Get notified about new tips</p>
              </div>

              <div className="md:w-[70%] flex flex-col items-center mt-4 md:mt-0">
                <div className="flex gap-4 w-full">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-white text-gray-900 focus:outline-none"
                  />
                  <button className="px-8 py-3 bg-[#908345] text-white rounded-lg font-medium whitespace-nowrap font-inter font-bold">
                    Subscribe
                  </button>
                </div>
                <p className="text-gray-400 text-sm mt-2 self-start">We do not share your email.Unsubscribe anytime</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <footer className="bg-[#A13D3D] text-white pt-32 pb-12 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Logo and Description */}
            <div>
              <h2 
                className="text-5xl font-bold mb-4"
                style={{
                  fontFamily: 'Palatino Linotype',
                  background: 'linear-gradient(148.81deg, #FFFFFF 18.86%, #908345 141.54%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Tri-State
              </h2>
              <div className="text-white text-xl tracking-[4px] mb-6">COACH</div>
              <p className="text-white/80 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>

            {/* Other Pages */}
            <div>
              <h3 className="text-xl font-medium mb-6">Other Pages</h3>
              <ul className="space-y-4">
                <li><Link to="/" className="text-white/80 hover:text-white">Home</Link></li>
                <li><Link to="/services" className="text-white/80 hover:text-white">Services</Link></li>
                <li><Link to="/buses" className="text-white/80 hover:text-white">Buses</Link></li>
                <li><Link to="/contact-us" className="text-white/80 hover:text-white">Contact Us</Link></li>
                <li><Link to="/chartering" className="text-white/80 hover:text-white">Chartering</Link></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-medium mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li><Link to="/privacy-policy" className="text-white/80 hover:text-white">Privacy Policy</Link></li>
                <li><Link to="/terms-of-service" className="text-white/80 hover:text-white">Terms of Services</Link></li>
                <li><Link to="/faqs" className="text-white/80 hover:text-white">FAQs</Link></li>
              </ul>
            </div>

            {/* Work Hours */}
            <div>
              <h3 className="text-xl font-medium mb-6">Work Hours</h3>
              <div className="space-y-4 text-white/80">
                <div className="flex items-center gap-4">
                  <img src={ClockIcon} alt="Clock" />
                  <span>8 AM-7 PM , Monday -Friday</span>
                </div>
                <div className="flex items-center gap-4">
                  <img src={PhoneIcon} alt="Phone"  />
                  <span>+92-659-65-0</span>
                </div>
                <div className="flex items-center gap-4">
                  <img src={LocationIcon} alt="Location"  />
                  <span>Mumbai , India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}