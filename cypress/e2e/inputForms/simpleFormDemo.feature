Feature: Fill a simple form using Page Object Model Pattern
@seleniumEasy
  Scenario: Visit Selenium Easy demo website
    Given The Input Forms in Menu List select 'Simple Form Demo'
    When The text is introduced in the single input field
    Then The message is diplayed by the button
