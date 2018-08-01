const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('好想電影院規定除非完全沒有客人買票，否則就算只有一位顧客也照常播放電影。', () => {
  rl.question('請輸入此場看電影的人數：', (num) => {

    if (num !== 0) {
      console.log('照常播放電影');
      rl.close();
    }else{
      console.log('今日暫停播放');
      rl.close();
    }

  });
});