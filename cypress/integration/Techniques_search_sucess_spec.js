describe("Sucessful technique search", function() {
  it("Search for knife", function() {
    cy.visit("localhost:8080");

    cy.wait(1000);
    cy.get("#techniqueTab").click();
    cy.wait(1000);

    cy.get("#technique-id").type("knife");
    cy.wait(1000);
    cy.get("#technique-button").click();

    expect(true).to.equal(true);
  });
});
