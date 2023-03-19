/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

const rootURL = 'http://localhost:4173/'
const addPageURL = `${rootURL}add`;

const testCarInput = {
  name: 'Test Car',
  bhp: 1,
  avatar_url: "https://static.thenounproject.com/png/449586-200.png"
};

describe('example cars app', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit(rootURL)
  })

  it('allows us to add a car', () => {
    cy.visit(addPageURL);
    cy.get('[name="name"]').type(`${testCarInput.name}`)
    cy.get('[name="bhp"]').type(`${testCarInput.bhp}`)
    cy.get('[name="avatar_url"]').type(`${testCarInput.avatar_url}`)
    cy.get('[type="submit"]').click()

    cy.location().should((loc) => {
      expect(loc.toString()).to.eq(rootURL)
    })
    
    cy.get('.cars-list li')
      // .should('have.length', 1)
      .first()
      .should('have.text', `${testCarInput.name} (BHP: ${testCarInput.bhp})`)
  })

  it('allows us to delete a car', () => {
    cy.get('.cars-list li').first().find('[data-testid="delete"]').click();
    cy.visit(rootURL);
    cy.get('.cars-list li').should('have.length', 0)
  });
})
