// Q01. 好想電影院規定除非完全沒有客人買票，否則就算只有一位顧客也照常播放電影。
// 讓使用者輸入客人的人數，並用「!」判斷人數，不為零顯示「照常播放電影」。

import prompt from "../utils/getUserInput.js"
import { playMovie } from "./playMovie.js"

main()

function main() {
  const input = prompt('請問總共幾個人看電影？')

  try {
    console.log(playMovie(input))
  } catch (error) {
    console.log(error.message)

    return main()
  }
}
