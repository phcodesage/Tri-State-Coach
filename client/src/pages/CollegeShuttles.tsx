import TopNavMenu from './../Components/TopNavMenu';
import BusTicketCard from '../Components/BusTicketCard';

function CollegeShuttles() {
  const tickets = [
    {
      id: 'ticket1',
      title: 'Binghamton Spring Break',
      imageUrl: 'https://assets-global.website-files.com/63055726fe06a13c4da66880/64813f64ddb9563d1f4878ff_unnamed.png',
      departureDate: 'Mar 1',
      returnDate: 'Mar 10',
      stops: ['Fresh Meadows', 'Hicksville', 'Commack'],
      price: '140.00',
      tripType: 'Round Trip',
      link: '/product/binghamton-spring-break-round-trip-2024',
      seatsAvailable: 8,
      // ... other ticket details
    },
    // ... other tickets
  ];

  return (
    <div className='h-screen'>
      <TopNavMenu />
      <div className="container mx-auto px-4">
        <h1 className="page_heading text-center text-3xl font-bold my-6">College Shuttles</h1>
        <div className="bus_routes_container flex flex-wrap justify-center gap-4">
          {tickets.map(ticket => (
            <BusTicketCard key={ticket.id} ticket={ticket} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CollegeShuttles;
