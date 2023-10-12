// import { getOddCharacter } from "./getOddCharacter.js";
import { getOddCharacterByOddNameList } from "./getOddCharacterByOddNameList.js"

describe('驗證結果', () => {
  test('四個名字分別為Apple,Banana,Cake,Dessert', () => {
    const name = ['Apple', 'Banana', 'Cake', 'Dessert']
    const result = getOddCharacterByOddNameList(name)
    expect(result).toStrictEqual(
      ["Apple的奇數字母分別為A,p,e", "Cake的奇數字母分別為C,k"]
    )
  })
  test('四個名字分別為Yuki,Max,Turbo,Engine', () => {
    const name = ['Yuki', 'Max', 'Turbo', 'Engine']
    const result = getOddCharacterByOddNameList(name)
    expect(result).toStrictEqual(
      ["Yuki的奇數字母分別為Y,k", "Turbo的奇數字母分別為T,r,o"]
    )
  })
})

