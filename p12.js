const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('找出10~20的質數，並列出前述各質數在1~100的倍數', () => {

const prime = [];

 for (let i = 10; i < 21; i++) {
   if (isPrime(i)){
     prime.push(i);
   }
 }

 const arrs = prime.map((item)=>{
   var arr = [];
   for (var i = item; i < 100; i++) {
     if (i % item == 0) {
       arr.push(i);
     }
   }
   return arr;
 })
 console.log('質數為：'+prime);
 console.log(arrs);
  

rl.close();
});

function isPrime(number) {

  if (number < 2) {
    return false;
  }
  //小於2不是質數

  if (number === 2 || number === 3) { //2是質數
    return true;
  } else if (number % 2 === 0) { //偶數
    return false;
  } else if (number % 3 === 0) {
    return false;
  } else {
    return true;
  }

}