const TV = require("./TV")
// @ponicode
describe("TV.default", () => {
    test("0", () => {
        let callFunction = () => {
            TV.default()
        }
    
        expect(callFunction).not.toThrow()
    })
})
