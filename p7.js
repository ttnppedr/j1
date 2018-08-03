const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('印星星', () => {

 let limit = 8;
 let row01 = [];
 let row02 = [];
 let row03 = [];
 let row04 = [];
 let row05 = [];
 for (let num = 0; num < limit; num++) {
   
   if (num === 4 || num === 5){
    row01.push('*')
   }else{
    row01.push(' ')
   }
 }
 for (let num = 0; num < limit; num++) {

   if (2 < num && num <7) {
     row02.push('*')
   }else {
     row02.push(' ')
   }
 }
 for (let num = 0; num < limit; num++) {

   if (1 < num ) {
     row03.push('*')
   } else {
     row03.push(' ')
   }
 }
 for (let num = 0; num < limit; num++) {

   if (0 < num) {
     row04.push('*')
   } else {
     row04.push(' ')
   }
 }
 for (let num = 0; num < limit; num++) {

   if (num<7) {
     row05.push('*')
   } else {
     row05.push(' ')
   }
  
 }
 console.log(row01.toString().replace(/,/g, ''))
 console.log(row02.toString().replace(/,/g, ''))
 console.log(row03.toString().replace(/,/g, ''))
 console.log(row04.toString().replace(/,/g, ''))
 console.log(row05.toString().replace(/,/g, ''))
 console.log(row04.toString().replace(/,/g, ''))
 console.log(row03.toString().replace(/,/g, ''))
 console.log(row02.toString().replace(/,/g, ''))
 console.log(row01.toString().replace(/,/g, ''))

rl.close();

});

