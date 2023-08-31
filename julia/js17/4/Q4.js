import { getFormulaAndSum } from "./getFormulaAndSum.js";
import { checkBlank, checkIsInteger, checkNegative } from "../utils/variableCheck.js";

export function Q4(input) {
  checkBlank(input)
  checkIsInteger(input)
  checkNegative(input)

  const number = Number(input)
  return getFormulaAndSum(number)
}