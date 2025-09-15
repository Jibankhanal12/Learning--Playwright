import { Locator, Page } from 'playwright';

export class LoginPage {
   readonly page: Page
   readonly userNameInput:Locator
   readonly passwordInput:Locator
   readonly loginButton:Locator
   readonly invalidCredentialsPopup:Locator
   readonly forgotPasswordLink:Locator
   readonly resetPasswordButton:Locator
   readonly cancelButton:Locator
   constructor(page: Page) {
      this.page = page;
      this.userNameInput = page.getByRole('textbox', { name: 'Username' })
    this.passwordInput = page.getByRole('textbox', { name: 'Password' })
    this.loginButton = page.getByRole('button', { name: 'Login' })
    this.invalidCredentialsPopup = page.getByRole('alert')
    this.forgotPasswordLink = page.getByText('Forgot your password?')
    this.resetPasswordButton = page.getByRole('button', { name: 'Reset Password' })
    this.cancelButton = page.getByRole('button', { name: 'Cancel' })
   }

  async goToOrangeHRM() {
      await this.page.goto(process.env.BASE_URL + '/web/index.php/auth/login');
   }
   async loginHRM(username: string, password: string) {
      await this.userNameInput.fill(username);
      await this.passwordInput.fill(password);
      await this.loginButton.click();
   }
   async gotoForgotPassword() {
      await this.forgotPasswordLink.click();
   }
   async resetPassword(username: string) {
      await this.userNameInput.fill(username);
      await this.resetPasswordButton.click();
   }

}