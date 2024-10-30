import '@testing-library/cypress/add-commands';

Cypress.on("uncaught:exception", (err, runnable) => {
  // Ignora excepciones no manejadas para evitar fallos en las pruebas
  return false;
});

// Desactiva la verificación de seguridad en Chrome
Cypress.config("chromeWebSecurity", false);
