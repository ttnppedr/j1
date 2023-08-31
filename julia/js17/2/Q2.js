import { sameRemainderOrNot } from "./sameRemainderOrNot.js";
import { getInputArray } from "./getInputArray.js";

export function Q2(askTImes) {  
  const [firstInput, secondInput] = getInputArray(askTImes)
  return sameRemainderOrNot(firstInput, secondInput)
    ? '餘數相同'
    : '餘數不同喔！'  
}