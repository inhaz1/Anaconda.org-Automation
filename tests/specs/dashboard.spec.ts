import { test } from '@pagesetup';
import * as LoginPage from '../pages/anaconda.org/login-page';
import * as landing from '../pages/anaconda.org/landing-page';
import * as dashboardP from '../pages/anaconda.org/dashboard.page';
import { goBack } from 'vasu-playwright-utils';

/*
 To run the tests in parallel, you can utilize the test.describe.configure() method to set the mode to 'parallel'.
 By default, the tests will run sequentially when fullyParallel: false is set in playwright.config.
 The tests will not be skipped upon encountering a failure expect when the mode is set to 'serial'.
*/
//=================================================== packages testcase ========================================//
test.describe('Dashboard @Regression', () => {
  test('Testing packages', async () => {
    await landing.navigateToLoginPage();
    await LoginPage.loginWithValidCredentials();
    await dashboardP.navigateToAllpackages();
    await goBack();
    await dashboardP.navigateToAllnotebooks();
    await goBack();
    await dashboardP.navigateToAllenvironments();
    await goBack();
    await dashboardP.navigateToAllprojects();
    await goBack();
    await dashboardP.navigateToAllfavorites();
    await goBack();
    await dashboardP.navigateToActivityviewAll();
    await goBack();
  });
  test('Testing package block', async () => {
    await landing.navigateToLoginPage();
    await LoginPage.loginWithValidCredentials();
    await dashboardP.checkPackagesBlock();
  });
});
