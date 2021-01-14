import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private finalMessage: ElementFinder;

  constructor () {
    this.finalMessage = $('#center_column p.cheque-indent > strong');
  }

  public async getMessage(): Promise<string> {
    return await this.finalMessage.getText();
  }
}
