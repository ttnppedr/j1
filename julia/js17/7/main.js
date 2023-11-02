// 印出下圖，並轉 90°
//   ** ** 
//  ******* 
// *********
// *********
//  *******
//   *****
//    ***
//     *

// let str = `
//     **  
//    **** 
//   ******
//  *******
// *******
//  *******
//   ******
//    **** 
//     **  
// `
import { graphRotate90 } from "./graphRotate90.js";

function main() {
  
// const graph = `  ** **  \n ******* \n*********\n*********\n ******* \n  *****  \n   ***   \n    *    `

 const commonStar = `
  ** **  
 ******* 
*********
*********
 ******* 
  *****  
   ***   
    *    
`;

const result = graphRotate90(commonStar)
console.log(result);
}

main()

