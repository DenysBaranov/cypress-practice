/// <reference types="cypress" />

describe("Login on Hillel site", () => {
  beforeEach("Login on site", () => {
    cy.visit("https://qauto.forstudy.space/", {
      auth: {
        username: "guest",
        password: "welcome2qauto",
      },
    });
  });

  it("Enter user data and login", () => {
    cy.fixture("credentials-hillel.json").then((userData) => {
      cy.get("button.header_signin").click();
      cy.get("#signinEmail").type(userData.email);
      cy.get("#signinPassword").type(userData.password);
      cy.get('[type="button"].btn-primary').click();
      cy.get(".panel-page h1").should("have.text", "Garage");
    });
  });
});
