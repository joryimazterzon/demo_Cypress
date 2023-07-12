import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import SimpleForm from "../Pages/simpleFormDemo";

const form = new SimpleForm();
const message = "Hola";
Given("The Input Forms in Menu List select {string}", (example) => {
  form.visitExample(example);
});

When("The text is introduced in the single input field", () => {
  form.enterMessage(message);
});
Then("The message is diplayed by the button", () => {
  form.validateMessage(message);
});

When("The user introduces two values {int} {int}", (number_A, number_B) => {
  form.enterTwoNumbers(number_A, number_B);
});
Then("The {int} is diplayed when the button Get Total is pressed", (result) => {
  form.validateSum(result);
});
