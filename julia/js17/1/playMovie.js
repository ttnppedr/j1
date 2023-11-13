import { isAnyone } from "./isAnyone.js"
import { isBinOctHexAndE, isBlank, isInteger, isNegative, isRequiredInput } from "../utils/variableCheck.js"

export function playMovie(input) {
  validate(input)

  const people = Number(input)
  const result = isAnyone(people)
    ? `照常播電影`
    : `停播`;

  return result
}

function validate(input) {
  isRequiredInput(input)
  isBlank(input)
  isBinOctHexAndE(input)
  isInteger(input)
  isNegative(input)
}
