describe('Successful Recipes search', function() {
    it('Search Recipes', function() {
        cy.visit('localhost:8080')

        //Can't go through auth0 with cypress. Must be a manual tests for login cases
        cy.get('#searchInput').type("banana")
        cy.wait(500)
        cy.get('#searchInput').clear()
        cy.get('#searchInput').type("chicken")
        cy.get('#searchButton').click()
        cy.get('#ClickableRecipeCard').click()
        cy.wait(1000)


      expect(true).to.equal(true)
    })
  })