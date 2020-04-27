describe('Failed Recipes search', function() {
    it('Search Recipes', function() {
        cy.visit('localhost:8080')

        //Can't go through auth0 with cypress. Must be a manual tests for login cases
        cy.get('#searchInput').type("@#$%^!@%")
        cy.wait(1000)
        cy.get('#searchButton').click()
        cy.wait(1000)


      //expect(true).to.equal(true)
    })
  })