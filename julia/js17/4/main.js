// 輸入 n 印出 1 + 2 - 3 + 4 - 5 + 6...n 的算式與總和
// import { printSum } from './module.js';
import { printSum } from "./module.js";
import { checkBlank, checkIsInteger, checkNegative } from "../utils/variableCheck.js";
import prompt from "../utils/getUserInput.js"

main()

function main() {
  const input = prompt('印出 1 + 2 - 3 + 4 - 5 + 6...n 的算式與總和,請輸入n值')

  try {
    checkBlank(input)
    checkIsInteger(input)
    checkNegative(input)

    const number = Number(input)
    const result = printSum(number)
    console.log(result);


  } catch (error) {
    console.log(error.message);
    return main()
  }
}