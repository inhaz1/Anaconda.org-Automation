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
test.describe('Dashboard Testing', () => {
  test('Header view in dashboad Page', async () => {
    await landing.navigateToLoginPage();
    await LoginPage.loginWithValidCredentials();
    //await dashboad.verifyViewDropdown();
    await dashboad.verifyHelpDropdown();
    await dashboad.verifyViewHeaderelementsDynamically();
  });
});
