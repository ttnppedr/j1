import { isDiscount } from "./isDiscount.js";
import { checkBlank, checkIsInteger, checkNegative } from "../utils/variableCheck.js";

export function Q3(input) {
  const regularTicket = 400
  checkBlank(input);
  checkIsInteger(input);
  checkNegative(input);
  const age = Number(input);
  const result = isDiscount(age)
    ? `你是優惠票半價喔！請給我${regularTicket / 2}元`
    : `你是全票喔！請給我${regularTicket}元`;
  return result;
}