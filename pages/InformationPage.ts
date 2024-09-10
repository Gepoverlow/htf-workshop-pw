import { Locator, Page } from "playwright";

export class InformationPage {
    readonly page: Page;
    form: Locator;
    readonly url = "http://hackthefuture.bignited.be/information";

    constructor(page: Page) {
        this.page = page;
        this.form = page.locator('.flickering-text');
    }

    async goTo() {
        this.page.goto(this.url);
    }
}