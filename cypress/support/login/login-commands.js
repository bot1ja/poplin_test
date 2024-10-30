Cypress.Commands.add("logInUser", () => {
    cy.visit("/auth");
    cy.get('[label="Continue with Email"]').click();
    cy.get("#email").type("andrew+ggg@poplin.co");
    cy.get("#buttonLabel-email-login-button").click();
    cy.get("#enter-password").type("Password1!");
    cy.get("#buttonLabel-enter-password-login-button").click();
    // cy.get('#auth-pn-next-button').click();
  });
  
  Cypress.Commands.add("logOutUser", () => {
    cy.contains("Account").click();
    cy.get(".title").contains(" Account Details ").click();
    cy.get(".title").contains(" Logout ").click();
    cy.get("#logout-button").click();
  });