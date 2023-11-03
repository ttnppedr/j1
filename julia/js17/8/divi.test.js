import { divi } from "./divi.js"

describe('測試n/3最少除幾次，小數第2位會為0', () => {
	test('n = 10', () => {
		const n = 10
		const result = divi(n, 3)
		expect(result).toBe(7)
	})
	test('n = 9', () => {
		const n = 9
		const result = divi(n, 3)
		expect(result).toBe(1)
	})


})

