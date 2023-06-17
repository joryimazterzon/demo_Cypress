/// <reference types="cypress"/>

let selector = {
  usernameTxb: '[data-test="username"]',
  passwordTxb: '[data-test="password"]',
  loginBtn: '[data-test="login-button"]',
  appLogoLb: "div.app_logo",
  titleLoginLb: "div.login_logo",
  hamburgerMenuBtn: "button[id='react-burger-menu-btn']",
  logoutBtn: "a[id='logout_sidebar_link']",
  errorLb: 'h3[data-test="error"]',
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

  /**
   * Validates the logo with the text provided
   *
   * @argument {String} Text to be compared
   *
   * @example
   *    Login.ValidateAppLogo('Swag Labs')
   */
  validateAppLogo(text) {
    cy.get(selector.appLogoLb).should("have.text", text);
  }

  /**
   * Validates title of the login page
   *
   * @argument {String} Text to be compared
   *
   * @example
   *    Login.ValidateTitleLoginPage('Swag Labs')
   */
  validateTitleLoginPage(text) {
    cy.get(selector.titleLoginLb).should("have.text", text);
  }

  /**
   * Clicks on the Logout button
   *
   *
   * @example
   *    Login.logout()
   */
  logout() {
    cy.get(selector.hamburgerMenuBtn).click();
    cy.get(selector.logoutBtn).click();
  }

  /**
   * Validates the error message in the login page
   *
   * @argument {String} Text to be compared
   *
   * @example
   *    Login.validateErrorMsgLoginPage('Sorry, this user has been locked out')
   */
  validateErrorMsgLoginPage(text) {
    cy.get(selector.errorLb).should("have.text", text);
  }
}
