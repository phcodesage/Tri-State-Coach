import { useState } from 'react'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import Chartering from './Pages/Chartering'
import CollegeShuttles from './Pages/CollegeShuttles'
import GetAQuote from './Pages/GetAQuote'
import ContactUs from './Pages/ContactUs'
import Invoice from './Pages/Invoice'
import Services from './Pages/Services'
import TermsOfService from './Pages/TermsOfService'
import PrivacyPolicy from './Pages/PrivacyPolicy'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/college-shuttles" element={<CollegeShuttles />} />
        <Route path="/quote" element={<GetAQuote />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/charter-work" element={<Chartering />} />
        <Route path="/product/invoice" element={<Invoice />} />
        <Route path="/services" element={<Services />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        {/* Add other routes here */}
      </Routes>

    </Router> 
  );
}


export default App
