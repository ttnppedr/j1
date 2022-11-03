const checkInteger = require("./checkInteger");

describe("check input is Integer or not", () => {
  test("2.3  to checkInteger", () => {
    expect(() => checkInteger("2.3")).toThrow();
    expect(() => checkInteger("2.3")).toThrow(Error);
    expect(() => checkInteger("2.3")).toThrow("請勿輸入非整數");
  });
  test("1  to checkInteger", () => {
    expect(checkInteger("1")).toBeUndefined();
  });
});