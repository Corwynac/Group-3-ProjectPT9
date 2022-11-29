import { Driver } from 'selenium-webdriver/chrome'
import {devinsPage} from './devinsPageObject'
const page = new devinsPage()

describe("Test to close popup", () => {
    test("close popup", async () => {
        await page.closepopup()
    })
})

describe("Launch CandyMapper Map", () => {
    test("Click dropdown", async () => {
        await page.navigate()
        await page.click(page.launchCandyMapper)
    })
})

describe("Submit a Bug", () => {
    test("Launch Submit Bug Bash Defects", async () => {
        await page.click(page.submitBug)
    })
})


// describe("Search CandyMapper", () => {
//     test("Can we search on CandyMapper", async () => {
//         await page.driver.sleep(3000)
//         await page.click(page.searchBar)
//         await page.driver.sleep(3000)
//         await page.driver.sleep(3000)
//         await page.sendKeys(page.searchBar, "Candy")
//         await page.click(page.goButton)
//         await page.driver.sleep(3000)
//         await page.driver.quit()
//     })
// }) This test wont run

