import { $, ElementFinder } from 'protractor';

export class SignInPage {
  private nextButton: ElementFinder;
  private emailField: ElementFinder;
  private passwordField: ElementFinder;

  constructor () {
    this.nextButton = $('#SubmitLogin > span');
    this.emailField = $('#email');
    this.passwordField = $('#passwd');
  }

  public async fillEmail(): Promise<void> {
    await this.emailField.sendKeys('j.l-h@hotmail.com');
  }
  public async fillPassword(): Promise<void> {
    await this.passwordField.sendKeys('vkvkvkvk');
  }
  public async goToNextPage(): Promise<void> {
    await this.nextButton.click();
  }
}
