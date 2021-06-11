import { By, WebDriver } from "selenium-webdriver";

export async function startGame(driver: WebDriver) {
  let button = await (await driver).findElement(By.id("start-game"));

  await button.click();

  await driver.sleep(1000);
}
