//Q4  輸入 n 印出 1+2-3+4-5+6...n 的算式與總和

import { openReadLine } from "../readline-ES6/openReadLine.js"; //開啟readline
import { checkEmpty } from "../check-ES6/checkEmpty.js"; //空鑑定
import { checkString } from "../check-ES6/checkString.js"; //字串鑑定
import { checkDecimal } from "../check-ES6/checkDecimal.js"; // 十進位鑑定
import { checkPositive } from "../check-ES6/checkPositive.js"; //正數鑑定
import { checkInteger } from "../check-ES6/checkInteger.js"; //整數鑑定
import { result } from "./Q4.module.js";

main();

function main(){
  let input = readLine("請輸入數字n:")
  let alternatingArray = A(input);
  let result = alternatingArray.reduce((A,B)=>A+B,0);
  let expression = alternatingArray.join(",").replaceAll(",-","-").replace(",","+")+"=" ;
  console.log(expression+result)
}

function output(input) {
  return expression(input) + answer(input); // 算式+答案
}
function answer(input) {
  let end = 1; //答案
  for (let n = 2; n <= input; n++) {
    end = end + n * (-1) ** n;
  }
  return end;
}

//算式expression
function expression(input) {
  let procedure = "1"; //過程
  for (let n = 2; n <= input; n++) {
    !(n % 2)
      ? (procedure = procedure + "+" + n)
      : (procedure = procedure + "-" + n);
  }
  return procedure + "=";
}

// console.log(askquestion("請輸入數字n:"))
