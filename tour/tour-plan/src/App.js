import { useState } from 'react';
import data from './data'
import Tours from './Components/Tours';
import './App.css';

const App = () => {

  const [tours,setTours] = useState(data)
  function removeTour(id) {
    const newTour = tour.filter(tour => tour.id !== id)
    console.log(id);
    setTour(newTour);
  }
 

  return (
    <div>
   
    <Tours tours={tours}></Tours>
    </div>
  )
};

export default App;
