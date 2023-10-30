import { divi } from "./divi.js"

describe('驗證結果', () => {
	test('n = 10', () => {
		const n = 10
		const result = divi(n, n, 3, 0)
		expect(result).toBe(`10 除以 3時， 最少要除 7 次， 小數點後第 2 位會等於 0`)
	})
	test('n = 9', () => {
		const n = 9
		const result = divi(n, n, 3, 0)
		expect(result).toBe(`9 除以 3時， 最少要除 1 次， 小數點後第 2 位會等於 0`)
	})


})

