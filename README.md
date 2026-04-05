# 🚀 Playwright E2E Automation Framework

![Playwright Tests](https://github.com/ramkumarm2406/playwright-ecommerce-framework/actions/workflows/playwright.yml/badge.svg)

## 🧰 Tech Stack
- Playwright (TypeScript)
- Page Object Model (POM)
- GitHub Actions (CI/CD)

## 📁 Project Structure
- pages/ → Page classes (POM)
- tests/ → Test specs
- utils/ → Test data & environment config

## 🧪 Test Scenarios
- Login with valid credentials
- Add single & multiple products to cart
- Validate cart items
- Complete checkout flow

## ▶️ Run Tests
```bash
npx playwright test

'''md
## Sample Flow
Login->Product->Cart-> Checkout
