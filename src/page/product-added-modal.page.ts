import { $, ElementFinder } from 'protractor';

export class ProductAddedModalPage {
  private checkout: ElementFinder;

  constructor () {
    this.checkout = $('[style*="display: block;"] .button-container > a');
  }

  public async goTocheckout(): Promise<void> {
    await this.checkout.click();
  }
}
