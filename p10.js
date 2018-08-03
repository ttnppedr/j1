const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('印出陣列中所包含的質數以及其索引值', () => {

 const arr = [3, 50, 0, 13, 2, 4, 11];
 
 arr.filter((item,key) => {

  if (isPrime(item)) {
    console.log(`第${key}項的${item}`);
  }
  
  
 })

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
  } else if (number % 3 === 0){
    return false;
  } else{
    return true;
  }
  
}
