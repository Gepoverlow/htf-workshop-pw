import { Locator, Page } from "@playwright/test";

export class StartPage {
    readonly page: Page;
    readonly actionButton: Locator;
    readonly body: Locator;
    title: Locator;
    okText: Locator;
    bignitedLogo: Locator;
    transitionText: Locator;
    heartsContainer: Locator;

    constructor(page: Page) {
        this.page = page;
        this.actionButton = page.locator('#action-button');
        this.body = page.locator('body');
        this.title = page.getByText('Hackathon');
        this.okText = page.getByText('Ok');
        this.bignitedLogo = page.locator('.logo');
        this.transitionText = page.locator('.typing');
        this.heartsContainer = page.locator('.hearts-container');
    }

    async goTo() {
        await this.page.goto('/');
    };

    async clickActionButton() {
        await this.actionButton.click();
    };

    async clickBody() {
        await this.body.click();
    };
}