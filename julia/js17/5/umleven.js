// 寫一個遞迴函數 function umleven(n) 來求算 2 * 4 + 4 * 6 + 6 * 8...+ (n - 2) * n

export function umleven(n) {
  if (n === 2) {
    return 0
  } else {
    return (n - 2) * n + umleven(n - 2)
  }
}
