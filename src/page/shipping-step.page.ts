import { $, ElementFinder } from 'protractor';

export class ShippingPage {
  private nextButton: ElementFinder;
  private checkBox: ElementFinder;

  constructor () {
    this.nextButton = $('#form > p > button > span');
    this.checkBox =  $('#cgv');
  }

  public async goToNextPage(): Promise<void> {
    await this.nextButton.click();
  }

  public async checkTermsOfService(): Promise<void> {
    await this.checkBox.click();
  }
}
