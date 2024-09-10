import { expect } from "@playwright/test";
import { test } from "../fixtures/pages.fixture";

test('shouldShowCorrectPageTitle', async ({ startPage }) => {
  await startPage.goTo();

  await expect(startPage.title).toBeVisible();
});
