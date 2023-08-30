import { sameRemainderOrNot } from "./module.js";

describe('測試餘數是否相同', ()=> {
  test('a=5, b=8,餘數相同', ()=> {
    const a = 5
    const b = 8
    const result = sameRemainderOrNot(a, b)
    expect(result).toBeTruthy() 
  })

  test('a=5, b=7, 餘數不同', ()=> {
    const a = 5
    const b = 7
    const result = sameRemainderOrNot(a, b)
    expect(result).toBeFalsy() 
  })
})