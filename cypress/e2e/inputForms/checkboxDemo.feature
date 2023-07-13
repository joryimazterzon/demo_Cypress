Feature: Test a simple form with checkboxes using Page Object Model Pattern

  Scenario: Visit Selenium Easy demo website for Single Checkbox Demo
    Given The Input Forms in Menu List select 'Checkbox Demo'
    When I click on the first checkbox the messages should be displayed
    Then I validate the default checkboxes as disabled and checked
    Then I uncheck the first checkbox to hide the message

  Scenario: Visit Selenium Easy demo website for Multiple Checkbox Demo
    Given The Input Forms in Menu List select 'Checkbox Demo'
    When I click on Check All button all checkboxes will be checked
    Then I validate the text of the button changes when at least 1 checkbox is checked
    Then I validate all checkboxes are unchecked when I click Uncheck All button 