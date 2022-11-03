const checkDecimal = require("./checkDecimal");

describe("check input is decimal or no", () => {
  test("Binary  to checkDecimal", () => {
    expect(() => checkDecimal("0b101")).toThrow();
    expect(() => checkDecimal("0b101")).toThrow(Error);
    expect(() => checkDecimal("0b101")).toThrow("請勿輸入二進位數字");
  });
  test("Octal  to checkDecimal", () => {
    expect(() => checkDecimal("0o77")).toThrow();
    expect(() => checkDecimal("0o77")).toThrow(Error);
    expect(() => checkDecimal("0o77")).toThrow("請勿輸入八進位數字");
  });
  test("Hexadecimal  to checkDecimal", () => {
    expect(() => checkDecimal("0xfd")).toThrow();
    expect(() => checkDecimal("0xfd")).toThrow(Error);
    expect(() => checkDecimal("0xfd")).toThrow("請勿輸入十六進位數字");
  });
  test("decimal  to checkZero", () => {
    expect(checkDecimal("10")).toBeUndefined();
  });
});
