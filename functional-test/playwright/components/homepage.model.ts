import { Locator, Page } from "@playwright/test";

export class home {

    static readonly MACBOOKAIR = '[data-globalnav-item-name="mac"]';

    readonly macBookAir: Locator;


    constructor(page: Page) {
        this.macBookAir = page.locator(home.MACBOOKAIR);

    }
}

