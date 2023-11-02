//為什麼原本寫在迴圈裡會錯？因為沒跑完就跳出迴圈
// export function isPrime(x) {
// 	if (x <= 1) return
// 	if (x === 2) {
// 		return x
// 	}
// 	for (let y = 2; y < x; y++) {
// 		if (x % y === 0) {
// 			// console.log(`${x} is not a prime number.`);

// 			return
// 		} else {
// 			console.log(`${x} is a prime number.`);
// 			return x
// 		}
// 	}
// }

export function isPrime(x) {
	if (x <= 1) return 
	if (x === 2) {
		// console.log(`${x} is a prime number.`);
		return x
	}
	for (let y = 2; y < x; y++) {
		if (x % y === 0) {
			// console.log(`${x} is not a prime number.`);
			return 
		} }
			console.log(`${x} is a prime number.`);
			return x
}