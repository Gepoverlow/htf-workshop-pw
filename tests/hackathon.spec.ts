import { expect } from "@playwright/test";
import { test } from "../fixtures/pages.fixture";
import { describe } from "node:test";
import { StartPage } from "../pages/StartPage";

describe('hackathon', () => {

  test.beforeEach(async ({ startPage }) => {
    await startPage.goTo();
  });

  test('shouldShowCorrectPageTitle', async ({ startPage }) => {
    await expect(startPage.title).toBeVisible();
  });

  test('shouldShowOkAfterStartClick', async ({ startPage }) => {
    await startPage.clickActionButton();

    await expect(startPage.okText).toBeVisible();
  });

  test('shouldHideBignitedLogo', async ({ startPage }) => {
    await startPage.clickActionButton();

    await expect(startPage.bignitedLogo).toHaveCount(0, {timeout: 10000});
  });

});
