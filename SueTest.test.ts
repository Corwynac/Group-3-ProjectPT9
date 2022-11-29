import { Driver } from "selenium-webdriver/chrome";
import { suePage } from "./suePageObject";

const Sue = new suePage()

describe("Sues Part", () => {
    test("Close that popup", async ()=> {
        await Sue.closePop()
    })

    test("Chat Box", async() => {
        await Sue.click(Sue.chatBox)
        await Sue.setInput(Sue.nameInput, "Snow White")
        await Sue.setInput(Sue.emailInput, "snowwhite8675@yahoo.com")
        await Sue.setInput(Sue.helpInput, "testing, testing 123")
        await Sue.click(Sue.signUpBox)
        await Sue.click(Sue.sendBtn)
        await Sue.driver.quit()
    })

})