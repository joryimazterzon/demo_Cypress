/// <reference types="cypress"/>

import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Login from "../Pages/login";

let login = new Login();

When("I visit saucedemo.com", () => {
  login.loginUser("standard_user", "secret_sauce");
});

Then("I should see products in stock", () => {});
