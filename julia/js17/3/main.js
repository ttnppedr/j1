// 3. 好想樂園的門票一張400元，優惠6歲(含)以下的孩童和65歲(含)以上的老人半價，試用「比較運算子」寫一程式，讓使用者自行輸入年齡，並判斷門票價錢。

import { getTicketPrice } from "./module.js";
import { checkBlank, checkIsInteger, checkNegative } from "../utils/variableCheck.js";
import prompt from "../utils/getUserInput.js"

main()

function main() {
  const input = prompt('你好,請問你幾歲？')
  try {
    checkBlank(input)
    checkIsInteger(input)
    checkNegative(input)

    const age = Number(input)
    let regularTicket = 400 
    let text = getTicketPrice(age, regularTicket)  
    console.log(text);    
       

    // concession(age, regularTicket)    
    //   ? console.log(`你是優惠票半價喔！請給我${regularTicket/2}元`)
    //   : console.log(`你是全票喔！請給我${regularTicket}元`);
    

  } catch (error) {
    console.log(error.message);
    return main()
  }




}