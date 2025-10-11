import { test, expect } from "../fixtures/hooks-fixture";
import { LeftNavigation } from "../pages/LeftNavigation";
import { PimPage } from "../pages/PimPage";
import { TestData } from "../utils/TestData";

test("Add Employee with all details", async ({
  page,
  gotoUrl,
  leftNavigation,
  pimPage,
}) => {
  const data = new TestData();
  const employee = data.generateEmployee();
  await leftNavigation.openPimTab();
  await pimPage.addEmployee(
    employee.firstName,
    employee.lastName,
    employee.middleName,
    employee.employeeId
  );
  await expect(pimPage.personalDetailsHeader).toHaveText("Personal Details", {
    timeout: 50000,
  });
});
test("Add Employee with required details", async ({
  page,
  gotoUrl,
  leftNavigation,
  pimPage,
}) => {});
