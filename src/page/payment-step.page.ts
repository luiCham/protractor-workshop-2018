import { $, ElementFinder } from 'protractor';

export class PaymentPage {
  private paymentButton: ElementFinder;

  constructor () {
    this.paymentButton = $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
  }

  public async goToBankPayment(): Promise<void> {
    await this.paymentButton.click();
  }
}
