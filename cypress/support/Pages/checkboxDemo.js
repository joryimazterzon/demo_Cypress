/// <reference types="cypress"/>

let selector = {
  singleCheckbox: 'input[id="isAgeSelected"]',
  singleCheckboxMessage: 'div[id="txtAge"]',
  defaultCheckbox: "label.checkbox-inline input",
  checkAllBtn: "#check1",
  multipleCheckbox: "input.cb1-element",
};

export default class CheckboxDemo {
  /**
   * Validate single checkbox message
   *
   * @argument {String} Message of the single checbox
   *
   * @example
   *    CheckboxDemo.validateCheckboxMessage('Success - Check box is checked')
   */
  validateCheckboxMessage(message) {
    cy.get(selector.singleCheckbox).check({ force: true });
    cy.get(selector.singleCheckboxMessage).should("have.text", message);
  }

  /**
   * Validate default checkbox is checked
   *
   * @example
   *    CheckboxDemo.validateCheckedCheckbox()
   */
  validateCheckedCheckbox() {
    cy.get(selector.defaultCheckbox).eq(1).should("be.checked");
  }

  /**
   * Validate default checkbox is disabled
   *
   * @example
   *    CheckboxDemo.validateDiabledCheckbox()
   */
  validateDiabledCheckbox() {
    cy.get(selector.defaultCheckbox).last().should("be.disabled");
  }

  /**
   * Validate first checkbox is uncheck correctly
   *
   * @example
   *    CheckboxDemo.validateUncheckedCheckbox()
   */
  validateUncheckedCheckbox() {
    cy.get(selector.singleCheckbox)
      .click({ force: true })
      .should("not.be.checked");
    cy.get(selector.singleCheckboxMessage).should("not.be.visible");
  }

  /**
   * Click Check All button
   *
   * @example
   *    CheckboxDemo.clickCheckAllButton()
   */
  clickCheckAllButton() {
    cy.get(selector.checkAllBtn).click({ force: true });
  }

  /**
   * Validate value of Check All button
   *
   * @argument {string} value of the checkbox
   *
   * @example
   *    CheckboxDemo.ValidateValueCheckAllButton('Check All')
   */
  validateValueCheckAllButton(value) {
    cy.get(selector.checkAllBtn).should("have.value", value);
  }

  /**
   * Validate All checkboxes are checked
   *
   * @example
   *    CheckboxDemo.ValidateCheckboxesChecked()
   */
  validateCheckboxesChecked() {
    cy.get(selector.multipleCheckbox)
      .as("checkbox")
      .each((item, index) => {
        cy.get("@checkbox").eq(index).should("be.checked");
      });
  }

  /**
   * Check specific checkbox by index
   *
   * @argument {number} index of the checkbox to be checked, max index is 3
   * @example
   *    CheckboxDemo.checkCheckboxesByIndex(2)
   */
  checkCheckboxesByIndex(index) {
    cy.get(selector.multipleCheckbox).eq(index).click({ force: true });
  }

  /**
   * Validate All checkboxes are unchecked
   *
   * @example
   *    CheckboxDemo.ValidateCheckboxesUnchecked()
   */
  validateCheckboxesUnchecked() {
    cy.get(selector.multipleCheckbox)
      .as("checkbox")
      .each((item, index) => {
        cy.get("@checkbox").eq(index).should("not.be.checked");
      });
  }
}
