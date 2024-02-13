import { useState } from "react";
import Navbar from "../components/Navbar";
import RegencyBusLogo from '../assets/regency-buses-mechanics&workshop-left.png';
import UMALogo from '../assets/UMA-logo.svg';
import ADALogo from '../assets/ADA-logo.svg';
import BanyLogo from '../assets/Bany-logo.svg';

function AboutUs() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <Navbar />
      <div className="mx-4 sm:mx-10 md:mx-16 lg:mx-20">
        <h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white text-center mt-10 sm:mt-15 md:mt-20">About Us</h1>
        
        <div className="article_scrollable_content_container">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Buses</h3>
          <p className="article_text text-base sm:text-lg">
            Our luxurious 56-passenger Air Ride equipped Super Wide coach buses come with the latest technology and features to make your trip go by quick and cozy. Each coach comes standard with:
          </p>
          <ul role="list" className="list-disc list-inside text-gray-500 dark:text-gray-400 my-10">
            <li>A/C</li>
            <li>DVD Player</li>
            <li>Stereo System</li>
            <li>Lavatory with Flush Restroom</li>
            <li>Charging Outlets</li>
            <li>56 Comfortable Seats</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 my-10 sm:my-20">
        <img src={RegencyBusLogo} alt="Regency Bus Logo" className="w-full mb-4 sm:mb-0 sm:col-span-1" />
        <div className="sm:col-span-4">
        <h1 className="mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-none tracking-tight text-gray-900 dark:text-white text-center">The Team</h1>
        <p className="text-sm sm:text-lg md:text-xl font-normal text-gray-500 dark:text-gray-400">
        From our professional and friendly drivers who receive regular assessments and training to our in-house technicians who are skilled in industry best practices, everyone here at Tri-State Coach rigorously complies with guidance from local and federal regulatory authorities as well as our industry associations.
        </p>
        </div>
        </div>
        <div>
      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">Cleaning Policy</h3>
      <p className="text-base sm:text-lg">
        We thoroughly clean and disinfect before and after each use as follows:
      </p>
      <ul role="list" className="list-disc list-inside text-gray-500 dark:text-gray-400 my-10">
        <li>Remove debris from the seats, furnishings, and floor</li>
        <li>
          Spot disinfect high touch points such as:
          <ul className="list-disc pl-5">
            <li>Entrance area handrails</li>
            <li>Parcel rack handles</li>
            <li>Door latch handles</li>
            <li>Window release bars</li>
            <li>Passenger seat headrests, armrests, seat belts and seat accessories</li>
            <li>All bathroom surfaces</li>
            <li>All driver area surfaces</li>
          </ul>
        </li>
      </ul>
      <p className="text-base sm:text-lg">
        We optimize the onboard air quality as follows:
      </p>
      <ul role="list" className="list-disc list-inside text-gray-500 dark:text-gray-400 my-10">
      <li>We use filters rated MERV 7 or higher (removes respiratory droplets)</li>
<li>We provide hand sanitizer</li>
<li>We require face covering for our drivers and provide + encourage them for our passengers</li>
<li>We strictly implore our passengers to not travel if sick or feeling unwell</li>
</ul>
<p className="text-base sm:text-lg">
Additionally, we actively invest in intensified cleaning and protection to help ensure a sanitary environment.
</p>
</div>
<div className="my-10 associations_block flex gap-4 justify-center">
      {/* Association Logos or Details */}
      <img className="uma" src={UMALogo}/>
      <img className="accessibility" src={ADALogo}/>
      <img className="bany" src={BanyLogo}/>
    </div>
  </div>
</>
);
}

export default AboutUs;
