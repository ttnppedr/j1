const checkZero = require("./checkZero");

describe("check input is 0 or not", () => {
  test("0  to checkZero", () => {
    expect(() => checkZero("0")).toThrow();
    expect(() => checkZero("0")).toThrow(Error);
    expect(() => checkZero("0")).toThrow("請勿輸入0");
  });
  test("1  to checkZero", () => {
    expect(checkZero("1")).toBeUndefined();
  });
});
