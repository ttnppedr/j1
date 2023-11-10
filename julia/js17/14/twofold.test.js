import { twofold } from "./twofold.js";

describe('測試線性成長是否正確', () => {
	test('if b = 3, m = 100', () => {
		const result = twofold(3, 100)
		expect(result).toBe(96)
	})
	test('if b = 5, m = 110', () => {
		const result = twofold(5, 130)
		expect(result).toBe(320)
	})

})