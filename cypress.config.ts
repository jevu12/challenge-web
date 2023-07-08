import { defineConfig } from "cypress";
const browserify = require('@cypress/browserify-preprocessor');
const cucumber = require('cypress-cucumber-preprocessor').default;
const resolve = require('resolve');

export default defineConfig({
  e2e: {
    baseUrl: "http://www.netflix.com",
    video: true,
    viewportWidth: 1280,
    viewportHeight: 720,
    setupNodeEvents(on, config) {
      const options = {
        ...browserify.defaultOptions,
        typescript: resolve.sync('typescript', { baseDir: config.projectRoot }),
      };
      on('file:preprocessor', cucumber(options));
    },
    specPattern: "cypress/e2e/**/*.feature",
  },
});
