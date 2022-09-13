//Q6 宣告陣列 name，讓使用者自行輸入四個英文名字於陣列中，輸出第一個和第三個名字的單數個字母。

let CheckEmpty = require("./checkEmpty"); //空鑑定

let name = [];
name.originQuestion = "請輸入名字，";
name.question="請輸入名字，這是第一個名字"
name.second="這是第二個名字"
name.third="這是第三個名字"
name.fourth="這是第四個名字"

question6(name);

function question6() {
  const readline = require("node:readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(name.question, (newName) => {
    rl.close();
    return check(name,newName);
  });
}

function check(name,newName){
    try{
        CheckEmpty(newName)
    }	catch (error) {
			console.log(error.message);
			return question6(name);
		};
		name.push(newName);
		changeQuestion(name);
		return ()=>{(name.lenght === 4 ? (printOneAndThree(name)):())}
}

function changeQuestion {
	switch (name.length){
		case 
	}
}

function printOneAndThree(name){
	console.log(name[0]+","+name[2])
}