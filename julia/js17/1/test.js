import { anyoneThere } from "./anyoneThere.js"

describe('檢查有沒有人', () => {
  test('人數0', () => {
    const people = 0
    const result = anyoneThere(people)
    expect(result).toBeFalsy()
  })

  test('只有1個人', () => {
    const people = 1
    const result = anyoneThere(people)
    expect(result).toBeTruthy()
  })

  test('1000人', () => {
    const people = 1000
    const result = anyoneThere(people)
    expect(result).toBeTruthy()
  })
  
}) 