describe('Login Case', () => {
    beforeEach(() => {
        cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/')
        cy.wait(2500)
    })

    //Login dengan username charles.estevez
    it(' Login Dengan Username charless' , () => {
        cy.login('charles.estevez', '123456')
        cy.contains('Dashboard').should('exist')
        cy.wait(1500)

    })
    
    //login dengan username nancy.martini
    it(' Login Dengan Username nancy' , () => {
        cy.login('nancy.martin', '123456')
        cy.contains('Dashboard').should('exist')
        cy.wait(1500)
    })

     //login dengan username cecil.anderson
     it(' Login Dengan Username cecil' , () => {
        cy.login('cecil.anderson', '123456')
        cy.contains('Dashboard').should('exist')
        cy.wait(1500)
    })

     //login dengan username superadmin.company
     it(' Login Dengan Username superadmin' , () => {
        cy.login('superadmin.company', '123456')
        cy.contains('Dashboard').should('exist')
        cy.wait(1500)
    })

     //login dengan username angela.garcia
     it(' Login Dengan Username angela' , () => {
        cy.login('angela.garcia', '123456')
        cy.contains('Dashboard').should('exist')
        cy.wait(1500)
    })

})