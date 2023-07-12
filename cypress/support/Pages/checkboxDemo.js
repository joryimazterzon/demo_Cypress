/// <reference types="cypress"/>

let selector = {
  singleCheckbox: 'input[id="isAgeSelected"]',
  singleCheckboxMessage: 'div[id="txtAge"]',
  defaultCheckbox: 'label.checkbox-inline input',
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
    cy.get(selector.singleCheckboxMessage).should('have.text', message);
  }

  /**
   * Validate default checkbox is checked
   *
   * @example
   *    CheckboxDemo.validateCheckedCheckbox()
   */
  validateCheckedCheckbox() {
    cy.get(selector.defaultCheckbox).eq(1).should('be.checked');
  }

  /**
   * Validate default checkbox is disabled
   *
   * @example
   *    CheckboxDemo.validateDiabledCheckbox()
   */
  validateDiabledCheckbox() {
    cy.get(selector.defaultCheckbox).last().should('be.disabled');
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
      .should('not.be.checked');
    cy.get(selector.singleCheckboxMessage).should('not.be.visible');
  }
}
