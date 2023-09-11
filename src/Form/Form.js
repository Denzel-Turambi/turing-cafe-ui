import { useState } from "react";

function Form({addReservation}) {
  const [name, setName] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [number, setGuestNumber] = useState(0)

  function submitReservation(event) {
    event.preventDefault()
    const newReservation = {
        id: Date.now(),
        name,
        date,
        time,
        number
    }
    console.log('newRes', newReservation)
    addReservation(newReservation)
    clearInput()
}

function clearInput(){
    setName("")
    setDate("")
    setTime("")
    setGuestNumber("")
}

  return (
    <form>
      <input 
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={event => setName(event.target.value)}
      />
      <input 
        type="text"
        placeholder="Date (mm/dd)"
        name="date"
        value={date}
        onChange={event => setDate(event.target.value)}
      />
      <input 
        type="text"
        placeholder="Time"
        name="time"
        value={time}
        onChange={event => setTime(event.target.value)}
      />
      <input 
        type="text"
        placeholder="Number of guests"
        name="number"
        value={number}
        onChange={event => setGuestNumber(event.target.value)}
      />
      <button onClick={event => submitReservation(event)}>Make Reservation</button>
    </form>
  )
}

export default Form;