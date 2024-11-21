describe('My First Test', () => {
    beforeEach(()=>{
        cy.visit('/login')
    })
    it('primer test',()=>{
        cy.contains('sesión')
        cy.get('input[name="correo"]').should('be.visible')
        cy.get('input[name="correo"]').type('plazadiego591@gmail.com')
        cy.get('input[name="password"]').type('Dinop841')
        cy.contains('niciar sesión con correo').click()
        cy.url().should('include','/home')
    })
    it('segundo test',()=>{
        cy.visit('/home')
    })
  })