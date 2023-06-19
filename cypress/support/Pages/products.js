/// <reference types="cypress"/>

import Home from "./home";

let selector = {
  productsTbx: "p.sub-heading",
};

export default class Products extends Home {
  /**
   * Select product by name
   *
   * @argument {String} Product name
   *
   * @example
   *    Products.selectProduct()
   */
  selectProduct(productName) {
    cy.get(selector.productsTbx)
      .as("prod")
      .each((el, index) => {
        if (el.text() == productName) {
          cy.get("@prod").eq(index).click();
        }
      });
  }
}
