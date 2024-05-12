describe('Paybill Cases', () => {

    beforeEach(() => {
        cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/')
        cy.login('angela.garcia', '123456')
    })

    it('Positive : Paybill', () => {
        cy.contains('Invoices').click()
        cy.get('#ListInvoices_StatusDropdown').click()
        cy.contains('Unpaid').click()
        cy.contains('0000001').click()
        cy.contains('Pay bill').click()
        cy.payment()
        cy.get('#CreditCardForm_Btn').click()
        cy.contains('paid').should('exist') //status jika pengujian selesai
    })
})