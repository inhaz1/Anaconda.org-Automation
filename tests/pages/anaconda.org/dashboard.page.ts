import { click, clickAndNavigate, expectElementToHaveText } from 'vasu-playwright-utils';

const packgesviewall = "(//*[@class='right']//a[@class='text-white'])[1]";
const notebooksviewall = "(//*[@class='right']//a[@class='text-white'])[2]";
const environmentsviewall = "(//*[@class='right']//a[@class='text-white'])[3]";
const projectsviewall = "(//*[@class='right']//a[@class='text-white'])[4]";
const favoritesviewall = "(//*[@class='right']//a[@class='text-white'])[5]";
const activityviewmore = "//a[normalize-space()='View more']";
const headerP = "(//strong[normalize-space()='packages'])";
const headerE = "(//strong[normalize-space()='environments'])";
const headerN = "(//strong[normalize-space()='notebooks'])";
const headerPr = "(//strong[normalize-space()='projects'])";
const headerA = "(//strong[normalize-space()='feed'])";
const headerF = "(//strong[normalize-space()='favorites'])";
const checkbox1 = "(//*[@id='repo-packages-table']//input[@name='package'])[1]";

//const checkall = "#checkbox";

export async function navigateToAllpackages() {
  await clickAndNavigate(packgesviewall);
  await expectElementToHaveText(headerP, 'packages');
}

export async function navigateToAllnotebooks() {
  await clickAndNavigate(notebooksviewall);
  await expectElementToHaveText(headerN, 'notebooks');
}

export async function navigateToAllenvironments() {
  await clickAndNavigate(environmentsviewall);
  await expectElementToHaveText(headerE, 'environments');
}

export async function navigateToActivityviewAll() {
  await clickAndNavigate(activityviewmore);
  await expectElementToHaveText(headerA, 'feed');
}
export async function navigateToAllprojects() {
  await clickAndNavigate(projectsviewall);
  await expectElementToHaveText(headerPr, 'projects');
}
export async function navigateToAllfavorites() {
  await clickAndNavigate(favoritesviewall);
  await expectElementToHaveText(headerF, 'favorites');
}
export async function switchtabs() {
  await navigateToAllpackages();
}

export async function selectcheckbox() {
  await navigateToAllpackages();
  await click(checkbox1);
}
