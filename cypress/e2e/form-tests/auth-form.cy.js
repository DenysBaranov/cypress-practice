/// <reference types="cypress" />

describe ('example to-do app', () => {

    it('Login with the correct login, but not the correct password', () => {
        cy.visit('https://the-internet.herokuapp.com/login');
        cy.get('input#username').type('tomsmith');
        cy.get('input#password').type('incorrectPass1234');
        cy.get('button[type="submit"]').click();
        cy.get('div#flash').should('have.text', '\n            Your password is invalid!\n            ×\n          ');

    })

    it('Login with an incorrect login and password', () => {
        cy.visit('https://the-internet.herokuapp.com/login');
        cy.get('input#username').type('incorrectLogin');
        cy.get('input#password').type('incorrectPass1234');
        cy.get('button[type="submit"]').click();
        cy.get('div#flash').should('have.text', '\n            Your username is invalid!\n            ×\n          ');

    })

    it('Open Registration modal window', () => {
        cy.visit('https://qauto.forstudy.space/', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
            },
        });
        cy.get('button.btn-primary').click();
        cy.get('h4.modal-title').contains('Registration');

    })

})