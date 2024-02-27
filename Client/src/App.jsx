import Home from './pages/Home.jsx'; // The .jsx extension is optional
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
import Login from './admin/login';
import AdminDashboard from './admin/AdminDashboard';
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
}


export default App
