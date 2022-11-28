import {By} from 'selenium-webdriver';
import {BasePage} from './basePage';

export class devinsPage extends BasePage {
    linkDropDown: By= By.xpath('//a[@class = "x-el x-el-svg c2-1 c2-2 c2-q c2-r c2-1n c2-1o c2-1p c2-1q c2-1r c2-3 c2-4 c2-5 c2-6 c2-7 c2-8"]')
    launchCandyMapper: By = By.xpath('//a[@class = "x-el x-el-a c1-1 c1-2 c1-3f c1-18 c1-19 c1-r c1-s c1-5o c1-5p c1-1t c1-1u c1-t c1-6n c1-6o c1-b c1-3l c1-6p c1-1d c1-44 c1-6q c1-6r c1-6s c1-6t c1-6u c1-6v"]')

    constructor() {
        super({url: "https://candymapper.com/"})
    }

    async 
}
