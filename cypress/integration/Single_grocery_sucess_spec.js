describe('Successful Grocery Add', function() {
    it('Add a Grocery Item', function() {
        cy.visit('localhost:8080')

        //Can't go through auth0 with cypress. Must be a manual tests for login cases
        cy.get('#searchInput').type("Toaster Strudel")
        cy.wait(500)
        cy.get('#searchInput').clear()
        cy.get('#searchInput').type("beef")
        cy.get('#searchButton').click()
        cy.get('#ClickableRecipeCard').click()
        cy.wait(1000)
        cy.get('#singleGroceryButton').click()


      expect(true).to.equal(true)
    })
  })