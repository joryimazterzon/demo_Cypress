Feature: Create a test using Page Object Model Pattern
  Scenario: Visit landing page of an e-Commerce
    Given The landing Page POM
    When I click on find out more
    Then I review modal's text


  Scenario: Visit Our Products page
    Given The landing Page POM
    When I click on Our Products Page
    Then I select 'Game Consoles'

  Scenario: Visit Contact Us page
    Given The landing Page POM
    When I click on Contact Us page
    Then I Fill the form with user's data
      | firstName | lastName  | eMail         | comment          |
      | joryi     | mazterzon | test@test.com | This is awesome! |
    Then I clear the form to submit the following data
        | firstName   | lastName  | eMail         | comment          |
        | Jennifer    | Gomez     | qa@test.com   | Enjoy the moment! |
