const checkEmpty = require("./checkEmpty");

describe("check input is emptyString or spaceString", () => {
  test("emptyString  to checkEmpty", () => {
    expect(() => checkEmpty("")).toThrow();
    expect(() => checkEmpty("")).toThrow(Error);
    expect(() => checkEmpty("")).toThrow("請輸入值,不能為空");
  });
  test("spaceString  to checkEmpty", () => {
    expect(() => checkEmpty(" ")).toThrow();
    expect(() => checkEmpty(" ")).toThrow(Error);
    expect(() => checkEmpty(" ")).toThrow("不能只輸入空格");
  });
  test("anyString  to checkZero", () => {
    expect(checkEmpty("anyString")).toBeUndefined();
  });
});
