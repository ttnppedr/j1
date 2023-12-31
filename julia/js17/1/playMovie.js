import { isAnyone } from "./isAnyone.js";
import { isRequiredInput ,isBlank, isInteger, isNegative, isBinOctHexAndE } from "../utils/variableCheck.js";

export function playMovie(input) {
  
  isRequiredInput(input)
  isBlank(input)
  isBinOctHexAndE(input)
  isInteger(input)
  isNegative(input)
  

  const people = Number(input)

  const result = isAnyone(people)
    ? `照常播電影`
    : `停播`;

  return result
}