import { getFormulaAndSum } from "./getFormulaAndSum.js";

describe('測試算式跟和是否正確', () => {
  test('n=0', () => {
    const number = 0
    const result = getFormulaAndSum(number)
    expect(result).toBe(`0 = 0`)
  })
  test('n=1', () => {
    const number = 1
    const result = getFormulaAndSum(number)
    expect(result).toBe(`1 = 1`)
  })
  test('n=7', () => {
    const number = 7
    const result = getFormulaAndSum(number)
    expect(result).toBe(`1 + 2 - 3 + 4 - 5 + 6 - 7 = -2`)
  })
  test('n=9', () => {
    const number = 9
    const result = getFormulaAndSum(number)
    expect(result).toBe(`1 + 2 - 3 + 4 - 5 + 6 - 7 + 8 - 9 = -3`)
  })
})