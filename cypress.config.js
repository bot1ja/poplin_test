const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    baseUrl: 'https://nonprod-app.poplin.co',
    pageLoadTimeout: 60000,
    defaultCommandTimeout: 10000,
    responseTimeout: 30000,
    setupNodeEvents(on, config) {

    },
  },
});
