const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "gbec8n",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://r0655289-realbeans.myshopify.com/",
    env: {
      storePassword: "skeash"
    }
  },
});
