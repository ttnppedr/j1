// 1. 好想電影院規定除非完全沒有客人買票，否則就算只有一位顧客也照常播放電影。讓使用者輸入客人的人數，並用「!」判斷人數，不為零顯示「照常播放電影」。

import { openReadLine } from "../readline-ES6/openReadLine.js"; //開啟readline
import { checkEmpty } from "../check-ES6/checkEmpty.js"; //空鑑定
import { checkString } from "../check-ES6/checkString.js"; //字串鑑定
import { checkDecimal } from "../check-ES6/checkDecimal.js"; // 十進位鑑定
import { checkPositive } from "../check-ES6/checkPositive.js"; //正數鑑定
import { checkInteger } from "../check-ES6/checkInteger.js"; //整數鑑定
import { result } from "./Q1.module.js";

main("今天好想電影院有幾人買票??");

async function main(question) {
  let input = await openReadLine(question);
  if (check(input)) {
    console.log(result(Number(input)));
  } else {
    return main(question);
  }
}

function check(input) {
  try {
    checkEmpty(input);
    checkString(input);
    checkDecimal(input);
    checkPositive(input);
    checkInteger(input);
  } catch (error) {
    console.log(error.message);
    return false;
  }
  return true;
}

// function result(input) {
//   return input === 0 ? "今天不播放電影" : "照常播放電影";
// }

// export { result };
