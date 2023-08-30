// Q01. 好想電影院規定除非完全沒有客人買票，否則就算只有一位顧客也照常播放電影。
// 讓使用者輸入客人的人數，並用「!」判斷人數，不為零顯示「照常播放電影」。

import { ifPlayMovie } from "./module.js";
import { checkBlank, checkIsInteger, checkNegative } from "../utils/variableCheck.js";
import prompt from "../utils/getUserInput.js";


main()

function main() {
  const input = prompt('請問總共幾個人看電影？')
  try {
    checkBlank(input)
    checkIsInteger(input)
    checkNegative(input)

    const people = Number(input)

    ifPlayMovie(people)
      ? console.log(`照常播電影`)
      : console.log(`停播一次`);
  } catch (error) {
    console.log(error.message);
    return main()
  }
}