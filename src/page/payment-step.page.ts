import { $, ElementFinder } from 'protractor';

export class PaymentPage {
  private paymentButton: ElementFinder;

  constructor () {
    this.paymentButton = $('#center_column .paiement_block #HOOK_PAYMENT .bankwire');
  }

  public async goToBankPayment(): Promise<void> {
    await this.paymentButton.click();
  }
}
