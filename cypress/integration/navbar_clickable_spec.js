describe('Can click navbar items', function() {
    it('Clicks navbar Items', function() {
        cy.visit('localhost:8080')
        
        cy.wait(1000)
        cy.get('#recipeTab').click()
        cy.wait(500)
        cy.get('#recipeTab').click()

      expect(true).to.equal(true)
    })
  })