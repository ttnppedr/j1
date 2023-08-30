// 2. 使用者輸入兩個整數，將它們分別除以 3 ，判斷餘數是否相同，若相同，則於螢幕上顯示「餘數相同」。

import { sameRemainderOrNot } from "./module.js";
import { checkBlank, checkIsInteger } from "../utils/variableCheck.js";
import prompt from '../utils/getUserInput.js';

main()

function validators(value) {
  checkBlank(value)
  checkIsInteger(value)
}  

function main() {

  const a = getFirstInput()
  const b = getSecondInput()

  sameRemainderOrNot(a, b)
    ? console.log('餘數相同')
    : console.log('餘數不同喔！') 
   
  function getFirstInput() {
    try {
      const firstInput = prompt('請輸入第一個整數')
      validators(firstInput)
      return(Number(firstInput))
    } catch (error) {
      console.log(error.message);
      return getFirstInput()
    }  
  }  

  function getSecondInput() {
    try {
      const secondInput = prompt('請輸入第二個整數')
      validators(secondInput)
      return(Number(secondInput))
    } catch (error) {
      console.log(error.message);
      return getSecondInput()
    }
  }   
}