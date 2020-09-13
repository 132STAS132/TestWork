import * as faker from 'faker';
import allureReporter from '@wdio/allure-reporter';
import * as chai from 'chai';
import chaiAsPromised = require('chai-as-promised');

chai.should();
chai.use(chaiAsPromised);

export class Wdio {
  get defaultWaitTime() {
    return browser.options.waitforTimeout;
  }

  waitForVisible(selector: string, waitTime = this.defaultWaitTime) {
      return $(selector).waitForDisplayed(waitTime);
  }

  waitForClickable(selector: string) {
      return browser.waitUntil(() => $(selector).isClickable());
  }

  waitForInVisible(selector: string, waitTime = this.defaultWaitTime) {
      return $(selector).waitForDisplayed(waitTime, true);
  }

  waitForEnabled(selector: string, waitTime = this.defaultWaitTime) {
      return $(selector).waitForEnabled(waitTime);
  }

  setValue(selector: string, value: string, waitTime = this.defaultWaitTime) {
    this.waitForEnabled(selector, waitTime);
    $(selector).click();
    $(selector).setValue(value);
  }

  getText(selector: string, waitTime = this.defaultWaitTime) {
    this.waitForVisible(selector, waitTime);
    return $(selector).getText();
  }

  click(selector: string, waitTime = this.defaultWaitTime) {
    this.waitForVisible(selector, waitTime);
    this.waitForEnabled(selector, waitTime);
    this.waitForClickable(selector)
      $(selector).click();
  }

  isElementDisplayed(selector: string) {
    return $(selector).isDisplayed();
  }

  pause(pauseTime: number) {
    browser.pause(pauseTime);
  }

  takeScreenshot() {
    const screenShot = browser.takeScreenshot();
    const image = new Buffer(screenShot, 'base64');
    const fileName = `Screenshot - ${faker.random.alphaNumeric(5)}`;

    allureReporter.addAttachment(fileName, image, 'image/png');
  }

  endStepWithScreenShot() {
    this.takeScreenshot();
    allureReporter.endStep();
  }
}

export const webDriver = new Wdio();
