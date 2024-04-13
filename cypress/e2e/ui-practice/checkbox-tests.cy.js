/// <reference types="cypress" />

describe("checkboxes-tests", () => {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/checkboxes");
  });

  // Перевірити, що checkbox 2 чекнутий по дефолту
  // Анчекнути checkbox 2
  // Перевірити, що обидва чекбокси анчекнуті

  it("Check/uncheck checkbox 2", () => {
    cy.get('[type="checkbox"]').eq(1).should("be.checked");
    cy.get('[type="checkbox"]').eq(1).uncheck();
    cy.get('[type="checkbox"]').should("not.be.checked");
  });

  // Чекнути checkbox 1
  // Перевірити, що обидва чекбокси чекнуті

  it("Check checkbox 1", () => {
    cy.get('[type="checkbox"]').eq(0).check();
    cy.get('[type="checkbox"]').should("be.checked");
  });
});
