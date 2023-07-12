import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import SimpleForm from '../Pages/simpleFormDemo';

const form = new SimpleForm();
const message = 'Hola';
Given('The Input Forms in Menu List select {string}', (example) => {
  form.visitExample(example);
});

When('The text is introduced in the single input field', () => {
  form.enterMessage(message);
});
Then('The message is diplayed by the button', () => {
  form.validateMessage(message);
});

When('The user introduces two values', (datatable) => {
  datatable.hashes().forEach((element) => {
    form.enterTwoNumbers(element.number_A, element.number_B);
  });
});
Then(
  'The result is diplayed when the button Get Total is pressed',
  (datatable) => {
    datatable.hashes().forEach((element) => {
      form.validateSum(element.result);
    });
  }
);
