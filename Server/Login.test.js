const each = require("jest").default;
const {addObject} = require("./Login");

describe ("Object creating TEST CASE" , () =>{
  it("Function is called", () =>{
    expect(addObject).toBeDefined();
    expect(addObject instanceof Function).toEqual(true);
  })
  it ("Returns an Object", ()=>{
    
    const value1 = "Object Key 1";
    const value2 = "Object Key 2";

    const Get = addObject(value1,value2)
    expect (Get instanceof Object).toEqual(true);

    each([
      ["FirstUserName","FirstPassword",{"UserInfo":{"Username":"FirstUserName","Password":"FirstPassword"}}]
    ]).test(`returns %s when passed %s`, (username,password,expected) =>{
      expect(addObject(username,password)).toEqual(expected);
    })

  })
})