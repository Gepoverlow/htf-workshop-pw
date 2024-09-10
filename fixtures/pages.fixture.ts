import { StartPage } from "../pages/StartPage";
import { test as base } from '@playwright/test';

type PageFixture = {
	startPage: StartPage;
};

export const test = base.extend<PageFixture>({
	startPage: async ({ page }, use) => {
		await use(new StartPage(page));
	}
});