import { candyMapPage } from "./benjaminsPageObject";
const fs= require('fs')
const candyMP = new candyMapPage();


describe("Automation test for Candy Mapper", () => {
    beforeEach(async () => {
        await candyMP.navigate();
    })
    test("If input fields can take 100 characters.", async () => {
        await candyMP.closePop();
        await candyMP.click(candyMP.findMyCandyBtn);
        await fs.writeFile(`${__dirname}/findMyCandyPic.png`, 
    await candyMP.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.error(e)
        else console.log('Save Successful')
    })
        await candyMP.click(candyMP.homeBtn)
        await fs.writeFile(`${__dirname}/homepagePic.png`, 
    await candyMP.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.error(e)
        else console.log('Save Successful')
    })
    await candyMP.driver.quit();
    })
})