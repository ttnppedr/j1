import { isSameRemainder } from "./isSameRemainder.js";
import { isRequiredInput, isBlank, isInteger, isBinOctHexAndE } from "../utils/variableCheck.js";
// import { getInputArray } from "./getInputArray.js";

// export function textForIsSameRemainder(askTImes) {  
//   const [firstInput, secondInput] = getInputArray(askTImes)
//   return isSameRemainder(firstInput, secondInput)
//     ? '餘數相同'
//     : '餘數不同喔！'  
// }

function validators(value) {
  isRequiredInput(value)
  isBlank(value)
  isBinOctHexAndE(value)
  isInteger(value)
  // if (/0x\d+/.test(value)) {
  //   throw new Error("請勿輸入16進制")
  // }
}

export function textForIsSameRemainder(inputList) {
  inputList.forEach((input) => validators(input))
  const numberInputList = inputList.map(input => Number(input))

  const [firstInput, secondInput] = numberInputList
  return isSameRemainder(firstInput, secondInput)
    ? '餘數相同'
    : '餘數不同喔！'
}