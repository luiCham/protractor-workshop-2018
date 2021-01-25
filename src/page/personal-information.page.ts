import { browser, by, element, ElementArrayFinder, ElementFinder } from 'protractor';

export class PersonalInformationPage {

  private textInputs:ElementArrayFinder;
  private radioInputs:ElementArrayFinder;
  private checkboxInputs:ElementArrayFinder;
  private selectInputs:ElementArrayFinder;
  private inputs:ElementArrayFinder;
  private submitBtn:ElementFinder;
  private title:ElementFinder;

  constructor () {
    this.inputs = element.all(by.tagName('input'));

    this.radioInputs = this.inputs.filter((input) => {
      return input.getAttribute('type').then((type) => {
        return type === 'radio';
      });
    });

    this.checkboxInputs = this.inputs.filter((input) => {
      return input.getAttribute('type').then((type) => {
        return type === 'checkbox';
      });
    });

    this.textInputs = this.inputs.filter((input) => {
      return input.getAttribute('type').then((type) => {
        return type === 'text';
      });
    });

    this.selectInputs = element.all(by.tagName('select'));

    this.submitBtn = element(by.name('submit'));

    this.title = element(by.className('mui-col-md-6')).element(by.tagName('h1'));
  }

  private async fillTextInput(name:string, value:string): Promise<void> {
    const textInput = await this.textInputs.filter((input) => {
      return input.getAttribute('name').then((attName) => {
        return attName === name;
      });
    }).first();

    await textInput.sendKeys(value);
  }

  private async fillRadioInput(name:string, value:string): Promise<void> {
    const filteredRadioInputs = await this.radioInputs.filter((input) => {
      return input.getAttribute('name').then((attName) => {
        return attName === name;
      });
    });

    filteredRadioInputs.forEach(async (radio) => {
      if (await radio.getAttribute('value') === value) {
        radio.click();
      }
    });
  }

  private async fillCheckboxInput(name:string, value:string[]): Promise<void> {
    const filteredCheckboxInputs = await this.checkboxInputs.filter((input) => {
      return input.getAttribute('name').then((attName) => {
        return attName === name;
      });
    });

    await filteredCheckboxInputs.forEach(async (checkbox) => {
      if (value.includes(await checkbox.getAttribute('value'))) {
        checkbox.click();
      }
    });
  }

  private async fillSelectInput(name:string, value:string[]) {
    const filteredOptions = await this.selectInputs.filter((input) => {
      return input.getAttribute('name').then((attName) => {
        return attName === name;
      });
    }).all(by.tagName('option'));

    filteredOptions.forEach(async (option) => {
      if (value.includes(await option.getText())) {
        option.click();
      }
    });
  }

  public async fillForm(data:Object) {

    await this.fillTextInput('firstname', data['firstName']);
    await this.fillTextInput('lastname', data['lastName']);
    await this.fillRadioInput('sex', data['sex']);
    await this.fillRadioInput('exp', data['experience'].toString());
    await this.fillCheckboxInput('profession', data['profession']);
    await this.fillCheckboxInput('tool', data['tools']);
    await this.fillSelectInput('continents', [data['continent']]);
    await this.fillSelectInput('selenium_commands', data['commands']);
    await (browser.sleep(500));
    await this.submitBtn.click();
    await (await browser.switchTo().alert()).accept();
    await (browser.sleep(500));
  }

  public async getTitle(): Promise<string> {
    return await this.title.getText();
  }

}
