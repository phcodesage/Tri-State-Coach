import BusTicketCard from '../Components/BusTicketCard';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const busLines = [
  {
    lineName: "Bearcat Bus - SUNY Binghamton",
    tickets: [
      {// ... array of tickets for this bus line
      id: 'ticket1',
      title: 'Binghamton Spring Break',
      date: 'Mar 1 - Mar 10',
      stops: 'Fresh Meadows, Hicksville,Commack',
      price: '$140.00',
      seats: 3
      }
    ],
  },
  {
    lineName: "Red Dragon Express - SUNY Cortland",
    tickets: [
      // ... array of tickets for this bus line
    ],
  },
  // ... other bus lines
];

function CollegeShuttles() {
  return (
    <div className='h-screen'>
      <Navbar />
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-center text-3xl font-bold my-6">College Shuttles</h1>
        
        {busLines.map((line, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-bold my-4">{line.lineName}</h2>
            <div className="p-6 bg-rose-900 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {line.tickets.map(ticket => (
                <BusTicketCard key={ticket.id} ticket={ticket} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
export default CollegeShuttles;
