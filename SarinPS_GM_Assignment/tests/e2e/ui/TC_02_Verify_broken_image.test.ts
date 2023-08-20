import { Browser, BrowserContext, Page, chromium, expect, test } from "@playwright/test"
import Env from "../../../utils/environment";
import HomePage from "../../../page/Home.page";
import ElementsPage from "../../../page/Elements.page";
test.describe("DEMOQAAutomation", () => {

    let browser: Browser;
    let context: BrowserContext;
    let page: Page;
    let home: HomePage;
    let ele: ElementsPage;

    test.beforeAll(async () => {
        browser = await chromium.launch({
            headless: false
        });
        context = await browser.newContext()
        page = await context.newPage();
        await page.goto(Env.test);
        home = new HomePage(page);
        ele = new ElementsPage(page);

    })
    test("TC_02 Verify broken image", async () => {

        await expect(page).toHaveURL(Env.test)
        await page.waitForLoadState("domcontentloaded");
        await expect.soft(page.getByText('Elements', { exact: true })).toContainText('Elements');
        await home.ClickOnElementOption();
        await ele.ClickOnBrkImg();
        const images = ele.bImage;
        console.log(await images.count() + " Is the count of total Images");
        const allImages = await images.all();
        for await (const img of allImages) {
            const imgSrc = await img.getAttribute("src");
            expect.soft(imgSrc?.length).toBeGreaterThan(1);
            console.log(await imgSrc)
            //@ts-ignore
            if ((imgSrc?.length) > 1) {
                const res = await page.request.get(Env.test + imgSrc)
                await expect(res.status(), "Failed to Load" + imgSrc).toBe(200);
                console.log(res.status())
                console.log("Verified")
            }
        }
    })
})