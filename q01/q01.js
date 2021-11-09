// Q01. 好想電影院規定除非完全沒有客人買票，否則就算只有一位顧客也照常播放電影。
// 讓使用者輸入客人的人數，並用「!」判斷人數，不為零顯示「照常播放電影」。

// prompt sync 外掛
const prompt = require("prompt-sync")({ sigint: true });
const input = prompt("請問有幾位? ");

main(input);

// 主程式
function main(input) {
  try {
    checkInputValue(input);
    let result = checkThePlaybackConditions(+input);
    console.log(result);
  } catch (e) {
    console.log(e.message);
  }
}

// 檢查輸入的值, 若符合以下條件則回傳錯誤訊息
function checkInputValue(inputValue) {
  if (!Number.isInteger(+inputValue)) {
    throw new Error("非整數");
  }
  if (+inputValue < 0) {
    throw new Error("小於零");
  }
  if (/0b/gi.test(inputValue)) {
    throw new Error("二進位，請輸入0-9阿拉伯數字");
  }
  if (/0o/gi.test(inputValue)) {
    throw new Error("八進位，請輸入0-9阿拉伯數字");
  }
  if (/0x/gi.test(inputValue)) {
    throw new Error("十六進位，請輸入0-9阿拉伯數字");
  }
  if (/\d(?=e)|e(?=\d)/gi.test(inputValue)) {
    throw new Error("科學符號e，請輸入0-9阿拉伯數字");
  }
  if (/\s/.test(inputValue)) {
    throw new Error("有空白字元，請輸入0-9阿拉伯數字");
  }
  // if (/\D/.test(inputValue)) {
  //   throw new Error("請輸入0-9阿拉伯數字");
  // }
}

// 檢查播放條件(人數)
function checkThePlaybackConditions(people) {
  if (people !== 0) {
    return "顧客人數 " + people + "，播放電影";
  } else {
    return "顧客人數 " + people + "，不播放電影";
  }
}
