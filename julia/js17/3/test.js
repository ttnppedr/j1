import { isDiscount } from "./isDiscount.js";

describe('測試是否為優待票', () => {
  const regularTicket = 400
  test('6歲小妹妹', () => {
    const age = 6
    const result = isDiscount(age)
    expect(result).toBeTruthy()
  })
  test('65歲阿媽', () => {
    const age = 65
    const result = isDiscount(age)
    expect(result).toBeTruthy()
  })
  test('30歲正妹', () => {
    const age = 30
    const result = isDiscount(age)
    expect(result).toBeFalsy()
  })
})