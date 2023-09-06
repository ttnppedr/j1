import { printFormulaAndSum } from "./printFormulaAndSum.js";

describe('測試算式跟和是否正確', () => {
  test('n=0', () => {
    const input = "0"
    const result = printFormulaAndSum(input)
    expect(result).toBe(`0 = 0`)
  })

  test('n=1', () => {
    const input = "1"
    const result = printFormulaAndSum(input)
    expect(result).toBe(`1 = 1`)
  })

  test('n=7', () => {
    const input = "7"
    const result = printFormulaAndSum(input)
    expect(result).toBe(`1 + 2 - 3 + 4 - 5 + 6 - 7 = -2`)
  })

  test('n=9', () => {
    const input = "9"
    const result = printFormulaAndSum(input)
    expect(result).toBe(`1 + 2 - 3 + 4 - 5 + 6 - 7 + 8 - 9 = -3`)
  })

  test('輸入含空白格', () => {
    const input = " 6 6"
    expect(() => {
      printFormulaAndSum(input)
    }).toThrow("不能是空白字元喔！")
  })

  test('非整數', () => {
    const input = "-0.5"
    expect(() => {
      printFormulaAndSum(input)
    }).toThrow("請輸入整數阿拉伯數字喔！")
  })

  test('負數', () => {
    const input = "-1"
    expect(() => {
      printFormulaAndSum(input)
    }).toThrow("不能小於0啦")
  })

  test('16進制', () => {
    const input = "0x345"
    expect(() => {
      printFormulaAndSum(input)
    }).toThrow("不支援16進制,請輸入0~9阿拉伯數字")
  })
})