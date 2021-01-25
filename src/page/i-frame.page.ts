import { $, browser, ElementFinder, promise } from 'protractor';

export class IFramePage {
  private iframe1: ElementFinder;
  private pageTitle: ElementFinder;
  private frameTitle: ElementFinder;

  constructor () {
    this.iframe1 = $('#frame1');
    this.pageTitle = $('.main-header');
    this.frameTitle = $('#sampleHeading');
  }

  public setFormFrameHeight(height: number): promise.Promise<void> {
    return browser.executeScript(`arguments[0].height = ${height};`, this.iframe1);
  }

  public async getFrameHeight() {
    return await this.iframe1.getAttribute('height');
  }

  public async getPageTitle() {
    return await this.pageTitle.getText();
  }

  public async getFrameTitle() {
    return await this.frameTitle.getText();
  }

  public async switchToFrame(): Promise<void> {
    await browser.switchTo().frame(this.iframe1.getWebElement());
  }

  public async switchToMainPage(): Promise<void> {
    await browser.switchTo().defaultContent();
  }

}
