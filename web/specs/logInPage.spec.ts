import { logInPage } from "pages/logIn.page";
import { users } from "fixtures/users";
import {errorsText} from "fixtures/errorsText";
import {pageTitles} from "fixtures/pageTitles";

describe('Authorization page. Not registered user', () => {
    it('Home page has to be opened' +
        'Authorization page has to be opened' +
        'After click on "eye" icon in password field, password should be displayed' +
        'If user not registered, errors messages such as: “Uh oh! Email or password is incorrect” should be displayed', () => {
        const user = users.defaultUser();
        logInPage.verifyHomePageIsPresent()
            .clickOnLogInMenuButton()
            .verifyLogInPageIsPresent()
            .verifyLogInPageTitle(pageTitles.authorization)
            .setEmailValue(user.wrongEmail)
            .setPasswordValue(user.wrongPassword)
            .verifyPasswordIsHidden()
            .clickOnShowPasswordButton()
            .verifyPasswordIsHidden(false)
            .clickOnLogInButton()
            .verifyErrorModalText(errorsText.wrongCredentialsError)
    });
})
