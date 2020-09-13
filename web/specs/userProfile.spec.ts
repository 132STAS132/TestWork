import { logInPage } from "pages/logIn.page";
import { users } from "fixtures/users";
import {homePage} from "pages/home.page";
import {pageTitles} from "fixtures/pageTitles";
import {profilePage} from "pages/profile.page";

describe('My profile page. Client area', () => {
    it('After click on "Profile" opened page "Profile" should be displayed' +
        'Check that opened page has to contain values in the next fields and compare with values saved to variable from precondition:' +
        '2.1. Name' +
        '2.2. Email' +
        '2.3. Password (not empty)' +
        '2.4. Phone' +
        '2.5. Address' +
        '2.6. Support pin' +
        '2.7. Newsletter', () => {
        const user = users.defaultUser();
        logInPage
            .verifyHomePageIsPresent()
            .clickOnLogInMenuButton()
            .verifyLogInPageIsPresent()
            .verifyLogInPageTitle(pageTitles.authorization)
            .setEmailValue(user.emailInUse)
            .setPasswordValue(user.password)
            .clickOnLogInButton();
        homePage
            .verifyUserToolBarIsPresent()
            .verifyUserDropdownIsPresent()
            .clickOnUserMenuDropdown();
        profilePage
            .clickOnProfileMenuButton()
            .verifyProfilePageTitle(pageTitles.userProfile)
        const userInfo = profilePage.getUserInfo();
        homePage
            .clickOnUserMenuDropdown();
        profilePage.clickOnLogOutButton();
        logInPage
            .verifyLogInPageTitle(pageTitles.authorization)
            .setEmailValue(user.emailInUse)
            .setPasswordValue(user.password)
            .clickOnLogInButton();
        homePage
            .verifyUserToolBarIsPresent()
            .clickOnUserMenuDropdown();
        profilePage
            .clickOnProfileMenuButton()
            .verifyUserNameValue(userInfo.name)
            .verifyUserAddressValue(userInfo.address)
            .verifyUserEmailValue(userInfo.email)
            .verifyUserSupportPinValue(userInfo.pin)
            .verifyUserNewsletterValue(userInfo.newsletter)
            .verifyUserPhoneValue(userInfo.phone)
    });
})
