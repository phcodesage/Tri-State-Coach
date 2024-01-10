import { SfButton, SfIconShoppingCart } from '@storefront-ui/react';
import TicketCard from '../assets/tick-item-card-white.svg'


export default function BusTicketCard({ ticket }) {

  return (
    <div className="bus_line_item border border-neutral-200 rounded-md hover:shadow-lg max-w-[300px]" style={{backgroundImage: TicketCard,
    backgroundPosition: '50% 0',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '373px',}}>
      <a href={ticket.link} className="block relative">
        <img
          src={ticket.imageUrl}
          alt={ticket.title}
          className="object-cover h-auto rounded-md aspect-square"
          width="300"
          height="300"
        />
        <div className="ticket_launch_icon absolute bottom-0 right-0 mr-2 mb-2"></div>
      </a>
      <div className="p-4 border-t border-neutral-200">
        <h3 className="ticket_heading font-bold">{ticket.title}</h3>
        <div className="ticket_dates_block py-2">
          <span className="ticket_dates_departure">{ticket.departureDate}</span>
          <span className="ticket_hyphen mx-1">-</span>
          <span className="ticket_dates_return">{ticket.returnDate}</span>
        </div>
        <div className="ticket_stops_block py-1">
          <span className="ticket_stops_text">{ticket.stops.join(', ')}</span>
        </div>
        <div className="ticket_price_cart_block flex justify-between items-center py-2">
          <div>
            <span className="ticket_price font-bold">${ticket.price}</span>
            <span className="ticket_trip_type_text mx-1">/</span>
            <span className="ticket_trip_type_text">{ticket.tripType}</span>           
          </div>
          <SfButton variant="tertiary" size="sm" aria-label="Add to cart">
            <SfIconShoppingCart size="sm" />
          </SfButton>

        </div>
        <div className="text-left">
            <span className="ticket_trip_type_text">Seats Available: {ticket.seatsAvailable}</span>
          </div>
      </div>
    </div>
  );
}
