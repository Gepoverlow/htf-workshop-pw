import { Locator, Page } from "playwright";

export class InformationPage {
    readonly page: Page;
    form: Locator;

    constructor(page: Page) {
        this.page = page;
        this.form = page.getByRole('form');
    }

    
}