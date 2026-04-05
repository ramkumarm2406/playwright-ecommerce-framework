import { Page, Locator, expect } from "@playwright/test";

export class CartPage {
  private page: Page;

  // 🔹 Locators
  readonly cartItems: Locator;
  readonly itemNames: Locator;

  constructor(page: Page) {
    this.page = page;

    this.cartItems = page.locator(".cart_item");
    this.itemNames = page.locator(".inventory_item_name");
  }

  // 🔹 Actions / Validations

  async getCartItemNames(): Promise<string[]> {
    return await this.itemNames.allTextContents();
  }

  async validateItemCount(expectedCount: number) {
    await expect(this.cartItems).toHaveCount(expectedCount);
  }

  async validateItems(expectedItems: string[]) {
    const actualItems = await this.getCartItemNames();

    expect(actualItems).toEqual(expectedItems);
  }
}
