//Signin.page.ts
import {
  check,
  click,
  expectElementToHaveText,
  fill,
  getFrameLocator,
  getLocator,
  gotoURL,
} from 'vasu-playwright-utils';
import { Signup_newCredentials } from '@testdata/sauce-demo-test-data';

const SigninBtn = () => getLocator("//a[normalize-space()='Sign In']");
const SignupBtn = () => getLocator("//a[normalize-space()='Register for an account.']");
const UsernameField = () => getLocator("//input[@id='username']");
const PasswordField = () => getLocator("//input[@id='password']");
const EmailField = () => getLocator("//input[@id='email']");
const ConfirmPassField = () => getLocator("//input[@id='confirm_password']");
const RegisterBtn = () => getLocator("//button[@type='submit']");
const TermsField = () => getLocator("//input[@id='accept_terms']");
//const RobotField = () => getLocator("//div[@class='recaptcha-checkbox-border']");
const F1 = "//h2[normalize-space()='Sign in to Anaconda.org']";
const F2 = "//h2[normalize-space()='Register for Anaconda.org']";

export async function Registerclick() {
  await gotoURL('https://anaconda.org/');
  await click(SigninBtn());
  await expectElementToHaveText(getLocator(F1), 'Sign in to Anaconda.org');
  await click(SignupBtn());
  await expectElementToHaveText(getLocator(F2), 'Register for Anaconda.org');
}
export async function Signup(cred = Signup_newCredentials) {
  await fill(UsernameField(), cred.username);
  await fill(EmailField(), cred.email);
  await fill(PasswordField(), cred.password);
  await fill(ConfirmPassField(), cred.confirm_password);
  await check(TermsField());
  await click(getFrameLocator('[title="reCAPTCHA"]').getByRole('checkbox', { name: "I'm not a robot" }));
  // await this.page.frameLocator('[title="reCAPTCHA"]').getByRole('checkbox', { name: 'I\'m not a robot' }).click();
  await click(RegisterBtn());
}
export async function Signupwithoutcheckboxes(cred = Signup_newCredentials) {
  await fill(UsernameField(), cred.username);
  await fill(EmailField(), cred.email);
  await fill(PasswordField(), cred.password);
  await fill(ConfirmPassField(), cred.confirm_password);
  await click(RegisterBtn());
}
