import { By, until, WebElement } from "selenium-webdriver";
import { BasePage } from "../basePage";

export class Connor extends BasePage {
    popUp: By = By.xpath('//div[@class="x-el x-el-div c1-1 c1-2 c1-17 c1-3n c1-4u c1-4v c1-3p c1-v c1-4w c1-d1 c1-2y c1-b c1-c c1-d c1-e c1-f c1-g"]')
    dropDown: By = By.xpath('//*[@class="form-control dropdown"]')
    Worcestershire: By = By.xpath('//option[@value="SC"]')
    FbLink: By = By.xpath('//a[@href="https://www.facebook.com/groups/1960389827507491/"]')
    TwLink: By = By.xpath('//a[@href="https://twitter.com/DarkArtsWizard"]')
    InstLink: By =By.xpath('//a[@href="https://www.instagram.com/qtpmgrossman"]')
    PinLink: By = By.xpath('//a[@href="https://www.pinterest.com/paulgrossman/candymapper/"]')
    InLink: By = By.xpath('//a[@href="https://www.linkedin.com/qtpmgrossman"]')
    YtLink: By = By.xpath('//a[@href="https://www.youtube.com/PaulGrossmanTheDarkArtsWizard"]')

    constructor() {
        super({url: "https://candymapperr2.com/"})
    }
    async closePop() {
        await this.driver.manage().window().maximize()
        await this.navigate(this.url)
        await this.click(this.popUp)
    }
}