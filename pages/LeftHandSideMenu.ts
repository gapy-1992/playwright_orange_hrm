import { Locator, Page } from "@playwright/test";
import { error } from "console";

export class LeftHandSideMenu {
    readonly page;
    private navBtns: Record<string, Locator>;

    constructor(page: Page) {
        this.page = page;
        const buttonNames = [
            'Admin',
            'PIM',
            'Leave',
            'Time',
            'Recruitment',
            'My Info',
            'Performance',
            'Dashboard',
            'Directory',
            'Maintenance',
            'Claim',
            'Buzz'
        ];

        this.navBtns = buttonNames.reduce((buttons, btnName) => {
            buttons[btnName] = page.getByRole('link', { name: btnName })
            return buttons;
        }, {} as Record<string, Locator>)
    }

    async getNavButtonByName(name: string) {
        if (!this.navBtns[name]) {
            throw new error(`Nav link name not correct: ${name}`);
        }
        return this.navBtns[name];
    }
}