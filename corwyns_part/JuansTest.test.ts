import { JuansPage } from "./corPageObject";

const JuansPage = new JuansPage()

test("Close that popup", async ()=> {
    await JuansPage.closePop()
})