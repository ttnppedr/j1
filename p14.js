const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('計算在沒有細菌死亡的狀況下，＿分鐘後的細菌有幾隻。請輸入分鐘數：', (m) => {

  const reg = new RegExp("^[0-9]*$");

  if (!reg.test(m)) {
    console.loge("請輸入數字");
    rl.close();
  } else {
    m = Number(m);
  }

  twofold(b,m);

rl.close();
});


function twofold(b, m) {

}