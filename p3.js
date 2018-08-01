const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('好想樂園的門票一張400元，查看是否符合半價資格。', () => {
    rl.question('請輸入你的年齡：', (age) => {

       if (age >= 65 || age <= 6) {
         console.log('符合資格，票價：$200');
          rl.close();
       } else {
         console.log('不半價資格，票價：$400');
          rl.close();
       }

    });
});