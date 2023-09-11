function Card({name, date, time, number, id}) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{time}</p>
      <p>{number}</p>
      <button>cancel</button>
    </div>
  )
}

export default Card;