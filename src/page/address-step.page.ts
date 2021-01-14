import { $, ElementFinder } from 'protractor';

export class AddressPage {
  private nextButton: ElementFinder;

  constructor () {
    this.nextButton = $('.cart_navigation button[name="processAddress"]');
  }

  public async goToNextPage(): Promise<void> {
    await this.nextButton.click();
  }
}
