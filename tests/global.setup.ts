import { expect } from "playwright/test";
import { test } from "../fixtures/common-fixture";
test("Global setup for Auto Login", async ({
  page,
  loginPage,
  dashboardPage,
}) => {
  await loginPage.goToOrangeHRM();
  await loginPage.loginHRM(process.env.USER_NAME!, process.env.PASSWORD!);

  await page.waitForURL(
    `${process.env.BASE_URL}/web/index.php/dashboard/index`
  );
  await expect(dashboardPage.dashboardHeader).toHaveText("Dashboard");
  await page.context().storageState({ path: "./Auth/.auth/auth.json" });
});
