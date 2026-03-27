// Generated from: tests\features\login.feature
import { test } from "playwright-bdd";

test.describe('Login Functionality', () => {

  test('Login with valid credentials', async ({ Given, When, Then, And, page }) => { 
    await Given('user is on the login page', null, { page }); 
    await When('user enters valid username', null, { page }); 
    await And('user enters valid password', null, { page }); 
    await And('user clicks login button', null, { page }); 
    await Then('user should be able to login successfully', null, { page }); 
  });

  test('Login with locked_username credentials', async ({ Given, When, Then, And, page }) => { 
    await Given('user is on the login page', null, { page }); 
    await When('user enters valid locked_username', null, { page }); 
    await And('user enters valid password', null, { page }); 
    await And('user clicks login button', null, { page }); 
    await Then('user gets an error message', null, { page }); 
    await And('User is back on login page', null, { page }); 
  });

  test('Login with performance_glitch credentials', async ({ Given, When, Then, And, page }) => { 
    await Given('user is on the login page', null, { page }); 
    await When('user enters  username as "performance_glitch_user"', null, { page }); 
    await And('user enters  password as "secrete_sauce"', null, { page }); 
    await And('user clicks login button', null, { page }); 
    await Then('user should be able to login successfully', null, { page }); 
    await And('user is able to navigate to product page', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":2,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given user is on the login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When user enters valid username","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"And user enters valid password","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And user clicks login button","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then user should be able to login successfully","stepMatchArguments":[]}]},
  {"pwTestLine":14,"pickleLine":10,"tags":[],"steps":[{"pwStepLine":15,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given user is on the login page","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When user enters valid locked_username","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"And user enters valid password","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"And user clicks login button","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then user gets an error message","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"And User is back on login page","stepMatchArguments":[]}]},
  {"pwTestLine":23,"pickleLine":19,"tags":[],"steps":[{"pwStepLine":24,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"Given user is on the login page","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When user enters  username as \"performance_glitch_user\"","stepMatchArguments":[{"group":{"start":25,"value":"\"performance_glitch_user\"","children":[{"start":26,"value":"performance_glitch_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":26,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"And user enters  password as \"secrete_sauce\"","stepMatchArguments":[{"group":{"start":25,"value":"\"secrete_sauce\"","children":[{"start":26,"value":"secrete_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":27,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"And user clicks login button","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then user should be able to login successfully","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"And user is able to navigate to product page","stepMatchArguments":[]}]},
]; // bdd-data-end