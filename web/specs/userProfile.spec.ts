import { logInPage } from "pages/logIn.page";
import { users } from "fixtures/users";
import {homePage} from "pages/home.page";
import {pageTitles} from "fixtures/pageTitles";
import {profilePage} from "pages/profile.page";
import {webDriver} from "core/wdio";

describe('Authorization page (Welcome back!)', () => {
    it('Home page has to be opened' +
        'Authorization page has to be opened' +
        'After click on "eye" icon for password field, password should be displayed' +
        '"Log in" button has to be changed on "User@email" button (with dropdown menu) from the left side in the Header of the page', () => {
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
            .verifyUserDropdownIsPresent()
            .clickOnUserMenuDropdown();
        profilePage
            .clickOnProfileMenuButton();
        const userInfo = profilePage.getUserInfo();
        homePage.clickOnUserMenuDropdown();
        profilePage.clickOnLogOutButton();
        webDriver.reloadSession();
        logInPage
            .verifyHomePageIsPresent()
            .clickOnLogInMenuButton()
            .verifyLogInPageIsPresent()
            .verifyLogInPageTitle(pageTitles.authorization)
            .setEmailValue(user.emailInUse)
            .setPasswordValue(user.password)
            .clickOnLogInButton();
        homePage
            .clickOnUserMenuDropdown();
        profilePage
            .clickOnProfileMenuButton();

    });
})
