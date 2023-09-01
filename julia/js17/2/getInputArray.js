import { checkBlank, checkIsInteger } from "../utils/variableCheck.js";
import prompt from '../utils/getUserInput.js';

function getInputArray(askTImes) {
  return Array(askTImes)
    .fill(undefined)
    .map((input, index) => {
      const questionName = `第${index + 1}個`;
      return getInputValue(questionName, index)
    })
}

function getInputValue(questionName, ranking) {
  try {
    const input = prompt(questionName)
    validators(input)
    return input
  } catch (error) {
    console.log(error.message);
    return getInputValue(questionName,ranking)
  }
}

function validators(value) {
  checkBlank(value)
  checkIsInteger(value)
}

export { getInputValue, getInputArray }