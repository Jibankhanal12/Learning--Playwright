import { expect } from "@playwright/test";

export class PimPage {
  // Define locators
  readonly page: any;
  readonly addEmployeeButton: any;
  readonly firstNameInput: any;
  readonly middleNameInput: any;
  readonly lastNameInput: any;
  readonly employeeIdInput: any;
  readonly saveButton: any;
  readonly cancelButton: any;
  readonly personalDetailsHeader: any;
  constructor(page: any) {
    this.page = page;
    this.addEmployeeButton = page.getByRole("button", { name: " Add" });
    this.firstNameInput = page.getByRole("textbox", { name: "First Name" });
    this.middleNameInput = page.getByRole("textbox", { name: "Middle Name" });
    this.lastNameInput = page.getByRole("textbox", { name: "Last Name" });
    this.employeeIdInput = page.getByRole("textbox").nth(4);
    this.saveButton = page.getByRole("button", { name: "Save" });
    this.cancelButton = page.getByRole("button", { name: "Cancel" });
    this.personalDetailsHeader = page.getByRole("heading", {
      name: "Personal Details",
    });
  }
  async AddEmployee() {
    await this.addEmployeeButton.click();
    await this.firstNameInput.fill("John");
    await this.middleNameInput.fill("A");
    await this.lastNameInput.fill("Doe");
    await this.saveButton.click();
    await expect(this.personalDetailsHeader).toBeVisible();
  }
}
