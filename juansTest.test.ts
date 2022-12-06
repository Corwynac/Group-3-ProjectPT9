import {Driver} from "selenium-webdriver/chrome";
import {Juans} from "./juansPageObject";

const juans = new Juans();

test("Close that popup", async ()=> {
    await juans.closePop()
})
test("Go to demoLink", async ()=> {
    await juans.click(juans.demoLink)
    await juans.tabs()
})
test("Go to testProjectLink", async ()=>{
    await juans.click(juans.moreBtn)
    await juans.click(juans.momBtn)
    await juans.click(juans.testProjectLink)
    await juans.tabs()
})
test("Go to tryLink", async ()=> {
    await juans.click(juans.tryLink)
    await juans.tabs()
})
test("Go to sendFeedBackLink", async ()=> {
    await juans.click(juans.sendFeedBackLink)
    await juans.tabs()
})
test("Go to willMumMakeMyBedLink", async ()=> {
    await juans.click(juans.willMumMakeMyBedBtnLink)

    await juans.driver.quit()
})