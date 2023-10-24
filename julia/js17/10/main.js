//### 10. 宣告一整數陣列 `array = [3,50,0,13,2,4,11]` 試寫一程式，印出陣列中所包含的質數以及其索引值。

const array = [3, 50, 0, 13, 2, 4, 11]

import { IsPrime } from "./isPrime.js"

const primeNumArray = array.map((value, index) => {
	if (IsPrime(value)) {
		return { value, index }
	}
})

const filteredArr = primeNumArray.filter(x => x !== undefined)	
const result = filteredArr.map(object => `${object.value}是質數，其索引值為${object.index}`)

console.log(result);

