import { test } from '@pagesetup';
import * as LoginPage from '../pages/anaconda.org/login-page';
import * as landing from '../pages/anaconda.org/landing-page';
import * as dashboad from '../pages/anaconda.org/dashboardheader.page';
/*
 To run the tests in parallel, you can utilize the test.describe.configure() method to set the mode to 'parallel'.
 By default, the tests will run sequentially when fullyParallel: false is set in playwright.config.
 The tests will not be skipped upon encountering a failure expect when the mode is set to 'serial'.
*/

//=================================================== Login testcase ========================================//
test.describe('Test login cases @Regression', () => {
  test('Successful login will move to dashboad Page', async () => {
    await landing.navigateToLoginPage();
    await LoginPage.loginWithValidCredentials();
    await dashboad.verifyDashboard();
  });

  test('Error message is displayed and dashboad page is not displayed on failed login', async () => {
    await landing.navigateToLoginPage();
    await LoginPage.loginWithInvalidCredentials();
  });

  /*});

//=================================================== Landing page UI testcase ========================================//
test.describe('Landing page UI verification @Regression', () => {
  test('Verify Header', async () => {
    await landing.verifyHeader();
  });

  test('Verify footer', async () => {
    await landing.verifyFooter();
    await landing.verifyFooterlinks();
  });

  test('Testing UI', async () => {
    await landing.UI();
  });*/
});
