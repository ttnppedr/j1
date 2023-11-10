export function twofold(b, m) {
	const period = 20
	const mulitple = 2
	if (Math.floor(m / period) === 0) {
		// console.log(b);
		return b
	}
	return twofold(mulitple * b, m - 20)
}