import React from 'react';
import TicketCard from '../assets/tick-item-card-white.svg';
import BearcatLogo from '../assets/binghamton-logo-bearcat.png';
import RedDragon from '../assets/sunny-cortland.png';
import Delaware from '../assets/Delaware-Logo.png';
import SunyOswego from '../assets/Sunny-Oswego.png';

function getLogoByLineName(lineName) {
  switch (lineName) {
    case "Bearcat Bus - SUNY Binghamton":
      return BearcatLogo;
    case "Red Dragon Express - SUNY Cortland":
      return RedDragon;
    case "Delaware to Long Island - University of Delaware":
      return Delaware;
    case "Oswego to Long Island - SUNY Oswego":
      return SunyOswego;
    default:
      return BearcatLogo; // Default logo if no match
  }
}

const BusTicketCard = ({ ticket, lineName }) => {
  const logo = getLogoByLineName(lineName);
  // You can add more props as needed
  return (
    <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl overflow-hidden rounded-lg"
         style={{ 
           backgroundImage: `url(${TicketCard})`, 
           backgroundSize: 'cover', 
           minHeight: '390px', 
           maxWidth: '320px',
          }}>
          <div className="flex-grow">
            <div className='flex justify-center' style={{ maxHeight: '139px' }}>
              <img className="p-8 rounded-t-lg" src={logo} alt={ticket.title} />
            </div>
            <div className="px-5 pb-5">
              <div className="my-4">
                <h5 className="text-lg font-bold">{ticket.title}</h5>
                <p>Date: {ticket.date}</p>
                <p>Stops: {ticket.stops}</p>
                <p>Price: {ticket.price}</p>
                <p>Seats Available: {ticket.seats}</p>
                <p>Trip Type: {ticket.tripType}</p>
              </div>
            </div>
          </div>
    </div>
  );
}

export default BusTicketCard;
