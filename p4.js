const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('1+2-3+4-5+6...n 的總和', () => {
  rl.question('請輸入數字：', (an) => {

    if(an<=0){
      rl.close();
    }

   an = Number(an);


   if (an % 2 == 0) {
    // console.log('up');
    // let n = an / 2;
    // let s = ((2 + an) * n) / 2 + (((-3) + (-an + 1)) * (n - 1)) / 2 + 1;
    
    let n = an / 2 - 1;
    const s = 1 + an+ + (-1)*n
    console.log(s);

    rl.close();

   } else if (an % 2 == 1) {
    // console.log('down');
    // let n = (an - 1) / 2;
    // let s = ((-3) + (-an)) * n / 2 + 1 + (2 + (an - 1)) * n / 2;
    let n = (an - 1)/2;
    const s = 1 + (-1) * n
    console.log(s);
    rl.close();

   } 

  });
});