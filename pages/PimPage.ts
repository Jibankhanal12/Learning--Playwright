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
  readonly createLoginDetailsCheckbox: any;
  readonly usernameInput: any;
  readonly passwordInput: any;
  readonly confirmPasswordInput: any;
  readonly successToast: any;
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
    this.createLoginDetailsCheckbox = page.locator("form span");
    this.usernameInput = page.locator(
      "div:nth-child(4) > .oxd-grid-2 > div > .oxd-input-group > div:nth-child(2) > .oxd-input"
    );
    this.passwordInput = page.locator('input[type="password"]').first();
    this.confirmPasswordInput = page.locator('input[type="password"]').nth(1);
    this.successToast = page.getByText("Successfully Saved");
  }
  // Method to add an employee
  async addEmployee(
    firstname: string,
    lastName: string,
    middleName?: string,
    employeeId?: string
  ) {
    await this.addEmployeeButton.click();
    await this.firstNameInput.fill(firstname);
    if (middleName) await this.middleNameInput.fill(middleName);
    await this.lastNameInput.fill(lastName);
    if (employeeId) await this.employeeIdInput.fill(employeeId);
    await this.saveButton.click();
  }
  async addEmployeeWithLoginDetails(
    firstName: string,
    lastName: string,
    username: string,
    password: string,
    confirmPassword: string,
    middleName?: string,
    employeeId?: string
  ) {
    await this.addEmployeeButton.click();
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    if (middleName) await this.middleNameInput.fill(middleName);
    if (employeeId) await this.employeeIdInput.fill(employeeId);
    await this.createLoginDetailsCheckbox.check();
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.confirmPasswordInput.fill(confirmPassword);
    await this.saveButton.click();
  }
}
