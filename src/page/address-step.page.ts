import { $, ElementFinder } from 'protractor';

export class AddressPage {
  private nextButton: ElementFinder;

  constructor () {
    this.nextButton = $('#center_column > form > p > button > span');
  }

  public async goToNextPage(): Promise<void> {
    await this.nextButton.click();
  }
}
