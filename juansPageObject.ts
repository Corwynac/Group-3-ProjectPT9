import { By } from "selenium-webdriver";
import { BasePage } from "./basePage";

export class Juans extends BasePage {
    popUp: By = By.xpath('(//a[text() ="FIND MY CANDY!"])[4]')
    demoLink: By = By.xpath('(//a[@class = "x-el x-el-a c1-3c c1-3d c1-3e c1-18 c1-19 c1-40 c1-s c1-b c1-8f c1-c c1-3m c1-a3 c1-a4 c1-d c1-e c1-f c1-g"])[6]')
    moreBtn: By = By.xpath('//a[@class="x-el x-el-a c2-t c2-u c2-v c2-w c2-x c2-g c2-j c2-h c2-3 c2-y c2-z c2-10 c2-11 c2-12 c2-13 c2-14 c2-15 c2-16"]')
    momBtn: By = By.xpath('(//a[text()= "Magic Object Model?"])[2]')
    testProjectLink: By = By.xpath('//a[text()= "TestProject.io"]')
    tryLink: By = By.xpath('(//a[@class="x-el x-el-a c1-3d c1-3e c1-8v c1-18 c1-19 c1-41 c1-s c1-75 c1-b c1-43 c1-3n c1-44 c1-3p"])[3]')
    sendFeedBackLink: By = By.xpath('//a[text()= "TheDarkArtsWizard@gmail.com"]')
    willMumMakeMyBedBtnLink: By = By.xpath('//a[text()= "Will Mum Make my Bed?"]')



    constructor() {
        super({url: "https://candymapper.com/"})
    }
    async closePop() {
        await this.driver.manage().window().maximize()
        await this.navigate(this.url)
        await this.click(this.popUp)
    }
    async tabs() {
        let myTabs = await this.driver.getAllWindowHandles();
        await this.driver.switchTo().window(myTabs[1]);
        await this.driver.sleep(1500);
        await this.driver.close();
        await this.driver.switchTo().window(myTabs[0]);
        //this method is for closing newly opened tabs
    }
}