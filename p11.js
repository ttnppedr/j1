const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('健身房新開幕，每期會費500元，第一期79折，滿五期再折200元，請輸入需要期數：', (num) => {

  const reg = new RegExp("^[0-9]*$");

  if (!reg.test(num)) {
    console.loge("請輸入數字");
    rl.close();
  } else {
    num = Number(num);
  }

  let money = 0;
  let i = 0;
  let bonus = 300;
  do{
    i++
    if (num === 1) {
      money = 500*0.79;

    } else if (num < 5) {
      money = 500 * 0.79;
      money = money + 500*(num-1);

    } else if (num >= 5) {

      money = 500 * 0.79;
      money = money + 500 * ((num - 1) - Math.ceil((num - 1) / 5)) + Math.ceil((num - 1) / 5) * bonus;

    }
    
  }while(i===num){
    console.log(money);
  }

rl.close();
});

