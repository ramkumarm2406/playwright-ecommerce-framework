import { Page, Locator, expect } from "@playwright/test";

export class CheckoutPage {
  private page: Page;

  // 🔹 Locators
  readonly checkoutButton: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly postalCodeInput: Locator;
  readonly continueButton: Locator;
  readonly finishButton: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    this.page = page;

    this.checkoutButton = page.locator("#checkout");
    this.firstNameInput = page.locator("#first-name");
    this.lastNameInput = page.locator("#last-name");
    this.postalCodeInput = page.locator("#postal-code");
    this.continueButton = page.locator("#continue");
    this.finishButton = page.locator("#finish");
    this.successMessage = page.locator(".complete-header");
  }

  // 🔹 Actions

  async clickCheckout() {
    await this.checkoutButton.click();
  }

  async enterUserDetails(
    firstName: string,
    lastName: string,
    postalCode: string,
  ) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(postalCode);
  }

  async clickContinue() {
    await this.continueButton.click();
  }

  async clickFinish() {
    await this.finishButton.click();
  }

  async validateOrderSuccess() {
    await expect(this.successMessage).toHaveText("Thank you for your order!");
  }
}
