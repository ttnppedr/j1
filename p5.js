const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('求算 2*4 + 4*6 ...+(n-2)*n，n最小為 4, 只會出現偶數', () => {
  rl.question('請輸入數字：', (n) => {
    const num = Number(n);
    if (n < 3 || n % 2 == 1) {
      console.log('n 最小為4，只會出現偶數')
      rl.close();
    }
    
    
    
    function umleven(n){

      if(n>4){
        //限制條件
            //加入n的變化的結果 + 他的分身（以n表示）
        return (n - 2) * n + umleven(n-2);

      }else{
        //最底層的結果
        return 8;
      }
      
    }
    
    console.log(umleven(n));
    rl.close();

  });
});