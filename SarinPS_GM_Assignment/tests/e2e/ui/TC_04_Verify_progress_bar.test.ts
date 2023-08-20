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
    test("TC_04Verify the progress bar", async () => {

        await expect(page).toHaveURL(Env.test)
        await home.ClickOnWidgetOption();
        await expect.soft(Inter.Progress).toContainText('Progress Bar');
        await Inter.ClickOnProgress()
        const StartBtn = await Inter.StartOptn.isVisible()
        expect.soft(StartBtn).toBeTruthy()
        await Inter.ClickOnStartOption()
        const ProgressBar = await Inter.PBar.isVisible()
        expect.soft(ProgressBar).toBeTruthy()
        await page.waitForLoadState("domcontentloaded");
        await page.waitForTimeout(7000);
        await expect.soft(Inter.Status).toContainText('100%');

    })
})