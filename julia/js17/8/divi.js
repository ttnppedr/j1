// 8. 試寫一程式，讓使用者輸入一正整數n值，並撰寫一遞迴函數 `function  divi(n)` 來求算當 n 值不斷除以 3 時，最少要除多少次，小數點後第 2 位會等於 0。

export function divi(n, divisor, counts) {
	let quotient = n / divisor
	if (Math.floor(quotient * 100) % 10 === 0) {
		// counts++
		return (`${n} 除以 ${divisor}時， 最少要除 ${counts + 1} 次， 小數點後第 2 位會等於 0`)
	} else {
		// counts++
		return divi(quotient, divisor, counts + 1)
	}
}

// vic寫法 由於字串就是字元陣列 所以可以使用slice解答
// export function divi(input, index) {
// 	let value = input / 3;
// 	let time = index;
// 	if (value.toFixed(3).slice(-2, -1) == "0") {
// 		return time;
// 	} else {
// 		return divi(value, time + 1);
// 	}
// }





