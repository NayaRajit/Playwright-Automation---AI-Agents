import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://login.microsoftonline.com/04f57c82-713c-494b-8ae3-b4c3654da6dd/oauth2/v2.0/authorize?client_id=9672ab8e-54c9-4641-a910-8e0f18063240&scope=api%3A%2F%2F36efe451-0ad0-49eb-ab7f-5ce4c8c7b6ce%2Faccess_as_user%20openid%20profile%20offline_access&redirect_uri=https%3A%2F%2Fnayabugfixtesting.z20.web.core.windows.net&client-request-id=019f1772-07ce-7a8c-8c91-32385ab2e4ff&response_mode=fragment&client_info=1&clidata=1&nonce=019f1772-07d5-7c73-bc93-f050b171eb07&state=eyJpZCI6IjAxOWYxNzcyLTA3ZDQtNzRiYS1iZTU1LWI3NzAyYzNlZjEzZCIsIm1ldGEiOnsiaW50ZXJhY3Rpb25UeXBlIjoicmVkaXJlY3QifX0%3D&x-client-SKU=msal.js.browser&x-client-VER=4.30.0&x-app-name=NayaWeb(A12)&response_type=code&code_challenge=6tmJeOTQlMUoOocS0_pthm5UpWLUGO8JMYj0tSIuu4s&code_challenge_method=S256&sso_reload=true');
  await page.getByRole('textbox', { name: 'Enter your email, phone, or' }).click();
  await page.getByRole('textbox', { name: 'Enter your email, phone, or' }).fill('rajit.maharjan@nayauser.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Enter the password for rajit.' }).click();
  await page.locator('#i0118').fill('R');
  await page.getByRole('textbox', { name: 'Enter the password for rajit.' }).fill('Razeet9818161010@$$');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByText('Don\'t show this again').click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.goto('https://nayabugfixtesting.z20.web.core.windows.net/#/matter/lND/recent');
  await page.getByText('Test matter - CodeGen -').click();
  await page.getByRole('combobox', { name: 'Open' }).click();
  await page.getByRole('option', { name: 'Closed' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Rajit.Maharjan@nayauser.com ' }).click();
  await page.getByRole('button', { name: 'Rajit.Maharjan@nayauser.com ' }).click();
  await page.locator('a').filter({ hasText: 'Logout' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
});