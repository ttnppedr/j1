import { getFormulaAndSum } from "./getFormulaAndSum.js";
import { isRequiredInput, isBlank, isInteger, isNegative, isBinOctHexAndE } from "../utils/variableCheck.js";

export function printFormulaAndSum(input) {
  isRequiredInput(input)
  isBlank(input)
  isBinOctHexAndE(input)
  isInteger(input)
  isNegative(input)

  const number = Number(input)
  return getFormulaAndSum(number)
}