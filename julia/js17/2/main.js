// 2. 使用者輸入兩個整數，將它們分別除以 3 ，判斷餘數是否相同，若相同，則於螢幕上顯示「餘數相同」。

import { textForIsSameRemainderForDivisor } from "./textForIsSameRemainderForDivisor.js";
import { getInputArray } from "./getInputArray.js";




// function main() {

//   try{    
//     const result = textForIsSameRemainder()
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



// function main() {
//   const askTImes = 2;
//   console.log(`請輸入${askTImes}個整數`)
//   const textForSameRemainderOrNot = textForIsSameRemainder(askTImes)
//   console.log(textForSameRemainderOrNot);
// }

// import { sameRemainderOrNot } from "./sameRemainderOrNot.js";


main()

function main() {
  try {
    const askTImes = 2;
    console.log(`請輸入${askTImes}個整數`)
    // const [firstInput, secondInput] = getInputArray(askTImes)
    // const textForSameRemainderOrNot = textForIsSameRemainder(firstInput, secondInput)
    const inputList = getInputArray(askTImes)
    const result = textForIsSameRemainderForDivisor(inputList)
    console.log(result);
  } catch (error) {
    console.log(error.message);
    main()
  }
}



// function textForIsSameRemainder(firstInput, secondInput) {
// validators(firstInput)
// validators(secondInput)
// return sameRemainderOrNot(firstInput, secondInput)
//   ? '餘數相同'
//   : '餘數不同喔！'
// }
