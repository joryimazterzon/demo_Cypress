import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import CheckboxDemo from '../Pages/checkboxDemo';

const checkbox = new CheckboxDemo();

When('I click on the first checkbox the messages should be displayed', () => {
  checkbox.validateCheckboxMessage('Success - Check box is checked');
});

Then('I validate the default checkboxes as disabled and checked', () => {
  checkbox.validateCheckedCheckbox();
  checkbox.validateDiabledCheckbox();
});

Then('I uncheck the first checkbox to hide the message', () => {
  checkbox.validateUncheckedCheckbox();
});
