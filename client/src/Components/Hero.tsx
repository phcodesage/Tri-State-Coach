import React from 'react';
import { SfButton } from '@storefront-ui/react';
import TristateImage from '../assets/tri-state-coach-bus-image.png';

export default function Hero() {
  return (
    <div className="relative min-h-[600px]">
      <picture>
        <source srcSet="https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/hero-bg.png" media="(min-width: 768px)" />
        <img
          src="https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/hero-bg.png"
          className="absolute w-full h-full z-[-1] md:object-cover"
        />
      </picture>
      <div className="md:flex md:flex-row-reverse md:justify-center min-h-[600px] max-w-[1536px] mx-auto">
        <div className="flex flex-col md:basis-2/4 md:items-stretch md:overflow-hidden">
          <img
            src={TristateImage}
            alt="TristateImage"
            className="h-full object-cover object-left"
          />
        </div>
        <div className="p-4 md:p-10 md:flex md:flex-col md:justify-center md:items-start md:basis-2/4">
          <h1 className="typography-display-1 md:typography-display-1 md:leading-[67.5px] font-bold mt-2 mb-4">
          Luxury & Reliable Coach Bus Services
          </h1>
          <div className="flex flex-col md:flex-row gap-4 mt-6">
          <SfButton size="lg" style={{ backgroundColor: '#be123c' }}>College Breaks</SfButton>
            <SfButton size="lg" className="bg-white" variant="secondary" >
              Request A Quote
            </SfButton>
          </div>
        </div>
      </div>
    </div>
  );
}