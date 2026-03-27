// Generated from: tests\features\login.feature
import { test } from "playwright-bdd";

test.describe('Login Functionality', () => {

  test.describe('', () => {

    test('Example #1', async ({ Given, When, Then, And, page }) => { 
      await Given('a user is on the login page', null, { page }); 
      await When('the user enters username as \'standard_user\'', null, { page }); 
      await And('the user enters password as \'secret_sauce\'', null, { page }); 
      await And('the user clicks on the login button', null, { page }); 
      await Then('the user is logged in succesfully', null, { page }); 
      await And('the user should see the products page', null, { page }); 
    });

    test('Example #2', async ({ Given, When, Then, And, page }) => { 
      await Given('a user is on the login page', null, { page }); 
      await When('the user enters username as \'performance_glitch_user\'', null, { page }); 
      await And('the user enters password as \'secret_sauce\'', null, { page }); 
      await And('the user clicks on the login button', null, { page }); 
      await Then('the user is logged in succesfully', null, { page }); 
      await And('the user should see the products page', null, { page }); 
    });

    test('Example #3', async ({ Given, When, Then, And, page }) => { 
      await Given('a user is on the login page', null, { page }); 
      await When('the user enters username as \'problem_user\'', null, { page }); 
      await And('the user enters password as \'secret_sauce\'', null, { page }); 
      await And('the user clicks on the login button', null, { page }); 
      await Then('the user is logged in succesfully', null, { page }); 
      await And('the user should see the products page', null, { page }); 
    });

    test('Example #4', async ({ Given, When, Then, And, page }) => { 
      await Given('a user is on the login page', null, { page }); 
      await When('the user enters username as \'error_user\'', null, { page }); 
      await And('the user enters password as \'secret_sauce\'', null, { page }); 
      await And('the user clicks on the login button', null, { page }); 
      await Then('the user is logged in succesfully', null, { page }); 
      await And('the user should see the products page', null, { page }); 
    });

    test('Example #5', async ({ Given, When, Then, And, page }) => { 
      await Given('a user is on the login page', null, { page }); 
      await When('the user enters username as \'visual_user\'', null, { page }); 
      await And('the user enters password as \'secret_sauce\'', null, { page }); 
      await And('the user clicks on the login button', null, { page }); 
      await Then('the user is logged in succesfully', null, { page }); 
      await And('the user should see the products page', null, { page }); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":8,"pickleLine":19,"tags":[],"steps":[{"pwStepLine":9,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given a user is on the login page","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When the user enters username as 'standard_user'","stepMatchArguments":[{"group":{"start":28,"value":"'standard_user'","children":[{"children":[{"children":[]}]},{"start":29,"value":"standard_user","children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"And the user enters password as 'secret_sauce'","stepMatchArguments":[{"group":{"start":28,"value":"'secret_sauce'","children":[{"children":[{"children":[]}]},{"start":29,"value":"secret_sauce","children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"And the user clicks on the login button","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then the user is logged in succesfully","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"And the user should see the products page","stepMatchArguments":[]}]},
  {"pwTestLine":17,"pickleLine":20,"tags":[],"steps":[{"pwStepLine":18,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given a user is on the login page","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When the user enters username as 'performance_glitch_user'","stepMatchArguments":[{"group":{"start":28,"value":"'performance_glitch_user'","children":[{"children":[{"children":[]}]},{"start":29,"value":"performance_glitch_user","children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"And the user enters password as 'secret_sauce'","stepMatchArguments":[{"group":{"start":28,"value":"'secret_sauce'","children":[{"children":[{"children":[]}]},{"start":29,"value":"secret_sauce","children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"And the user clicks on the login button","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then the user is logged in succesfully","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"And the user should see the products page","stepMatchArguments":[]}]},
  {"pwTestLine":26,"pickleLine":21,"tags":[],"steps":[{"pwStepLine":27,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given a user is on the login page","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When the user enters username as 'problem_user'","stepMatchArguments":[{"group":{"start":28,"value":"'problem_user'","children":[{"children":[{"children":[]}]},{"start":29,"value":"problem_user","children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":29,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"And the user enters password as 'secret_sauce'","stepMatchArguments":[{"group":{"start":28,"value":"'secret_sauce'","children":[{"children":[{"children":[]}]},{"start":29,"value":"secret_sauce","children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":30,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"And the user clicks on the login button","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then the user is logged in succesfully","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"And the user should see the products page","stepMatchArguments":[]}]},
  {"pwTestLine":35,"pickleLine":22,"tags":[],"steps":[{"pwStepLine":36,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given a user is on the login page","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When the user enters username as 'error_user'","stepMatchArguments":[{"group":{"start":28,"value":"'error_user'","children":[{"children":[{"children":[]}]},{"start":29,"value":"error_user","children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":38,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"And the user enters password as 'secret_sauce'","stepMatchArguments":[{"group":{"start":28,"value":"'secret_sauce'","children":[{"children":[{"children":[]}]},{"start":29,"value":"secret_sauce","children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":39,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"And the user clicks on the login button","stepMatchArguments":[]},{"pwStepLine":40,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then the user is logged in succesfully","stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"And the user should see the products page","stepMatchArguments":[]}]},
  {"pwTestLine":44,"pickleLine":23,"tags":[],"steps":[{"pwStepLine":45,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given a user is on the login page","stepMatchArguments":[]},{"pwStepLine":46,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When the user enters username as 'visual_user'","stepMatchArguments":[{"group":{"start":28,"value":"'visual_user'","children":[{"children":[{"children":[]}]},{"start":29,"value":"visual_user","children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":47,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"And the user enters password as 'secret_sauce'","stepMatchArguments":[{"group":{"start":28,"value":"'secret_sauce'","children":[{"children":[{"children":[]}]},{"start":29,"value":"secret_sauce","children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":48,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"And the user clicks on the login button","stepMatchArguments":[]},{"pwStepLine":49,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then the user is logged in succesfully","stepMatchArguments":[]},{"pwStepLine":50,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"And the user should see the products page","stepMatchArguments":[]}]},
]; // bdd-data-end