import { Locator, Page } from "@playwright/test";

export class StartPage {
    readonly page: Page;
    readonly actionButton: Locator;
    title: Locator;

    constructor(page: Page) {
        this.page = page;
        this.actionButton = page.locator('#action-button');
        this.title = page.getByText('Hackathon');
    }

    async goTo() {
        await this.page.goto('/');
    }

    async start() {
        await this.actionButton.click();
    }
}