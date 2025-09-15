import { expect } from '@playwright/test';
import {test} from '../fixtures/hooks-fixture';
test("Sample test to verify the setup", async ({page,gotoUrl}) => {
  await expect(page).toHaveTitle('OrangeHRM');  
    // The gotoUrl fixture will navigate to the URL before this test runs
  // You can add additional test steps here if needed
}),
test("Sample test to verify the setup 2", async ({page,gotoUrl}) => {
  await expect(page).toHaveTitle('OrangeHRM');  
    // The gotoUrl fixture will navigate to the URL before this test runs
  // You can add additional test steps here if needed
}),
test("Sample test to verify the setup 3", async ({page,gotoUrl,logout}) => {
  await expect(page).toHaveTitle('OrangeHRM');  
    // The gotoUrl fixture will navigate to the URL before this test runs
  // You can add additional test steps here if needed
})