/// <reference types="cypress"/>

let selector = {
  usernameTxb: '[data-test="username"]',
  passwordTxb: '[data-test="password"]',
  loginBtn: '[data-test="login-button"]',
};

export default class Login {
  /**
   * Perform a loging to Saw Labs with the credentials provided
   *
   * @argument {String} username
   * @argument {String} password
   *
   * @example
   *    Login.loginUser('SawLabsUsr','A#$%$211#')
   */
  loginUser(username, password) {
    cy.visit("https://www.saucedemo.com/");
    cy.get(selector.usernameTxb).clear().type(username);
    cy.get(selector.passwordTxb).clear().type(password);
    cy.get(selector.loginBtn).click();
  }
}
