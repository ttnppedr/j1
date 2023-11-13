import { playMovie } from "./playMovie.js"

describe('檢查到底要不要播電影', () => {
  test('人數0', () => {
    const input = "0"
    const result = playMovie(input)

    expect(result).toBe(`停播`)
  })

  test('只有1人', () => {
    const input = "1"
    const result = playMovie(input)

    expect(result).toBe(`照常播電影`)
  })

  test('1000人', () => {
    const input = "1000"
    const result = playMovie(input)

    expect(result).toBe(`照常播電影`)
  })

  test('輸入含空白格', () => {
    const input = " "

    expect(() => {
      playMovie(input)
    }).toThrow("不能是空白字元喔！")
  })

  test('非整數', () => {
    const input = "-0.5"

    expect(() => {
      playMovie(input)
    }).toThrow("請輸入整數阿拉伯數字喔！")
  })

  test('負數', () => {
    const input = "-1"

    expect(() => {
      playMovie(input)
    }).toThrow("不能小於0啦")
  })

  test('16進制', () => {
    const input = "0x123"

    expect(() => {
      playMovie(input)
    }).toThrow("不支援16進制,請輸入0~9阿拉伯數字")
  })

  test('e科學符號', () => {
    const input = "1e"

    expect(() => {
      playMovie(input)
    }).toThrow("不支援e科學符號,請輸入0~9阿拉伯數字")
  })
})
