import { $, browser, ElementFinder, promise } from 'protractor';

export class IFramePage {
  private iframe1: ElementFinder;

  constructor () {
    this.iframe1 = $('#frame1');
  }

  public setFormFrameHeight(height: number): promise.Promise<void> {
    return browser.executeScript(`arguments[0].height = ${height};`, this.iframe1);
  }

  public async getFrameHeight() {
    console.log(await this.iframe1.getAttribute('height'));
    return await this.iframe1.getAttribute('height');
  }

}
