import { isSameRemainderForDivisor } from "./isSameRemainderForDivisor.js"
import { isRequiredInput, isBlank, isInteger, isBinOctHexAndE } from "../utils/variableCheck.js"

export function textForIsSameRemainderForDivisor(inputList) {
  inputList.forEach(validators)

  const numberInputList = inputList.map(Number)
  const [firstInput, secondInput] = numberInputList
  // 三元運算子只適合用在物件賦值
  if (isSameRemainderForDivisor(firstInput, secondInput, 3)) {
    return '餘數相同'
  } else {
    return '餘數不同喔！'
  }
}

function validators(value) {
  isRequiredInput(value)
  isBlank(value)
  isBinOctHexAndE(value)
  isInteger(value)
}
