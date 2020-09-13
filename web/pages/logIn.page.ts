import { webDriver } from 'core/wdio';
import allureReporter from '@wdio/allure-reporter';
import { expect } from 'chai';
import { WelcomePage } from "pages/welcome.page";
import allure from "@wdio/allure-reporter";

class LogInPage extends WelcomePage {
  constructor() {
    super();
  }
  // Page locators

  private logInPage(): string {
    return '.authorization-page'
  }

  private emailInput(): string {
    return 'input[name="email"]';
  }

  private passwordInput(isHidden = true): string {
    const password = isHidden
        ? 'input[name="password"][type=password]'
        : 'input[name="password"][type=text]';
    return password;
  }

  private showPasswordButton(): string {
    return '[class="icon icon-eye"]';
  }

  private logInButton(): string {
    return '[type="submit"]';
  }

  private errorModal(): string {
    return '[class="noty_text"]';
  }

  private logInPageTitle(): string {
    return '.authorization-page .page-title';
  }

  //methods

  verifyLogInPageIsPresent(isPresent = true) {
    const state = isPresent? 'displayed' : 'not displayed'
    allureReporter.startStep(`Verify "Log In" page is ${state}`);
    isPresent
        ? webDriver.waitForVisible(this.logInPage())
        : webDriver.waitForInVisible(this.logInPage());
    expect(
        webDriver.isElementDisplayed(this.logInPage()),
        `"Log In" page should be ${state}"`
    ).to.be.equal(isPresent);
    webDriver.endStepWithScreenShot();
    return this;
  }

  verifyLogInPageTitle(title: string) {
    allure.startStep(`Verify page title is [${title}]`);
    const actualTitle = webDriver.getText(this.logInPageTitle());
    expect(
        actualTitle,
        `'${title}' page title should be displayed, but '${actualTitle}' title was.`,
    ).to.be.equal(title);
    webDriver.endStepWithScreenShot();
    return this;
  }

  setEmailValue(email: string) {
    allureReporter.startStep(`Set ${email} value in "Email" field`);
    webDriver.waitForVisible(this.emailInput());
    webDriver.setValue(this.emailInput(), email);
    allureReporter.endStep();
    return this;
  }

  setPasswordValue(password: string) {
    allureReporter.startStep(`Set ${password} value in "Password" field`);
    webDriver.waitForVisible(this.passwordInput());
    webDriver.setValue(this.passwordInput(), password);
    allureReporter.endStep();
    return this;
  }

  verifyErrorModalText(text: string) {
    allureReporter.startStep(`Verify error modal text`);
    try {
      browser.waitUntil(() => webDriver.getText(this.errorModal()) === text);
    } catch (e) {}
    const actual = webDriver.getText(this.errorModal());
    expect(
      actual,
      `Error modal text should be equal ${text}`,
    ).to.be.equal(text);
    webDriver.endStepWithScreenShot();
    return this;
  }

  clickOnLogInButton() {
    allureReporter.startStep(`Click on the "Log In" button`);
    webDriver.click(this.logInButton());
    allureReporter.endStep();
    return this;
  }

  clickOnShowPasswordButton() {
    allureReporter.startStep(`Click on the show password button`);
    webDriver.click(this.showPasswordButton());
    allureReporter.endStep();
    return this;
  }

  verifyPasswordIsHidden(isHidden = true) {
    const state = isHidden? 'hidden' : 'displayed'
    allureReporter.startStep(`Verify "Log In" page is ${state}`);
    const actual = isHidden
        ? webDriver.isElementDisplayed(this.passwordInput())
        : webDriver.isElementDisplayed(this.passwordInput(false));
    expect(
        actual,
        `"Password" should be ${state}"`
    ).to.be.true;
    webDriver.endStepWithScreenShot();
    return this;
  }
}

export const logInPage = new LogInPage();
