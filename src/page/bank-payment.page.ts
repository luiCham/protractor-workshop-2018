import { $, ElementFinder } from 'protractor';

export class BankPaymentPage {
  private confirmButton: ElementFinder;

  constructor () {
    this.confirmButton = $('#cart_navigation > button > span');
  }

  public async pay(): Promise<void> {
    await this.confirmButton.click();
  }
}
