import { Browser, BrowserContext, Page, chromium, expect, test } from "@playwright/test"
import Env from "../../../utils/environment";
import HomePage from "../../../page/Home.page";
import ElementsPage from "../../../page/Elements.page";
import FormPage from "../../../page/Forms.page";
import Data from "../../../Data/TC_01_newData.json";

const filepath1 = process.cwd() + "/Images/quotes.jpg";

test.describe("DEMOQAAutomation", () => {

    let browser: Browser;
    let context: BrowserContext;
    let page: Page;
    let home: HomePage;
    let ele: ElementsPage;
    let form: FormPage;

    test.beforeAll(async () => {
        browser = await chromium.launch({
            headless: false
        });
        context = await browser.newContext()
        page = await context.newPage();
        await page.goto(Env.test);
        home = new HomePage(page);
        ele = new ElementsPage(page);
        form = new FormPage(page);
    })

    test("TC_03 Verify user can submit the form", async () => {

        await expect(page).toHaveURL(Env.test)
        await expect.soft(page.getByText('Forms', { exact: true })).toContainText('Forms');
        await home.ClickOnFormOption()
        await expect.soft(form.PracticeForm).toContainText('Practice Form');
        await form.ClickOnPracForm()
        const Fname = await form.FormFname.isVisible()
        expect.soft(Fname).toBeTruthy()
        await form.typeFormFname(Data.fname);
        const Lname = await form.FormLname.isVisible()
        expect.soft(Lname).toBeTruthy()
        await form.typeFormLname(Data.lname)
        const Email = await form.FormEmail.isVisible()
        expect.soft(Email).toBeTruthy()
        await form.typeEmail(Data.mail)
        const Radiobutton = await form.Rbutton.isVisible()
        expect.soft(Radiobutton).toBeTruthy()
        await form.ClickOnRadioBtn()
        const Phnum = await form.MobileNum.isVisible()
        expect.soft(Phnum).toBeTruthy()
        await form.enterMobileNum(Data.mobile_no)
        const Checkbox = await form.CheckBox.isVisible()
        expect.soft(Checkbox).toBeTruthy()
        await form.ClickOnCheckBx()
        const UploadBtn = await form.UploadImage.isVisible()
        expect.soft(UploadBtn).toBeTruthy()
        await page.setInputFiles("input[id='uploadPicture']", [filepath1])
        const AddBox = await form.Address.isVisible()
        expect.soft(AddBox).toBeTruthy()
        await form.TypeAddress(Data.address)
        const StateDropdown = await form.State.isVisible()
        expect.soft(StateDropdown).toBeTruthy()
        await form.ClickOnState();
        await page.waitForLoadState('domcontentloaded')
        await form.ClickOnStateOptn();
        const CityDropdown = await form.City.isVisible()
        expect.soft(CityDropdown).toBeTruthy()
        await form.ClickOnCity();
        await page.waitForLoadState('domcontentloaded')
        await form.ClickOnCityOptn();
        const Cal = await form.Calendar.isVisible()
        expect.soft(Cal).toBeTruthy()
        await form.enterDOB(Data.DOB)
        const SubmitButton = await form.SubmitBtn.isVisible()
        expect.soft(SubmitButton).toBeTruthy()
        await form.SubmitBtn.scrollIntoViewIfNeeded();
        await form.ClickOnSubmitBtn();
        await page.waitForLoadState("domcontentloaded");
        await expect.soft(form.SuccessMsg).toHaveText(Data.message);

    })
})
