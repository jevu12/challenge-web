const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "cypress/reports/cucumber-json",  // ** Path of .json file **//
    reportPath: "cypress/reports", // ** Path of .html file **//
    displayDuration: true,
    durationInMS: true,
    pageTitle: " Challenge Web",
    reportName: "N5 NOW Challenge Web",
    metadata: {
        browser: {
            name: "chrome",
        },
        device: "Local test machine",
        platform: {
            name: "windows",
        }
    }

});
