import { locatorProcessor } from "../utils/LocatorProcessor";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
    private userNameTxtLoc = 'placeholder="Username"';
    private pwdTxtLoc = 'placeholder="Password"';
    private loginBtnLoc = '.orangehrm-login-button';

    async login(userName, password) {

        await this.fill(this.userNameTxtLoc, 'Admin');
        await this.fill(this.pwdTxtLoc, 'admin123');
        await this.click(this.loginBtnLoc);
    }
}