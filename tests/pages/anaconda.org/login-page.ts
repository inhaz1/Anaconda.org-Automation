import { click, clickAndNavigate, fill } from 'vasu-playwright-utils';
import { expectElementToBeVisible } from 'vasu-playwright-utils';
import { InvalidCredentials, ValidCredentials } from '@testdata/sauce-demo-test-data';

const userName = '#username';
const password = '#password';
const loginButton = '#logInButton';
const errorMessage = "//div[@class='alert-box danger']";
const dashboardMessage = "//h2[normalize-space()='My Anaconda Landscape']";

export async function loginWithValidCredentials(validCredentials = ValidCredentials) {
  await fill(userName, validCredentials.username);
  await fill(password, validCredentials.password);
  await clickAndNavigate(loginButton);
  await expectElementToBeVisible(dashboardMessage);
}

export async function loginWithInvalidCredentials(invalidCredentials = InvalidCredentials) {
  await fill(userName, invalidCredentials.username);
  await fill(password, invalidCredentials.password);
  await click(loginButton);
  await expectElementToBeVisible(errorMessage);
}
