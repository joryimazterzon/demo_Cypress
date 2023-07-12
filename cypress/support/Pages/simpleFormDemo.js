/// <reference types="cypress"/>
import InputForms from "./inputForms";
let selector = {
  enterMessageTxb: 'input[id="user-message"]',
  showMessageBtn: 'button[onclick="showInput();"]',
  yourMessageLb: 'span[title="text message"]',
  valueATxb: 'input[name="sum1"]',
  valueBTxb: 'input[name="sum2"]',
  getTotalBtn: 'button[onclick="return total()"]',
  totalSumLb: "#displayvalue",
};

export default class SimpleForm extends InputForms {
  /**
   * Enter a message in the textbox
   *
   * @argument {String} Message of the textbox
   *
   * @example
   *    SimpleForm.enterMessage('The fox jumped over the lazy dog')
   */
  enterMessage(message) {
    cy.get(selector.enterMessageTxb).type(message);
  }

  /**
   * Validates the text of the message entered
   *
   * @argument {String} Message of the textbox to be validated
   *
   * @example
   *    SimpleForm.enterMessage('The fox jumped over the lazy dog')
   */
  validateMessage(message) {
    cy.get(selector.showMessageBtn).click();
    cy.get(selector.yourMessageLb).should("have.text", message);
  }
}
