import { logInPage } from "pages/logIn.page";
import { users } from "fixtures/users";
import {homePage} from "pages/home.page";
import {pageTitles} from "fixtures/pageTitles";

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
            .verifyPasswordIsHidden()
            .clickOnShowPasswordButton()
            .verifyPasswordIsHidden(false)
            .verifyActiveLogInMenuButtonIsPresent()
            .clickOnLogInButton()
        homePage
            .verifyUserDropdownIsPresent()
            .verifyActiveLogInMenuButtonIsPresent(false)
            .verifyUserEmailIsPresentOnDropdown(user.emailInUse)
    });
})
