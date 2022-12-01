import { Driver } from "selenium-webdriver/chrome";
import { Connor } from "./conPageObject";

const connor = new Connor()

test("Close that popup", async ()=> {
    await connor.closePop()
})
test("Go to Facebook page", async ()=> {
    await connor.click(connor.FbLink)
})
test("Go to Twitter page", async ()=>{
    await connor.click(connor.TwLink)
})
test("Go to Instagram page", async ()=> {
    await connor.click(connor.InstLink)
})
test("Go to Pinterest page", async ()=> {
    await connor.click(connor.PinLink)
})
test("Go to LinkedIn page", async ()=> {
    await connor.click(connor.InLink)
})
test("Go to Youtube Page", async ()=> {
    await connor.click(connor.YtLink)
    await connor.driver.quit()
})
//test("Drop Down Test", async ()=> {
//    await connor.click(connor.dropDown)
//   await connor.click(connor.Worcestershire)
//})
