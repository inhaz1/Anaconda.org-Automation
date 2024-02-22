import { test } from '@pagesetup';
import * as LoginPage from '../pages/anaconda.org/login-page';
import * as landing from '../pages/anaconda.org/landing-page';
import * as search from '../pages/anaconda.org/search.page';
/*
 To run the tests in parallel, you can utilize the test.describe.configure() method to set the mode to 'parallel'.
 By default, the tests will run sequentially when fullyParallel: false is set in playwright.config.
 The tests will not be skipped upon encountering a failure expect when the mode is set to 'serial'.
*/

//=================================================== Search testcase ========================================//
test.describe('search cases @Regression', () => {
  test('Testing invalid search before login', async () => {
    await search.SearchInValidDataBeforLogin();
  });

  test('Testing empty search before login', async () => {
    await search.SearchEmptyDataBeforLogin();
  });

  test('Testing valid search before login', async () => {
    await search.SearchValidDataBeforLogin();
  });

  test('Testing invalid search after login', async () => {
    await landing.navigateToLoginPage();
    await LoginPage.loginWithValidCredentials();
    await search.SearchInvalidDataAfterLogin();
  });

  test('Testing empty search after login', async () => {
    await landing.navigateToLoginPage();
    await LoginPage.loginWithValidCredentials();
    await search.SearchEmptyDataAfterLogin();
  });

  test('Testing valid search after login', async () => {
    await landing.navigateToLoginPage();
    await LoginPage.loginWithValidCredentials();
    await search.SearchValidDataAfterLogin();
  });
});
