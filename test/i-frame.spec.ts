import { browser } from 'protractor';
import { IFramePage } from '../src/page';

describe('Given an i-frame practice web page', () => {
  const iFramePage: IFramePage = new IFramePage();

  beforeAll(async () => {
    await browser.get('https://demoqa.com/frames');
    await browser.sleep(1000);
  });

  describe('When looking for page title', async () => {
    it('Title should be "Frames"', async () => {
      const title = await iFramePage.getPageTitle();
      expect(title).toBe('Frames');
    });
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

  describe('When switching to iframe', async () => {
    beforeAll(async () => {
      await iFramePage.switchToFrame();
    });

    it('Then title should be Frame Title', async () => {
      expect(await iFramePage.getFrameTitle()).toBe('This is a sample page');
    });
  });

  describe('When switching back to page', async () => {
    beforeAll(async () => {
      await iFramePage.switchToMainPage();
    });

    it('Then title should be main page title', async () => {
      expect(await iFramePage.getPageTitle()).toBe('Frames');
    });
  });

});
