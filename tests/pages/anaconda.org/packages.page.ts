import {
  click,
  clickAndNavigate,
  expectElementToHaveText,
  getLocator,
  getText,
  waitForElementToBeStable,
} from 'vasu-playwright-utils';

const packgesviewall = "(//*[@class='right']//a[@class='text-white'])[1]";
const Pkg_header = "//strong[normalize-space()='packages']";
const Files_header = "//strong[normalize-space()='files']";
const installer_header = "//strong[normalize-space()='installers']";
const History_header = "//strong[normalize-space()='history']";
//const checkbox1 = "(//*[@id='repo-packages-table']//input[@name='package'])[1]";
const packages_tab = "(//a[normalize-space()='Packages'])";
const files_tab = "(//a[normalize-space()='Files'])[1]";
const installer_tab = "(//a[normalize-space()='Install Instructions'])[1]";
const history_tab = "(//a[normalize-space()='History'])[1]";
const table = "//table[@id='repo-packages-table']";
//Filter
const Type_all = "//a[normalize-space()='Type: all']";
const Type_SP = "//a[normalize-space()='Type: pypi']";
const Type_conda = "//a[normalize-space()='Type: conda']";
const Type_SR = "//a[normalize-space()='Type: r']";
const All = "//a[normalize-space()='All']";
const SP = "//a[normalize-space()='Standard Python']";
const Conda = "//a[normalize-space()='conda']";
const SR = "//a[normalize-space()='Standard R']";

const headerPP = "//span[@class='long-breadcrumb']";
//const Access = "//a[normalize-space()='Access: all']";
//const Label = "//a[normalize-space()='Label: all']";

export async function navigateToAllpackages() {
  await clickAndNavigate(packgesviewall);
  await expectElementToHaveText(Pkg_header, 'packages');
}
export async function switchtabs() {
  await click(files_tab);
  await expectElementToHaveText(Files_header, 'files');
  await click(installer_tab);
  await expectElementToHaveText(installer_header, 'installers');
  await click(history_tab);
  await expectElementToHaveText(History_header, 'history');
}
export async function GetallPackages() {
  await click(packages_tab);
  await expectElementToHaveText(Pkg_header, 'packages');
  const noofpackages = await getLocator(table).locator('tr').count();
  console.log('Rows:  ' + noofpackages);
  // print names of all packages in package Page
  for (let i = 1; i < noofpackages; i++) {
    const tdata = await getText(getLocator(table).locator('tr').nth(i).locator('td').nth(0));
    console.log(tdata);
  }
  if (noofpackages > 0) {
    // create locator of first package
    const name = (await getText(getLocator(table).locator('tr').nth(1).locator('td').nth(0))).trim();
    const firstpackagelocator = "//span[normalize-space()='" + name + "']";
    console.log('locator of first package : ' + firstpackagelocator);
    await click(firstpackagelocator);
    await expectElementToHaveText(headerPP, name);
  }
}
export async function SelectFilters() {
  await click(packages_tab);
  await expectElementToHaveText(Pkg_header, 'packages');
  const noofpackages = await getLocator(table).locator('tr').count();
  console.log('Total Pkgs:  ' + noofpackages);
  if (noofpackages > 0) {
    await waitForElementToBeStable(Type_all);
    await click(Type_all);
    await click(SP);
    const noofpackages = await getLocator(table).locator('tr').count();
    console.log('SP packages:  ' + noofpackages);
    await waitForElementToBeStable(Type_SP);
    await click(Type_SP);
    await click(Conda);
    const conda = await getLocator(table).locator('tr').count();
    console.log('conda packages:  ' + conda);
    await waitForElementToBeStable(Type_conda);
    await click(Type_conda);
    await click(SR);
    const sr = await getLocator(table).locator('tr').count();
    console.log('SR packages:  ' + sr);
    await waitForElementToBeStable(Type_SR);
    await click(Type_SR);
    await click(All);
    const all = await getLocator(table).locator('tr').count();
    console.log('All packages:  ' + all);
  }
}
