import { isSameRemainderForDivisor } from "./isSameRemainderForDivisor.js";
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
}

export function textForIsSameRemainderForDivisor(inputList) {
  inputList.forEach(validators)
  // inputList.forEach((input) => validators(input))
  const numberInputList = inputList.map(Number)
  // const numberInputList = inputList.map(input => Number(input))

  const [firstInput, secondInput] = numberInputList
  // return isSameRemainderForDivisor(firstInput, secondInput)
  //   ? '餘數相同'
  //   : '餘數不同喔！'
  // 三元運算子只適合用在物件賦值
  if (isSameRemainderForDivisor(firstInput, secondInput, 3)) {
    return '餘數相同'
  } else {
    return '餘數不同喔！'
  }
}

