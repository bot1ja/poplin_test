Cypress.Command.add('loginUser', () => {
    cy.visit('https://nonprod-app.poplin.co/auth');
    cy.get('[label="Continue with Email"]').click();
    cy.get('#email').clear().type('andrew+ggg@poplin.co');
    cy.get('#enter-password').clear().type('Password1!');
    cy.get('#buttonLabel-enter-password-login-button').click();
})