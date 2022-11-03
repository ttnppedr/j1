const checkNumberdown = require("./checkNumberdown");

describe("check input is Number down", () => {
  test("6,4  to checkNumberdown", () => {
    expect(() => checkNumberdown("6",4)).toThrow();
    expect(() => checkNumberdown("6",4)).toThrow(Error);
    expect(() => checkNumberdown("6",4)).toThrow("請勿輸入4以上的數");
  });
  test("-3,4  to checkNumberdown", () => {
    expect(checkNumberdown("-3",4)).toBeUndefined();
  });
});