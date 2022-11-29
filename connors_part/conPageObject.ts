import { By, until, WebElement } from "selenium-webdriver";
import { BasePage } from "../basePage";

export class Connor extends BasePage {
    popUp: By = By.xpath('//div[@class="x-el x-el-div c1-1 c1-2 c1-17 c1-3n c1-4u c1-4v c1-3p c1-v c1-4w c1-d1 c1-2y c1-b c1-c c1-d c1-e c1-f c1-g"]')
    dropDown: By = By.xpath('//select[@id="tCounty"]')
    Worcestershire: By = By.xpath('//option[@value="SC"]')
    constructor() {
        super({url: "https://candymapperr2.com/"})
    }
    async closePop() {
        await this.driver.manage().window().maximize()
        await this.navigate(this.url)
        await this.click(this.popUp)
    }
}