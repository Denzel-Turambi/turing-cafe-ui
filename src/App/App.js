import './App.css';
import React from 'react';
import { getData } from '../ApiCalls';
import { useState, useEffect } from 'react';

function App() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    getData()
    .then(data => setReservations(data))
  }, [])

  console.log(reservations)

  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <div className='resy-form'>
      </div>
      <div className='resy-container'>
      </div>
    </div>
  );
}

export default App; 