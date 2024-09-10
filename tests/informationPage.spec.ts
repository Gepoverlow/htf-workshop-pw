import { test } from "../fixtures/pages.fixture";
import { describe } from "node:test";


describe('informationPage', () => {
    
    test.beforeEach(async ({ informationPage }) => {
        informationPage.goTo();
    });

    
})