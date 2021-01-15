import { $, ElementFinder } from 'protractor';

export class SignInPage {
  private nextButton: ElementFinder;
  private emailField: ElementFinder;
  private passwordField: ElementFinder;

  constructor () {
    this.nextButton = $('#SubmitLogin');
    this.emailField = $('#email');
    this.passwordField = $('#passwd');
  }

  public async fillEmail(email: string): Promise<void> {
    await this.emailField.sendKeys(email);
  }
  public async fillPassword(password: string): Promise<void> {
    await this.passwordField.sendKeys(password);
  }
  public async goToNextPage(): Promise<void> {
    await this.nextButton.click();
  }
}
