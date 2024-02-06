import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';

// Login Functionality
// User can log in with correct credentials

Given('the user is on the login page', () => {
    cy.visit('/login');
});

When('the user enters a valid username and password', () => {
    cy.get('input[name=username]').type('admin');
    cy.get('input[name=password]').type('admin');
});

Then('the user clicks the login button', () => {
    cy.get('button[type=submit]').click();
});

Then('the user should be redirected to the home page', () => {
    cy.url().should('include', '/');
});

Then('{string} text is displayed', (string) => {
    cy.contains(string);
});

// User cannot log in with incorrect credentials

When('the user enters an invalid username and password', () => {
    cy.get('input[name=username]').type('invalidUser');
    cy.get('input[name=password]').type('invalidPassword');
});

Then('an error message {string} should be displayed', (string) => {
    cy.contains(string);
});
