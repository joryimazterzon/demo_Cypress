import { Before } from "@badeball/cypress-cucumber-preprocessor";
Before({ tag: "@seleniumEasy" }, () => {
  cy.visit("/");
});
