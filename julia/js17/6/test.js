import { getOddNameList, getOddCharacter } from "./module.js";

describe('驗證結果', () => {
  test('四個名字分別為Apple,Banana,Cake,Dessert', () => {
    const oddNameList = ['Apple', 'Cake']
    const result = getOddCharacter(oddNameList)
    expect(result).toBe(
      `Apple的奇數字母是A,p,e; Cake的奇數字母是C,k`
    )
  })
  test('四個名字分別為Yuki,Max,Turbo,Engine', () => {
    const oddNameList = ['Yuki', 'Turbo']
    const result = getOddCharacter(oddNameList)
    expect(result).toBe(
      `Yuki的奇數字母是Y,k; Turbo的奇數字母是T,r,o`
    )
  })
})