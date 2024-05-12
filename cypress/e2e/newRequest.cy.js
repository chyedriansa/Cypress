//fungsi membuat random data
var randomData = ["CY1", "CY2", "CY3", "CY4", "CY5", "0000001", "0000002"]
var x = Math.floor((Math.random() * 6)) + 1;

describe('Login Case', () => {

    //inisiasi random data
    var _InvoiceNumber = randomData[x]
    beforeEach(() => {
        cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/')
        cy.login('nancy.martin', '123456')
    })

    //kondisi jika data jika valid 
    it('Positive : New Request', () => {
        cy.contains('Invoices').click()
        cy.contains('button', 'New Request').click()
        cy.get('#Input_InvoiceNumber').type(_InvoiceNumber)
        cy.get('#Input_PeriodStartDate').type('2017-06-01T08:30')
        cy.get('#Input_PeriodEndDate').type('2017-06-01T08:50')
        cy.get('#Input_Amount').type('250000')
        cy.contains('button', 'Submit').click()
    })

    //kondisi jika data tidak valid
    it('Negative : New Request', () => {
        cy.contains('Invoices').click()
        cy.contains('button', 'New Request').click()
        cy.get('#Input_InvoiceNumber').type(_InvoiceNumber)
        //End pariode date < Start Periode Date  
        cy.get('#Input_PeriodStartDate').type('2017-06-01T08:50')
        cy.get('#Input_PeriodEndDate').type('2017-06-01T08:30')
        cy.get('#Input_Amount').type('250000')
        cy.contains('button', 'Submit').click()
    })

})