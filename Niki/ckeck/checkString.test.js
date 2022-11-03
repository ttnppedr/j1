const checkString = require("./checkString");

describe("check input is Number or String", () => {
  test("abc  to checkString", () => {
    expect(() => checkString("abc")).toThrow();
    expect(() => checkString("abc")).toThrow(Error);
    expect(() => checkString("abc")).toThrow("請勿輸入文字");
  });
  test("1  to checkString", () => {
    expect(checkString("1")).toBeUndefined();
  });
});
