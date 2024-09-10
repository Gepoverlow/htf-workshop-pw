import { InformationPage } from "../pages/informationPage";
import { StartPage } from "../pages/StartPage";
import { test as base } from '@playwright/test';

type PageFixture = {
	startPage: StartPage;
	informationPage: InformationPage;
};

export const test = base.extend<PageFixture>({
	startPage: async ({ page }, use) => {
		await use(new StartPage(page));
	},
	informationPage: async ({ page }, use) => {
		await use(new InformationPage(page));
	}
});