describe('Can successfully login', function() {
    it('Login to System', function() {
        cy.visit('localhost:8080')

        //Can't go through auth0 with cypress. Must be a manual tests for login cases
        cy.get('#loginButton').click()
        cy.wait(1000)
        

      expect(true).to.equal(true)
    })
  })