/// <reference types="cypress"/>

import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import Home from "./../Pages/home";
import Products from "./../Pages/products";
import Contact from "./../Pages/contact";

let home = new Home();
let product = new Products();
let contact = new Contact();

Given("The landing Page POM", () => {
  cy.visit("http://webdriveruniversity.com/Page-Object-Model/index.html");
});

When("I click on find out more", () => {
  home.clickFindOutButton();
});
Then("I review modal's text", () => {
  home.validateModalText(
    "Welcome to webdriveruniversity.com we sell a wide range of electrical goods such as laptops, game consoles, cameras..."
  );
  home.closeModal();
});

When("I click on Our Products Page", () => {
  home.goOurProductsPage();
});

Then("I select {string}", (item) => {
  product.selectProduct(item);
  home.validateModalText(
    "Please Note: All orders must be over the value of £50, adding additional coupon codes to the basket are excluded from this offer. To receive 30% off please add the following code to the basket: NEWCUSTOMER773322 ."
  );
  home.closeModal();
});

When("I click on Contact Us page", () => {
  home.goContactUsPage();
  contact.validateTitleContactPage("CONTACT US");
});

Then("I Fill the form with user's data", (datatable) => {
  datatable.hashes().forEach((element) => {
    contact.addFirstName(element.firstName);
    contact.addLastName(element.lastName);
    contact.addEmail(element.eMail);
    contact.addComment(element.comment);
  });
});

Then("I clear the form to submit the following data", (datatable) => {
  datatable.hashes().forEach((element) => {
    contact.clickResetButton();
    contact.addFirstName(element.firstName);
    contact.addLastName(element.lastName);
    contact.addEmail(element.eMail);
    contact.addComment(element.comment);
    contact.clickSubmitButton();
    contact.validateThankYouPageMessage("Thank You for your Message!");
  });
});
