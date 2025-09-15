import { test as baseTest,Page } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";
import { UserPage } from "../pages/UserPage";
export type PomFixtureType = {
  loginPage: LoginPage;
  dashboardPage: DashboardPage
  userPage: UserPage 
};

export const test = baseTest.extend<PomFixtureType>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  },
  userPage: async ({ page }, use) => {
    await use(new UserPage(page));
  }
});


