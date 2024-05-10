

//fungsi untuk login
Cypress.Commands.add('login', (username, password) => {
    cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/')
    cy.wait(3000)
    cy.get('#Input_UsernameVal').type(username)
    cy.get('#Input_PasswordVal').type(password)
    cy.contains('button', 'Log in').click()
});

//fungsi untuk setup layout display
Cypress.Commands.add('setCustomViewport', (width, height) => {
    cy.viewport(width, height);
    });
    
    beforeEach(() => {
        cy.setCustomViewport(1280, 720); 
});


// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

