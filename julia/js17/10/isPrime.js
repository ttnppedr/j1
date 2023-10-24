export function IsPrime(x) {
	for (let y = 2; y < x; y++) {
		if (x % y === 0) {
			return
		} else {
			// console.log(`${x} is a prime number.`);
			return x
		}
	}
}