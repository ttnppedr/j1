// 寫一個遞迴函數 function umleven(n) 來求算 2 * 4 + 4 * 6 + 6 * 8...+ (n - 2) * n

import { umleven } from "./module.js";
import { checkBlank, checkIsInteger, checkNegative, checkLessThan4, checkEven} from "../utils/variableCheck.js";
import prompt from "../utils/getUserInput.js"

main()

function main(){
  const input = prompt('求算 2 * 4 + 4 * 6 + 6 * 8...+ (n - 2) * n,請輸入n值')
  try {
    checkBlank(input)
    checkIsInteger(input)
    checkNegative(input)
    checkLessThan4(input)
    checkEven(input)

    const n = Number(input)
    const result = umleven(n)
    console.log(result);  


  } catch(error){
    console.log(error.message);
    return main()    
  }
}