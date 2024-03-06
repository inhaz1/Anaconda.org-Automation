//Signup.spec.ts
import { test } from '@pagesetup';
import * as SignPage from '../pages/anaconda.org/Signup.page';
import { expectElementToBeAttached } from 'vasu-playwright-utils';
import {
  Signup_eminvalidCredentials,
  Signup_newCredentials,
  Signup_oldunCredentials,
} from '@testdata/inha-anaconda.org-test-data';

test.describe('Tests for successful, unsuccessful Signup @smoke', () => {
  test.beforeEach('Navigating to orgPage', async () => {
    await SignPage.Registerclick();
  });

  test('Signup page new', async ({ page }) => {
    await SignPage.Signup(Signup_newCredentials);
    await expectElementToBeAttached(page.getByText('Confirm Email'), 'Successful Signup');
  });

  test('Signup page with existing email', async ({ page }) => {
    await SignPage.Signup(Signup_eminvalidCredentials);
    await expectElementToBeAttached(page.locator("//small[@id='email-error']"), 'Invalid Email');
    //await expectElementToBeAttached(page.getByText("Confirm Email"),"Successful Signup");
  });

  test('Signup page with existing Username', async ({ page }) => {
    await SignPage.Signup(Signup_oldunCredentials);
    await expectElementToBeAttached(page.locator("//small[@id='username-error']"), 'Invalid Email');
    //await expectElementToBeAttached(page.getByText("Confirm Email"),"Successful Signup");
  });

  test('Signup page without checkboxes', async ({ page }) => {
    await SignPage.Signupwithoutcheckboxes(Signup_oldunCredentials);
    await expectElementToBeAttached(page.locator("//small[@id='accept_terms-error']"), 'Invalid Email');
    await expectElementToBeAttached(
      page.locator("//small[normalize-space()='The response parameter is missing.']"),
      'Invalid Email',
    );
    // await expectElementToBeAttached(page.getByText("Confirm Email"),"Successful Signup");
  });
});
