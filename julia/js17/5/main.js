// 寫一個遞迴函數 function umleven(n) 來求算 2 * 4 + 4 * 6 + 6 * 8...+ (n - 2) * n

import { Q5 } from "./Q5.js";
import prompt from "../utils/getUserInput.js"

main()

function main() {
  const input = prompt('求算 2 * 4 + 4 * 6 + 6 * 8...+ (n - 2) * n,請輸入n值')
  try {      
    const answer = Q5(input)
    console.log(answer);


  } catch (error) {
    console.log(error.message);
    return main()
  }
}