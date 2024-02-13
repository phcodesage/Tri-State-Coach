import BusTicketCard from '../components/BusTicketCard';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

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
      seats: 3,
      tripType: 'Round Trip'
      }
    ],
  },
  {
    lineName: "Bearcat Bus - SUNY Binghamton",
    tickets: [
      {// ... array of tickets for this bus line
      id: 'ticket2',
      title: 'Binghamton Spring Break',
      date: 'Mar 1',
      stops: 'Fresh Meadows, Hicksville,Commack',
      price: '$75.00',
      seats: 3,
      tripType: 'Round Trip'
      }
    ],
  },
  {
    lineName: "Red Dragon Express - SUNY Cortland",
    tickets: [
      {// ... array of tickets for this bus line
      id: 'ticket3',
      title: 'Delaware Spring Break',
      date: 'Mar 1',
      stops: 'Fresh Meadows, Hicksville,Commack',
      price: '$130.00',
      seats: 49,
      tripType: 'Round Trip'
      }
    ],
  },
  {
    lineName: "Delaware to Long Island - University of Delaware",
    tickets: [
      {// ... array of tickets for this bus line
      id: 'ticket3',
      title: 'Delaware Spring Break',
      date: 'Mar 1',
      stops: 'Fresh Meadows, Hicksville,Commack',
      price: '$130.00',
      seats: 49,
      tripType: 'Round Trip'
      }
    ],
  },
  {
    lineName: "Oswego to Long Island - SUNY Oswego",
    tickets: [
      {// ... array of tickets for this bus line
      id: 'ticket3',
      title: 'Delaware Spring Break',
      date: 'Mar 1',
      stops: 'Fresh Meadows, Hicksville,Commack',
      price: '$130.00',
      seats: 49,
      tripType: 'Round Trip'
      }
    ],
  },
  // ... other bus lines
];

function CollegeShuttles() {
  // Group tickets by lineName
  const groupedTickets = groupTicketsByLineName(busLines);

  // This function groups tickets by their line names
  function groupTicketsByLineName(ticketsArray) {
    return ticketsArray.reduce((grouped, item) => {
      const { lineName, tickets } = item;
      grouped[lineName] = grouped[lineName] || [];
      grouped[lineName].push(...tickets);
      return grouped;
    }, {});
  }

  return (
    <div className='h-screen bg-amber-50'>
      <Navbar />
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-center text-3xl font-bold my-6">College Shuttles</h1>
        
        {Object.keys(groupedTickets).map((lineName, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-bold my-4">{lineName}</h2>
            <div className="flex overflow-x-auto p-6 bg-rose-900 scrollbar-custom" style={{ minHeight: '390px' }}>
              {groupedTickets[lineName].map((ticket, idx) => (
                <div key={idx} className="flex-shrink-0" style={{ width: '336px' }}>
                  <BusTicketCard ticket={ticket} lineName={lineName} />
                </div>
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
