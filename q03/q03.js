// Q03. 好想樂園的門票一張400元，優惠6歲(含)以下的孩童和65歲(含)以上的老人半價，
// 試用「[比較運算子](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Comparison)」
// 寫一程式，讓使用者自行輸入年齡，並判斷門票價錢。

// prompt sync 外掛
const prompt = require("prompt-sync")({ sigint: true });
const age = prompt("顧客年齡: ");
const price = 400;

// 主程式
function sellTicket(age) {
  if (+age < 7 || +age > 64) {
    return price / 2 + " 元";
  } else {
    return price + " 元";
  }
}
console.log(sellTicket(age));
