// 3. 好想樂園的門票一張400元，優惠6歲(含)以下的孩童和65歲(含)以上的老人半價，試用「比較運算子」寫一程式，讓使用者自行輸入年齡，並判斷門票價錢。
import { Q3 } from "./Q3.js";
import prompt from "../utils/getUserInput.js"

main()

function main() {  
  const input = prompt('你好,請問你幾歲？')
  try {
    const correspondingPrice = Q3(input);
    console.log(correspondingPrice); 

  } catch (error) {
    console.log(error.message);
    return main()
  }  
}

