// ### 12. 找出`10~20`的質數，並列出前述各質數在1~100的倍數
export { getPrime, getMultiples }

function isPrime(x) {
	if (x <= 1) return
	// if (x === 2) {
	// 	// console.log(`${x} is a prime number.`);
	// 	return x
	// }
	for (let y = 2; y < x; y++) {
		if (x % y === 0) {
			// console.log(`${x} is not a prime number.`);
			return
		}
	}
	// console.log(`${x} is a prime number.`);
	return x
}

function getPrime(min, max) {
	let primeArr = []
	for (let i = min; i <= max; i++) {
		primeArr.push(isPrime(i))
	}
	return primeArr.filter(item => item !== undefined)
}


function isMultiple(value, min, max) {
	let mulitpleArr = []
	for (let i = Math.max(min, value); i <= max; i++) {
		if (i % Math.max(min, value) === 0) {
			mulitpleArr.push(i)
		}
	}
	return mulitpleArr
}
// isMultiple(11,1,100)

// const primeArr = getPrime(10, 20)
function getMultiples(arr, minPrimeRange, maxPrimeRange, minMultipleRange, maxMultipleRange) {
	const rawdata = arr.map((prime, index) => {
		// console.log(isMultiple(prime, 1, 100));
		if (isMultiple(prime, minMultipleRange, maxMultipleRange)) {
			const mulitpleArr = isMultiple(prime, minMultipleRange, maxMultipleRange)
			return { index, prime, mulitpleArr }
		}
	})

	// console.log(rawdata);
	const result = rawdata.map(object =>
		`${minPrimeRange}~${maxPrimeRange}之間，第${object.index + 1}個質數為${object.prime}，其${minMultipleRange}~${maxMultipleRange}間的倍數有${object.mulitpleArr}。`).join('\n')
	// console.log(result);
	return result
}
// getMultiples(primeArr, 1, 100)