import { expect } from "@playwright/test";
import { test } from "../fixtures/pages.fixture";
import { describe } from "node:test";

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

});
