const checkEven = require("./checkEven");

describe("check input is Even or Odd", () => {
  test("3  to checkEven", () => {
    expect(() => checkEven("3")).toThrow();
    expect(() => checkEven("3")).toThrow(Error);
    expect(() => checkEven("3")).toThrow("請勿輸入奇數");
  });
  test("2  to checkEven", () => {
    expect(checkEven("2")).toBeUndefined();
  });
});
