// Generated from: tests\features\products.feature
import { test } from "playwright-bdd";

test.describe('product Functionality', () => {

  test.beforeEach('Background: User is logged in', async ({ Given, When, Then, And, page }, testInfo) => { if (testInfo.error) return;
    await Given('user is on login page', null, { page }); 
    await When('user enters username', null, { page }); 
    await And('user enters password', null, { page }); 
    await When('user  clicks on login  button', null, { page }); 
    await Then('user is logged in succesfully', null, { page }); 
  });
  
  test('Adding a product to cart', async ({ Given, When, Then, And, page }) => { 
    await Given('user is logged in', null, { page }); 
    await When('user product descrption is available', null, { page }); 
    await When('user clicks on add to cart', null, { page }); 
    await Then('product is added to cart', null, { page }); 
    await When('user clicks on cart menu', null, { page }); 
    await Then('the cart is opend', null, { page }); 
    await And('user is able', null, { page }); 
  });

  test('View a product descrption', async ({ Given, When, Then, And, page }) => { 
    await Given('user is logged in', null, { page }); 
    await When('user clicks on a product', null, { page }); 
    await Then('the product descrption is available', null, { page }); 
    await And('user is able to see the entire product descrption', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\products.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":14,"pickleLine":12,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given user is on login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When user enters username","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And user enters password","isBg":true,"stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When user  clicks on login  button","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then user is logged in succesfully","isBg":true,"stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":13,"keywordType":"Context","textWithKeyword":"Given user is logged in","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When user product descrption is available","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When user clicks on add to cart","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then product is added to cart","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When user clicks on cart menu","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then the cart is opend","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"And user is able","stepMatchArguments":[]}]},
  {"pwTestLine":24,"pickleLine":21,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given user is on login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When user enters username","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And user enters password","isBg":true,"stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When user  clicks on login  button","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then user is logged in succesfully","isBg":true,"stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":22,"keywordType":"Context","textWithKeyword":"Given user is logged in","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When user clicks on a product","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then the product descrption is available","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"And user is able to see the entire product descrption","stepMatchArguments":[]}]},
]; // bdd-data-end