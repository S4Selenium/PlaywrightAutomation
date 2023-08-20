import { Browser, BrowserContext, Page, chromium, expect, test } from "@playwright/test"
import Env from "../../../utils/environment";
import HomePage from "../../../page/Home.page";
import ElementsPage from "../../../page/Elements.page";
import Data from "../../../Data/TC_01_newData.json";

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

    test("TC_01a Verify user can enter new data into the table", async () => {

        await expect(page).toHaveURL(Env.test)
        await expect.soft(page.getByText('Elements', { exact: true })).toContainText('Elements');
        await home.ClickOnElementOption();
        await expect.soft(ele.eleWebTable).toContainText('Web Tables');
        await ele.ClickOnWebTables();
        await expect.soft(ele.AddBtn).toHaveText('Add')
        await ele.ClickOnAddOption();
        await ele.enterFname(Data.first_name)
        const Lname = await ele.Lname.isVisible()
        expect.soft(Lname).toBeTruthy()
        await ele.enterLname(Data.last_name);
        const ageField = await ele.Age.isVisible()
        expect.soft(ageField).toBeTruthy()
        await ele.enterage(Data.age);
        const EmailField = await ele.email.isVisible()
        expect.soft(EmailField).toBeTruthy()
        await ele.enteremail(Data.email)
        const SalaryField = await ele.Salary.isVisible()
        expect.soft(SalaryField).toBeTruthy()
        await ele.entersalary(Data.salary)
        const DeptField = await ele.Dept.isVisible()
        expect.soft(DeptField).toBeTruthy()
        await ele.enterdept(Data.Dept);
    })


    test("TC_01b Verify user can edit the row in a table", async () => {

        await page.goto(Env.test);
        await expect(page).toHaveURL(Env.test)
        await expect.soft(page.getByText('Elements', { exact: true })).toContainText('Elements');
        await home.ClickOnElementOption();
        await expect.soft(ele.eleWebTable).toContainText('Web Tables');
        const WebTbl = await ele.eleWebTable.isVisible()
        expect.soft(WebTbl).toBeTruthy()
        await ele.ClickOnWebTables();
        const EditOpt = await ele.EditOption.isVisible()
        expect.soft(EditOpt).toBeTruthy()
        await ele.ClickOnEditOptn();
        const Frstname = await ele.Fname.isVisible()
        expect.soft(Frstname).toBeTruthy()
        await ele.enterFname(Data.Updated_Fname);
        const Lstname = await ele.Lname.isVisible()
        expect.soft(Lstname).toBeTruthy()
        await ele.enterLname(Data.Updated_Lname)
        const Sbutt = await ele.SubmitBtn.isVisible()
        expect.soft(Sbutt).toBeTruthy()
        await ele.ClickOnSbutton();
    })

})




