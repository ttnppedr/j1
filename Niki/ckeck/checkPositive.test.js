const checkPositive = require("./checkPositive");

describe("check input is positive or not", () => {
  test("-3  to checkPositive", () => {
    expect(() => checkPositive("-3")).toThrow();
    expect(() => checkPositive("-3")).toThrow(Error);
    expect(() => checkPositive("-3")).toThrow("請勿輸入負數");
  });
  test("1  to checkPositive", () => {
    expect(checkPositive("1")).toBeUndefined();
  });
});