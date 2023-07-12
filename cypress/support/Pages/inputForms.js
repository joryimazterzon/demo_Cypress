/// <reference types="cypress"/>

export default class InputForms {
  /**
   * Visit the given  URL of the example
   *
   * @argument {String} Example of the demo website in Input Forms
   *
   * @example
   *    InputForms.visitExample('Simple Form Demo')
   */
  visitExample(example) {
    const examples = {
      "Simple Form Demo": "/basic-first-form-demo.html",
    };
    cy.visit(examples[example]);
  }
}
