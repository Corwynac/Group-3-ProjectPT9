import {BasePage} from "../basePage"
import {By} from "selenium-webdriver"

export class candyMapPage extends BasePage {

    popUp: By = By.xpath('(//a[text() = "FIND MY CANDY!"])[4]')
    findMyCandyBtn: By = By.xpath('(//a[text() = "FIND MY CANDY!"])[1]')
    yourName: By = By.xpath('(//textarea[@class="x-el x-el-textarea c1-1 c1-2 c1-7r c1-7s c1-4 c1-7t c1-7u c1-7v c1-7w c1-7x c1-2n c1-2o c1-58 c1-59 c1-7z c1-8h c1-b c1-80 c1-c c1-2c c1-81 c1-82 c1-83 c1-8a c1-8b c1-d c1-e c1-f c1-g"])[1]')
    yourQuest: By = By.xpath('(//textarea[@class="x-el x-el-textarea c1-1 c1-2 c1-7r c1-7s c1-4 c1-7t c1-7u c1-7v c1-7w c1-7x c1-2n c1-2o c1-58 c1-59 c1-7z c1-8h c1-b c1-80 c1-c c1-2c c1-81 c1-82 c1-83 c1-8a c1-8b c1-d c1-e c1-f c1-g"])[2]')
    swallowAirspeed: By = By.xpath('(//textarea[@class="x-el x-el-textarea c1-1 c1-2 c1-7r c1-7s c1-4 c1-7t c1-7u c1-7v c1-7w c1-7x c1-2n c1-2o c1-58 c1-59 c1-7z c1-8h c1-b c1-80 c1-c c1-2c c1-81 c1-82 c1-83 c1-8a c1-8b c1-d c1-e c1-f c1-g"])[3]')
    homeBtn: By = By.xpath('(//a[text()="Home"])[1]')

    constructor() {
        super({url: "https://candymapperr2.com/"})
    }
    async closePop() {
        await this.navigate(this.url)
        await this.click(this.popUp)
    }


}