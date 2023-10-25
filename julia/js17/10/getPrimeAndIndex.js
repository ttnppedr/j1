import { isPrime } from "./isPrime.js"

export function getPrimeAndIndex(arr) {
	const primeNumArray = arr.map((value, index) => {
		if (isPrime(value)) {
			return { value, index }
		}
	})

	const filteredArr = primeNumArray.filter(x => x !== undefined)
	const result = filteredArr.map(object => `${object.value}是質數，其索引值為${object.index}`).join('\n')

	return result

}