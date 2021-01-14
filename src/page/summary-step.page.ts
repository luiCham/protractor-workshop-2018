import { $, ElementFinder } from 'protractor';

export class SummaryStepPage {
  private nextButton: ElementFinder;

  constructor () {
    this.nextButton = $('.cart_navigation a[title="Proceed to checkout"]');
  }

  public async goToNextPage(): Promise<void> {
    await this.nextButton.click();
  }
}
