import { CorP } from "./corPageObject";

const Cor = new CorP()

describe("Corwyns Part", ()=>{

test("Get in Touch button", async ()=>{
    await Cor.closePop()
    await Cor.click(Cor.getInTouch)
//    await Cor.driver.sleep(100)
    let value = await Cor.driver.findElement(Cor.simHeader).getText()
    expect(value.toLowerCase()).toContain("click the waterfall")
//    await Cor.driver.quit()
})

test("I am Camera", async ()=> {
//    await Cor.closePop()
 //   await Cor.click(Cor.homeBtn)
//    await Cor.simCaptchaPage()
    await Cor.click(Cor.simCameraBtn)
    let value1 = await Cor.driver.findElement(Cor.camHeader).getText()
    expect(value1.toLowerCase()).toContain("skeleton")
 //   await Cor.driver.quit()
})

test("I am a Skeleton", async ()=> {
 //   await Cor.closePop()
    await Cor.click(Cor.camBtn)
//    await Cor.simCaptchaPage()
    await Cor.click(Cor.simSkeleBtn)
    let value2 = await Cor.driver.findElement(Cor.skeleHeader).getText()
    expect(value2.toLowerCase()).toContain("camera")
 //   await Cor.driver.quit()
    
})

test("Verify if I am not a Robot", async ()=> {
    await Cor.click(Cor.skeleBtn)
 //   await Cor.closePop()
    await Cor.click(Cor.getInTouch)
    await Cor.click(Cor.simWaterBtn)
    let value3 = await Cor.driver.findElement(Cor.waterHeader).getText()
    expect(value3.toLowerCase()).toContain("complicated")
    await Cor.driver.quit()

})
/* test("Click that SimCaptcha", async ()=>{
    await Cor.click(Cor.waterBtn)
//  await Cor.closePop()
//    await Cor.simCaptchaPage()
    await Cor.click(Cor.simCaptchaImg)
    let value4 = await Cor.driver.findElement(Cor.waterHeader).getText()
    expect(value4.toLowerCase()).toContain("complicated")
    await Cor.driver.quit()
}) */


})