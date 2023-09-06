import { isRequiredInput, isBlank, isInteger, isNegative, isEven, isNotLessThanY, isLetter,  isBinOctHexAndE } from "./variableCheck.js";

test('未輸入', () => {
  const input = ""
  expect(() => {
    isRequiredInput(input)
  }).toThrow("未輸入喔！")
})

test('輸入空白格', () => {
  const input = " "
  expect(() => {
    isBlank(input)
  }).toThrow("不能是空白字元喔！")
})

test('非整數', () => {
  const input = "0.5"
  expect(() => {
    isInteger(input)
  }).toThrow("請輸入整數阿拉伯數字喔！")
})

test('負數', () => {
  const input = "-0.5"
  expect(() => {
    isNegative(input)
  }).toThrow("不能小於0啦")
})

test('奇數', () => {
  const input = "5"
  expect(() => {
    isEven(input)
  }).toThrow("要輸入偶數喔")
})

test('1小於4', () => {
  const y = 4
  const input = "1"
  expect(() => {
    isNotLessThanY(input, y)
  }).toThrow(`要輸入大於${y}的值喔`)
})


describe("檢查進制與e科學符號",()=> {
  test("0b", () => {
    const input = "0b123"
    expect(() => {
      isBinOctHexAndE(input)
    }).toThrow("不支援2進制,請輸入0~9阿拉伯數字")
  })

  test("0o", () => {
    const input = "0o321"
    expect(() => {
      isBinOctHexAndE(input)
    }).toThrow("不支援8進制,請輸入0~9阿拉伯數字")
  })

  test("0x", () => {
    const input = "0x789"
    expect(() => {
      isBinOctHexAndE(input)
    }).toThrow("不支援2,8,16進制,請輸入0~9阿拉伯數字")
  })

  test("e", () => {
    const input = "3456e789"
    expect(() => {
      isBinOctHexAndE(input)
    }).toThrow("不支援e科學符號,請輸入0~9阿拉伯數字")
  })
})



