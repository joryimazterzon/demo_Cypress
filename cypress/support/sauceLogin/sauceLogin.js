/// <reference types="cypress"/>

import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Login from "../Pages/login";

let login = new Login();

When("I visit saucedemo.com", () => {
  cy.visit("https://www.saucedemo.com/");
  login.validateTitleLoginPage("Swag Labs");
});

Then("Perform a successful Login", () => {
  login.loginUser(
    Cypress.env("sawsLabs-username"),
    Cypress.env("sawsLabs-password")
  );
});

Then("I should see products in stock", () => {
  login.validateAppLogo("Swag Labs");
});

Then("I logout successfully", () => {
  login.logout();
  login.validateTitleLoginPage("Swag Labs");
});

Then("Perform an unsuccessful Login", () => {
  login.loginUser(
    Cypress.env("sawsLabs-locked-out-username"),
    Cypress.env("sawsLabs-password")
  );
});

Then("The user will not be able to login", () => {
  login.validateErrorMsgLoginPage(
    "Epic sadface: Sorry, this user has been locked out."
  );
  login.validateTitleLoginPage("Swag Labs");
});
