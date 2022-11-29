import { suePage } from "./suePageObject";

const Sue = new suePage()

test("Close that popup", async ()=> {
    await Sue.closePop()
})