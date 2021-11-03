// Q05. 寫一個遞迴函數 `function umleven(n)` 來求算 `2*4 + 4*6 + 6*8...+(n-2)*n`
// (n最小為 4, 只會出現偶數)

// prompt sync 外掛
const prompt = require("prompt-sync")({ sigint: true });
const num = +prompt("請輸入數字: ");

// 主程式
console.log(`當 n = ${num} 時,`);
function factorial(num) {
  let sum = num * (num - 2); // 遞迴後的和
  if (num === 4) {
    console.log(`(${num}-2)*${num}=${sum}`); // 印算式
    return num * (num - 2); // 最小為 4，return 4 * (num-2) 為終點
  } else if (num % 2 == 0 && num > 4) {
    console.log(`(${num}-2)*${num}=${sum}`); // 印算式
    return sum + factorial(num - 2); // 遞迴的和加總
  }
}

console.log(`總和為 ${factorial(num)}`);
