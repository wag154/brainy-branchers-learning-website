const { testFuncFetchMemoryData } = require("./ForeignLang-Memory.js");

let userInput = ["The policy is to give tickets to offenders.",
"",
"We are going to give you an intravenous medicine.",
"That watch was a present from my wife",
"The movie we watched last night was hilarious."];

//unit test
test("unit test passed", () => {
    expect(2 + 2).toEqual(4);
})

//test suite
describe("testFuncFetchMemoryData", () => {
    it("exists", () => {
        expect(testFuncFetchMemoryData).toBeDefined();
    })
    it("it is a function", () => {
        expect(testFuncFetchMemoryData instanceof Function).toEqual(true);
    })
    it("returns correct point value of 12", () => {
        expect(testFuncFetchMemoryData(2, userInput[2])).toEqual(12);
    })
    it("returns correct point value of 9", () => {
        expect(testFuncFetchMemoryData(3, userInput[3])).toEqual(9);
    })
    it("returns correct point value of 15", () => {
        expect(testFuncFetchMemoryData(4, userInput[4])).toEqual(15);
    })
})

