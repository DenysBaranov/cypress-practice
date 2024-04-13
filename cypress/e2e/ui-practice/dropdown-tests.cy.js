/// <reference types="cypress" />

describe("dropdown-tests", () => {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/dropdown");
  });

  // Перевірити, що по дефолту обране значення "Please select an option"

  it("Check default value", () => {
    cy.get('select#dropdown option:selected').should('have.text','Please select an option');
  });

  // Обрати значення "Option 2"
  // Перевірити, що обране значення "Option 2"

  it("Check Option 2", () => {
    cy.get('select#dropdown').select(2);
    cy.get('select#dropdown option:selected').should('have.text', 'Option 2');
  });
});
