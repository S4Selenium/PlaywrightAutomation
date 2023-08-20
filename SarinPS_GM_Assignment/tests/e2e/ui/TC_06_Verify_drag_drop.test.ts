import { Browser, BrowserContext, Page, chromium, expect, test } from "@playwright/test"
import Env from "../../../utils/environment";
import HomePage from "../../../page/Home.page";
import ElementsPage from "../../../page/Elements.page";
import InteractionsPage from "../../../page/Interactions.page";

test.describe("DEMOQAAutomation", () => {

    let browser: Browser;
    let context: BrowserContext;
    let page: Page;
    let home: HomePage;
    let ele: ElementsPage;
    let Inter: InteractionsPage

    test.beforeAll(async () => {
        browser = await chromium.launch({
            headless: false
        });
        context = await browser.newContext()
        page = await context.newPage();
        await page.goto(Env.test);
        home = new HomePage(page);
        ele = new ElementsPage(page);
        Inter = new InteractionsPage(page)

    })
    test("TC_06 Verify user can drag and drop", async () => {

        await expect(page).toHaveURL(Env.test)
        await home.ClickOnInteractions()
        await expect.soft(Inter.Droppable).toContainText('Droppable');
        await Inter.ClickOnDroppable()
        const src = await Inter.Drag;
        const dst = await Inter.Drop;
        await src.dragTo(dst)

    })

})

