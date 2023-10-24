import { getCountsWhileValidInputDiviedeByDivisor } from './getCountsWhileValidInputDiviedeByDivisor.js';
// 差在isBinOctHexAndE(input) 不知道哪裡出問題

describe('驗證結果', () => {
	// test ('n = 10', () => {
	// 	const n = 10
	// 	const result = getCountsWhileValidInputDiviedeByDivisor(n, 3, 0)
	// 	expect(result).toBe(`10 除以 3時， 最少要除 7 次， 小數點後第 2 位會等於 0`)
	// })
	test ('n為負數', () => {
		const n = -1
		expect(() => {
			getCountsWhileValidInputDiviedeByDivisor(n, 3, 0)
		}).toThrow("不能小於0啦")
	})
	
	
})

