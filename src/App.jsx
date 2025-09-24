
import './App.css'
import Card from './Card';

function App() {
  const travelDestinations = [
  
    { destination: "Taipei", country: "Taiwan", bestMonth: "October" },
    { destination: "Chia-Yi", country: "Taiwan", bestMonth: "June" },
    { destination: "New York", country: "USA", bestMonth: "July" },
    { destination: "Beijing", country: "China", bestMonth: "September" },
    { destination: "Washington, DC", country: "USA", bestMonth: "April" },
    { destination: "Kyoto", country: "Japan", bestMonth: "April" },
    { destination: "Santorini", country: "Greece", bestMonth: "September" },
    { destination: "Banff", country: "Canada", bestMonth: "July" },
    { destination: "Berlin", country: "Germany", bestMonth: "May" },
    { destination: "Cairo", country: "Egypt", bestMonth: "November" }

  ]
  return (
    
      <div className = "App">
     
        <h1> 🌍 Travel Destinations Board</h1>
        <div className="cards">
          {travelDestinations.map(place => 
          <Card 
            key = {place.destination}
            destination = {place.destination}
            country = {place.country}
            bestMonth = {place.bestMonth}
          />
          )}
        </div>
      </div>
  );
};

export default App;
