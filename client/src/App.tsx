import { useState } from 'react'
import Home from './Pages/Home'
import ContactUs from './Pages/'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        {/* Add other routes here */}
      </Routes>
    </>
    </Router>
  );
}


export default App
