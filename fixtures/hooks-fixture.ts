import { test as baseTest } from "./common-fixture";

type HooksFixtureType = {
  gotoUrl: any
  logout: any
  gotoForgotPassword: any
};
export const test = baseTest.extend<HooksFixtureType>({
    // This will run before each test and navigate to the URL   
    gotoUrl: async ({ loginPage }: { loginPage: any }, use: () => Promise<void>) => {
        await loginPage.goToOrangeHRM();
        await use();
    },
    logout: async ({ userPage }: { userPage: any }, use: () => Promise<void>) => {
        await use();
        await userPage.logout();
    },
    gotoForgotPassword: async ({ loginPage }: { loginPage: any }, use: () => Promise<void>) => {
        await loginPage.gotoForgotPassword();
        await use();
    }
});

export { expect} from "@playwright/test";