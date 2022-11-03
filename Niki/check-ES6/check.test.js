// import { describe, expect, test } from "@jest/globals";
import { checkDecimal } from "./checkDecimal";
import { checkEmpty } from "./checkEmpty";
import { checkEven } from "./checkEven";
import { checkInteger } from "./checkInteger";
import { checkNumberDown } from "./checkNumberDown";
import { checkNumberup } from "./checkNumberup";
import {checkPositive} from "./checkPositive"
import {checkString} from "./checkString"
import {checkZero} from "./checkZero"
// import {} from "./"

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
    expect(checkDecimal("10")).toBe(undefined);
  });
});

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

describe("check input is Number down", () => {
  test("6,4  to checkNumberDown", () => {
    expect(() => checkNumberDown("6", 4)).toThrow();
    expect(() => checkNumberDown("6", 4)).toThrow(Error);
    expect(() => checkNumberDown("6", 4)).toThrow("請勿輸入4以上的數");
  });
  test("-3,4  to checkNumberDown", () => {
    expect(checkNumberDown("-3", 4)).toBeUndefined();
  });
});

describe("check input is Number up", () => {
  test("-3,4  to checkNumberup", () => {
    expect(() => checkNumberup("-3", 4)).toThrow();
    expect(() => checkNumberup("-3", 4)).toThrow(Error);
    expect(() => checkNumberup("-3", 4)).toThrow("請勿輸入4以下的數");
  });
  test("6,4  to checkNumberup", () => {
    expect(checkNumberup("6", 4)).toBeUndefined();
  });
});

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