// 2. 使用者輸入兩個整數，將它們分別除以 3 ，判斷餘數是否相同，若相同，則於螢幕上顯示「餘數相同」。

import { Q2 } from "./Q2.js";

main()

// function main() {

//   try{    
//     const result = Q2()
//     result
//       ? console.log('餘數相同')
//       : console.log('餘數不同喔！')
//   } catch (error) {
//     console.log(error.message);
//     main()    
//   }

// }  


// function main() {
//   const arr = [];
//   const askTImes = 2;
//   try {
// for (let i = 0; i < askTImes; i++) {
//   const questionName = `請輸入第${i + 1}個整數`
//   const validatedInput = getInputValue(questionName, i)
//   arr.push(validatedInput)
// }
// const [firstInput, secondInput] = arr;
// sameRemainderOrNot(firstInput, secondInput)
// sameRemainderOrNot
//   ? console.log('餘數相同')
//   : console.log('餘數不同喔！')
//   } catch (error) {
//     console.log(error.message);
//     main()
//   }
// }



function main() {
  const askTImes = 2;
  console.log(`請輸入${askTImes}個整數`)
  const textForSameRemainderOrNot = Q2(askTImes)
  console.log(textForSameRemainderOrNot);
}


