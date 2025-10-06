import { test, expect } from "../fixtures/hooks-fixture";

test("Add Employee in PIM Module", async ({
  page,
  gotoUrl,
  leftNavigation,
  pimPage,
}) => {
  await leftNavigation.openPimTab();
  await pimPage.addEmployeeButton.click();
  await pimPage.firstNameInput.fill("Test");
  await pimPage.middleNameInput.fill("A");
  await pimPage.lastNameInput.fill("User");
  await pimPage.saveButton.click();
  await expect(pimPage.personalDetailsHeader).toHaveText("Personal Details");
});
