import { isRequiredInput, isBlank, isInteger, isBinOctHexAndE } from "../utils/variableCheck.js";
import prompt from '../utils/getUserInput.js';

function getInputArray(askTImes) {
  return Array(askTImes)
    .fill(null)
    .map((input, index) => {
      const questionName = `第${index + 1}個`;
      return getValidInputValue(questionName, index)
    })
}

function getValidInputValue(questionName, ranking) {
  try {
    const input = prompt(questionName)
    validators(input)
    return input
  } catch (error) {
    console.log(error.message);
    return getValidInputValue(questionName, ranking)
  }
}

function validators(value) {
  isRequiredInput(value)
  isBlank(value)
  isBinOctHexAndE(value)
  isInteger(value)
}

export { getValidInputValue, getInputArray }