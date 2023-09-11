// describe('empty spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

// Be sure to intercept and stub any userflows that rely on data from the API
// Write tests covering what should be displayed on the page when the user first visits.
// Write a test that checks that when data is put into the form, the value is reflected in that form input.
// Write a test to check the user flow of adding a new reservation to the page.


describe('main dashboard', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', {
      statusCode: 200,
      fixture: 'example.json'
    })
    cy.visit('http://localhost:3000/')
  })

  it('should display all reservations, app title, and form', () => {
    cy.get('.App').contains('h1', 'Turing Cafe Reservations')
    cy.get('.resy-form').should('be.visible')
    cy.get('[placeholder="Name"]').should('be.visible')
    cy.get('[placeholder="Date (mm/dd)"]').should('be.visible')
    cy.get('[placeholder="Time"]').should('be.visible')
    cy.get('[placeholder="Number of guests"]').should('be.visible')
    cy.get('form').contains('button', 'Make Reservation')
    cy.get('.reser-container').should('be.visible')
    // 1st reservation:
    cy.get('.reser-container > :nth-child(1)').should('be.visible')
    cy.get('.reser-container > :nth-child(1)').contains('h3', 'Christie')
    cy.get('.reser-container > :nth-child(1)').contains('p', '12/29')
    cy.get('.reser-container > :nth-child(1)').contains('p', '7:00')
    cy.get('.reser-container > :nth-child(1)').contains('p', 'number of guests: 12')
    cy.get('.reser-container > :nth-child(1)').contains('button', 'cancel')
    // 2nd reservation:
    cy.get('.reser-container > :nth-child(2)').should('be.visible')
    cy.get('.reser-container > :nth-child(2)').contains('h3', 'Leta')
    cy.get('.reser-container > :nth-child(2)').contains('p', '4/5')
    cy.get('.reser-container > :nth-child(2)').contains('p', '7:00')
    cy.get('.reser-container > :nth-child(2)').contains('p', 'number of guests: 2')
    cy.get('.reser-container > :nth-child(2)').contains('button', 'cancel')
    // 3rd reservation:
    cy.get('.reser-container > :nth-child(3)').should('be.visible')
    cy.get('.reser-container > :nth-child(3)').contains('h3', 'Pam')
    cy.get('.reser-container > :nth-child(3)').contains('p', '1/21')
    cy.get('.reser-container > :nth-child(3)').contains('p', '6:00')
    cy.get('.reser-container > :nth-child(3)').contains('p', 'number of guests: 4')
    cy.get('.reser-container > :nth-child(3)').contains('button', 'cancel')
  })
})