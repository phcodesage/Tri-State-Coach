
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  useEffect(() => {
    fetch('http://localhost:5000/api/tickets')
      .then(response => response.json())
      .then(data => setTickets(data))
      .catch(error => console.error(error));
  }, []);
  
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/about-us" component={AboutUs} />
      
    </Router>
  );
}

export default App;
