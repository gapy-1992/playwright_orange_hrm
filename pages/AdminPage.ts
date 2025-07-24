import { expect, Locator, Page } from "@playwright/test";
import { error } from "console";

export class AdminPage {
    private addBtn: Locator;
    readonly page: Page; // important 
    private inputFields: Record<string, Locator>;
    constructor(page: Page) {
        this.page = page; //important 
        const textBoxName = [
            'Employee Name',
            'Username',
            'Password',
            'Confirm Password'
        ]
        this.inputFields = textBoxName.reduce((textBoxes, fieldName) => {
            textBoxes[fieldName] = this.page.locator(`.oxd-input-group:has-text("${fieldName}") input`);
            return textBoxes
        }, {} as Record<string, Locator>);
    };

    async waitForLoad() {
        await this.page.waitForSelector('.orangehrm-background-container', { state: 'visible' });
    }

    async clickAddUser() {
        await this.page.getByRole('button', { name: 'Add' }).click();
    }

    async inputEmployeeName(name: string) {
        await this.page.getByPlaceholder('Type for hints...', { exact: true }).pressSequentially(`${name}`, { delay: 100 })
        await this.page.getByRole('option', { name: `${name}` }).click();

    }

    async selectUserRole(roleName: string) {
        await this.page.locator('.oxd-select-text').first().click();
        await this.page.getByRole('option', { name: roleName }).click();
    }

    async selectStatus(statusName: string) {
        await this.page.locator('.oxd-select-text').last().click();
        await this.page.getByRole('option', { name: statusName }).click();
    }

    async fillUserName(userName: string) {
        const txtUserName = this.inputFields['Username'];
        expect(txtUserName).toBeVisible();
        await txtUserName.fill(userName);
    }

    async fillPassword(password: string) {
        const txtPwd = this.inputFields['Password'].first();
        expect(txtPwd).toBeVisible();
        await txtPwd.fill(password);
    }

    async fillConfirmPassword(password: string) {
        const txtPwd = this.inputFields['Confirm Password'].last();
        expect(txtPwd).toBeVisible();
        await txtPwd.fill(password);
    }

    async clickSave() {
        await this.page.locator('button[type="submit"]').click();
    }

} 