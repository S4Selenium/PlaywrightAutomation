import { Page } from "@playwright/test";

export default class HomePage {

   private page: Page;
   constructor(page: Page) {
      this.page = page;
   }

   //Locators
   public get eleOptn() {
      const ElementOption = this.page.locator("(//*[local-name()='svg'])").nth(0);
      if (ElementOption != null) {
         return ElementOption;
      } else throw new Error("No Such Element")
   }


   public get WidgetOptn() {
      const WidOption = this.page.locator("(//*[local-name()='svg'])").nth(3)
      if (WidOption != null) {
         return WidOption;
      } else throw new Error("No Such Element")
   }


   public get InteractionsOptn() {
      const InterOption = this.page.locator("(//*[local-name()='svg'])").nth(4)
      if (InterOption != null) {
         return InterOption;
      } else throw new Error("No Such Element")
   }


   public get FormOptn() {
      const FormOption = this.page.locator("(//*[local-name()='svg'])").nth(1)
      if (FormOption != null) {
         return FormOption;
      } else throw new Error("No Such Element")
   }


   //functions
   public async ClickOnInteractions() {
      const ele = await this.InteractionsOptn;
      await ele?.click();
   }
   public async ClickOnElementOption() {
      const ele = await this.eleOptn;
      await ele?.click();
   }

   public async ClickOnFormOption() {
      const ele = await this.FormOptn;
      await ele?.click();
   }

   public async ClickOnWidgetOption() {
      const ele = await this.WidgetOptn;
      await ele?.click();
   }
}