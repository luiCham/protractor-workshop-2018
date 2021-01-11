import { Config, browser } from 'protractor';
import { reporter } from './helpers/reporter';

export const config: Config = {
  framework: 'jasmine',
  specs: ['../test/**/*.spec.js'],
  SELENIUM_PROMISE_MANAGER:false,
  getPageTimeout: 1000,
  onPrepare: () => {
    reporter();
    browser.ignoreSynchronization = true;
  }
};
