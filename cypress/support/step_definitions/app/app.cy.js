import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I visit the React App', () => {
    cy.visit('/');
});

Then('I see {string} in the page', (text) => {
    cy.contains(text);
});
