describe("E2E test - New orders", () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearAllLocalStorage();
  });

  it("TC-001 | User Starts a new Order With an exist profile for a Small Bag, basic coverage and standard delivery.", () => {
    cy.logInUser();
    cy.startNewOrder("Standard Delivery", "#stepper-small", "Basic");
    cy.logOutUser();
  });

  it("TC-002 | User Starts a new Order With an exist profile for a Regular Bag, basic coverage and standard delivery.", () => {
    cy.logInUser();
    cy.startNewOrder("Standard Delivery", "#stepper-regular", "Basic");
    cy.logOutUser();
  });

  it("TC-003 | User Starts a new Order With an exist profile for a Large Bag, basic coverage and standard delivery. ", () => {
    cy.logInUser();
    cy.startNewOrder("Standard Delivery", "#stepper-large", "Basic");
    cy.logOutUser();
  });
});
