import { isDiscount } from "./isDiscount.js";
import { isRequiredInput, isBlank, isInteger, isNegative, isBinOctHexAndE } from "../utils/variableCheck.js";

export function correspondingPrice(input) {
  const regularTicket = 400
  isRequiredInput(input)
  isBlank(input);
  isBinOctHexAndE(input)
  isInteger(input);
  isNegative(input);
  const age = Number(input);
  const result = isDiscount(age)
    ? `你是優惠票半價喔！請給我${regularTicket / 2}元`
    : `你是全票喔！請給我${regularTicket}元`;
  return result;
}