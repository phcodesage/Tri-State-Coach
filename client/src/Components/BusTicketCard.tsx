import TicketCard from '../assets/tick-item-card-white.svg'
import BearcatLogo from '../assets/binghamton-logo-bearcat.png'

export default function BusTicketCard({ ticket }) {
  return (
    <div className="relative w-full max-w-xs overflow-hidden rounded-lg shadow-lg"
         style={{ 
           backgroundImage: `url(${TicketCard})`, 
           backgroundSize: 'cover', 
           backgroundPosition: 'center center', 
           backgroundRepeat: 'no-repeat',
           minHeight: '390px'
         }}>
      <a href={ticket.link}>
        <img className="p-8 rounded-t-lg" src={ticket.imageUrl || BearcatLogo} alt={ticket.title} />
      </a>
      <div className="px-5 pb-5">
        <div className="my-4">
          <a href={ticket.link}>
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{ticket.title}</h5>
          </a>
          <div className="my-2">
              <div className="text-sm">{ticket.date}</div>
              <div className="text-sm my-1">{ticket.stops}</div>
          </div>
        </div>
      </div>
      <div className="px-5 pb-5 absolute bottom-0">
        <div className="flex items-center justify-end h-full">
          <div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">{ticket.price}</span>
          </div>
          <div className="text-sm mb-5">
            Seats Available: {ticket.seats}
          </div>
          {/* Add to cart button or similar action */}
        </div>
      </div>
    </div>
  );
}

