import { test } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";
import { ProductPage } from "../../pages/productPage";
import { CartPage } from "../../pages/cartpage";
import { env } from "../../utils/env";

test("Validate cart items after adding products", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);

  const products = ["Sauce Labs Backpack", "Sauce Labs Bike Light"];

  // Login
  await loginPage.goto();
  await loginPage.login(env.USERNAME, env.PASSWORD);

  // Add products
  await productPage.addMultipleProductsToCart(products);
  console.log("Products added to cart:", products);

  // Go to cart
  await productPage.goToCart();
  console.log("Navigated to cart page");

  // 🔥 VALIDATIONS
  await cartPage.validateItemCount(products.length);
  console.log("Cart item count validated:", products.length);
  await cartPage.validateItems(products);
  console.log("Cart items validated:", products);
});
