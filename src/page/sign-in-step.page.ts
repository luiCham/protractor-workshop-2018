import { $, ElementFinder } from 'protractor';

export class SignInPage {
  private nextButton: ElementFinder;
  private emailField: ElementFinder;
  private passwordField: ElementFinder;
  private email = 'j.l-h@hotmail.com';
  private password = 'vkvkvkvk';

  constructor () {
    this.nextButton = $('#SubmitLogin > span');
    this.emailField = $('#email');
    this.passwordField = $('#passwd');
  }

  public async fillEmail(): Promise<void> {
    await this.emailField.sendKeys(this.email);
  }
  public async fillPassword(): Promise<void> {
    await this.passwordField.sendKeys(this.password);
  }
  public async goToNextPage(): Promise<void> {
    await this.nextButton.click();
  }
}
