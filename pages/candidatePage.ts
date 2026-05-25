import {type Locator, expect, type Page } from '@playwright/test';

export class CandidatePage {
    readonly page: Page;
    readonly addButton: Locator
    readonly firstNameInput: Locator
    readonly middleNameInput: Locator
    readonly lastNameInput: Locator
    readonly emailInput: Locator
    readonly saveButton: Locator 


   constructor(page: Page) {
        this.page = page;
        this.addButton = page.getByRole('button', { name: 'Add' })
        this.firstNameInput = page.getByRole('textbox', { name: 'First Name' })
        this.middleNameInput = page.getByRole('textbox', { name: 'Middle Name' })
        this.lastNameInput = page.getByRole('textbox', { name: 'Last Name' })
        this.emailInput = page.getByRole('textbox', { name: 'Type here' }).first()
        this.saveButton = page.getByRole('button', { name: 'Save' })
   }

   async addCandidate(candidate: {firstName: string, middleName: string, lastName: string, email: string}) {
    await this.addButton.click();
    await this.firstNameInput.fill(candidate.firstName);
    await this.middleNameInput.fill(candidate.middleName);
    await this.lastNameInput.fill(candidate.lastName);
    await this.emailInput.fill(candidate.email);
    await this.saveButton.click();
    await expect(this.page.getByText('Successfully Saved')).toBeVisible();
}


}