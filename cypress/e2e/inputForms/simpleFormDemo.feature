Feature: Fill a simple form using Page Object Model Pattern

  Scenario: Visit Selenium Easy demo website for Single Input Field
    Given The Input Forms in Menu List select 'Simple Form Demo'
    When The text is introduced in the single input field
    Then The message is diplayed by the button

  Scenario Outline: Visit Selenium Easy demo website for Two Input Fields
      Given The Input Forms in Menu List select 'Simple Form Demo'
      When The user introduces two values
      |number_A|number_B|
      |   15   |   63   |
      Then The result is diplayed when the button Get Total is pressed
      |result|
      |  78  |