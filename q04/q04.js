// Q04. 輸入 n 印出 `1+2-3+4-5+6...n` 的算式與總和

// prompt sync 外掛
const prompt = require("prompt-sync")({ sigint: true });
const n = prompt("請輸入數字: ");

let sum = 0; // 設一個總和變數是零

// 主程式
for (let i = 1; i <= +n; i++) {
  if (i === 1) {
    sum = 1;
    continue;
  }
  if (i % 2 == 0) {
    sum = sum + i; // 偶數
  } else {
    sum = sum - i; // 奇數
  }
}
console.log(sum);

// 印出算式字串
let expressionB = []; // 先設空陣列再用 for 迴圈加入字串
for (let index = 0; index < +n; index++) {
  if (index === 0) {
    // 因 index 值從 0 開始
    expressionB.push(index + 1); // 如果數字為 1 不加正負號, 傳入 B 陣列
    continue;
  } else if (index % 2 == 0) {
    // 若 index 值除以 2 餘 0
    expressionB.push("-" + (index + 1)); // 若為奇數加 - 號
  } else {
    expressionB.push("+" + (index + 1)); // 若為偶數加 + 號
  }
}
console.log(expressionB.join(""));

// B[1,2,3,4,5,6,7]
// i[0,1,2,3,4,5,6]

// "" + "1"
// "1" + "+"
// "1+" + "2"
// "1+2" + "-"
// "1+2-" + "3"
// ...
