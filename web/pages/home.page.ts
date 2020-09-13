import allureReporter from '@wdio/allure-reporter';
import { expect } from 'chai';
import { webDriver } from 'core/wdio';
import {WelcomePage} from "pages/welcome.page";
import allure from "@wdio/allure-reporter";

export class HomePage extends WelcomePage{
  // Page locators

  private userMenuDropdown(isActive = true): string {
    return `//i[contains(@class,'ssls-icon-user-circle')]/../span`;
  }

  // Methods

  clickOnUserMenuDropdown() {
    allureReporter.startStep(`Click on the user menu dropdown`);
    webDriver.click(this.userMenuDropdown());
    allureReporter.endStep();
    return this;
  }

  verifyUserDropdownIsPresent(isPresent = true) {
    const state = isPresent? 'displayed' : 'not displayed'
    allureReporter.startStep(`Verify user's menu dropdown is ${state}`);
    isPresent
        ? webDriver.waitForVisible(this.userMenuDropdown())
        : webDriver.waitForInVisible(this.userMenuDropdown());
    expect(
        webDriver.isElementDisplayed(this.userMenuDropdown()),
        `User's menu dropdown should be ${state}"`
    ).to.be.equal(isPresent);
    webDriver.endStepWithScreenShot();
    return this;
  }

  verifyUserEmailIsPresentOnDropdown(email: string) {
    allure.startStep(`Verify user email on the dropdown is displayed`);
    const actualTitle = webDriver.getText(this.userMenuDropdown());
    expect(
        actualTitle,
        `'${actualTitle}' should be equal '${email}'.`,
    ).to.be.equal(email.toUpperCase());
    webDriver.endStepWithScreenShot();
    return this;
  }
}

export const homePage = new HomePage();

