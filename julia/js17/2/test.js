import { sameRemainderOrNot } from "./sameRemainderOrNot.js";
import { getInputArray, getInputValue } from "./getInputArray.js";

// 測sameRemainderOrNot
describe('測試餘數是否相同', () => {
  test('a=5, b=8,餘數相同', () => {
    const a = 5
    const b = 8
    const result = sameRemainderOrNot(a, b)
    expect(result).toBeTruthy()
  })

  test('a=5, b=7, 餘數不同', () => {
    const a = 5
    const b = 7
    const result = sameRemainderOrNot(a, b)
    expect(result).toBeFalsy()
  })
})

// 測getInputValue

// describe('測input值是否符合要求',() => {
//   test('input= 0.5', ()=> {
//    expect(()=> {
//     getInputValue(2,2)
//    }).toThrow("請輸入整數阿拉伯數字喔！")
//   })
// })