import {Driver} from "selenium-webdriver/chrome";
import {juans} from "./juansPageObject";

const candyMP = new candyMapPage();

test("Close that popup", async ()=> {
    await juans.closePop()
})
test("Go to demoLink", async ()=> {
    await juans.click(juans.demoLink)
})
test("Go to testProjectLink", async ()=>{
    await juans.click(juans.testProjectLink)
})
test("Go to tryLink", async ()=> {
    await juans.click(juans.tryLink)
})
test("Go to sendFeedBackLink", async ()=> {
    await juans.click(juans.sendFeedBackLink)
})
test("Go to willMumMakeMyBedLink", async ()=> {
    await juans.click(juans.willMumMakeMyBedLink)
})

