const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('判斷分別除以三餘數是否相同。', () => {
  rl.question('輸入第一個數字：', (num1) => {
    rl.question('輸入第二個數字：', (num2) => {

      const number1 = num1 % 3;
      const number2 = num2 % 3;

      if (number1 === number2) {
        console.log('餘數相同');
        rl.close();
      }else{
        console.log('餘數不同');
        rl.close();
      }


    });
  });
});