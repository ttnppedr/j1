import { checkBlank, checkIsInteger, checkNegative, checkEven, checkNotLessThanY, checkIsLetter } from "./variableCheck.js";

describe('檢查未輸入及空白格', () => {
  test('未輸入', () => {
    const input = ""
    expect(() => {
      checkBlank(input)
    }).toThrow("不能直接按enter喔！")
  })
  test('輸入空白格', () => {
    const input = " "
    expect(() => {
      checkBlank(input)
    }).toThrow("不能是空白字元喔！")
  })
})

describe('檢查是否是整數', () => {
  test('非整數', () => {
    const input = "-0.5"
    expect(() => {
      checkIsInteger(input)
    }).toThrow("請輸入整數阿拉伯數字喔！")
  })
})

describe('檢查不為負數', () => {
  test('負數', () => {
    const input = "-0.5"
    expect(() => {
      checkNegative(input)
    }).toThrow("不能小於0啦")
  })
})

describe('檢查不為奇數', () => {
  test('奇數', () => {
    const input = "5"
    expect(() => {
      checkEven(input)
    }).toThrow("要輸入偶數喔")
  })
})

describe('檢查不小於4', () => {
  test('1小於4', () => {
    const y = 4
    const input = "1"
    expect(() => {
      checkNotLessThanY(input, y)
    }).toThrow(`要輸入大於${y}的值喔`)
  })
})

describe('檢查是否為英文字母', () => {
  test('/ 不為英文字母', () => {
    const input = "/"
    expect(() => {
      checkIsLetter(input)
    }).toThrow("要輸入英文名字喔")
  })
  test('王 不為英文字母', () => {
    const input = "王"
    expect(() => {
      checkIsLetter(input)
    }).toThrow("要輸入英文名字喔")
  })
})



