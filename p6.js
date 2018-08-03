const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('輸入四個英文名字', () => {
  rl.question('請第一個英文名字：', (name1nd) => {
   rl.question('請第二個英文名字：', (name2nd) => {
    rl.question('請第三個英文名字：', (name3nd) => {
      rl.question('請第四個英文名字：', (name4nd) => {

        
        const name = [name1nd, name2nd, name3nd, name4nd];

        name.forEach((item,key)=>{

          eng(item,key);
          
          if (item === name1nd){
            
            calc(item);
            rl.close();

          } else if ( item === name3nd){

            calc(item);
            rl.close();

          }
          
        })


      });
    });
   });
  });
});

function eng(params,key) {

  const regExp = new RegExp("[A-Za-z]+");
  if (regExp.test(params)) {

  } else {
    console.log(`第${key+1}個名字，請輸入英文`);
    rl.close();
  }
  
}

function calc(item) {

  const arr = item.split("");

  for (let i = 0; i < arr.length; i++) {

    if (i % 2 === 0) {
      console.log(arr[i]);
    }

  }
  
}