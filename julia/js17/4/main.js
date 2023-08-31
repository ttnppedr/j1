// 輸入 n 印出 1 + 2 - 3 + 4 - 5 + 6...n 的算式與總和
// import { printSum } from './module.js';
// import { getFormulaAndSum } from "./module.js";
// import { checkBlank, checkIsInteger, checkNegative } from "../utils/variableCheck.js";
import { Q4 } from "./Q4.js"
import prompt from "../utils/getUserInput.js"

main()

function main() {
  const input = prompt('印出 1 + 2 - 3 + 4 - 5 + 6...n 的算式與總和,請輸入n值')

  try {
    const printFormulaAndSum = Q4(input)
    console.log(printFormulaAndSum);

  } catch (error) {
    console.log(error.message);
    return main()
  }
}