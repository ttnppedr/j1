import { umleven } from "./umleven.js";
import { checkBlank, checkIsInteger, checkNegative, checkNotLessThanY, checkEven } from "../utils/variableCheck.js";

export function Q5(input) {
  let y = 4
  checkBlank(input)
  checkIsInteger(input)
  checkNegative(input)
  checkNotLessThanY(input, y)
  checkEven(input)

  const n = Number(input)
  return umleven(n)
}