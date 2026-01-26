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

test("User facing locators 2", async ({ page }) => {
  await page.getByRole("textbox", { name: "Email" }).first().click();
  await page.getByRole("button", { name: "Sign in" }).first().click();

  await page.getByLabel("Email").first().click();

  await page.getByPlaceholder("John Doe").click();

  await page.getByText("Using the Grid").click();

  await page.getByTitle("IoT Dashboard").click();
});

test("child element", async ({ page }) => {
  await page.locator('nb-card nb-radio :text-is("Option 1")').click();
  await page
    .locator("nb-card")
    .locator("nb-radio")
    .locator(':text-is("Option 1")')
    .click();

  await page
    .locator("nb-card")
    .getByRole("button", { name: "Sign in" })
    .first()
    .click();
});

test("using index", async ({ page }) => {
  await page.locator("nb-card").nth(3).getByRole("button").click();
});

test("parent element", async ({ page }) => {
  await page
    .locator("nb-card", { hasText: "Using the Grid" })
    .getByRole("textbox", { name: "Email" })
    .click();

  await page
    .locator("nb-card", { has: page.locator("#inputEmail") })
    .getByRole("textbox", { name: "Email" })
    .click();

  await page
    .locator("nb-card")
    .filter({ hasText: "Basic form" })
    .getByRole("textbox", { name: "Email" })
    .click();

  await page
    .locator("nb-card")
    .filter({ has:  page.locator(".status-danger")  })
    .getByRole("textbox", { name: "Password" })
    .click();
});
