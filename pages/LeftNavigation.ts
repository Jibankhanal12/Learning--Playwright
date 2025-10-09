import { Locator, Page } from "@playwright/test";

export class LeftNavigation {
  readonly page: Page;
  readonly PimTab: Locator;
  constructor(page: Page) {
    this.page = page;
    this.PimTab = page.getByRole("link", { name: "PIM" });
  }

  async openPimTab() {
    await this.PimTab.click();
  }
}
