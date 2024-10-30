Cypress.Commands.add("startNewOrder", (delivery, bag, coverage) => {
    cy.get("#new-order-button").click();
    cy.get(".title").contains(" Start new order ").click();
    cy.get("#buttonLabel-choose-profile-continue-button").click();
    cy.get("label").contains(delivery).click();
    cy.get("#delivery-continue-button").click();
    cy.get(bag).find('[icon="plus_custom"]').click();
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
    cy.get(`[ng-reflect-name=${coverage}]`).click();
    cy.get("#buttonLabel-coverage-continue-button").click();
    cy.get("button").contains(" Dismiss ").click();
    cy.get("#place-order-button").click();
    cy.wait(25000);
    cy.getCardField("#Field-numberInput").type("4242424242424242");
    cy.getCardField("#Field-expiryInput").type("12/25");
    cy.getCardField("#Field-cvcInput").type("666");
    cy.get("#stripe-pay-button").click();
  });
  
  Cypress.Commands.add("getCardField", (selector, attempts = 0) => {
    Cypress.log({
      displayName: "getCardField",
      message: `${selector}: ${attempts}`,
    });
  
    if (attempts > 50) throw new Error("too many attempts");
  
    return cy
      .get("iframe", { timeout: 10_000, log: false })
      .eq(0, { log: false })
      .its("0.contentDocument", { log: false })
      .find("body")
      .then(($body) => {
        const cardField = $body.find(selector);
        if (!cardField.length) {
          return cy.wait(300, { log: false }).then(() => {
            getCardField(selector, ++attempts);
          });
        } else {
          return cy.wrap(cardField);
        }
      });
  });
  