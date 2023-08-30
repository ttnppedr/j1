import { umleven } from "./module.js";

describe ('驗證結果是否正確', () => {
  test('n=8',()=> {
    const n = 8
    const result = umleven(n)
    expect(result).toBe(80)
  })   
  test('n=12', ()=> {
    const n = 12
    const result = umleven(n)
    expect(result).toBe(280)
  })
})