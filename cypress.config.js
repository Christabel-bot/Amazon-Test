const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
await preprocessor.addCucumberPreprocessorPlugin(on, config);
on("file:preprocessor", browserify.default(config));
return config;
}

module.exports = defineConfig({
        env: {username: "Adedeji",
  password: "Gk%%p)Wvb9y4=s=",
   url: "https://www.amazon.com/"},
        e2e: {

            
            
            experimentalRunAllSpecs:true,
            setupNodeEvents,
            specPattern: 'cypress/integration/BDD/*.feature',
           
      },
});
