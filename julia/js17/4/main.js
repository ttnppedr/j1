// 輸入 n 印出 1 + 2 - 3 + 4 - 5 + 6...n 的算式與總和
// import { printSum } from './module.js';
// import { getFormulaAndSum } from "./module.js";
// import { isBlank, isInteger, isNegative } from "../utils/variableCheck.js";
import { printFormulaAndSum } from "./printFormulaAndSum.js"
import prompt from "../utils/getUserInput.js"

main()

function main() {
  const input = prompt('印出 1 + 2 - 3 + 4 - 5 + 6...n 的算式與總和,請輸入n值')

  try {
    const result = printFormulaAndSum(input)
    console.log(result);

  } catch (error) {
    console.log(error.message);
    return main()
  }
}