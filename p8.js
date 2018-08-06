const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('請輸入數值：', (num) => {

  const reg = new RegExp("^[0-9]*$");

   if (!reg.test(num)) {
     console.loge("請輸入數字");
     rl.close();
   }else{
     num = Number(num);
   }

   var times = 0;
   console.log(divi(num * 100, times));

   rl.close();
});

function divi(num, times) {

  times = times + 1;
  num = num / 3;
  console.log(num);

  if (Math.floor(num % 10) === 0) {

    return times;

  }else{
     
    return divi(num,times);

  }

}

