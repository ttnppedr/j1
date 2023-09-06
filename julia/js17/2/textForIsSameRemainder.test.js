import { textForIsSameRemainder } from "./textForIsSameRemainder.js";

describe('測試餘數是否相同', () => {
  test('a=5, b=8,餘數相同', () => {
    const inputList = ['5', '8']
    const result = textForIsSameRemainder(inputList)
    expect(result).toBe('餘數相同')
  })

  test('a=10, b=6,餘數不同', () => {
    const inputList = ['10', '6']
    const result = textForIsSameRemainder(inputList)
    expect(result).toBe('餘數不同喔！')
  })

  test('a=0.5, b=9', () => {
    const inputList = ['0.5', '9']
    expect(() => {
      textForIsSameRemainder(inputList)
    }).toThrow("請輸入整數阿拉伯數字喔！")
  })

  test('a=5, b=" "', () => {
    const inputList = ['5', ' ']
    expect(() => {
      textForIsSameRemainder(inputList)
    }).toThrow("不能是空白字元喔！")
  })

  test('a=5, b="0b5"', () => {
    const inputList = ['5', '0b5']
    expect(() => {
      textForIsSameRemainder(inputList)
    }).toThrow("不支援2進制,請輸入0~9阿拉伯數字")
  })
})

