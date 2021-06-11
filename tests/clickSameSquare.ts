import { By, WebDriver } from "selenium-webdriver";

export async function clickSameSquare(driver: WebDriver) {
  let userSquare = await (await driver).findElement(By.id(`cell-${4}`));
  await userSquare.click();
  await driver.sleep(1000);

  let comSquare = await (await driver).findElement(By.id(`cell-${0}`));
  await comSquare.click();
  await driver.sleep(1000);

  await comSquare.click();
  await driver.sleep(3000);

  if ((await comSquare.getText()) === "X") {
    return false;
  } else {
    return true;
  }
}
