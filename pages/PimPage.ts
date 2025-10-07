import { expect } from "@playwright/test";
import { time } from "console";

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
  readonly searchEmployeeInput: any;
  readonly searchButton: any;
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
  // Method to add an employee
  async addEmployee(firtname: string, middleName: string, lastName: string) {
    await this.addEmployeeButton.click();
    await this.firstNameInput.fill(firtname);
    await this.middleNameInput.fill(middleName);
    await this.lastNameInput.fill(lastName);
    await this.saveButton.click();
  }
}
