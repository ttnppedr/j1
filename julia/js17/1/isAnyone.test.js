import { isAnyone } from "./isAnyone.js"

describe('檢查有沒有人', () => {
  test('人數0', () => {
    const people = 0
    const result = isAnyone(people)
    expect(result).toBeFalsy()
  })

  test('只有1個人', () => {
    const people = 1
    const result = isAnyone(people)
    expect(result).toBeTruthy()
  })

  test('1000人', () => {
    const people = 1000
    const result = isAnyone(people)
    expect(result).toBeTruthy()
  })
  
}) 