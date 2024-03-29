// Import React and other necessary types from 'react-router-dom'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your page components, now assuming they are TypeScript compatible (.tsx)
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Chartering from './pages/Chartering';
import CollegeShuttles from './pages/CollegeShuttles';
import GetAQuote from './pages/GetAQuote';
import ContactUs from './pages/ContactUs';
import Invoice from './pages/Invoice';
import Services from './pages/Services';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import NotFoundPage from './pages/NotFoundPage';
import Login from './admin/Login';
import AdminDashboard from './admin/AdminDashboard';

// Define the App component
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/college-shuttles" element={<CollegeShuttles />} />
        <Route path="/quote" element={<GetAQuote />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/charter-work" element={<Chartering />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/services" element={<Services />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

// Export the App component
export default App;
