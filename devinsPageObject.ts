import {By, until} from 'selenium-webdriver';
import {BasePage} from './basePage';

export class devinsPage extends BasePage {
    linkDropDown: By= By.xpath('//a[@class = "x-el x-el-svg c2-1 c2-2 c2-q c2-r c2-1n c2-1o c2-1p c2-1q c2-1r c2-3 c2-4 c2-5 c2-6 c2-7 c2-8"]')
    launchCandyMapper: By = By.xpath('//a[@class = "x-el x-el-a c1-5e c1-5f c1-3e c1-18 c1-19 c1-5g c1-s c1-5j c1-5k c1-5l c1-5m c1-2c c1-2a c1-29 c1-2b c1-b c1-3k c1-1e c1-26 c1-5h c1-5i c1-1f c1-1g c1-1h c1-1i"]')
    popUp: By = By.xpath('//a[@id = "popup-widget5132-cta"]')
    searchBar: By = By.xpath('//input[@name="q"]')
    goButton: By = By.xpath('//input[@value = "Go!"]')
    submitBug: By = By.xpath('//a[@class="x-el x-el-a c1-5e c1-5f c1-3e c1-18 c1-19 c1-5g c1-s c1-5j c1-5k c1-5l c1-5m c1-2c c1-2a c1-29 c1-2b c1-b c1-3k c1-1e c1-26 c1-5h c1-5i c1-1f c1-1g c1-1h c1-1i"]')

    constructor() {
        super({url: "https://candymapper.com/"})
    }

    async closepopup () {
        await this.driver.manage().window().maximize()
        await this.navigate()
        await this.click(this.popUp)

    }

    async doSearch(searchTerm: string) {
        return await this.setInput(this.searchBar, `${searchTerm}\n`)
    }

    async sendKeys(elementBy: By, keys: string | number | Promise<string | number>,) {
        await this.driver.wait(until.elementLocated(elementBy));
        return this.driver.findElement(elementBy).sendKeys(keys);
    }
    }
   