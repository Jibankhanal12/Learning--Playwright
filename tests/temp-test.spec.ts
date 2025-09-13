import { test } from "../fixtures/pom-fixture";

test("Login to HRM", async ({ page, loginPage,}) => {

   await loginPage.goToOrangeHRM();
   console.log(await page.title());
 });
