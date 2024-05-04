import React from 'react';
import BusTicketCard from '../components/BusTicketCard';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import axios from 'axios'; // Ensure you have axios installed or use fetch API

class CollegeShuttles extends React.Component {
  state = {
    busLines: []
  };

  componentDidMount() {
    this.fetchBusLines();
  }

  fetchBusLines = async () => {
    try {
      const response = await axios.get('/api/busLines'); // Adjust this to your API endpoint
      this.setState({ busLines: response.data });
    } catch (error) {
      console.error('Failed to fetch bus lines:', error);
    }
  };

  render() {
    const { busLines } = this.state;
    const groupedTickets = this.groupTicketsByLineName(busLines);

    return (
      <div className='h-screen'>
        <Navbar />
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-center text-3xl font-bold my-6">College Shuttles</h1>
          
          {Object.keys(groupedTickets).map((lineName, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-2xl font-bold my-4">{lineName}</h2>
              <div className="flex overflow-x-auto p-6 bg-rose-900 scrollbar-custom" style={{ minHeight: '390px' }}>
                {groupedTickets[lineName].map((ticket, idx) => (
                  <BusTicketCard key={ticket.id} ticket={ticket} lineName={lineName} />
                ))}
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    );
  }

  groupTicketsByLineName(busLines) {
    return busLines.reduce((grouped, item) => {
      const { lineName, tickets } = item;
      grouped[lineName] = grouped[lineName] || [];
      grouped[lineName].push(...tickets);
      return grouped;
    }, {});
  }
}

export default CollegeShuttles;
