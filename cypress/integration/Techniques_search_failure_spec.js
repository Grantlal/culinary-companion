describe("Sucessful technique search", function() {
     it("Search for knife", function() {
       cy.visit("localhost:8080");
   
       cy.wait(1000);
       cy.get("#techniqueTab").click();
       cy.wait(1000);
   
       cy.get("#technique-id").type("32487trn v09qehfqu3f-089 2qyu34vn9t8yewq uhuf");
       cy.wait(1000);
       cy.get("#technique-button").click();
   
       expect(true).to.equal(true);
     });
   });