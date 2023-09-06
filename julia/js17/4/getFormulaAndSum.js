// 輸入 n 印出 1 + 2 - 3 + 4 - 5 + 6...n 的算式與總和

export function getFormulaAndSum(number) {
  let sum = 0
  let formula = ""
  for (let i = 0; i <= number; i++) {
    if (i <= 1) {
      sum = i
      formula = i
    } else if (i % 2 === 0) {
      sum += i
      formula = `${formula} + ${i}`
    } else {
      sum -= i
      formula = `${formula} - ${i}`
    }
  }
  return `${formula} = ${sum}`
}

