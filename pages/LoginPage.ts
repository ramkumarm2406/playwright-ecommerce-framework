import { Locator, Page } from "playwright";

// This class represents the Login Page using the Page Object Model pattern.
// Page Object Model is used to encapsulate the page's elements and actions,
// making tests more readable, maintainable, and reducing code duplication.
// We add this class to separate UI interactions from test logic.

export class LoginPage {
  private page: Page;
  readonly usernameInput: Locator;
  readonly passwordInout: Locator;
  readonly loginButton: Locator;

  // Constructor initializes the page and locators for the login elements.
  // We use locators to identify and interact with specific DOM elements on the page.
  // This initialization is done here to prepare the page object for use in tests.

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator("#user-name");
    this.passwordInout = page.locator("#password");
    this.loginButton = page.locator("#login-button");
  }

  // Navigates to the login page URL.
  // We add this method to centralize navigation logic,
  // ensuring consistent URL usage across tests and avoiding hardcoding in multiple places.

  async goto() {
    await this.page.goto("/");
  }

  // Performs the login action by filling username and password, then clicking login.
  // We encapsulate the login steps in this method to simplify test code,
  // making it easier to perform login in tests without repeating these steps.
  // This also allows for easy modification of login logic if the UI changes.

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInout.fill(password);
    await this.loginButton.click();
  }
}
