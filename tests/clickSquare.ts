import { By, WebDriver } from "selenium-webdriver";

export async function clickSquare(driver: WebDriver, cell: Number) {
  const square = await (await driver).findElement(By.id(`cell-${cell}`));

  await square.click();

  await driver.sleep(3000);
}
