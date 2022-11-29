import { suePage } from "./suePageObject";

const Sue = new suePage()

describe("Sues Part", () => {
    test("Close that popup", async ()=> {
        await Sue.closePop()
    })

    test("Chat Box", async() => {
        await Sue.click(Sue.chatBox)
        
    })
})