// 寫一個遞迴函數 function umleven(n) 來求算 2 * 4 + 4 * 6 + 6 * 8...+ (n - 2) * n (n最小為 4, 只會出現偶數)

import { getAnswer } from "./getAnswer.js";
import prompt from "../utils/getUserInput.js"

main()

function main() {
  const input = prompt('求算 2 * 4 + 4 * 6 + 6 * 8...+ (n - 2) * n,請輸入n值')
  try {
    const result = getAnswer(input)
    console.log(result);


  } catch (error) {
    console.log(error.message);
    return main()
  }
}