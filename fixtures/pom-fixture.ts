import { test as baseTest,Page } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";
type PomFixtureType = {
  loginPage: LoginPage;
  dashboardPage: DashboardPage
};

export const test = baseTest.extend<PomFixtureType>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  }
});


