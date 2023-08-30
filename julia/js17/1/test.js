import { ifPlayMovie } from "./module.js"

describe('檢查到底要不要播電影', () => {
  test('人數0', () => {
    const people = 0
    const result = ifPlayMovie(people)
    expect(result).toBeFalsy()
  })

  test('只有1個人', () => {
    const people = 1
    const result = ifPlayMovie(people)
    expect(result).toBeTruthy()
  })

  test('1000人', () => {
    const people = 1000
    const result = ifPlayMovie(people)
    expect(result).toBeTruthy()
  })
}) 