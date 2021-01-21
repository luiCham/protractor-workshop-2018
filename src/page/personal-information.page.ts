import { browser, by, element, ElementArrayFinder } from 'protractor';

export class PersonalInformationPage {

  private textInputs:ElementArrayFinder;
  private radioInputs:ElementArrayFinder;
  private checkboxInputs:ElementArrayFinder;
  private inputs:ElementArrayFinder;

  private enum={
    firstname:this.fillTextInput('firstname', 'asdasd')
  }

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

  }

  public async fillTextInput(name:string, value:string): Promise<void> {
    const textInput = await this.textInputs.filter((input) => {
      return input.getAttribute('name').then((attName) => {
        return attName === name;
      });
    }).first();

    await textInput.sendKeys(value);
  }

  public async fillRadioInput(name:string, value:string): Promise<void> {
    const filteredRadioInputs = await this.radioInputs.filter((input) => {
      return input.getAttribute('name').then((attName) => {
        return attName === name;
      });
    });

    const locatedRadioInput = await filteredRadioInputs.filter((input) => {
      return input.getAttribute('value').then((radioValue) => {
        return radioValue === value;
      });
    })[0];

    await locatedRadioInput.click();
  }

  public async fillCheckboxInput(name:string, value:string): Promise<void> {
    const filteredCheckboxInputs = await this.checkboxInputs.filter((input) => {
      return input.getAttribute('name').then((attName) => {
        return attName === name;
      });
    });

    const locatedCheckboxInput = await filteredCheckboxInputs.filter((input) => {
      return input.getAttribute('value').then((radioValue) => {
        return radioValue === value;
      });
    })[0];

    await locatedCheckboxInput.click();
  }

  public async fillForm(data:Object) {



    await this.fillRadioInput('sex', 'Male');
    await this.fillCheckboxInput('profession', 'Automation tester');
    await this.fillTextInput('firstname', 'Alejandro');
    await (browser.sleep(5000));
  }

}
