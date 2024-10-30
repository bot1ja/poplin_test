describe("E2E test - New orders", () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearAllLocalStorage();
  });

  it("TC-001 | User Starts a new Order With an exist profile for a Small Bag, basic coverage and standar delivery. ", () => {
    cy.logInUser();
    // cy.visit("");
    cy.startNewOrder();
    cy.logOutUser();
  });
});

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

Cypress.Commands.add("startNewOrder", () => {
  cy.get("#new-order-button").click();
  cy.get(".title").contains(" Start new order ").click();
  cy.get("#buttonLabel-choose-profile-continue-button").click();
  cy.get("label").contains("Standard Delivery").click();
  cy.get("#delivery-continue-button").click();
  cy.get("#stepper-small").find('[icon="plus_custom"]').click();
  cy.get("#bag-continue-button").click();
  cy.get("#number-stepper-element-wrapper")
    .find('[icon="plus_custom"]')
    .click();
  cy.get("#oversized-continue-button").click();
  cy.get("#drawer-checkbox-1").click();
  cy.get("#drawer-checkbox-2").click();
  cy.get("#drawer-checkbox-3").click();
  cy.get("#drawer-modal-continue-button-wrapper").click();
  cy.get("#preferred-continue-button-wrapper").click();
  cy.get('[ng-reflect-name="Basic"]').click();
  cy.get("#buttonLabel-coverage-continue-button").click();
  cy.get("button").contains(" Dismiss ").click();
  cy.get("#place-order-button").click();
  cy.wait(25000);


  function getCardField(selector, attempts = 0) {
    Cypress.log({displayName: 'getCardField', message: `${selector}: ${attempts}`})

    if (attempts > 50) throw new Error('too many attempts')

    return cy.get('iframe', {timeout:10_000, log:false})
      .eq(0, {log:false})
      .its('0.contentDocument', {log:false})
      .find('body')
      .then($body => {
        const cardField = $body.find(selector)
        if (!cardField.length) {
          return cy.wait(300, {log:false})
            .then(() => {
              getCardField(selector, ++attempts)
            })
        } else {
          return cy.wrap(cardField)
        }
      })
  }

  getCardField('#Field-numberInput').type('1111111111111111')

  // cy.typeInIframe(
  //   ".__PrivateStripeElement",
  //   "#Field-numberInput",
  //   "4242424242424242"
  // );
  // cy.get("#Field-expiryInput").type("12/25");
  // cy.get("#Field-cvcInput").type("666");
  // cy.get("#stripe-pay-button").click();
});
