import { By } from "selenium-webdriver";
import { BasePage } from "../basePage";

export class CorP extends BasePage {
    popUp: By = By.xpath('//div[@class="x-el x-el-div c1-1 c1-2 c1-r c1-4t c1-5r c1-5s c1-4u c1-12 c1-u c1-dp c1-45 c1-b c1-c c1-d c1-e c1-f c1-g"]')   
    constructor() {
        super({url: "https://candymapper.com/"})
    }
    async closePop() {
        await this.navigate(this.url)
        await this.click(this.popUp)
    }
}

