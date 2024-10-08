import { expect } from "@playwright/test";
import { test } from "../fixtures/pages.fixture";
import { describe } from "node:test";

describe('StartPage', () => {

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

    await expect(startPage.bignitedLogo).toHaveCount(0, { timeout: 10000 });
  });

  test('shouldShouldTransitionMessageAfterEarthClick', async ({ startPage }) => {
    await startPage.clickActionButton();

    await startPage.clickBody();

    await expect(startPage.transitionText).toBeVisible();
    await expect(startPage.transitionText).toContainText('Before you start your mission we need a few details', { timeout: 30000 })
  });

  test('shouldGoToInformationPage', async ({ startPage, informationPage }) => {
    await startPage.clickActionButton();
    await startPage.clickBody();

    await expect(startPage.heartsContainer).toBeVisible({ timeout: 10000 });

    await expect(informationPage.form).toBeVisible({ timeout: 15000 });
  });

  test('shouldSkipToInformationPageAfterClick', async ({ startPage, informationPage }) => {
    await startPage.clickActionButton();
    await startPage.clickBody();

    await startPage.clickSkipTransitionButton();

    await expect(informationPage.form).toBeVisible({ timeout: 15000 });
  });

  test('shouldBeOnInformationPage', async ({ startPage, informationPage }) => {
    await startPage.clickActionButton();
    await startPage.clickBody();

    await startPage.clickSkipTransitionButton();

    await expect(informationPage.page).toHaveURL('/information');
  });

});
