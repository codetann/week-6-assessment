import { Builder, Capabilities, By } from "selenium-webdriver";
import tests from "./tests/tests";

const chromedriver = require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeAll(async () => {
  await driver.get("http://localhost:4000");
});

afterAll(async () => {
  await driver.quit();
});

describe("tic-tac-toe", () => {
  it("should start game", async () => {
    await tests.startGame(driver);
  });

  it("should not be able to click computer square", async () => {
    const isWorking = await tests.clickSameSquare(driver);
    expect(isWorking).toEqual(true);
  });

  it("should click top right square", async () => {
    await tests.clickSquare(driver, 2);
  });
});
