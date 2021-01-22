import { browser } from 'protractor';
import { IFramePage } from '../src/page';

describe('Given an i-frame practice web page', () => {
  const iFramePage: IFramePage = new IFramePage();
  beforeAll(async () => {
    await browser.get('https://demoqa.com/frames');
    await browser.sleep(1000);
  });
  describe('when modifying frame height', async() => {
    beforeAll(async () => {
      iFramePage.setFormFrameHeight(50);
      await browser.sleep(1000);
    });
    it('then iframe height should be modified', async() => {
      expect(await iFramePage.getFrameHeight()).toBe('50');
    });
  });

});
