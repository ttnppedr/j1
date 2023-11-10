// ### 12. 找出`10~20`的質數，並列出前述各質數在1~100的倍數
import { getPrime, getMultiples } from "./module.js";

main()

function main() {
	const result = getMultiplesForSpecificPrime(10, 20, 1, 100)

	console.log(result);
}

export function getMultiplesForSpecificPrime(minPrimeRange, maxPrimeRange, minMultipleRange, maxMultipleRange) {

	const primeArr = getPrime(minPrimeRange, maxPrimeRange)
	const primeMutiplesArray = getMultiples(primeArr, minPrimeRange, maxPrimeRange, minMultipleRange, maxMultipleRange)

	return primeMutiplesArray
}