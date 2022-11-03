// 1. 好想電影院規定除非完全沒有客人買票，否則就算只有一位顧客也照常播放電影。讓使用者輸入客人的人數，並用「!」判斷人數，不為零顯示「照常播放電影」。

let openReadLine = require("./readline/openReadLine"); //開啟readline
let checkEmpty = require("./ckeck/checkEmpty"); //空鑑定
let checkString = require("./ckeck/checkString"); //字串鑑定
let checkDecimal = require("./ckeck/checkDecimal"); // 十進位鑑定
let checkPositive = require("./ckeck/checkPositive"); //正數鑑定
let checkInteger = require("./ckeck/checkInteger"); //整數鑑定

main("今天好想電影院有幾人買票??");

async function main(question) {
  input = await openReadLine(question);
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

function result(input) {
  return input === 0 ? "今天不播放電影" : "照常播放電影";
}

module.exports = result