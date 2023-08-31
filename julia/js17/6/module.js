// 宣告陣列 name，讓使用者自行輸入四個英文名字於陣列中，輸出第一個和第三個名字的單數個字母。
import { checkBlank, checkIsLetter } from "../utils/variableCheck.js"
import prompt from "../utils/getUserInput.js"

export function getOddNameList() {
  const inputCounts = 4  
  let oddNameList = []
  for (let i = 0; i < inputCounts; i++) {
    const input = prompt(`請提供四個英文名字,現在第${i + 1}個`)
    checkBlank(input)
    checkIsLetter(input)
    if (i % 2 === 0) {
      oddNameList.push(input)
    }
  }
  return oddNameList
}

export function getOddCharacter(oddNameList) {
  let printContentArr = []
  for (let i = 0; i < oddNameList.length; i++) {
    let name = oddNameList[i]
    let oddCharacterOfName = name.split('').filter((item, index) => index % 2 === 0)
    let printContent = `${name}的奇數字母是${oddCharacterOfName}`
    printContentArr.push(printContent)
  }
  let resultStr = printContentArr.join("; ")
  return resultStr
}
