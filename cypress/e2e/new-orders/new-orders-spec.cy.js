describe("E2E test - New orders", () => {
  it("TC-001 | User Starts a new Order With an exist profile for a Small Bag, Basic coverage and standard delivery.", () => {
    cy.logInUser();
    cy.startNewOrder("Standard Delivery", "#stepper-small", "Basic");
    cy.logOutUser();
  });

  it("TC-002 | User Starts a new Order With an exist profile for a Regular Bag, Basic coverage and standard delivery.", () => {
    cy.logInUser();
    cy.startNewOrder("Standard Delivery", "#stepper-regular", "Basic");
    cy.logOutUser();
  });

  it("TC-003 | User Starts a new Order With an exist profile for a Large Bag, Basic coverage and standard delivery.", () => {
    cy.logInUser();
    cy.startNewOrder("Standard Delivery", "#stepper-large", "Basic");
    cy.logOutUser();
  });

  it("TC-004 | User Starts a new Order with a new profile for a Large Bag, basic coverage and Express delivery.", () => {
    cy.logInUser();
    cy.startNewOrder("Express Delivery", "#stepper-small", "Premium");
    cy.logOutUser();
  });

  it("TC-005 | User Starts a new Order With an exist profile for a Small Bag, basic coverage and Express delivery.", () => {
    cy.logInUser();
    cy.startNewOrder("Express Delivery", "#stepper-regular", "Premium");
    cy.logOutUser();
  });

  it("TC-006 | User Starts a new Order With an exist profile for a Regular Bag, Premium+ coverage and Express delivery.", () => {
    cy.logInUser();
    cy.startNewOrder("Express Delivery", "#stepper-large", "Premium");
    cy.logOutUser();
  });

  it("TC-007 | User Starts a new Order with a new profile for a Large Bag, Premium+ coverage and Express delivery.", () => {
    cy.logInUser();
    cy.startNewOrder("Express Delivery", "#stepper-small", "Premium+");
    cy.logOutUser();
  });

  it("TC-008 | User Starts a new Order With an exist profile for a Small Bag, Premium+ coverage and Express delivery.", () => {
    cy.logInUser();
    cy.startNewOrder("Express Delivery", "#stepper-regular", "Premium+");
    cy.logOutUser();
  });

  it("TC-009 | User Starts a new Order With an exist profile for a Regular Bag, Premium+ coverage and Express delivery.", () => {
    cy.logInUser();
    cy.startNewOrder("Express Delivery", "#stepper-large", "Premium+");
    cy.logOutUser();
  });
});
