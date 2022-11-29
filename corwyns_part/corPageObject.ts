import { By } from "selenium-webdriver";
import { BasePage } from "../basePage";

export class CorP extends BasePage {
    popUp: By = By.xpath('//div[@class="x-el x-el-div c1-1 c1-2 c1-r c1-4t c1-5r c1-5s c1-4u c1-12 c1-u c1-dp c1-45 c1-b c1-c c1-d c1-e c1-f c1-g"]')
    getInTouch: By = By.xpath('//a[@data-aid="HEADER_CTA_BTN"]')
    moreBtn: By = By.xpath('//a[@id="1"]')
    simCaptchaBtn: By = By.xpath('(//a[@class="x-el x-el-a c1-5e c1-5f c1-3e c1-18 c1-19 c1-1k c1-s c1-60 c1-61 c1-1a c1-b c1-3k c1-1e c1-26 c1-5h c1-5i c1-1f c1-1g c1-1h c1-1i"])[7]')
    simCameraBtn: By = By.xpath('(//a[@data-ux="ContentOverlayCardButton"])[1]')
    simSkeleBtn: By = By.xpath('(//a[@data-ux="ContentOverlayCardButton"])[2]')
    simWaterBtn: By = By.xpath('(//a[@data-ux="ContentOverlayCardButton"])[3]')
    simCaptchaImg: By = By.xpath('//a[@href="https://candymapper.com/nope%2C-not-a-robot"]')
    simHeader: By = By.xpath('(//span[@class="x-el x-el-span c1-75 c1-1j c1-76 c1-77 c1-78"])[1]')
    simHeader2: By = By.xpath('(//span[@class="x-el x-el-span c1-75 c1-1j c1-76 c1-77 c1-78"])[2]')
    camHeader: By = By.xpath('//h1[@role="heading"]')
    camBtn: By = By.xpath('//a[@class="x-el x-el-a c1-5b c1-5c c1-s c1-8h c1-8i c1-t c1-8j c1-3u c1-3f c1-19 c1-18 c1-1o c1-1v c1-4 c1-56 c1-8k c1-10 c1-12 c1-8l c1-4a c1-8m c1-8n c1-8o c1-b c1-1d c1-8p c1-1e c1-8q c1-8r c1-8s c1-8t c1-8u c1-8v c1-8w c1-8x c1-8y c1-8z c1-90 c1-91 c1-92 c1-93 c1-94 c1-95 c1-96 c1-97 c1-98 c1-99 c1-9a c1-9b c1-1f c1-1g c1-1h c1-1i"]')
    skeleHeader: By = By.xpath('//span[@class="x-el x-el-span c1-75 c1-1j c1-76 c1-77 c1-78"]')
    skeleBtn: By = By.xpath('//a[@class="x-el x-el-a c1-5b c1-5c c1-7f c1-s c1-8t c1-8u c1-t c1-8v c1-3u c1-3f c1-19 c1-18 c1-1o c1-1v c1-4 c1-56 c1-8w c1-10 c1-12 c1-8x c1-4a c1-8n c1-8y c1-8z c1-b c1-1d c1-90 c1-1e c1-91 c1-92 c1-93 c1-94 c1-95 c1-96 c1-97 c1-98 c1-99 c1-9a c1-9b c1-9c c1-9d c1-9e c1-9f c1-9g c1-9h c1-9i c1-9j c1-9k c1-9l c1-9m c1-1f c1-1g c1-1h c1-1i"]')
    waterHeader: By = By.xpath('//h1[@data-ux="FeaturedHeading"]')
    waterBtn: By = By.xpath('//a[@class="x-el x-el-a c1-5b c1-5c c1-s c1-87 c1-88 c1-t c1-89 c1-3u c1-3f c1-19 c1-18 c1-1o c1-1v c1-4 c1-56 c1-8a c1-10 c1-12 c1-8b c1-4a c1-8c c1-8d c1-8e c1-b c1-1d c1-8f c1-1e c1-8g c1-8h c1-8i c1-8j c1-8k c1-8l c1-8m c1-8n c1-8o c1-8p c1-8q c1-8r c1-8s c1-8t c1-8u c1-8v c1-8w c1-8x c1-8y c1-8z c1-90 c1-91 c1-1f c1-1g c1-1h c1-1i"]')
    homeBtn: By = By.xpath('(//li[@class="x-el x-el-li nav-item c1-1 c1-2 c1-53 c1-3m c1-54 c1-1k c1-55 c1-3q c1-56 c1-57 c1-1o c1-58 c1-b c1-c c1-59 c1-5a c1-d c1-e c1-f c1-g visible"])[1]')
    homeBtn2: By = By.xpath('(//li[@role="menuitem"])[10]')
    simCaptchaBtn2: By = By.xpath('(//li[@role="menuitem"])[17]')
    constructor() {
        super({url: "https://candymapper.com/"})
    }
    async closePop() {
        await this.navigate(this.url)
        await this.click(this.popUp)
    }
    async simCaptchaPage() {
        await this.click(this.moreBtn)
        await this.click(this.simCaptchaBtn2)
    }
    
}

