// page.tsx
import React from 'react';
import App from '../pages/_app'; // Adjust the import path as needed
import '../styles/index.css'; // Adjust the import path for your CSS file as needed

const HomePage = () => {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

export default HomePage;
