import { test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:4200/");
  await page.getByText("Forms").click();
  await page.getByText("Form Layouts").click();
});

test("locator", async ({ page }) => {
  const input = page.locator("input");

  console.log(await input.count());
  console.log("hello console");
});

test("locator 2", async ({ page }) => {
  await page.locator("#inputEmail").click();
  // only after click
});

test("locator by attribute", async ({ page }) => {
  // await page.locator("[placeholder='Email']").type("test@example.com");
  page.locator("[placeholder='Email']");
});

test("User facing locators 1", async ({ page }) => {
  // await page.getByRole("button", { name: "SIGN IN" }).click();
  await page.getByRole("button", { name: "SIGN IN" }).nth(1).click();
});

test("User facing locators", async ({ page }) => {
  await page.getByRole("textbox", { name: "Email" }).first().click();
});
