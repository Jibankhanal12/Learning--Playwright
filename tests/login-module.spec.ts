import { test, expect } from "../fixtures/hooks-fixture";
import loginModuleData from "../data/login-module-data.json";
/**
   To set the auto login disabled for each test
   by setting empty cookies and origins
 */
test.use({
  storageState: {
    cookies: [],
    origins: [],
  },
});

test("Login without username and password", async ({
  gotoUrl,
  page,
  loginPage,
}) => {
  await loginPage.loginButton.click();
  await expect(loginPage.errorMessage).toHaveText("Required");
});
test("Login without username", async ({ gotoUrl, page, loginPage }) => {
  await loginPage.passwordInput.fill(process.env.PASSWORD!);
  await loginPage.loginButton.click();
  await expect(loginPage.errorMessage).toHaveText("Required");
});
test("Login without password", async ({ gotoUrl, page, loginPage }) => {
  await loginPage.userNameInput.fill(process.env.USERNAME!);
  await loginPage.loginButton.click();
  await expect(loginPage.errorMessage).toHaveText("Required");
});
test("Login to HRM with invalid username", async ({
  gotoUrl,
  page,
  loginPage,
}) => {
  await loginPage.loginHRM(
    loginModuleData.wrong_username,
    process.env.PASSWORD!
  );
  await expect(loginPage.invalidCredentialsPopup).toHaveText(
    loginModuleData.invalid_credential_text
  );

  await expect(loginPage.userNameInput).toBeVisible();
});
test("Login to HRM with invalid password", async ({
  gotoUrl,
  page,
  loginPage,
}) => {
  await loginPage.loginHRM(
    process.env.USERNAME!,
    loginModuleData.wrong_password
  );
  await expect(loginPage.invalidCredentialsPopup).toHaveText(
    loginModuleData.invalid_credential_text
  );

  await expect(loginPage.userNameInput).toBeVisible();
});
test("Login to HRM with both invalid username, password", async ({
  gotoUrl,
  page,
  loginPage,
}) => {
  await loginPage.loginHRM(
    loginModuleData.wrong_username,
    loginModuleData.wrong_password
  );
  await expect(loginPage.invalidCredentialsPopup).toHaveText(
    loginModuleData.invalid_credential_text
  );

  await expect(loginPage.userNameInput).toBeVisible();
});

// test("click on forgot password link", async ({
//   gotoUrl,
//   page,
//   loginPage,
//   gotoForgotPassword,
// }) => {
//   await expect(loginPage.resetPasswordButton).toBeVisible();
// });

// test("Reset password with valid username", async ({
//   gotoUrl,
//   page,
//   loginPage,
//   gotoForgotPassword,
// }) => {
//   await loginPage.resetPassword(process.env.USER_NAME!);
//   await expect(
//     page.getByRole("heading", { name: "Reset Password link sent" })
//   ).toBeVisible();
// });
// test("click on cancle button", async ({
//   gotoUrl,
//   page,
//   loginPage,
//   gotoForgotPassword,
// }) => {
//   await loginPage.cancelButton.click();
//   await expect(loginPage.loginButton).toBeVisible();
// });
