describe('Login Case', () => {
    beforeEach(() => {
        cy.visit('https://samaktamitrapt-dev.outsystemsenterprise.com/ClaimPortal/')
        // cy.wait(5000)
    })

    //Login dengan username charles.estevez
    it('positive: Login Dengan Username charless' , () => {
        cy.login('charles.estevez', '123456')
        cy.contains('Dashboard').should('exist')
    })

    it('negative: Login Dengan Username charless' , () => {
        cy.login('charles.estevez', 'dasdsadasd')
        cy.contains('Invalid username or password.').should('exist')
    })

    
    //login dengan username nancy.martini
    it('positive: Login Dengan Username nancy' , () => {
        cy.login('nancy.martin', '123456')
        cy.contains('Dashboard').should('exist')
    })

    it('negative: Login Dengan Username nancy' , () => {
        cy.login('nancy.martin', 'dasdsadasd')
        cy.contains('Invalid username or password.').should('exist')
    })

     //login dengan username cecil.anderson
     it('positive: Login Dengan Username cecil' , () => {
        cy.login('cecil.anderson', '123456')
        cy.contains('Dashboard').should('exist')
    })

    it('negative: Login Dengan Username cecil' , () => {
        cy.login('cecil.anderson', 'dasdsadasd')
        cy.contains('Invalid username or password.').should('exist')
    })

     //login dengan username superadmin.company
     it('positive: Login Dengan Username superadmin' , () => {
        cy.login('superadmin.company', '123456')
        cy.contains('Dashboard').should('exist')
    })

    it('negative: Login Dengan Username superadmin' , () => {
        cy.login('superadmin.company', 'dasdsadasd')
        cy.contains('Invalid username or password.').should('exist')
    })

    
     //login dengan username angela.garcia
     it('positive: Login Dengan Username angela' , () => {
        cy.login('angela.garcia', '123456')
        cy.contains('Dashboard').should('exist')
    })

    it('negative: Login Dengan Username angela' , () => {
        cy.login('angela.garcia', 'dasdsadasd')
        cy.contains('Invalid username or password.').should('exist')
    })

})