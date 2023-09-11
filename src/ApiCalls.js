export function getData() {
  return fetch('http://localhost:3001/api/v1/reservations')
    .then(res => res.json())
}

export function postReserv(newReserv) {
  return fetch('http://localhost:3001/api/v1/reservations', {
    method: 'POST',
    body: JSON.stringify(newReserv),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
}