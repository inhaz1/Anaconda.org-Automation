import { test } from '@pagesetup';
import * as landing from '../pages/anaconda.org/landing-page';
/*
 To run the tests in parallel, you can utilize the test.describe.configure() method to set the mode to 'parallel'.
 By default, the tests will run sequentially when fullyParallel: false is set in playwright.config.
 The tests will not be skipped upon encountering a failure expect when the mode is set to 'serial'.
*/

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
  });
});
