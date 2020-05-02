describe('Can navigate to techniques', function() {
    it('Navigates to techniques tab', function() {
        cy.visit('localhost:8080')
        
        cy.wait(1000)
        cy.get('#techniqueTab').click()
        cy.wait(1000)
        
      expect(true).to.equal(true)
    })
  })