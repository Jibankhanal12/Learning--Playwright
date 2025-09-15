import { Page, Locator } from "@playwright/test";

export class UserPage {
  readonly page: Page;
  readonly userHeader: Locator;
  readonly logoutButton: Locator;
  // UserPage class implementation
  constructor(page: Page) {
    this.page = page;
    this.userHeader = page
      .getByRole("banner")
      .getByRole("img", { name: "profile picture" });
    this.logoutButton = page.getByRole("menuitem", { name: "Logout" });
  }
  async logout() {
    await this.userHeader.click();
    await this.logoutButton.click();
    console.log("logged out successfully");
  }
}
