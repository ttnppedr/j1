import { Q1 } from "./Q1.js";

describe('檢查到底要不要播電影', () => {
  test('人數0', () => {
    const input = "0"
    const result = Q1(input)
    expect(result).toBe(`停播一次`)
  })

  test('只有1人', () => {
    const input = 1
    const result = Q1(input)
    expect(result).toBe(`照常播電影`)
  })

  test('1000人', () => {
    const input = 1000
    const result = Q1(input)
    expect(result).toBe(`照常播電影`)
  })

  test('輸入含空白格', () => {
    const input = " "
    expect(() => {
      Q1(input)
    }).toThrow("不能是空白字元喔！")
  })

  test('非整數', () => {
    const input = "-0.5"
    expect(() => {
      Q1(input)
    }).toThrow("請輸入整數阿拉伯數字喔！")
  })

  test('負數', () => {
    const input = "-1"
    expect(() => {
      Q1(input)
    }).toThrow("不能小於0啦")
  })
}) 