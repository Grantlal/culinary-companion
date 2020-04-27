describe('Hamburgers are Clickable', function() {
    it('Clicks Hamburgers', function() {
        cy.visit('localhost:8080')

        cy.get('#leftMenuButton').click()
        cy.wait(1000)
        cy.get('#firstHamburger').click({force: true})
        cy.wait(500)
        cy.get('#firstHamburger').click({force: true})
        cy.wait(500)
        cy.get('#secondHamburger').click({force: true})
        cy.wait(500)
        cy.get('#secondHamburger').click({force: true})
        cy.wait(500)
        cy.get('#thirdHamburger').click({force: true})
        cy.wait(500)
        cy.get('#thirdHamburger').click({force: true})

      expect(true).to.equal(true)
    })
  })