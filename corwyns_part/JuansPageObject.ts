import { By } from "selenium-webdriver";
import { BasePage } from "../basePage";

export class JuansPage extends BasePage {
    popUp: By = By.xpath('//div[@class="x-el x-el-a c1-3d c1-3e c1-8v c1-18 c1-19 c1-41 c1-s c1-75 c1-b c1-43 c1-3n c1-44 c1-3p"]')
    constructor() {
        super({url: "https://candymapper.com/"})
    }
    async closePop() {
        await this.navigate(this.url)
        await this.click(this.popUp)
    }
}