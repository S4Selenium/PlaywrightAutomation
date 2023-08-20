import { Page } from "@playwright/test";

export default class FormPage {

   private page: Page;
   constructor(page: Page) {
      this.page = page;
   }

   //Locators

   public get PracticeForm() {
      const Practice = this.page.getByText('Practice Form')
      if (Practice != null) {
         return Practice;
      } else throw new Error("No Such Element")
   }

   public get FormFname() {
      const FormFirstName = this.page.locator("#firstName");
      if (FormFirstName != null) {
         return FormFirstName;
      } else throw new Error("No Such Element")
   }


   public get FormLname() {
      const FormLastName = this.page.locator("#lastName");
      if (FormLastName != null) {
         return FormLastName;
      } else throw new Error("No Such Element")
   }

   public get Address() {
      const adrs = this.page.locator("#currentAddress");
      if (adrs != null) {
         return adrs;
      } else throw new Error("No Such Element")
   }

   public get FormEmail() {
      const Femail = this.page.locator("#userEmail");
      if (Femail != null) {
         return Femail;
      } else throw new Error("No Such Element")
   }


   public get Rbutton() {
      const RadioBtn = this.page.locator("//label[@for='gender-radio-1']");
      if (RadioBtn != null) {
         return RadioBtn;
      } else throw new Error("No Such Element")
   }


   public get MobileNum() {
      const Number = this.page.locator("#userNumber");
      if (Number != null) {
         return Number;
      } else throw new Error("No Such Element")
   }

   public get CheckBox() {
      const checkBx = this.page.locator("//label[@for='hobbies-checkbox-2']");
      if (checkBx != null) {
         return checkBx;
      } else throw new Error("No Such Element")
   }

   public get UploadImage() {
      const Images = this.page.locator("input[id='uploadPicture']");
      if (Images != null) {
         return Images;
      } else throw new Error("No Such Element")
   }


   public get State() {
      const stat = this.page.locator("//div[contains(text(),'Select State')]");
      if (stat != null) {
         return stat;
      } else throw new Error("No Such Element")
   }


   public get selectState() {
      const currentstate = this.page.getByText("Select State")
      if (currentstate != null) {
         return currentstate;
      } else throw new Error("No Such Element")
   }


   public get selectOptn() {
      const Optn = this.page.locator("#react-select-3-option-0")
      if (Optn != null) {
         return Optn;
      } else throw new Error("No Such Element")
   }

   public get selectCityOptn() {
      const cityOptn = this.page.locator("#react-select-4-option-0")
      if (cityOptn != null) {
         return cityOptn;
      } else throw new Error("No Such Element")
   }

   public get City() {
      const cty = this.page.locator("//div[contains(text(),'Select City')]");
      if (cty != null) {
         return cty;
      } else throw new Error("No Such Element")
   }

   public get selectCity() {
      const currentcity = this.page.getByText("Select City")
      if (currentcity != null) {
         return currentcity;
      } else throw new Error("No Such Element")
   }

   public get Calendar() {
      const calLocator = this.page.locator("#dateOfBirthInput")
      if (calLocator != null) {
         return calLocator;
      } else throw new Error("No Such Element")
   }


   public get SubmitBtn() {
      const Sbtn = this.page.locator("#submit")
      if (Sbtn != null) {
         return Sbtn;
      } else throw new Error("No Such Element")
   }

   public get SuccessMsg() {
      const locatorele = this.page.locator("#example-modal-sizes-title-lg")
      if (locatorele != null) {
         return locatorele;
      } else throw new Error("No Such Element")
   }

   //functions

   public async ClickOnSubmitBtn() {
      const ele = await this.SubmitBtn;
      await ele?.click();
   }

   public async ClickOnCityOptn() {
      const ele = await this.selectCityOptn;
      await ele?.click();
   }

   public async ClickOnStateOptn() {
      const ele = await this.selectOptn;
      await ele?.click();
   }

   public async ClickOnState() {
      const ele = await this.selectState;
      await ele?.click();
   }

   public async ClickOnCity() {
      const ele = await this.selectCity;
      await ele?.click();
   }

   public async ClickOnPracForm() {
      const ele = await this.PracticeForm;
      await ele?.click();
   }


   public async enterMobileNum(num: string) {
      const ele = await this.MobileNum;
      await ele?.fill(num);
   }

   public async enterDOB(num: string) {
      const ele = await this.Calendar;
      await ele?.fill(num);
   }

   public async enterPath(Path: string) {
      const ele = await this.UploadImage;
      await ele?.fill(Path);
   }


   public async typeEmail(email: string) {
      const ele = await this.FormEmail;
      await ele?.fill(email);
   }


   public async TypeAddress(addrs: string) {
      const ele = await this.Address;
      await ele?.fill(addrs);
   }


   public async typeFormFname(namefirst: string) {
      const ele = await this.FormFname;
      await ele?.fill(namefirst);
   }

   public async typeFormLname(nameLast: string) {
      const ele = await this.FormLname;
      await ele?.fill(nameLast);
   }


   public async ClickOnRadioBtn() {
      const ele = await this.Rbutton;
      await ele?.click();
   }
   public async ClickOnCheckBx() {
      const ele = await this.CheckBox;
      await ele?.click();
   }
}