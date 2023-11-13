// 2. 使用者輸入兩個整數，將它們分別除以 3 ，判斷餘數是否相同，若相同，則於螢幕上顯示「餘數相同」。

import { textForIsSameRemainderForDivisor } from "./textForIsSameRemainderForDivisor.js"
import { getInputArray } from "./getInputArray.js"

main()

function main() {
  try {
    const askTimes = 2
    console.log(`請輸入${askTimes}個整數`)

    const inputList = getInputArray(askTimes)
    const result = textForIsSameRemainderForDivisor(inputList)
    console.log(result)
  } catch (error) {
    console.log(error.message)

    return main()
  }
}
