// Q02. 使用者輸入兩個整數，將它們分別除以 3 ，
// 判斷餘數是否相同，若相同，則於螢幕上顯示「餘數相同」。

// prompt sync 外掛
const prompt = require("prompt-sync")({ sigint: true });
const inputA = prompt("請輸入兩個整數，第一個整數 ");
const inputB = prompt("第二個整數 ");

// 檢查餘數主程式
function inspectRemainder(a, b) {
  if (+a % 3 === +b % 3) {
    return a + " 跟 " + b + " 分別除以 3, 餘數相同.";
  } else {
    return a + " 跟 " + b + " 分別除以 3, 餘數不同內...";
  }
}
console.log(inspectRemainder(inputA, inputB));
