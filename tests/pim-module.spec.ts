import { test, expect } from "../fixtures/hooks-fixture";
import { PimPage } from "../pages/PimPage";

test("Add Employee in PIM Module", async ({
  page,
  gotoUrl,
  leftNavigation,
  pimPage,
}) => {
  await leftNavigation.openPimTab();
  await pimPage.addEmployee("John", "A", "Doe");
  await expect(pimPage.personalDetailsHeader).toHaveText("Personal Details", {
    timeout: 50000,
  });
});
