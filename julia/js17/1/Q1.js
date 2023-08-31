import { anyoneThere } from "./anyoneThere.js";
import { checkBlank, checkIsInteger, checkNegative } from "../utils/variableCheck.js";

export function Q1(input) {

  checkBlank(input)
  checkIsInteger(input)
  checkNegative(input)

  const people = Number(input)

  const result = anyoneThere(people)
    ? `照常播電影`
    : `停播一次`;

  return result
}