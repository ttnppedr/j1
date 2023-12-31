import { getAnswer } from "./getAnswer.js";

describe('驗證結果是否正確', () => {

  test('n=8', () => {
    const n = "8"
    const result = getAnswer(n)
    expect(result).toBe(80)
  })

  test('n=12', () => {
    const n = "12"
    const result = getAnswer(n)
    expect(result).toBe(280)
  })

  test('輸入含空白格', () => {
    const input = " 6 6"
    expect(() => {
      getAnswer(input)
    }).toThrow("不能是空白字元喔！")
  })

  test('非整數', () => {
    const input = "-0.5"
    expect(() => {
      getAnswer(input)
    }).toThrow("請輸入整數阿拉伯數字喔！")
  })

  test('負數', () => {
    const input = "-1"
    expect(() => {
      getAnswer(input)
    }).toThrow("不能小於0啦")
  })

  test('奇數', () => {
    const input = "5"
    expect(() => {
      getAnswer(input)
    }).toThrow("要輸入偶數喔")
  })

  test('小於4', () => {
    const input = "1"
    expect(() => {
      getAnswer(input)
    }).toThrow("要輸入大於4的值喔")
  })

  test('e科學符號', () => {
    const input = "0e2"
    expect(() => {
      getAnswer(input)
    }).toThrow("不支援e科學符號,請輸入0~9阿拉伯數字")
  })
})