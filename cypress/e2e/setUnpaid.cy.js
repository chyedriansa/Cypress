describe('Login Case', () => {
    beforeEach(() => {
        cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/')
        // cy.wait(5000)
        cy.login('charles.estevez', '123456')
    })

    it('Set Unpaid', () => {
        cy.contains('Invoices').click()
        cy.get('#ListInvoices_StatusDropdown').click()
        cy.contains('Submit').click()
        cy.contains('0000001').click()
        cy.contains('Set Unpaid').click()
        cy.contains('Unpaid').should('exist')
    })
})