const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('每經過20分鐘細菌數量會增加為原來的2倍，原有10隻細菌，＿分鐘後的細菌有幾隻。請輸入分鐘數：', (m) => {

  const reg = new RegExp("^[0-9]*$");

  if (!reg.test(m)) {
    console.loge("請輸入數字");
    rl.close();
  } else {
    m = Number(m);
  }

  twofold(10,m);

rl.close();
});


function twofold(b, m) {
  if(m=0){
    return b;
  }else{
    //twofold(Math.pow(0.5b,1/20),m-1);
  }
}