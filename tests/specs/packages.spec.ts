import { test } from '@pagesetup';
import * as LoginPage from '../pages/anaconda.org/login-page';
import * as landing from '../pages/anaconda.org/landing-page';
import * as Packages from '../pages/anaconda.org/packages.page';

/*
 To run the tests in parallel, you can utilize the test.describe.configure() method to set the mode to 'parallel'.
 By default, the tests will run sequentially when fullyParallel: false is set in playwright.config.
 The tests will not be skipped upon encountering a failure expect when the mode is set to 'serial'.
*/
//=================================================== packages testcase ========================================//
test.describe('Dashboard @Regression', () => {
  /*test('Testing all tabs', async () => {
    await landing.navigateToLoginPage();
    await LoginPage.loginWithValidCredentials();
    await Packages.navigateToAllpackages();
    await Packages.switchtabs();
  });*/

  test('Testing package filters (conda,py,R)', async () => {
    await landing.navigateToLoginPage();
    await LoginPage.loginWithValidCredentials();
    await Packages.navigateToAllpackages();
    await Packages.SelectFilters();
  });
});
