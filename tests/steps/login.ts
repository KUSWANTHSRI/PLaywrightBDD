
import {test,expect} from '@playwright/test'
import {createBdd} from 'playwright-bdd'
const {Given,When,Then} =createBdd()
Given('user is on the login page', async ({page}) => {
    await page.goto("https://saucedemo.com/");
 
});

When('user enters valid username', async ({page}) => {
    await page.locator("#user-name").fill("standard_user")
    
  // Step: When user enters valid username
  // From: tests\features\login.feature:4:1
});
When('user enters valid password', async ({page}) => {
  // Step: And user enters valid password
  // From: tests\features\login.feature:5:1
  await page.locator("#password").fill("secret_sauce")
  
});

When('user clicks login button', async ({page}) => {
  // Step: And user clicks login button
  await  page.locator("#login-button").click();
  // From: tests\features\login.feature:5:1

});

Then('user should be able to login successfully', async ({page}) => {
  // Step: Then user should be able to login successfully
  test.slow()
//   expect(await page.locator('//span[text()="Products"]').textContent()).toBe("Products")
    expect(await page.locator('//span[text()="Products"]').textContent()).toBe("Products")
  // From: tests\features\login.feature:6:1
});


/*



*/

When('user enters valid locked_username', async ({page}) => {
      await page.locator("#user-name").fill("locked_out_user")

  // Step: When user enters valid locked_username
  // From: tests\features\login.feature:13:1
});

Then('user gets an error message', async ({page}) => {
    expect(await page.locator('//h3[@data-test="error"]').textContent()).toBe("Epic sadface: Sorry, this user has been locked out.")
  // Step: Then user gets an error message
  // From: tests\features\login.feature:16:1
});

Then('User is back on login page', async ({page}) => {
  // Step: And User is back on login page
  expect (await page.locator(".login_logo").textContent()).toBe("Swag Labs")
  // From: tests\features\login.feature:17:1
});


/*


*/



When('user enters  username as {string}', async ({page}, arg: string) => {
  // Step: When user enters  username as "performance_glitch_user"
   await page.locator("#user-name").fill(arg)

  // From: tests\features\login.feature:21:1
});

When('user enters  password as {string}', async ({page}, arg: string) => {
  // Step: And user enters  password as "secrete_sauce"
  await page.locator("#password").fill(arg)
  // From: tests\features\login.feature:22:1
});

Then('user is able to navigate to product page', async ({page}) => {
  // Step: And user is able to navigate to product page
  test.slow()
    expect(await page.locator('//span[text()="Products"]').textContent()).toBe("Products")
  // From: tests\features\login.feature:25:1
});
