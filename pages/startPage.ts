import { Locator, Page } from "@playwright/test";

export class StartPage {
    readonly page: Page;
    readonly actionButton: Locator;
    title: Locator;
    okText: Locator;

    constructor(page: Page) {
        this.page = page;
        this.actionButton = page.locator('#action-button');
        this.title = page.getByText('Hackathon');
        this.okText = page.getByText('Ok');
    }

    async goTo() {
        await this.page.goto('/');
    };

    async clickActionButton() {
        await this.actionButton.click();
    };
}