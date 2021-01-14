import { $, ElementFinder } from 'protractor';

export class PaymentPage {
  private paymentButton: ElementFinder;

  constructor () {
    this.paymentButton = $('#HOOK_PAYMENT .bankwire');
  }

  public async goToBankPayment(): Promise<void> {
    await this.paymentButton.click();
  }
}
