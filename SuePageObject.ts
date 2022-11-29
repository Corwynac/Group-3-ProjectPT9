import { By } from "selenium-webdriver"
import { BasePage } from "./basePage"

export class suePage extends BasePage {
    popUp: By = By.xpath('//div[@class="x-el x-el-div c1-1 c1-2 c1-r c1-4t c1-5r c1-5s c1-4u c1-12 c1-u c1-dp c1-45 c1-b c1-c c1-d c1-e c1-f c1-g"]')
    chatBox: By = By.xpath('//div[@data-aid="MESSAGING_FAB"]')
    nameInput: By = By.xpath('//input[@data-aid="MESSAGING_FORM_NAME"]')
    emailInput: By = By.xpath('//input[@data-aid="MESSAGING_FORM_EMAIL"]')
    helpInput: By = By.xpath('//textarea[@data-aid="How can we help?"]')
    signUpBox: By = By.xpath('//div[@class="x-el x-el-div c2-1 c2-2 c2-4m c2-r c2-4n c2-4o c2-4p c2-4q c2-4r c2-1i c2-4s c2-4t c2-j c2-1a c2-1q c2-1r c2-1s c2-1t c2-3 c2-4 c2-5 c2-6 c2-7 c2-8"]')
    sendBtn: By = By.xpath('//button[@data-aid="MESSAGING_SUBMIT_BUTTON_REND"]')
    
    constructor() {
        super({url: "https://candymapper.com/"})
    }
    async closePop() {
        await this.navigate(this.url)
        await this.click(this.popUp)
    }
}