import { test } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";
import { ProductPage } from "../../pages/productPage";
import { CartPage } from "../../pages/cartpage";
import { CheckoutPage } from "../../pages/checkOutPage";
import { env } from "../../utils/env";

test("Complete end-to-end order flow", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  const products = ["Sauce Labs Backpack", "Sauce Labs Bike Light"];

  // 🔹 Login
  await loginPage.goto();
  await loginPage.login(env.USERNAME, env.PASSWORD);

  // 🔹 Add products
  await productPage.addMultipleProductsToCart(products);
  // Log product names added to the cart for debugging
  console.log("Added products to cart:", products);

  // 🔹 Go to cart
  await productPage.goToCart();

  // 🔹 Validate cart
  await cartPage.validateItemCount(products.length);
  await cartPage.validateItems(products);

  // 🔹 Checkout
  await checkoutPage.clickCheckout();
  await checkoutPage.enterUserDetails("Ram", "Kumar", "560001");
  await checkoutPage.clickContinue();

  // 🔹 Finish order
  await checkoutPage.clickFinish();

  // 🔥 Final validation
  await checkoutPage.validateOrderSuccess();
});
