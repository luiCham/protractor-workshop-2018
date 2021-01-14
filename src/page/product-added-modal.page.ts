import { $, ElementFinder } from 'protractor';

export class ProductAddedModalPage {
  private checkout: ElementFinder;

  constructor () {
    this.checkout = $('#layer_cart > div.clearfix > div.layer_cart_cart a[title="Proceed to checkout"]');
  }

  public async goTocheckout(): Promise<void> {
    await this.checkout.click();
  }
}
