import { CorP } from "./corPageObject";

const Cor = new CorP()

test("Close that popup", async ()=> {
    await Cor.closePop()
})

