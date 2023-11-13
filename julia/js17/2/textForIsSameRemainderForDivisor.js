import { isSameRemainderForDivisor } from "./isSameRemainderForDivisor.js"
import { isRequiredInput, isBlank, isInteger, isBinOctHexAndE } from "../utils/variableCheck.js"

export function textForIsSameRemainderForDivisor(inputList) {
  inputList.forEach(validators)

  const numberInputList = inputList.map(Number)
  const [firstInput, secondInput] = numberInputList

  return isSameRemainderForDivisor(firstInput, secondInput, 3) ? '餘數相同' : '餘數不同喔！'
}

function validators(value) {
  isRequiredInput(value)
  isBlank(value)
  isBinOctHexAndE(value)
  isInteger(value)
}
