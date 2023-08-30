// 宣告陣列 name，讓使用者自行輸入四個英文名字於陣列中，輸出第一個和第三個名字的單數個字母。

// 1.先拿到四個名字 
// 2.先設一個空陣列namelist 
// 3.把得到的奇數名字依序放入陣列 
// 4.找出該名字奇數字母

import { getOddCharacter, getOddNameList } from "./module.js"

main()

function main() {  
  try {
    let oddNameArray = getOddNameList()     
    let result = getOddCharacter(oddNameArray)  
    console.log(result);     
    

  } catch (error) {
    console.log(error.message);
    return main()
  }
}



