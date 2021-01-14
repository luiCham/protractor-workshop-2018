import { $, ElementFinder } from 'protractor';

export class SignInPage {
  private nextButton: ElementFinder;
  private emailField: ElementFinder;
  private passwordField: ElementFinder;

  constructor () {
    this.nextButton = $('#login_form #SubmitLogin');
    this.emailField = $('#login_form #email');
    this.passwordField = $('#login_form #passwd');
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
