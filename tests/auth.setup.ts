/// <reference types="node" />
import {test as setup, expect} from '@playwright/test';
import path from 'path';


const authFile = path.join(__dirname, 'auth.json');

setup('auth', async ({page}) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  await page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

    await page.context().storageState({ path: authFile });

});