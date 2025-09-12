import { test } from "../fixtures/pom-fixture";
import CommonUtils from "../utils/CommonUtils";

test("Visit Dashboard", async ({ page, loginPage }) => {
  await loginPage.goToOrangeHRM();
});
test("Login to HRM", async ({ page, loginPage }) => {
  await loginPage.goToOrangeHRM();
  const commonUtils = new CommonUtils();
  const decryptedUsername = commonUtils.decryptData(process.env.USER_NAME!);
  const decryptedPassword = commonUtils.decryptData(process.env.PASSWORD!);
  await loginPage.loginHRM(decryptedUsername, decryptedPassword);
});
