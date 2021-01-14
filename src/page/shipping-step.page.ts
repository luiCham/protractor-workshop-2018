import { $, ElementFinder } from 'protractor';

export class ShippingPage {
  private nextButton: ElementFinder;
  private checkBox: ElementFinder;

  constructor () {
    this.nextButton = $('.cart_navigation button[name="processCarrier"]');
    this.checkBox =  $('.order_carrier_content input#cgv');
  }

  public async goToNextPage(): Promise<void> {
    await this.nextButton.click();
  }

  public async checkTermsOfService(): Promise<void> {
    await this.checkBox.click();
  }
}
