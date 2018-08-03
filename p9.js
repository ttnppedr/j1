const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('arr1 和 arr2 對應項相加', () => {

 const arr1 = [2, 3, 1, 7, 9];
 const arr2 = [8, 7, 9, 3, 1];
 const arr3 = [];
 
 arr1.forEach((item1,key1) => {

  let num = arr2.find((item2,key2) => {
    if(key1 === key2) {
      return item2;
    }
  })

  arr3.push(item1 + num);

 })

 console.log(arr3);
rl.close();
});

