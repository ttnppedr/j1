// 宣告陣列 name，讓使用者自行輸入四個英文名字於陣列中，輸出第一個和第三個名字的單數個字母。

// 0.宣告陣列name
// 1.先拿到四個名字 
// 2.把名字放到陣列中 
// 3.取出陣列中的奇數名字
// 4.找出該名字奇數字母

import { getNameListArray } from "./getNameListArray.js";
import { getOddCharacterByOddNameList } from "./getOddCharacterByOddNameList.js";

main()

function main() {
  const inputCounts = 4
  console.log(`請輸入${inputCounts}個英文名字`);
  let name = getNameListArray(4)
  const result = getOddCharacterByOddNameList(name)
  console.log(result);
}




