import { Locator, Page } from "@playwright/test";

export class StartPage {
    readonly page: Page;
    readonly actionButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.actionButton = page.locator('#action-button');
    }

    async goTo() {
        await this.page.goto('/');
    }
}