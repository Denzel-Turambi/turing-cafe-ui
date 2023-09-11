import './App.css';
import React from 'react';
import { getData } from '../ApiCalls';
import { useState, useEffect } from 'react';
import CardContainer from '../Cards/CardContainer';
import Form from '../Form/Form';

function App() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    getData()
    .then(data => setReservations(data))
  }, [])

  console.log(reservations)

  function addReservation(newReservation) {
    console.log('app.newRes', newReservation)
    console.log('oldREs', reservations)
    setReservations([...reservations, newReservation])
  }

  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <div className='resy-form'>
        <Form addReservation={addReservation}/>
      </div>
      <div className='resy-container'>
        <CardContainer reservations={reservations}/>
      </div>
    </div>
  );
}

export default App; 