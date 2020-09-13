import { webDriver } from 'core/wdio';
import allureReporter from '@wdio/allure-reporter';
import { expect } from 'chai';
import { WelcomePage } from "pages/welcome.page";
import allure from "@wdio/allure-reporter";

class ProfilePage extends WelcomePage {
  constructor() {
    super();
  }
  // Page locators

  private userNameField(): string {
    return `span[ng-hide*="'name'"]`
  }

  private userEmailField(): string {
    return `span[ng-hide*="'email'"]`;
  }

  private userAddressField(): string {
    return `span[ng-hide*="'address'"]`;
  }

  private userPhoneField(): string {
    return `span[ng-hide*="'phone'"]`;
  }

  private supportPin(): string {
    return '//button[@name="supportPin"]/../div[@class="description"]/span';
  }

  private newsletterLabel(isActive = false): string {
    const checkbox = isActive
        ? `//input[@name="newsletterOn"]/../button[@class='toggle-btn on']`
        : '//input[@name="newsletterOn"]/../button';
    return checkbox;
  }

  private profileMenuButton(): string {
    return '[href="/user/profile"]'
  }

  private logOutButton(): string {
    return 'button[class*="ssls-header-dropdown-nav-item"]'
  }

  private profilePageTitle(): string {
    return '.profile-page .page-title';
  }

  //methods

  verifyProfilePageTitle(title: string) {
    allure.startStep(`Verify page title is [${title}]`);
    const actualTitle = webDriver.getText(this.profilePageTitle());
    expect(
        actualTitle,
        `'${title}' page title should be displayed, but '${actualTitle}' title was.`,
    ).to.be.equal(title);
    webDriver.endStepWithScreenShot();
    return this;
  }

  clickOnLogOutButton() {
    allureReporter.startStep('Click on the Log Out button')
    webDriver.click(this.logOutButton());
    allureReporter.endStep();
    return this;
  }

  clickOnProfileMenuButton()  {
    allureReporter.startStep(`Click on the "Profile" button`);
    webDriver.click(this.profileMenuButton());
    allureReporter.endStep();
    return this;
  }

  getUserName() {
    allureReporter.startStep(`Get user name from field`);
    const userName = webDriver.getText(this.userNameField())
    allureReporter.endStep();
    return userName;
  }

  getUserAddress() {
    allureReporter.startStep(`Get user address from field`);
    const address = webDriver.getText(this.userAddressField())
    allureReporter.endStep();
    return address;
  }

  getUserEmail() {
    allureReporter.startStep(`Get user email from field`);
    const email = webDriver.getText(this.userEmailField())
    allureReporter.endStep();
    return email;
  }

  getUserNewsletterValue() {
    allureReporter.startStep(`Get user newsletter value from field`);
    webDriver.waitForVisible(this.newsletterLabel())
    const state = webDriver.isElementDisplayed(this.newsletterLabel(true))
    allureReporter.endStep();
    return state;
  }

  getUserPhone() {
    allureReporter.startStep(`Get user phone from field`);
    const userPhone = webDriver.getText(this.userPhoneField())
    allureReporter.endStep();
    return userPhone;
  }

  getUserSupportPin() {
    allureReporter.startStep(`Get user support pin from field`);
    const pin = webDriver.getText(this.supportPin())
    allureReporter.endStep();
    return pin;
  }

  getUserInfo() {
    allureReporter.startStep('Get all user info from profile page')
    const userInfo: any = {};
    userInfo.email = this.getUserEmail();
    userInfo.name = this.getUserName();
    userInfo.pin = this.getUserSupportPin();
    userInfo.newsletter = this.getUserNewsletterValue();
    userInfo.phone = this.getUserPhone();
    userInfo.address = this.getUserAddress();
    allureReporter.endStep();
    return userInfo;
  }

   verifyUserNameValue(name: string) {
    allure.startStep(`Verify user name value`);
    const actual = webDriver.getText(this.userNameField());
    expect(
        actual,
        `'${name}' name is displayed, but should be '${actual}' was.`,
    ).to.be.equal(name);
    webDriver.endStepWithScreenShot();
    return this;
  }

  verifyUserEmailValue(email: string) {
    allure.startStep(`Verify user email value`);
    const actual = webDriver.getText(this.userEmailField());
    expect(
        actual,
        `'${email}' email should be displayed, but '${actual}' email was.`,
    ).to.be.equal(email);
    webDriver.endStepWithScreenShot();
    return this;
  }

  verifyUserPhoneValue(phone: string) {
    allure.startStep(`Verify user phone value`);
    const actual = webDriver.getText(this.userPhoneField());
    expect(
        actual,
        `'${phone}' user phone should be displayed, but '${actual}' phone was.`,
    ).to.be.equal(phone);
    webDriver.endStepWithScreenShot();
    return this;
  }

  verifyUserSupportPinValue(pin: string) {
    allure.startStep(`Verify user support pin value`);
    const actual = webDriver.getText(this.supportPin());
    console.log(actual)
    expect(
        actual,
        `'${actual}' pin should be displayed, but '${pin}' pin was.`,
    ).to.be.equal(pin);
    webDriver.endStepWithScreenShot();
    return this;
  }

  verifyUserNewsletterValue(state: boolean) {
    allure.startStep(`Verify state of user's newsletter`);
    webDriver.waitForVisible(this.newsletterLabel())
    const actualState = webDriver.isElementDisplayed(this.newsletterLabel(true))
    expect(
        actualState,
        `'${state}' state is actual, but '${actualState}' state was.`,
    ).to.be.equal(state);
    webDriver.endStepWithScreenShot();
    return this;
  }

  verifyUserAddressValue(address: string) {
    allure.startStep(`Verify user address value`);
    const actual = webDriver.getText(this.userAddressField());
    expect(
        actual,
        `'${address}' user address should be displayed, but '${actual}' address was.`,
    ).to.be.equal(address);
    webDriver.endStepWithScreenShot();
    return this;
  }
}

export const profilePage = new ProfilePage();
