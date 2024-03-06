//Signin.page.ts
import {
  check,
  click,
  expectElementToHaveText,
  fill,
  getFrameLocator,
  getLocator,
  gotoURL,
  waitForElementToBeStable,
  waitForElementToBeVisible,
} from 'vasu-playwright-utils';
import { OrgUrl, Signup_newCredentials } from '@testdata/inha-anaconda.org-test-data';

const SigninBtn = () => getLocator("//a[normalize-space()='Sign In']");
const SignupBtn = () => getLocator("//a[normalize-space()='Register for an account.']");
const UsernameField = () => getLocator("//input[@id='username']");
const PasswordField = () => getLocator("//input[@id='password']");
const EmailField = () => getLocator("//input[@id='email']");
const ConfirmPassField = () => getLocator("//input[@id='confirm_password']");
const RegisterBtn = () => getLocator("//button[@type='submit']");
const TermsField = () => getLocator("//input[@id='accept_terms']");
const reCAPTCHAF = () => getLocator("//div[@class='g-recaptcha']");
const F1 = "//h2[normalize-space()='Sign in to qa']";
const F2 = "//h2[normalize-space()='Register for qa']";

export async function Registerclick() {
  await gotoURL(OrgUrl.url);
  await click(SigninBtn());
  await expectElementToHaveText(getLocator(F1), 'Sign in to qa');
  await click(SignupBtn());
  await expectElementToHaveText(getLocator(F2), 'Register for qa');
}
export async function Signup(cred = Signup_newCredentials) {
  await fill(UsernameField(), cred.username);
  await fill(EmailField(), cred.email);
  await fill(PasswordField(), cred.password);
  await fill(ConfirmPassField(), cred.confirm_password);
  await check(TermsField());
  await waitForElementToBeStable(reCAPTCHAF());
  await waitForElementToBeVisible(reCAPTCHAF());
  await click(getFrameLocator('[title="reCAPTCHA"]').getByRole('checkbox', { name: "I'm not a robot" }));
  await click(RegisterBtn());
}
export async function Signupwithoutcheckboxes(cred = Signup_newCredentials) {
  await fill(UsernameField(), cred.username);
  await fill(EmailField(), cred.email);
  await fill(PasswordField(), cred.password);
  await fill(ConfirmPassField(), cred.confirm_password);
  await click(RegisterBtn());
}
