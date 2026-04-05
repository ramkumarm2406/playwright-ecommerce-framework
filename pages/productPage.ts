import { Page, Locator } from "playwright";

export class ProductPage {
  private page: Page;
  readonly inventoryItems: Locator;
  readonly cartButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inventoryItems = page.locator(".inventory_item");
    this.cartButton = page.locator(".shopping_cart_link");
  }

  private productCard(productName: string): Locator {
    return this.inventoryItems.filter({ hasText: productName });
  }

  private addToCartButton(productName: string): Locator {
    return this.productCard(productName).locator("button");
  }

  async addProductToCart(productName: string) {
    await this.addToCartButton(productName).click();
  }
  async addMultipleProductsToCart(productNames: string[]) {
    for (const productName of productNames) {
      await this.addProductToCart(productName);
    }
  }

  async goToCart() {
    await this.cartButton.click();
  }
}
