import Card from "./Card";

function CardContainer({reservations}) {
  const reservationCards = reservations.map(reservation => {
    return(
      <Card 
        name={reservation.name}
        date={reservation.date}
        time={reservation.time}
        number={reservation.number}
        id={reservation.id}
        key={reservation.id}
      />
    )
  })

  return (
    <div className="reser-container">
      {reservationCards}
    </div>
  )
}

export default CardContainer;