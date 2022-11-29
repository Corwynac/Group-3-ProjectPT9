import { Connor } from "./conPageObject";

const connor = new Connor()

test("Close that popup", async ()=> {
    await connor.closePop()
})
test("Drop Down Test", async ()=> {
    await connor.driver.executeScript("document.getElementById('iframe-undefined6').scrollIntoView(true);");
    await connor.click(connor.dropDown)
    await connor.click(connor.Worcestershire)
})