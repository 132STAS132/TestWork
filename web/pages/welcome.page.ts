import allureReporter from '@wdio/allure-reporter';
import { expect } from 'chai';
import { webDriver } from 'core/wdio';

export class WelcomePage {
  // Page locators

  private logInMenuButton(isActive = true): string {
    const logInButton = isActive
        ? '.ssls-header-add-nav [class*=active-page] [class*="user-circle"]'
        : '.ssls-header-add-nav [class*="user-circle"]';
    return logInButton;
  }

  private certsMenu(isActive = true): string {
    const certs = isActive ? '[href="#certs"]' : '[href="#certs"].active-page'
    return certs;
  }

  private certsPage(): string {
    return 'div#certs';
  }

  // Methods

  verifyActiveLogInMenuButtonIsPresent(isPresent = true) {
    const state = isPresent? 'displayed' : 'not displayed'
    allureReporter.startStep(`Verify Log In menu button is ${state}`);
    isPresent
        ? webDriver.waitForVisible(this.logInMenuButton(true))
        : webDriver.waitForInVisible(this.logInMenuButton(true));
    expect(
        webDriver.isElementDisplayed(this.logInMenuButton(true)),
        `Log In menu button should be ${state}"`
    ).to.be.equal(isPresent);
    webDriver.endStepWithScreenShot();
    return this;
  }

  verifyHomePageIsPresent(isPresent = true) {
    const state = isPresent? 'displayed' : 'not displayed'
    allureReporter.startStep(`Verify "CERTS" page is ${state}`);
    isPresent
        ? webDriver.waitForVisible(this.certsPage()) && webDriver.waitForVisible(this.certsMenu())
        : webDriver.waitForInVisible(this.certsPage());
    expect(
        webDriver.isElementDisplayed(this.certsPage()),
        `"CERTS page should be ${state}"`
    ).to.be.equal(isPresent);
    webDriver.endStepWithScreenShot();
    return this;
  }

  clickOnLogInMenuButton() {
    allureReporter.startStep(`Click on the "Log In" button`);
    webDriver.click(this.logInMenuButton(false));
    allureReporter.endStep();
    return this;
  }
}
