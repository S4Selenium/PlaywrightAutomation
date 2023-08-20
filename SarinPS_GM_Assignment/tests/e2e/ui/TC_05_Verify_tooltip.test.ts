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
    test("TC_05Verify the tooltip", async () => {

        await expect(page).toHaveURL(Env.test)
        await home.ClickOnWidgetOption();
        await expect.soft(Inter.Tooltips).toContainText('Tool Tips');
        await Inter.ClickOnToolTips()
        const HoverOpt = await Inter.HoverOption.isVisible()
        expect.soft(HoverOpt).toBeTruthy()
        const HoverButton = await Inter.HoverOption;
        await HoverButton.hover();
        await page.waitForLoadState("domcontentloaded");
        await page.waitForTimeout(3000);
        const Hovermessage = await Inter.Hovermsg.isVisible()
        expect.soft(Hovermessage).toBeTruthy()
    })
})