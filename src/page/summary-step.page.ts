import { $, ElementFinder } from 'protractor';

export class SummaryStepPage {
  private nextButton: ElementFinder;

  constructor () {
    this.nextButton = $('.cart_navigation span');
  }

  public async goToNextPage(): Promise<void> {
    await this.nextButton.click();
  }
}
