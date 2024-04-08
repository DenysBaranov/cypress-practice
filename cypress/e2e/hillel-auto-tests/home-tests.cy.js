/// <reference types="cypress" />

describe ('perform actions for all tests', () => {
    beforeEach (() => {
        cy.visit ('https://qauto.forstudy.space/', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
            },
        });
    });

    // Test 1-5

    it ('Facebook icon has Hillel Facebook page link', () => {

        cy.get ("a.socials_link").eq(0).invoke("attr", "href").should("eq", "https://www.facebook.com/Hillel.IT.School");

    })

    it ('Telegram icon has Hillel Telegram page link', () => {

        cy.get ("a.socials_link").eq(1).invoke("attr", "href").should("eq", "https://t.me/ithillel_kyiv");

    })

    it ('Youtube icon has Hillel Youtube page link', () => {

        cy.get ("a.socials_link").eq(2).invoke("attr", "href").should("eq", "https://www.youtube.com/user/HillelITSchool?sub_confirmation=1");

    })

    it ('Instagram icon has Hillel Instagram page link', () => {

        cy.get ("a.socials_link").eq(3).invoke("attr", "href").should("eq", "https://www.instagram.com/hillel_itschool/");

    })

    it ('Linkedin icon has Hillel Linkedin page link', () => {

        cy.get ("a.socials_link").eq(4).invoke("attr", "href").should("eq", "https://www.linkedin.com/school/ithillel/");

    })

    // Test 6

    it ('After clicking on "Sign In" the login form opens', () => {
    
      cy.get("button.header_signin").click();
      cy.get("h4.modal-title").should("have.text", "Log in");
            
    })
    
    // Test 7

    it('After clicking on "Sign Up" the registration form opens', () => {

      cy.get("button.btn-primary").click();
      cy.get("h4.modal-title").should("have.text", "Registration");

    });
    

});




