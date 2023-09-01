import { sameRemainderOrNot } from "./sameRemainderOrNot.js";
import { checkBlank, checkIsInteger } from "../utils/variableCheck.js";
// import { getInputArray } from "./getInputArray.js";

// export function Q2(askTImes) {  
//   const [firstInput, secondInput] = getInputArray(askTImes)
//   return sameRemainderOrNot(firstInput, secondInput)
//     ? '餘數相同'
//     : '餘數不同喔！'  
// }

function validators(value) {
  checkBlank(value)
  checkIsInteger(value)
  // if (/0x\d+/.test(value)) {
  //   throw new Error("請勿輸入16進制")
  // }
}

export function Q2(inputList) {
  inputList.forEach((input) => validators(input))
  const numberInputList = inputList.map(input => Number(input))

  const [firstInput, secondInput] = numberInputList
  return sameRemainderOrNot(firstInput, secondInput)
    ? '餘數相同'
    : '餘數不同喔！'
}