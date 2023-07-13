import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import CheckboxDemo from "../Pages/checkboxDemo";

const checkbox = new CheckboxDemo();

When("I click on the first checkbox the messages should be displayed", () => {
  checkbox.validateCheckboxMessage("Success - Check box is checked");
});

Then("I validate the default checkboxes as disabled and checked", () => {
  checkbox.validateCheckedCheckbox();
  checkbox.validateDiabledCheckbox();
});

Then("I uncheck the first checkbox to hide the message", () => {
  checkbox.validateUncheckedCheckbox();
});

When("I click on Check All button all checkboxes will be checked", () => {
  checkbox.clickCheckAllButton();
  checkbox.validateCheckboxesChecked();
  checkbox.validateValueCheckAllButton("Uncheck All");
});

Then(
  "I validate the text of the button changes when at least 1 checkbox is checked",
  () => {
    checkbox.checkCheckboxesByIndex(2);
    checkbox.validateValueCheckAllButton("Check All");
  }
);
Then(
  "I validate all checkboxes are unchecked when I click Uncheck All button",
  () => {
    checkbox.checkCheckboxesByIndex(2);
    checkbox.validateValueCheckAllButton("Uncheck All");
    checkbox.clickCheckAllButton();
    checkbox.validateCheckboxesUnchecked();
  }
);
