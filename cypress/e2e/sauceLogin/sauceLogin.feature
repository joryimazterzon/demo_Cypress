Feature: Login to Saw Labs
  Scenario: Perform a successful login
    When I visit saucedemo.com
    Then Perform a successful Login
    Then I should see products in stock
    Then I logout successfully

  Scenario: Perform an unsuccessful login
    When I visit saucedemo.com
    Then Perform an unsuccessful Login
    Then The user will not be able to login

