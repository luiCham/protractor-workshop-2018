import { browser } from 'protractor';
// tslint:disable-next-line: max-line-length
import { PersonalInformationPage } from '../src/page';

describe('Filling form', async() => {
  const personalInformationPage: PersonalInformationPage = new PersonalInformationPage();
  beforeAll(async () => {
    await browser.get('https://www.tutorialspoint.com/selenium/selenium_automation_practice.htm');
    await (browser.sleep(2000));
  });
  it('Title is correct', async() => {
    await personalInformationPage.fillForm({
      firstName: 'Alejandro',
      lastName: 'Perdomo',
      sex: 'Male',
      experience: 7,
      profession: ['Automation Tester'],
      tools: ['Selenium Webdriver'],
      continent: 'South America',
      commands: [
        'Browser Commands',
        'Navigation Commands',
        'Switch Commands',
        'Wait Commands',
        'WebElement Commands']
    });
    await (browser.sleep(2000));
    expect(await personalInformationPage.getTitle()).toEqual('Selenium - Automation Practice Form');
  });
});
