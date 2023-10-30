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
  
const graph = `  ** **  \n ******* \n*********\n*********\n ******* \n  *****  \n   ***   \n    *    `

const result = graphRotate90(graph)
console.log(result);
}

main()

