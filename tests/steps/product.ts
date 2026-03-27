import { test, expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

const { When, Then, Given } = createBdd();

Given('user is on login page', async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
});

When('user enters username', async ({ page }) => {
  await page.locator("#user-name").fill("standard_user");
});

When('user enters password', async ({ page }) => {
  await page.locator("#password").fill("secret_sauce");
});

When('user  clicks on login  button', async ({ page }) => {
  await page.locator("#login-button").click();
});

Given('user is logged in', async ({ page }) => {
  await expect(page).toHaveURL(/inventory/);
});


// PRODUCT LIST VALIDATION
When('user product descrption is available', async ({ page }) => {
  const products = page.locator(".inventory_item");
  await expect(products.first()).toBeVisible();
});


// ADD TO CART
When('user clicks on add to cart', async ({ page }) => {
  await page.locator("button:has-text('Add to cart')").first().click();
});

Then('product is added to cart', async ({ page }) => {
  const cartBadge = page.locator(".shopping_cart_badge");
  await expect(cartBadge).toHaveText("1");
});


//  CART NAVIGATION
When('user clicks on cart menu', async ({ page }) => {
  await page.locator(".shopping_cart_link").click();
});

Then('the cart is opend', async ({ page }) => {
  await expect(page).toHaveURL(/cart/);
});

Then('user is able', async ({ page }) => {
  const cartItem = page.locator(".cart_item");
  await expect(cartItem).toBeVisible();
});


//  PRODUCT DETAILS PAGE
When('user clicks on a product', async ({ page }) => {
  await page.locator(".inventory_item_name").first().click();
});

Then('the product descrption is available', async ({ page }) => {
  const title = page.locator(".inventory_details_name");
  await expect(title).toBeVisible();
});

Then('user is able to see the entire product descrption', async ({ page }) => {
  const description = page.locator(".inventory_details_desc");
  await expect(description).toBeVisible();
});