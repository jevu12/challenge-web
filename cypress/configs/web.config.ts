import { defineConfig } from "cypress";

export default defineConfig({
    video: false,
    e2e: {
        baseUrl: "http://www.netflix.com",
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
});