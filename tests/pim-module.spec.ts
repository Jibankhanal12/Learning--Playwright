import { test, expect } from "../fixtures/hooks-fixture";
import { LeftNavigation } from "../pages/LeftNavigation";
import { PimPage } from "../pages/PimPage";

test("Add Employee in PIM Module", async ({
  page,
  gotoUrl,
  leftNavigation,
  pimPage,
}) => {
  await leftNavigation.openPimTab();
  await pimPage.addEmployee("John", "A", "Doe", "123450");
  await expect(pimPage.personalDetailsHeader).toHaveText("Personal Details", {
    timeout: 50000,
  });
});
test("Add Employee with Login Details in PIM Module", async ({
  page,
  gotoUrl,
  leftNavigation,
  pimPage,
}) => {
  await leftNavigation.openPimTab();
  await pimPage.addEmployeeWithLoginDetails(
    "Jane",
    "Smith",
    "janesmith",
    "Password123!",
    "Password123!"
  );
  await expect(pimPage.successToast).toHaveText("Successfully Saved");
});
