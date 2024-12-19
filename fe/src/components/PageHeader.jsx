import React from 'react';
import busImage from '../assets/contact-us-bg.png';

export default function PageHeader({ title, subtitle }) {
  return (
    <div className="relative">
      {/* Dark overlay */}
      <div 
        className="absolute inset-0 bg-black/50 z-10"
        aria-hidden="true"
      />
      
      {/* Background image */}
      <div 
        className="h-[300px] w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${busImage})` }}
      >
        {/* Content */}
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-white/90 max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
} 