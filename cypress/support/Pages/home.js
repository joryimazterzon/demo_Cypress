/// <reference types="cypress"/>

let selector = {
  findOutBtn: "#button-find-out-more",
  modatLb: "div.modal-body p",
  closeBtn: '[data-dismiss="modal"]',
  homeBtn: 'a[href="index.html"]',
  productsBtn: 'a[href="products.html"]',
  contactUsBtn: 'a[href="../Contact-Us/contactus.html"]',
};

export default class Home {
  /**
   * Clicks on the Find Out More button
   *
   *
   * @example
   *    Home.clickFindOutButton()
   */
  clickFindOutButton() {
    cy.get(selector.findOutBtn).click();
  }

  /**
   * Validates the modal text
   *
   * @argument {String} Text to be compared
   *
   * @example
   *    Home.validateModalText('Welcome...')
   */
  validateModalText(text) {
    cy.get(selector.modatLb).should("contain.text", text);
  }

  /**
   * Clicks on the close button of the Modal
   *
   *
   * @example
   *    Home.closeModal()
   */
  closeModal() {
    cy.get(selector.closeBtn).last().click();
  }

  /**
   * Open home page
   *
   *
   * @example
   *    Home.goHomePage()
   */
  goHomePage() {
    cy.get(selector.homeBtn).click();
  }

  /**
   * Open Our Products page
   *
   *
   * @example
   *    Home.goOurProductsPage()
   */
  goOurProductsPage() {
    cy.get(selector.productsBtn).click();
  }

  /**
   * Open Contact Us page
   *
   *
   * @example
   *    Home.goContactUsPage()
   */
  goContactUsPage() {
    cy.get(selector.contactUsBtn).click();
  }
}
