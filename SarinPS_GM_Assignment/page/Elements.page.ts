import { Page } from "@playwright/test";

export default class ElementsPage {

   private page: Page;
   constructor(page: Page) {
      this.page = page;
   }

   //Locators
   public get eleWebTable() {
      const ElementWebtable = this.page.getByText('Web Tables');
      if (ElementWebtable != null) {
         return ElementWebtable;
      } else throw new Error("No Such Element")
   }
   public get AddBtn() {
      const AddOption = this.page.getByRole('button', { name: 'Add' })
      if (AddOption != null) {
         return AddOption;
      } else throw new Error("No Such Element")
   }


   public get Fname() {
      const FirstName = this.page.locator("#firstName");
      if (FirstName != null) {
         return FirstName;
      } else throw new Error("No Such Element")
   }

   public get Lname() {
      const LastName = this.page.locator("#lastName");
      if (LastName != null) {
         return LastName;
      } else throw new Error("No Such Element")
   }


   public get Age() {
      const Perage = this.page.locator("#age");
      if (Perage != null) {
         return Perage;
      } else throw new Error("No Such Element")
   }


   public get email() {
      const Pemail = this.page.locator("#userEmail");
      if (Pemail != null) {
         return Pemail;
      } else throw new Error("No Such Element")
   }

   public get Salary() {
      const Psalary = this.page.locator("#salary");
      if (Psalary != null) {
         return Psalary;
      } else throw new Error("No Such Element")
   }

   public get Dept() {
      const PDept = this.page.locator("#department");
      if (PDept != null) {
         return PDept;
      } else throw new Error("No Such Element")
   }


   public get BrokenImg() {
      const BrkImg = this.page.getByText("Broken Links - Images");
      if (BrkImg != null) {
         return BrkImg;
      } else throw new Error("No Such Element")
   }


   public get bImage() {
      const Images = this.page.locator("img");
      if (Images != null) {
         return Images;
      } else throw new Error("No Such Element")
   }

   public get EditOption() {
      const editBtn = this.page.locator("(//*[local-name()='svg'])[49]")
      if (editBtn != null) {
         return editBtn;
      } else throw new Error("No Such Element")
   }

   public get SubmitBtn() {
      const Sbutton = this.page.getByText("Submit")
      if (Sbutton != null) {
         return Sbutton;
      } else throw new Error("No Such Element")
   }

   //Submit
   public async ClickOnSbutton() {
      const ele = await this.SubmitBtn;
      await ele?.click();
   }

   public async ClickOnEditOptn() {
      const ele = await this.EditOption;
      await ele?.click();
   }

   public async ClickOnBrkImg() {
      const ele = await this.BrokenImg;
      await ele?.click();
   }


   public async enterdept(department: string) {
      const ele = await this.Dept;
      await ele?.fill(department);
   }

   public async entersalary(salary: string) {
      const ele = await this.Salary;
      await ele?.fill(salary);
   }


   public async enteremail(email: string) {
      const ele = await this.email;
      await ele?.fill(email);
   }


   public async enterage(age: string) {
      const ele = await this.Age;
      await ele?.fill(age);
   }


   public async enterFname(namefirst: string) {
      const ele = await this.Fname;
      await ele?.fill(namefirst);
   }

   public async enterLname(nameLast: string) {
      const ele = await this.Lname;
      await ele?.fill(nameLast);
   }


   public async ClickOnWebTables() {
      const ele = await this.eleWebTable;
      await ele?.click();
   }
   public async ClickOnAddOption() {
      const ele = await this.AddBtn;
      await ele?.click();
   }
}