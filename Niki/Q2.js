// Q2. 使用者輸入兩個整數，將它們分別除以 3 ，判斷餘數是否相同，若相同，則於螢幕上顯示「餘數相同」。


function Isnatural(n) {
  if (n.length === 0) {
    throw new Error("請輸入數字,不能為空");
  } else if (n.replaceAll(" ", "").length === 0) {
    throw new Error("請輸入數字,不能只輸入空格");
  } else if (n != Number(n)) {
    throw new Error("請輸入數字");
  } else if (n !== String(Number(n))) {
    throw new Error("請輸入十進位數字");
  } else if (Number(n) !== Math.floor(Number(n))) {
    throw new Error("請勿輸入小數");
  }
}

function question(Q="請輸入兩個數字?這是第一個數字") {
  const readline = require("node:readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(Q, (first) => {
    try {
      Isnatural(first)
    } catch (error) {
      console.log(error.message);
      rl.close();
      return question();
    } 
    rl.close();
    function question2(first) {
      const readline = require("node:readline");
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });
    
      rl.question("請輸入兩個數字?這是第二個數字", (second) => {
        try {
          Isnatural(second)
        } catch (error) {
          console.log(error.message);
          rl.close();
          return question2();
        } 
        rl.close();
        if (first % 3 == second % 3) {
          console.log("餘數相同");
        } else {
          console.log("餘數不同");
        }
      });
    }
    question2(first)
  });
}



// function question(callback) {
//   const readline = require("node:readline");
//   const { stdin: input, stdout: output } = require("node:process");

//   const rl = readline.createInterface({ input, output });
//   rl.question("請輸入數字:", (n) => {
//     if (Number.isInteger(Number(n))) {
//       rl.close();
//       if ( typeof(callback) === "function") {
//         b = callback();
//         return (n,b)
//       } else {
//         return n;
//       }
//     } else {
//       rl.close();
//       n = question();
//       return n;
//     }
//   });
// }

a = question();
// b = question("請輸入兩個數字?這是第二個數字")
// if (a % 3 == b % 3) {
//   console.log("餘數相同");
// } else {
//   console.log("餘數不同");
// }

