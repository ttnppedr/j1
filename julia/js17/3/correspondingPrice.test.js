import { correspondingPrice } from "./correspondingPrice.js";

describe('測試是否為優待票及對應票價', () => {

  test('6歲小妹妹', () => {
    const input = "6"
    const result = correspondingPrice(input)
    expect(result).toBe(`你是優惠票半價喔！請給我200元`)
  })

  test('65歲阿媽', () => {
    const input = "65"
    const result = correspondingPrice(input)
    expect(result).toBe(`你是優惠票半價喔！請給我200元`)
  })
  
  test('30歲正妹', () => {
    const input = "30"
    const result = correspondingPrice(input)
    expect(result).toBe(`你是全票喔！請給我400元`)
  })

  test('輸入含空白格', () => {
    const input = " 6 6"
    expect(() => {
      correspondingPrice(input)
    }).toThrow("不能是空白字元喔！")
  })

  test('非整數', () => {
    const input = "-0.5"
    expect(() => {
      correspondingPrice(input)
    }).toThrow("請輸入整數阿拉伯數字喔！")
  })

  test('負數', () => {
    const input = "-1"
    expect(() => {
      correspondingPrice(input)
    }).toThrow("不能小於0啦")
  })

  test('8進制', () => {
    const input = "0o45"
    expect(() => {
      correspondingPrice(input)
    }).toThrow("不支援8進制,請輸入0~9阿拉伯數字")
  })
})