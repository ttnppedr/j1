// Q01. 好想電影院規定除非完全沒有客人買票，否則就算只有一位顧客也照常播放電影。
// 讓使用者輸入客人的人數，並用「!」判斷人數，不為零顯示「照常播放電影」。

// prompt sync 外掛
const prompt = require("prompt-sync")({ sigint: true });
const input = prompt("請問有幾位? ");

const lowerLimit = 0; // 設一個 0 的變數

// 判斷非正整數數字
function checkInput(inputValue) {
  if (!Number.isInteger(+inputValue)) throw "非整數";
  if (+inputValue < 0) throw "小於零";
}

// 判斷要不要播放電影
function seeAMovie(people) {
  if (people !== 0) {
    console.log(typeof people);
    return "顧客人數 " + people + "，播放電影";
  } else {
    return "顧客人數 " + people + "，不播放電影";
  }
}

// 主程式
function main(input) {
  try {
    checkInput(input);
    console.log(input);
    let result = seeAMovie(input);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

main(input);
