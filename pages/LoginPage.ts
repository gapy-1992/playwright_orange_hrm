import { locatorProcessor } from "../utils/LocatorProcessor";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
    private userNameTxtLoc = 'placeholder="Username"';
    private pwdTxtLoc = 'placeholder="Password"';
    private loginBtnLoc = '.orangehrm-login-button';
    readonly
    async login(userName, password) {
        await this.fill(this.userNameTxtLoc, userName);
        await this.fill(this.pwdTxtLoc, password);
        await this.click(this.loginBtnLoc);
    }
}