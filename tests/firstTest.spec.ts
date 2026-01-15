import { test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:4200/");
});

test.describe("suite1", () => {
  test.beforeEach(async ({ page }) => {
    await page.getByText("Forms").click();
  });

  test("first test", async ({ page }) => {
    await page.getByText("Form Layout").click();
  });

  test("navigate to datepicker page", async ({ page }) => {
    await page.getByText("Datepicker").click();
  });
});

test.describe("suite2", () => {
  test.beforeEach(async ({ page }) => {
    await page.getByText("Tables & Data").click();
  });

  test("navigate to smart table", async ({ page }) => {
    await page.getByText("Smart Table").click();
  });

  test("navigate to tree grid", async ({ page }) => {
    await page.getByText("Tree Grid").click();
  });
}); 