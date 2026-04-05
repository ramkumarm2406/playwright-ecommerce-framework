import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";
import { userCredentials } from "../../utils/testdata/loginTestData";
import { env } from "../../utils/env";

// Use Playwright's test runner and assertion API for browser automation.
// The LoginPage class encapsulates login page locators and actions.
// This keeps the test focused on behavior instead of low-level UI details.

test("User should Login successfully with valid credentials", async ({
  page,
}) => {
  // Create the login page object using Playwright's page fixture.
  // This object contains the login page behavior used in the test.
  const loginPage = new LoginPage(page);

  // Open the login page.
  // Centralizing navigation here avoids duplicating the URL in tests.
  await loginPage.goto();

  // Log in with valid credentials from environment configuration.
  // Encapsulating login steps in the page object improves maintainability.
  await loginPage.login(env.USERNAME, env.PASSWORD);
  //await page.pause();

  // Verify login succeeded by checking the current URL.
  // A successful redirect to the inventory page confirms the flow.
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});
