import { umleven } from "./umleven.js";
import { isRequiredInput, isBlank, isInteger, isNegative, isNotLessThanY, isEven, isBinOctHexAndE } from "../utils/variableCheck.js";

export function getAnswer(input) {
  let y = 4
  isRequiredInput(input)
  isBlank(input)
  isBinOctHexAndE(input)
  isInteger(input)
  isNegative(input)
  isNotLessThanY(input, y)
  isEven(input)

  const n = Number(input)
  return umleven(n)
}