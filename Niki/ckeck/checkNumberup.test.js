const checkNumberup = require("./checkNumberup");

describe("check input is Number up", () => {
  test("-3,4  to checkNumberup", () => {
    expect(() => checkNumberup("-3",4)).toThrow();
    expect(() => checkNumberup("-3",4)).toThrow(Error);
    expect(() => checkNumberup("-3",4)).toThrow("請勿輸入4以下的數");
  });
  test("6,4  to checkNumberup", () => {
    expect(checkNumberup("6",4)).toBeUndefined();
  });
});