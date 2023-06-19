/// <reference types="cypress"/>

import Home from "./home";

let selector = {
  contactTitle: 'h2[name="contactme"]',
  firstNameTxb: 'input[name="first_name"]',
  lastNameTxb: 'input[name="last_name"]',
  emailTxb: 'input[name="email"]',
  commentTxb: 'textarea[name="message"]',
  resetBtn: 'input[type="reset"]',
  submitBtn: 'input[type="submit"]',
  thankYouLb: 'div[id="contact_reply"] h1',
};

export default class Contact extends Home {
  /**
   * Validates the title of the Contact Page against the text provided
   *
   * @argument {String} Text to be compared
   *
   * @example
   *    Contact.validateTitleContactPage()
   */
  validateTitleContactPage(title) {
    cy.get(selector.contactTitle).should("have.text", title);
  }

  /**
   * Fill first name in Contact Page
   *
   * @argument {String} Text to introduce
   *
   * @example
   *    Contact.addFirstName('Joryi')
   */
  addFirstName(firstName) {
    cy.get(selector.firstNameTxb)
      .clear()
      .type(firstName)
      .should("have.value", firstName);
  }

  /**
   * Fill last name in Contact Page
   *
   * @argument {String} Text to introduce
   *
   * @example
   *    Contact.addLastName('Smith')
   */
  addLastName(lastName) {
    cy.get(selector.lastNameTxb)
      .clear()
      .type(lastName)
      .should("have.value", lastName);
  }

  /**
   * Fill email in Contact Page
   *
   * @argument {String} Text to introduce
   *
   * @example
   *    Contact.addEmail('test@test.com')
   */
  addEmail(email) {
    cy.get(selector.emailTxb).clear().type(email).should("have.value", email);
  }

  /**
   * Fill a comment in Contact Page
   *
   * @argument {String} Text to introduce
   *
   * @example
   *    Contact.addComment('cooperation and comity specifically ...')
   */
  addComment(comment) {
    cy.get(selector.commentTxb)
      .clear()
      .type(comment)
      .should("have.value", comment);
  }

  /**
   * Clicks on the reset button
   *
   * @example
   *    Contact.clickResetButton()
   */
  clickResetButton() {
    cy.get(selector.resetBtn).click();
  }

  /**
   * Clicks on the submit button
   *
   * @example
   *    Contact.clickSubmitButton()
   */
  clickSubmitButton() {
    cy.get(selector.submitBtn).click();
  }

  /**
   * Validates the Thank you message after submitting the form
   *
   * @argument {String} Text to be compared
   *
   * @example
   *    Login.validateThankYouPageMessage('Thank You for your Message!')
   */
  validateThankYouPageMessage(text) {
    cy.get(selector.thankYouLb).should("have.text", text);
  }
}
