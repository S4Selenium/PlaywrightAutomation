import { Page } from "@playwright/test";

export default class InteractionsPage {

   private page: Page;
   constructor(page: Page) {
      this.page = page;
   }

   //Locators 
   public get StartOptn() {
      const ElementOption = this.page.locator("#startStopButton")
      if (ElementOption != null) {
         return ElementOption;
      } else throw new Error("No Such Element")
   }

   public get Progress() {
      const Pbar = this.page.getByText("Progress Bar")
      if (Pbar != null) {
         return Pbar;
      } else throw new Error("No Such Element")
   }

   public get PBar() {
      const Prbar = this.page.locator("//div[@class='main-header']")
      if (Prbar != null) {
         return Prbar;
      } else throw new Error("No Such Element")
   }

   public get Status() {
      const percentage = this.page.getByText('100%')
      if (percentage != null) {
         return percentage;
      } else throw new Error("No Such Element")
   }


   public get Tooltips() {
      const tool = this.page.getByText('Tool Tips')
      if (tool != null) {
         return tool;
      } else throw new Error("No Such Element")
   }

   public get HoverOption() {
      const hover = this.page.getByRole('button', { name: 'Hover me to see' })
      if (hover != null) {
         return hover;
      } else throw new Error("No Such Element")
   }

   public get Hovermsg() {
      const hovermg = this.page.locator("//button[@aria-describedby='buttonToolTip']")
      if (hovermg != null) {
         return hovermg;
      } else throw new Error("No Such Element")
   }

   public get Droppable() {
      const Drop = this.page.getByText('Droppable')
      if (Drop != null) {
         return Drop;
      } else throw new Error("No Such Element")
   }

   public get Drag() {
      const dragging = this.page.locator("//div[@id='draggable']")
      if (dragging != null) {
         return dragging;
      } else throw new Error("No Such Element")
   }

   public get Drop() {
      const Dropping = this.page.locator("(//div[@id='droppable'])").nth(0)
      if (Dropping != null) {
         return Dropping;
      } else throw new Error("No Such Element")
   }

   //functions
   public async ClickOnDroppable() {
      const ele = await this.Droppable;
      await ele?.click();
   }

   public async ClickOnProgress() {
      const ele = await this.Progress;
      await ele?.click();
   }

   public async ClickOnToolTips() {
      const ele = await this.Tooltips;
      await ele?.click();
   }

   public async ClickOnStartOption() {
      const ele = await this.StartOptn;
      await ele?.click();
   }

   public async ClickOnFormOption() {
      //  const ele = await this.FormOptn;
      //  await ele?.click();
   }
}