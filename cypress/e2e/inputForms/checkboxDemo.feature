Feature: Test a simple form with checkboxes using Page Object Model Pattern

  Scenario: Visit Selenium Easy demo website for Single Checkbox Demo
    Given The Input Forms in Menu List select 'Checkbox Demo'
    When I click on the first checkbox the messages should be displayed
    Then I validate the default checkboxes as disabled and checked
    Then I uncheck the first checkbox to hide the message
