import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private finalMessage: ElementFinder;

  constructor () {
    this.finalMessage = $('#strong.dark');
  }

  public async getMessage(): Promise<string> {
    return await this.finalMessage.getText();
  }
}
